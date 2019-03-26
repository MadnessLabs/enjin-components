const docs = {
  "timestamp": "2019-03-25T23:53:33",
  "compiler": {
    "name": "@stencil/core",
    "version": "0.18.1",
    "typescriptVersion": "3.3.3"
  },
  "components": [
    {
      "tag": "enjin-star-rating-scoped",
      "encapsulation": "scoped",
      "readme": "# enjin-star-rating-scoped\n\n\n",
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
            "type": "void",
            "docs": ""
          },
          "signature": "setCurrentRating(rating: any) => void",
          "parameters": [
            {
              "name": "rating",
              "type": "any",
              "docs": ""
            }
          ],
          "docs": "",
          "docsTags": []
        }
      ],
      "events": [
        {
          "event": "ftStarRating",
          "detail": "void",
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
      "readme": "# enjin-star-rating-shadow\n\n\n",
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
            "type": "void",
            "docs": ""
          },
          "signature": "setCurrentRating(rating: any) => void",
          "parameters": [
            {
              "name": "rating",
              "type": "any",
              "docs": ""
            }
          ],
          "docs": "",
          "docsTags": []
        }
      ],
      "events": [
        {
          "event": "ftStarRating",
          "detail": "void",
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
      "readme": "# enjin-star-rating\n\n\n",
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
            "type": "void",
            "docs": ""
          },
          "signature": "setCurrentRating(rating: any) => void",
          "parameters": [
            {
              "name": "rating",
              "type": "any",
              "docs": ""
            }
          ],
          "docs": "Set the current rating",
          "docsTags": []
        }
      ],
      "events": [
        {
          "event": "enjinStarRating",
          "detail": "void",
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
      "readme": "# enjin-test-component\n\n\n",
      "docs": "",
      "docsTags": [],
      "usage": {},
      "props": [],
      "methods": [],
      "events": [],
      "styles": [],
      "slots": []
    }
  ]
}

export { docs };