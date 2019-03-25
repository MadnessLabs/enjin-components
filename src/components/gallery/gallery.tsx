import { Component } from "@stencil/core";

@Component({
  tag: "enjin-gallery",
  styleUrl: "gallery.css"
})
export class Gallery {
  docs: any = {
    timestamp: "2019-03-23T07:20:16",
    compiler: {
      name: "@stencil/core",
      version: "0.18.1",
      typescriptVersion: "3.3.3"
    },
    components: [
      {
        tag: "ft-badge",
        encapsulation: "scoped",
        readme: "# ft-badge\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-button",
        encapsulation: "none",
        readme: "# ft-button\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "href",
            type: "string",
            mutable: false,
            attr: "href",
            reflectToAttr: false,
            docs: "The link to navigate to",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-buttons-cancel-save",
        encapsulation: "none",
        readme: "# ft-buttons-cancel-save\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [
          {
            event: "ftCancel",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          },
          {
            event: "ftSave",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-card",
        encapsulation: "shadow",
        readme: "# ft-card\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-code",
        encapsulation: "shadow",
        readme: "# ft-code\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "color",
            type: "string",
            mutable: false,
            attr: "color",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "'#FFFFFF'",
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-epay",
        encapsulation: "none",
        readme: "# ft-epay\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "owed",
            type: "number",
            mutable: false,
            attr: "owed",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "0",
            optional: false,
            required: false
          },
          {
            name: "payments",
            type:
              "{ timestamp: string; brand: string; last4: number; amount: number; }[]",
            mutable: false,
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "[]",
            optional: false,
            required: false
          },
          {
            name: "stripeKey",
            type: "string",
            mutable: false,
            attr: "stripe-key",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [
          {
            name: "setPayments",
            returns: {
              type: "void",
              docs: ""
            },
            signature: "setPayments(payments: any) => void",
            parameters: [
              {
                name: "payments",
                type: "any",
                docs: ""
              }
            ],
            docs: "",
            docsTags: []
          }
        ],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-error",
        encapsulation: "scoped",
        readme: "# ft-error\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "message",
            type: "string",
            mutable: false,
            attr: "message",
            reflectToAttr: false,
            docs: "The error message to display",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-fallback",
        encapsulation: "shadow",
        readme: "# ft-fallback\n\n\n",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "icon",
            type: "string",
            mutable: false,
            attr: "icon",
            reflectToAttr: false,
            docs: "An icon to display above the fallback message",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "message",
            type: "string",
            mutable: false,
            attr: "message",
            reflectToAttr: false,
            docs: "The message to display as a fallback",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-flip-card",
        encapsulation: "none",
        readme: "# ft-flip-card\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "backImage",
            type: "string",
            mutable: false,
            attr: "back-image",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "flipped",
            type: "boolean",
            mutable: false,
            attr: "flipped",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "false",
            optional: false,
            required: false
          },
          {
            name: "frontImage",
            type: "string",
            mutable: false,
            attr: "front-image",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-form-alert",
        encapsulation: "none",
        readme: "# ft-form-alert\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-gallery",
        encapsulation: "none",
        readme: "# ft-gallery\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-graph-card",
        encapsulation: "none",
        readme: "# ft-graph-card\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "options",
            type: "ChartConfiguration",
            mutable: false,
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default:
              '{\r\n    type: "bar",\r\n    data: {\r\n      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\r\n      datasets: [\r\n        {\r\n          label: "Population (millions)",\r\n          backgroundColor: [\r\n            "#3e95cd",\r\n            "#8e5ea2",\r\n            "#3cba9f",\r\n            "#e8c3b9",\r\n            "#c45850"\r\n          ],\r\n          data: [44, 5267, 734, 784, 433]\r\n        }\r\n      ]\r\n    },\r\n    options: {\r\n      legend: { display: false },\r\n      title: {\r\n        display: true,\r\n        text: "Predicted world population (millions) in 2050"\r\n      }\r\n    }\r\n  }',
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-input",
        encapsulation: "scoped",
        readme: "# ft-input\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "accept",
            type: "string",
            mutable: false,
            attr: "accept",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "alt",
            type: "string",
            mutable: false,
            attr: "alt",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "autoComplete",
            type: "string",
            mutable: false,
            attr: "auto-complete",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "autoFocus",
            type: "boolean",
            mutable: false,
            attr: "auto-focus",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "autocomplete",
            type: "string",
            mutable: false,
            attr: "autocomplete",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "autofocus",
            type: "boolean | string",
            mutable: false,
            attr: "autofocus",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "capture",
            type: "string",
            mutable: false,
            attr: "capture",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "checked",
            type: "boolean",
            mutable: false,
            attr: "checked",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "crossOrigin",
            type: "string",
            mutable: false,
            attr: "cross-origin",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "crossorigin",
            type: "string",
            mutable: false,
            attr: "crossorigin",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "disabled",
            type: "boolean",
            mutable: false,
            attr: "disabled",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "form",
            type: "string",
            mutable: false,
            attr: "form",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formAction",
            type: "string",
            mutable: false,
            attr: "form-action",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formEncType",
            type: "string",
            mutable: false,
            attr: "form-enc-type",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formMethod",
            type: "string",
            mutable: false,
            attr: "form-method",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formNoValidate",
            type: "boolean",
            mutable: false,
            attr: "form-no-validate",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formTarget",
            type: "string",
            mutable: false,
            attr: "form-target",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formaction",
            type: "string",
            mutable: false,
            attr: "formaction",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "format",
            type: '"usd"',
            mutable: false,
            attr: "format",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formenctype",
            type: "string",
            mutable: false,
            attr: "formenctype",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formmethod",
            type: "string",
            mutable: false,
            attr: "formmethod",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formnovalidate",
            type: "boolean",
            mutable: false,
            attr: "formnovalidate",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "formtarget",
            type: "string",
            mutable: false,
            attr: "formtarget",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "height",
            type: "number | string",
            mutable: false,
            attr: "height",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "iconLeft",
            type: "string",
            mutable: false,
            attr: "icon-left",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "iconRight",
            type: "string",
            mutable: false,
            attr: "icon-right",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "label",
            type: "string",
            mutable: false,
            attr: "label",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "list",
            type: "string",
            mutable: false,
            attr: "list",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "max",
            type: "number | string",
            mutable: false,
            attr: "max",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "maxLength",
            type: "number",
            mutable: false,
            attr: "max-length",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "maxlength",
            type: "number | string",
            mutable: false,
            attr: "maxlength",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "min",
            type: "number | string",
            mutable: false,
            attr: "min",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "minLength",
            type: "number",
            mutable: false,
            attr: "min-length",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "minlength",
            type: "number | string",
            mutable: false,
            attr: "minlength",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "multiple",
            type: "boolean",
            mutable: false,
            attr: "multiple",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "name",
            type: "string",
            mutable: false,
            attr: "name",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "pattern",
            type: "string",
            mutable: false,
            attr: "pattern",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "placeholder",
            type: "string",
            mutable: false,
            attr: "placeholder",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "readOnly",
            type: "boolean",
            mutable: false,
            attr: "read-only",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "readonly",
            type: "boolean | string",
            mutable: false,
            attr: "readonly",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "required",
            type: "boolean",
            mutable: false,
            attr: "required",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "size",
            type: "number",
            mutable: false,
            attr: "size",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "src",
            type: "string",
            mutable: false,
            attr: "src",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "step",
            type: "number | string",
            mutable: false,
            attr: "step",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "type",
            type: "any",
            mutable: false,
            attr: "type",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"text"',
            optional: false,
            required: false
          },
          {
            name: "value",
            type: "number | string | string[]",
            mutable: false,
            attr: "value",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "width",
            type: "number | string",
            mutable: false,
            attr: "width",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          }
        ],
        methods: [],
        events: [
          {
            event: "ftChange",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          },
          {
            event: "ftInput",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-job-card",
        encapsulation: "none",
        readme: "# ft-job-card\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "active",
            type: "boolean",
            mutable: false,
            attr: "active",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "false",
            optional: false,
            required: false
          },
          {
            name: "address",
            type: "string",
            mutable: false,
            attr: "address",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"No Address on File..."',
            optional: false,
            required: false
          },
          {
            name: "badgeText",
            type: "string",
            mutable: false,
            attr: "badge-text",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "buttonLink",
            type: "string",
            mutable: false,
            attr: "button-link",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "buttonText",
            type: "string",
            mutable: false,
            attr: "button-text",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"View Ticket"',
            optional: false,
            required: false
          },
          {
            name: "curbshot",
            type: "string",
            mutable: false,
            attr: "curbshot",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "curbshotLink",
            type: "string",
            mutable: false,
            attr: "curbshot-link",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "info",
            type: "{ name: string; value: any; }[]",
            mutable: false,
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "[]",
            optional: false,
            required: false
          },
          {
            name: "returnDate",
            type: "string",
            mutable: false,
            attr: "return-date",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"No Return Date Set..."',
            optional: false,
            required: false
          },
          {
            name: "subText",
            type: "string",
            mutable: false,
            attr: "sub-text",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"Status - Step"',
            optional: false,
            required: false
          },
          {
            name: "titleText",
            type: "string",
            mutable: false,
            attr: "title-text",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"No Name on File..."',
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-logo",
        encapsulation: "shadow",
        readme: "# ft-logo\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "waveColor",
            type: "string",
            mutable: false,
            attr: "wave-color",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "'#2e71ac'",
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-logs",
        encapsulation: "none",
        readme: "# ft-logs\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-map",
        encapsulation: "none",
        readme: "# ft-map\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "markers",
            type:
              "{ position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }[]",
            mutable: true,
            reflectToAttr: false,
            docs: "A list of markers to put onto the map",
            docsTags: [],
            default: "[]",
            optional: false,
            required: false
          },
          {
            name: "visible",
            type: "boolean",
            mutable: false,
            attr: "visible",
            reflectToAttr: false,
            docs: "Should the map be visible?",
            docsTags: [],
            default: "true",
            optional: false,
            required: false
          }
        ],
        methods: [
          {
            name: "addMarker",
            returns: {
              type: "Promise<any>",
              docs: ""
            },
            signature:
              "addMarker(location: { position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }) => Promise<any>",
            parameters: [
              {
                name: "location",
                type:
                  "{ position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }",
                docs: "The location information for the marker on the map"
              }
            ],
            docs: "Add a marker to the map",
            docsTags: [
              {
                name: "param",
                text:
                  "location The location information for the marker on the map"
              }
            ]
          },
          {
            name: "clearMarkers",
            returns: {
              type: "Promise<boolean>",
              docs: ""
            },
            signature: "clearMarkers() => Promise<boolean>",
            parameters: [],
            docs: "Clear the markers off of the map",
            docsTags: []
          },
          {
            name: "setMarkers",
            returns: {
              type: "Promise<any>",
              docs: ""
            },
            signature:
              "setMarkers(markers?: { position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }[]) => Promise<any>",
            parameters: [
              {
                name: "markers",
                type:
                  "{ position: { lat: number; lng: number; }; name: string; icon: string; payload?: any; }[]",
                docs: "A list of map markers"
              }
            ],
            docs: "Set the list of map markers",
            docsTags: [
              {
                name: "param",
                text: "markers A list of map markers"
              }
            ]
          }
        ],
        events: [
          {
            event: "ftMapMarkerClick",
            detail:
              "{\r\n    marker: google.maps.Marker;\r\n    location: {\r\n      position: {\r\n        lat: number;\r\n        lng: number;\r\n      };\r\n      name: string;\r\n      icon: string;\r\n      payload?: any;\r\n    };\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "When a marker on the map is clicked",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-pay-card",
        encapsulation: "none",
        readme: "# ft-pay-card\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "stripeKey",
            type: "string",
            mutable: false,
            attr: "stripe-key",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "stripeStyle",
            type: "any",
            mutable: false,
            attr: "stripe-style",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [
          {
            event: "ftSubmitCard",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-pay-check",
        encapsulation: "none",
        readme: "# ft-pay-check\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "key",
            type: "string",
            mutable: false,
            attr: "key",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "url",
            type: "string",
            mutable: false,
            attr: "url",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [
          {
            name: "openCamera",
            returns: {
              type: "void",
              docs: ""
            },
            signature: "openCamera(event: any) => void",
            parameters: [
              {
                name: "event",
                type: "any",
                docs: ""
              }
            ],
            docs: "",
            docsTags: []
          }
        ],
        events: [
          {
            event: "ftSubmitCheck",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-payables-card",
        encapsulation: "scoped",
        readme: "# ft-payables-card\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "loading",
            type: "boolean",
            mutable: false,
            attr: "loading",
            reflectToAttr: false,
            docs: "Whether the component is currently loading",
            docsTags: [],
            default: "false",
            optional: false,
            required: false
          },
          {
            name: "records",
            type: "IPayableRecord[]",
            mutable: false,
            reflectToAttr: false,
            docs: "A list of users with payables due to them",
            docsTags: [],
            default: "[]",
            optional: false,
            required: false
          }
        ],
        methods: [
          {
            name: "setRecords",
            returns: {
              type: "Promise<IPayableRecord[]>",
              docs: ""
            },
            signature:
              "setRecords(records?: IPayableRecord[]) => Promise<IPayableRecord[]>",
            parameters: [
              {
                name: "records",
                type: "IPayableRecord[]",
                docs: "A list of payee records with payables"
              }
            ],
            docs: "Set the list of records to render component with",
            docsTags: [
              {
                name: "param",
                text: "records A list of payee records with payables"
              }
            ]
          }
        ],
        events: [
          {
            event: "ftApprovePayables",
            detail:
              "{\r\n    /**\r\n     * The click event of the button\r\n     */\r\n    event: UIEvent;\r\n    /**\r\n     * The sum total of all the payables being approved\r\n     */\r\n    total: number;\r\n    /**\r\n     * The payables that have been approved\r\n     */\r\n    payables: IPayable[];\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "Emitted when clicking the approve buttons",
            docsTags: []
          },
          {
            event: "ftDenyPayable",
            detail:
              "{\r\n    /**\r\n     * The click event of the button\r\n     */\r\n    event: UIEvent;\r\n    /**\r\n     * The payable that has been denied\r\n     */\r\n    payable: IPayable;\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "Emitted when clicking the approve buttons",
            docsTags: []
          },
          {
            event: "ftInvitePayee",
            detail:
              "{\r\n    /**\r\n     * The click event of the button\r\n     */\r\n    event: UIEvent;\r\n    /**\r\n     * The user record being invited along with payables\r\n     */\r\n    record: IPayableRecord;\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs:
              "Emitted when clicking the invite button to invite the payee to Refer A Flood.",
            docsTags: []
          },
          {
            event: "ftOpenProfile",
            detail:
              "{\r\n    /**\r\n     * The click event of the button\r\n     */\r\n    event: UIEvent;\r\n    /**\r\n     * The id of the user to navigate to\r\n     */\r\n    id: number;\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "Emitted when clicking the user's avatar or name",
            docsTags: []
          },
          {
            event: "ftOpenStripe",
            detail:
              "{\r\n    /**\r\n     * The click event of the button\r\n     */\r\n    event: UIEvent;\r\n    /**\r\n     * The user record being invited along with payables\r\n     */\r\n    record: IPayableRecord;\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs:
              "Emitted when clicking the stripe logo to visit the user's account in Stripe.",
            docsTags: []
          },
          {
            event: "ftOpenTicket",
            detail:
              "{\r\n    /**\r\n     * The click event of the button\r\n     */\r\n    event: UIEvent;\r\n    /**\r\n     * The id of the job ticket to open\r\n     */\r\n    id: number;\r\n  }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "Emitted when clicking the approve buttons",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-pill",
        encapsulation: "scoped",
        readme: "# ft-pill\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "icon",
            type: "string",
            mutable: false,
            attr: "icon",
            reflectToAttr: false,
            docs: "The icon to display at the right of the pill",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "image",
            type: "string",
            mutable: false,
            attr: "image",
            reflectToAttr: false,
            docs: "The image to display at the left of the pill",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "payload",
            type: "any",
            mutable: false,
            attr: "payload",
            reflectToAttr: false,
            docs: "Data payload to put onto events",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "subtext",
            type: "string",
            mutable: false,
            attr: "subtext",
            reflectToAttr: false,
            docs: "The second non-emphasized line of the pill",
            docsTags: [],
            optional: false,
            required: false
          },
          {
            name: "text",
            type: "string",
            mutable: false,
            attr: "text",
            reflectToAttr: false,
            docs: "The first bold line of the pill",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [
          {
            event: "ftPillIconClick",
            detail: "{ event: UIEvent; payload: any }",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "Emitted when the icon on the pill is clicked",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-star-rating",
        encapsulation: "none",
        readme: "# ft-star-rating\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "disabled",
            type: "boolean",
            mutable: false,
            attr: "disabled",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "false",
            optional: false,
            required: false
          },
          {
            name: "maxRating",
            type: "number",
            mutable: false,
            attr: "max-rating",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: "5",
            optional: false,
            required: false
          },
          {
            name: "name",
            type: "string",
            mutable: false,
            attr: "name",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"rating"',
            optional: false,
            required: false
          },
          {
            name: "value",
            type: "string",
            mutable: false,
            attr: "value",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [
          {
            name: "setCurrentRating",
            returns: {
              type: "void",
              docs: ""
            },
            signature: "setCurrentRating(rating: any) => void",
            parameters: [
              {
                name: "rating",
                type: "any",
                docs: ""
              }
            ],
            docs: "",
            docsTags: []
          }
        ],
        events: [
          {
            event: "ftStarRating",
            detail: "void",
            bubbles: true,
            cancelable: true,
            composed: true,
            docs: "",
            docsTags: []
          }
        ],
        styles: [],
        slots: []
      },
      {
        tag: "ft-toggle",
        encapsulation: "none",
        readme: "# ft-toggle\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "checked",
            type: "boolean",
            mutable: false,
            attr: "checked",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "label",
            type: "string",
            mutable: false,
            attr: "label",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          },
          {
            name: "name",
            type: "string",
            mutable: false,
            attr: "name",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            default: '"check-slide"',
            optional: true,
            required: false
          },
          {
            name: "required",
            type: "boolean",
            mutable: false,
            attr: "required",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: true,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-user-search",
        encapsulation: "none",
        readme: "# ft-user-search\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [],
        methods: [],
        events: [],
        styles: [],
        slots: []
      },
      {
        tag: "ft-waves",
        encapsulation: "none",
        readme: "# ft-waves\r\n\r\n\r\n\r",
        docs: "",
        docsTags: [],
        usage: {},
        props: [
          {
            name: "color",
            type: "string",
            mutable: false,
            attr: "color",
            reflectToAttr: false,
            docs: "",
            docsTags: [],
            optional: false,
            required: false
          }
        ],
        methods: [],
        events: [],
        styles: [],
        slots: []
      }
    ]
  };

  render() {
    return this.docs && this.docs.components && this.docs.components.length > 0
      ? this.docs.components.map(component => (
          <div>
            <h1>{component.tag}</h1>
            <h2>Props</h2>
            <ul>
              {component.props && component.props.length > 0
                ? component.props.map(prop => (
                    <li>
                      {prop.name} ({prop.type}) - {prop.docs}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        ))
      : null;
  }
}
