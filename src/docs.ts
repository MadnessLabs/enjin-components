export default {
  "timestamp": "2021-01-17T02:11:44",
  "compiler": {
    "name": "@stencil/core",
    "version": "1.2.2",
    "typescriptVersion": "3.5.3"
  },
  "components": [
    {
      "tag": "enjin-gallery",
      "encapsulation": "scoped",
      "readme": "# enjin-gallery\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-organism",
      "encapsulation": "none",
      "readme": "# enjin-organism\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "component",
          "type": "{ docs: string; docsTags: any[]; encapsulation: string; events: any[]; methods: any[]; presets: any; props: { attr: string; default: any; docs: string; docsTags: any[]; mutable: boolean; name: string; optional: boolean; reflectToAttr: boolean; required: boolean; type: string; }[]; readme: string; slots: any[]; styles: any[]; tag: string; usage: any; }",
          "mutable": true,
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        },
        {
          "name": "match",
          "type": "MatchResults",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-pay-with-card",
      "encapsulation": "none",
      "readme": "# enjin-pay-with-card\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "stripeKey",
          "type": "string",
          "mutable": false,
          "attr": "stripe-key",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "enjinCardSubmit",
          "detail": "any",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-sidebar",
      "encapsulation": "none",
      "readme": "# enjin-sidebar\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "components",
          "type": "any",
          "mutable": false,
          "attr": "components",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "[]",
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-sidebar-component",
      "encapsulation": "shadow",
      "readme": "# enjin-sidebar-component\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "component",
          "type": "{ docs: string; docsTags: any[]; encapsulation: string; events: any[]; methods: any[]; presets: any; props: { attr: string; default: any; docs: string; docsTags: any[]; mutable: boolean; name: string; optional: boolean; reflectToAttr: boolean; required: boolean; type: string; }[]; readme: string; slots: any[]; styles: any[]; tag: string; usage: any; }",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [
        {
          "event": "enjinSetPreset",
          "detail": "any",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-star-rating",
      "encapsulation": "none",
      "readme": "# enjin-star-rating\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "disabled",
          "type": "boolean",
          "mutable": false,
          "attr": "disabled",
          "reflectToAttr": false,
          "docs": "Whether or not the field is disabled",
          "docsTags": [],
          "default": "false",
          "optional": false,
          "required": false
        },
        {
          "name": "maxRating",
          "type": "number",
          "mutable": false,
          "attr": "max-rating",
          "reflectToAttr": false,
          "docs": "The max available star rating",
          "docsTags": [],
          "default": "5",
          "optional": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "mutable": false,
          "attr": "name",
          "reflectToAttr": false,
          "docs": "The name of the input",
          "docsTags": [],
          "default": "\"rating\"",
          "optional": false,
          "required": false
        },
        {
          "name": "testEl",
          "type": "(result: string) => any",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        },
        {
          "name": "value",
          "type": "string",
          "mutable": false,
          "attr": "value",
          "reflectToAttr": false,
          "docs": "The value of the rating input",
          "docsTags": [],
          "optional": false,
          "required": false
        }
      ],
      "methods": [
        {
          "name": "setCurrentRating",
          "returns": {
            "type": "Promise<void>",
            "docs": ""
          },
          "signature": "setCurrentRating(rating: any) => Promise<void>",
          "parameters": [],
          "docs": "Set the current rating",
          "docsTags": []
        }
      ],
      "events": [
        {
          "event": "enjinStarRating",
          "detail": "any",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-star-rating-scoped",
      "encapsulation": "scoped",
      "readme": "# enjin-star-rating-scoped\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "disabled",
          "type": "boolean",
          "mutable": false,
          "attr": "disabled",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "optional": false,
          "required": false
        },
        {
          "name": "maxRating",
          "type": "number",
          "mutable": false,
          "attr": "max-rating",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "5",
          "optional": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "mutable": false,
          "attr": "name",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "\"rating-scoped\"",
          "optional": false,
          "required": false
        },
        {
          "name": "value",
          "type": "string",
          "mutable": false,
          "attr": "value",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        }
      ],
      "methods": [
        {
          "name": "setCurrentRating",
          "returns": {
            "type": "Promise<void>",
            "docs": ""
          },
          "signature": "setCurrentRating(rating: any) => Promise<void>",
          "parameters": [],
          "docs": "",
          "docsTags": []
        }
      ],
      "events": [
        {
          "event": "ftStarRating",
          "detail": "any",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-star-rating-shadow",
      "encapsulation": "shadow",
      "readme": "# enjin-star-rating-shadow\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "disabled",
          "type": "boolean",
          "mutable": false,
          "attr": "disabled",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "optional": false,
          "required": false
        },
        {
          "name": "maxRating",
          "type": "number",
          "mutable": false,
          "attr": "max-rating",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "5",
          "optional": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "mutable": false,
          "attr": "name",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "\"rating-shadow\"",
          "optional": false,
          "required": false
        },
        {
          "name": "value",
          "type": "string",
          "mutable": false,
          "attr": "value",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        }
      ],
      "methods": [
        {
          "name": "setCurrentRating",
          "returns": {
            "type": "Promise<void>",
            "docs": ""
          },
          "signature": "setCurrentRating(rating: any) => Promise<void>",
          "parameters": [],
          "docs": "",
          "docsTags": []
        }
      ],
      "events": [
        {
          "event": "ftStarRating",
          "detail": "any",
          "bubbles": true,
          "cancelable": true,
          "composed": true,
          "docs": "",
          "docsTags": []
        }
      ],
      "styles": [],
      "slots": []
    },
    {
      "tag": "enjin-test-component",
      "encapsulation": "none",
      "readme": "# enjin-test-component\r\n\r\n\r\n\r",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [
        {
          "name": "array",
          "type": "any",
          "mutable": false,
          "attr": "array",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "[]",
          "optional": false,
          "required": false
        },
        {
          "name": "boolean",
          "type": "boolean",
          "mutable": false,
          "attr": "boolean",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "false",
          "optional": false,
          "required": false
        },
        {
          "name": "fn",
          "type": "() => any",
          "mutable": false,
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "optional": false,
          "required": false
        },
        {
          "name": "object",
          "type": "any",
          "mutable": false,
          "attr": "object",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "{}",
          "optional": false,
          "required": false
        },
        {
          "name": "string",
          "type": "string",
          "mutable": false,
          "attr": "string",
          "reflectToAttr": false,
          "docs": "",
          "docsTags": [],
          "default": "\"\"",
          "optional": false,
          "required": false
        }
      ],
      "methods": [],
      "events": [],
      "styles": [],
      "slots": []
    }
  ]
}