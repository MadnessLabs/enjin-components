/**
 * @Author: Daniel Lehmann
 * @Date:   2019/08/23
 * @Email:  code@dreammedia.info
* @Last modified by:   Daniel Lehmann
* @Last modified time: 2019/09/27
 * @copyright Daniel Lehmann (code@dreammedia.info)
 *
 * Heavily inspired and mostly build upon / copied from https://github.com/shanmugapriyaEK/stencil-storybook#readme .
 */

import path from "path";
import Case from "case";
import { storiesOf } from "@storybook/html";
import * as KNOBS from "@storybook/addon-knobs";

const DEFAULT_DATE = new Date();

/**
 * Given a module, iterates over the exports and returns the first
 * one which looks like a stencil component (using duck typing).
 */
function getComponentFromExports(_module) {
  const key = Object.keys(_module).find(exportKey => {
    const _export = _module[exportKey];
    // does it quack like a stencil class component?
    if (_export.prototype && _export.is) {
      return true;
    }
  });

  return _module[key];
}

/**
 * Cleans the notes, which should be in markdown format.
 * The markdown parser used by the notes addon is not the best, so
 * we have to fix some issues before rendering.
 */
function cleanNotes(notes, compKey) {
  if (notes) {

    // converting relative links into storybook links
    if (compKey) {
      let component = compKey.split('/');
      component.pop();
      component.shift();

      if (component.length) {
        component.unshift('/info/all-components');
        let links = [], link, i, l;
        let reg_exp = /\[[^\]]+?\]\(([^\)]+?)\)/g;

        while (link = reg_exp.exec(notes)) {
          let path = link[1].split("\\");
          if (path.length < 2) path = link[1].split("/");
          if (path.length < 2) continue;
          if (path[0] != "..") continue;

          let final = component.concat();
          let name = path.pop();
          while (path[0] == "..") {
            final.pop();
            path.shift();
          }
          final = final.concat(path);
          links.push([link[1], final.join("-")+"--"+name]);
        }

        for (i=0, l=links.length; i<l; i++) {
          notes = notes.replace("("+links[i][0]+")", "("+links[i][1]+")");
        }
      }
    }

    // replaces "\|" with "` `" so property tables to break
    return notes.replace(/\\\|/g, "` `");
  }
}

function buildGeneratorConfigs(componentsCtx, storiesCtx, notesCtx) {
  const componentKeys = componentsCtx.keys();
  const storiesKeys = storiesCtx.keys();
  const notesKeys = notesCtx.keys();

  return componentKeys.reduce((obj, compKey) => {

    const _module = componentsCtx(compKey);
    const Component = getComponentFromExports(_module);

    if (!Component) return obj;

    const compName = path.basename(path.dirname(compKey));
    const dirName = "/" + compName + "/";
    const noteKey = notesKeys.find(k => k.indexOf(dirName+"readme.md") > -1);
    const stories_keys = storiesKeys.filter(k => {
      const reg_exp = new RegExp(dirName+compName+"[^/]*?\\.stories\\.js$");
      return k.search(reg_exp) > -1;
    });

    let _name_path = path.dirname(compKey).split("/");
    _name_path.shift();
    _name_path.pop();
    _name_path = _name_path.join("/");
    if (_name_path) _name_path = "/" + _name_path;

    let _stories_paths = [];
    for (let i = 0; i < stories_keys.length; i++) {
      const _regExp_paths = /\\n[ ]*?storiesOf[ ]*?\([ ]*?('|"|`)(.+?)\1[ ]*?,[ ]*?module[ ]*?\)/g;
      let _paths;
      while (
        (_paths = _regExp_paths.exec(storiesCtx(stories_keys[i]).default))
      ) {
        if (_paths.length >= 2) _stories_paths.push(_paths[2]);
      }
    }

    if (noteKey) {
      const _notes = notesCtx(noteKey).default;

      // If the default export is a function, then that function should
      // be used to create the story. It will be passed the "stories" object
      // where it should call stories.add(...) manually.

      return Object.assign(obj, {
        [Component.name]: {
          Component,
          notes: cleanNotes(_notes, compKey),
          name_path: _name_path,
          stories_paths: _stories_paths
        }
      });
    }

    return Object.assign(obj, {
      [Component.name]: {
        Component,
        name_path: _name_path,
        stories_paths: _stories_paths
      }
    });
  }, {});
}

/**
 * Given a stencil Component and knob options, returns an dictionary of
 * all the properties and default values.
 */
function getPropsWithKnobValues(Component, knobOptions = {}) {
  if (!Component.properties) return {};

  return Object.keys(Component.properties).reduce((obj, key) => {
    const property = Component.properties[key];

    // normalize older "attr" into newer "attribute" property
    if (property.hasOwnProperty("attr")) {
      property.attribute = property.attr;
    }

    if (property.hasOwnProperty("attribute")) {
      obj[key] = getKnobForProp(property, knobOptions);
    }

    return obj;
  }, {});
}

/**
 * Given a property (from stencil Component.properties) and an optional
 * knobOptions object generates a knob which can be used to
 * dynamically update the properties of the component.
 */
function getKnobForProp(prop, knobOptions = {}) {
  let type = "text";
  let args = [prop.attribute];

  // knob options can defined using camelCase or kebab-case
  const propCamel = Case.camel(prop.attribute);
  const options = knobOptions[propCamel] || knobOptions[prop.attribute];

  // if knob options are defined, use those
  if (options) {
    type = options.type;
    args = args.concat(options.args);
  }

  // otherwise, implicitly create knobs based on prop type or attribute name
  else if (/^(?:number|boolean|object)$/i.test(prop.type)) {
    type = prop.type.toLowerCase();
  } else if (prop.attribute.indexOf("date") !== -1) {
    type = "date";
    args[1] = DEFAULT_DATE;
  } else if (prop.attribute.indexOf("color") !== -1) {
    type = "color";
  }

  if (prop.defaultValue) {
    let default_value = prop.defaultValue;
    if (prop.type == "string") {
      if (default_value.substr(0, 1) == "'" && default_value.substr(-1) == "'")
        default_value = '"' + default_value.substr(1, default_value.length - 2) + '"';
      if (default_value.substr(0, 1) == "`" && default_value.substr(-1) == "`")
        default_value = '"' + default_value.substr(1, default_value.length - 2) + '"';
    }
    try {
      if (["{", "["].indexOf(default_value.substr(0, 1)) >= 0) {
        type = "object";
        eval(`default_value = ${default_value};`);
        args[1] = default_value;
      } else {
        args[1] = JSON.parse(default_value);
      }
    } catch (error) {
      console.log("Error setting default value to knob.", error);
    }
  }

  //console.log('generating', type, 'knob with args:', args);

  const val = KNOBS[type].apply(null, args);

  switch (type) {
    // knobs returns UNIX timestamp for "date" type
    // and we need to convert it to ISO-8601
    case "date":
      return new Date(val).toISOString();
  }

  return val;
}

/**
 * Generates an interactive knobs-enabled story for a stencil Component.
 * For any additional states, a static rendering is generated with
 * the given state (see existing components for examples).
 *
 * Example "states" array:
 *
 *   [{
 *     title: 'A title for this state',
 *     description: 'A description of why this state exists',
 *     props: {
 *        --- props to set on your component ---
 *     }
 *   }]
 *
 * Example "knobs" config:
 *
 *   {
 *     someProp: {            // A decorated @Prop() on your component
 *       type: 'color',       // The type of "knob" to use in the knobs panel
 *       args: [              // Additional arguments to pass to the knob **after the "label" argument**
 *         '#ff99cc',         // The defaultValue for the "color" knob
 *         'GROUP-1'          // The groupId for the "color" knob
 *       ]
 *     }
 *   }
 */
function createStencilStory(
  { Component, notes, states, knobs, stories_paths },
  stories
) {
  // It is important that the main container element
  // is NOT created inside of the render function below!!
  const mainEl = document.createElement("div");
  const storyOpts = notes ? { notes } : {};
  const tag = Component.is;

  mainEl.className = "stencil-component-story";

  // Clone the "states" array and add the default state first
  states = states && states.length ? states.slice(0) : [];
  states.unshift({
    title: "Default state (use Knobs to edit properties):",
    tag: Component.is,
    props: {}
  });

  let dashed = Component.name.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

  // Create the story with all of the states
  stories.add(
    dashed.substr(1),
    () => {
      mainEl.innerHTML = "";

      // First, add the knobs-enabled props to the default state.
      // This MUST be done inside this render function!!
      states[0].props = getPropsWithKnobValues(Component, knobs);

      // Next, render each state. Only the first one is interactive (with knobs).
      // This is sort of a light-weight "chapters" addon because the community
      // "chapters" addon only works with react :/

      states.forEach(({ title, description, props }) => {
        const containerEl = document.createElement("div");
        const componentEl = document.createElement(tag);

        Object.keys(props).forEach(prop => {
          componentEl[prop] = props[prop];
        });

        containerEl.innerHTML = getStencilTemplate({
          title,
          description,
          tag,
          props,
          stories_paths
        });

        containerEl
          .querySelector(`.stencil-component-story-placeholder`)
          .appendChild(componentEl);
        mainEl.appendChild(containerEl);
      });

      return mainEl;
    },
    storyOpts
  );
}

/**
 * Template used to render a single stencil component. To use this template
 * do something like the following code snippet:
 *
 *   ```
 *   const container = document.createElement('div');
 *   const component = document.createElement('your-component');
 *   container.innerHTML = getStencilTemplate('Some Title', 'Some Description');
 *   container.querySelector('.stencil-component-story-placeholder').appendChild(component);
 *   ```
 */
function getStencilTemplate({ title, description, tag, props, stories_paths }) {
  // build attribute="value" strings
  const attrs = Object.keys(props || {})
    .filter(prop => props[prop] != null)
    .map(prop => {
      return `${Case.kebab(prop)}={${JSON.stringify(props[prop])}}`;
    })
    .join(" ");

  let template =
    `
        <h2>${title}</h2>
        ${description ? "<p>" + description + "</p>" : ""}
        <div class="stencil-component-story-placeholder"><!-- the component will be inserted here --></div>
        <div class="stencil-component-story-code-block">
            <pre><code>` +
    `&lt;${tag}${attrs ? " " + attrs : ""}&gt;&lt;/${tag}&gt;` +
    `</code></pre>
            <a class="select-code">Select Code</a>
        </div>
    `;

  if (stories_paths.length) {
    template +=
      '<div class="stencil-component-examples"><h4>Example' +
      (stories_paths.length > 1 ? "s" : "") +
      "</h4>";
    for (let i = 0; i < stories_paths.length; i++) {
      template +=
        '<div><a data-sb-kind="' +
        stories_paths[i] +
        '">' +
        stories_paths[i] +
        "</a></div>";
    }
    template += "</div>";
  }

  return template;
}

/**
 * Iterates over all of the stencil contexts and builds a "config" object
 * which is used to generate the individual stories.
 */
function buildStencilStories(name, components, stories, notes) {
  const configs = buildGeneratorConfigs(components, stories, notes);

  Object.keys(configs)
    .map(comp => configs[comp])
    .forEach(config => {
      const stories_of = storiesOf(name + config.name_path, module);
      createStencilStory(config, stories_of);
    });
}

export default buildStencilStories;
