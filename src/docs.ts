const docs = {
  timestamp: "2019-03-25T06:43:39",
  compiler: {
    name: "@stencil/core",
    version: "0.17.3-0",
    typescriptVersion: "3.2.2"
  },
  components: [
    {
      tag: "ion-action-sheet-controller",
      encapsulation: "none",
      readme:
        "# ion-action-sheet-controller\r\n\r\nAction Sheet controllers programmatically control the action sheet component. Action Sheets can be created and dismissed from the action sheet controller. View the [Action Sheet](../action-sheet) documentation for a full list of options to pass upon creation.\r\n\r",
      docs:
        "Action Sheet controllers programmatically control the action sheet component. Action Sheets can be created and dismissed from the action sheet controller. View the [Action Sheet](../action-sheet) documentation for a full list of options to pass upon creation.",
      docsTags: [],
      usage: {},
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonActionSheetElement>",
            docs: ""
          },
          signature:
            "create(opts: ActionSheetOptions) => Promise<HTMLIonActionSheetElement>",
          parameters: [
            {
              name: "opts",
              type: "ActionSheetOptions",
              docs: ""
            }
          ],
          docs: "Create an action sheet overlay with action sheet options.",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open action sheet overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonActionSheetElement | undefined>",
            docs: ""
          },
          signature:
            "getTop() => Promise<HTMLIonActionSheetElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened action sheet overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-action-sheet",
      encapsulation: "scoped",
      readme:
        "# ion-action-sheet\r\n\r\nAn Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.\r\n\r\n### Creating\r\n\r\nAn action sheet can be created by the [Action Sheet Controller](../action-sheet-controller) from an array of `buttons`, with each button including properties for its `text`, and optionally a `handler` and `role`. If a handler returns `false` then the action sheet will not be dismissed. An action sheet can also optionally have a `title`, `subTitle` and an `icon`.\r\n\r\n### Buttons\r\n\r\nA button's `role` property can either be `destructive` or `cancel`. Buttons without a role property will have the default look for the platform. Buttons with the `cancel` role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the `buttons` array. Note: We recommend that `destructive` buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.\r\n\r\n\r",
      docs:
        "An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\nimport { ActionSheetController } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'action-sheet-example',\r\n  templateUrl: 'action-sheet-example.html',\r\n  styleUrls: ['./action-sheet-example.css'],\r\n})\r\nexport class ActionSheetExample {\r\n\r\n  constructor(public actionSheetController: ActionSheetController) {}\r\n\r\n  async presentActionSheet() {\r\n    const actionSheet = await this.actionSheetController.create({\r\n      header: 'Albums',\r\n      buttons: [{\r\n        text: 'Delete',\r\n        role: 'destructive',\r\n        icon: 'trash',\r\n        handler: () => {\r\n          console.log('Delete clicked');\r\n        }\r\n      }, {\r\n        text: 'Share',\r\n        icon: 'share',\r\n        handler: () => {\r\n          console.log('Share clicked');\r\n        }\r\n      }, {\r\n        text: 'Play (open modal)',\r\n        icon: 'arrow-dropright-circle',\r\n        handler: () => {\r\n          console.log('Play clicked');\r\n        }\r\n      }, {\r\n        text: 'Favorite',\r\n        icon: 'heart',\r\n        handler: () => {\r\n          console.log('Favorite clicked');\r\n        }\r\n      }, {\r\n        text: 'Cancel',\r\n        icon: 'close',\r\n        role: 'cancel',\r\n        handler: () => {\r\n          console.log('Cancel clicked');\r\n        }\r\n      }]\r\n    });\r\n    await actionSheet.present();\r\n  }\r\n\r\n}\r\n```\r\n",
        javascript:
          "```javascript\r\nasync function presentActionSheet() {\r\n  const actionSheetController = document.querySelector('ion-action-sheet-controller');\r\n  await actionSheetController.componentOnReady();\r\n\r\n  const actionSheet = await actionSheetController.create({\r\n    header: \"Albums\",\r\n    buttons: [{\r\n      text: 'Delete',\r\n      role: 'destructive',\r\n      icon: 'trash',\r\n      handler: () => {\r\n        console.log('Delete clicked');\r\n      }\r\n    }, {\r\n      text: 'Share',\r\n      icon: 'share',\r\n      handler: () => {\r\n        console.log('Share clicked');\r\n      }\r\n    }, {\r\n      text: 'Play (open modal)',\r\n      icon: 'arrow-dropright-circle',\r\n      handler: () => {\r\n        console.log('Play clicked');\r\n      }\r\n    }, {\r\n      text: 'Favorite',\r\n      icon: 'heart',\r\n      handler: () => {\r\n        console.log('Favorite clicked');\r\n      }\r\n    }, {\r\n      text: 'Cancel',\r\n      icon: 'close',\r\n      role: 'cancel',\r\n      handler: () => {\r\n        console.log('Cancel clicked');\r\n      }\r\n    }]\r\n  });\r\n  await actionSheet.present();\r\n}\r\n```\r\n",
        react:
          "```typescript\r\nimport React, { Component } from 'react'\r\nimport { IonActionSheet } from '@ionic/react';\r\n\r\ntype Props = {}\r\ntype State = {\r\n  showActionSheet: boolean\r\n}\r\n\r\nexport default class ActionSheetExample extends Component<Props, State> {\r\n\r\n  constructor(props: Props) {\r\n    super(props);\r\n    this.state = {\r\n      showActionSheet: false\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IonActionSheet\r\n        isOpen={this.state.showActionSheet}\r\n        onDidDismiss={() => this.setState(() => ({ showActionSheet: false }))}\r\n        buttons={[{\r\n          text: 'Delete',\r\n          role: 'destructive',\r\n          icon: 'trash',\r\n          handler: () => {\r\n            console.log('Delete clicked');\r\n          }\r\n        }, {\r\n          text: 'Share',\r\n          icon: 'share',\r\n          handler: () => {\r\n            console.log('Share clicked');\r\n          }\r\n        }, {\r\n          text: 'Play (open modal)',\r\n          icon: 'arrow-dropright-circle',\r\n          handler: () => {\r\n            console.log('Play clicked');\r\n          }\r\n        }, {\r\n          text: 'Favorite',\r\n          icon: 'heart',\r\n          handler: () => {\r\n            console.log('Favorite clicked');\r\n          }\r\n        }, {\r\n          text: 'Cancel',\r\n          icon: 'close',\r\n          role: 'cancel',\r\n          handler: () => {\r\n            console.log('Cancel clicked');\r\n          }\r\n        }]}\r\n      >\r\n      </IonActionSheet>\r\n    );\r\n  }\r\n}\r\n\r\n```\r\n",
        vue:
          "```html\r\n<template>\r\n  <IonVuePage :title=\"'Action Sheet'\">\r\n    <ion-button @click=\"presentActionSheet\">Show Action Sheet</ion-button>\r\n  </IonVuePage>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  methods: {\r\n    presentActionSheet() {\r\n      return this.$ionic.actionSheetController\r\n        .create({\r\n          header: 'Albums',\r\n          buttons: [\r\n            {\r\n              text: 'Delete',\r\n              role: 'destructive',\r\n              icon: 'trash',\r\n              handler: () => {\r\n                console.log('Delete clicked')\r\n              },\r\n            },\r\n            {\r\n              text: 'Share',\r\n              icon: 'share',\r\n              handler: () => {\r\n                console.log('Share clicked')\r\n              },\r\n            },\r\n            {\r\n              text: 'Play (open modal)',\r\n              icon: 'arrow-dropright-circle',\r\n              handler: () => {\r\n                console.log('Play clicked')\r\n              },\r\n            },\r\n            {\r\n              text: 'Favorite',\r\n              icon: 'heart',\r\n              handler: () => {\r\n                console.log('Favorite clicked')\r\n              },\r\n            },\r\n            {\r\n              text: 'Cancel',\r\n              icon: 'close',\r\n              role: 'cancel',\r\n              handler: () => {\r\n                console.log('Cancel clicked')\r\n              },\r\n            },\r\n          ],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n  },\r\n}\r\n</script>\r\n```\r\n"
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the action sheet will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "backdropDismiss",
          type: "boolean",
          mutable: false,
          attr: "backdrop-dismiss",
          reflectToAttr: false,
          docs:
            "If `true`, the action sheet will be dismissed when the backdrop is clicked.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "buttons",
          type: "(string | ActionSheetButton)[]",
          mutable: false,
          reflectToAttr: false,
          docs: "An array of buttons for the action sheet.",
          docsTags: [],
          optional: false,
          required: true
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the action sheet is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "header",
          type: "string | undefined",
          mutable: false,
          attr: "header",
          reflectToAttr: false,
          docs: "Title for the action sheet.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the action sheet is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "subHeader",
          type: "string | undefined",
          mutable: false,
          attr: "sub-header",
          reflectToAttr: false,
          docs: "Subtitle for the action sheet.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs:
            'If `true`, the action sheet will be translucent. Only applies when the mode is `"ios"` and the device supports backdrop-filter.',
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the action sheet overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs:
            "Returns a promise that resolves when the action-sheet did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs:
            "Returns a promise that resolves when the action-sheet will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the action sheet overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionActionSheetDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the alert has dismissed.",
          docsTags: []
        },
        {
          event: "ionActionSheetDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the alert has presented.",
          docsTags: []
        },
        {
          event: "ionActionSheetWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the alert has dismissed.",
          docsTags: []
        },
        {
          event: "ionActionSheetWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the alert has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the action sheet group"
        },
        {
          name: "--background-activated",
          annotation: "prop",
          docs: "Background of the activated action sheet button"
        },
        {
          name: "--background-selected",
          annotation: "prop",
          docs: "Background of the selected action sheet button"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the action sheet text"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "height of the action sheet"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the action sheet"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the action sheet"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the action sheet"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the action sheet"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the action sheet"
        }
      ],
      slots: []
    },
    {
      tag: "ion-alert-controller",
      encapsulation: "none",
      readme:
        "# ion-alert-controller\r\n\r\nAlert controllers programmatically control the alert component. Alerts can be created and dismissed from the alert controller. View the [Alert](../alert) documentation for a full list of options to pass upon creation.\r\n\r\n\r\n```javascript\r\nasync function presentAlert() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Alert',\r\n    subHeader: 'Subtitle',\r\n    message: 'This is an alert message.',\r\n    buttons: ['OK']\r\n  });\r\n  return await alert.present();\r\n}\r\n```\r\n\r\n\r",
      docs:
        "Alert controllers programmatically control the alert component. Alerts can be created and dismissed from the alert controller. View the [Alert](../alert) documentation for a full list of options to pass upon creation.\r\n\r\n\r\n```javascript\r\nasync function presentAlert() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Alert',\r\n    subHeader: 'Subtitle',\r\n    message: 'This is an alert message.',\r\n    buttons: ['OK']\r\n  });\r\n  return await alert.present();\r\n}\r\n```",
      docsTags: [],
      usage: {},
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonAlertElement>",
            docs: ""
          },
          signature:
            "create(opts: AlertOptions) => Promise<HTMLIonAlertElement>",
          parameters: [
            {
              name: "opts",
              type: "AlertOptions",
              docs: ""
            }
          ],
          docs: "Create an alert overlay with alert options",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open alert overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonAlertElement | undefined>",
            docs: ""
          },
          signature: "getTop() => Promise<HTMLIonAlertElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened alert overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-alert",
      encapsulation: "scoped",
      readme:
        "# ion-alert\r\n\r\nAn Alert is a dialog that presents users with information or collects information from the user using inputs. An alert appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. It can also optionally have a `header`, `subHeader` and `message`.\r\n\r\n\r\n### Creating\r\n\r\nAlerts can be created using an [Alert Controller](../alert-controller). They can be customized by passing alert options in the alert controller's create method.\r\n\r\n\r\n### Buttons\r\n\r\nIn the array of `buttons`, each button includes properties for its `text`, and optionally a `handler`. If a handler returns `false` then the alert will not automatically be dismissed when the button is clicked. All buttons will show up in the order they have been added to the `buttons` array from left to right. Note: The right most button (the last one in the array) is the main button.\r\n\r\nOptionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.\r\n\r\n\r\n### Inputs\r\n\r\nAlerts can also include several different inputs whose data can be passed back to the app. Inputs can be used as a simple way to prompt users for information. Radios, checkboxes and text inputs are all accepted, but they cannot be mixed. For example, an alert could have all radio button inputs, or all checkbox inputs, but the same alert cannot mix radio and checkbox inputs. Do note however, different types of \"text\" inputs can be mixed, such as `url`, `email`, `text`, etc. If you require a complex form UI which doesn't fit within the guidelines of an alert then we recommend building the form within a modal instead.\r\n\r\n\r",
      docs:
        "An Alert is a dialog that presents users with information or collects information from the user using inputs. An alert appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. It can also optionally have a `header`, `subHeader` and `message`.",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\nimport { AlertController } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'alert-example',\r\n  templateUrl: 'alert-example.html',\r\n  styleUrls: ['./alert-example.css'],\r\n})\r\nexport class AlertExample {\r\n\r\n  constructor(public alertController: AlertController) {}\r\n\r\n  async presentAlert() {\r\n    const alert = await this.alertController.create({\r\n      header: 'Alert',\r\n      subHeader: 'Subtitle',\r\n      message: 'This is an alert message.',\r\n      buttons: ['OK']\r\n    });\r\n\r\n    await alert.present();\r\n  }\r\n\r\n  async presentAlertMultipleButtons() {\r\n    const alert = await this.alertController.create({\r\n      header: 'Alert',\r\n      subHeader: 'Subtitle',\r\n      message: 'This is an alert message.',\r\n      buttons: ['Cancel', 'Open Modal', 'Delete']\r\n    });\r\n\r\n    await alert.present();\r\n  }\r\n\r\n  async presentAlertConfirm() {\r\n    const alert = await this.alertController.create({\r\n      header: 'Confirm!',\r\n      message: 'Message <strong>text</strong>!!!',\r\n      buttons: [\r\n        {\r\n          text: 'Cancel',\r\n          role: 'cancel',\r\n          cssClass: 'secondary',\r\n          handler: (blah) => {\r\n            console.log('Confirm Cancel: blah');\r\n          }\r\n        }, {\r\n          text: 'Okay',\r\n          handler: () => {\r\n            console.log('Confirm Okay');\r\n          }\r\n        }\r\n      ]\r\n    });\r\n\r\n    await alert.present();\r\n  }\r\n\r\n  async presentAlertPrompt() {\r\n    const alert = await this.alertController.create({\r\n      header: 'Prompt!',\r\n      inputs: [\r\n        {\r\n          name: 'name1',\r\n          type: 'text',\r\n          placeholder: 'Placeholder 1'\r\n        },\r\n        {\r\n          name: 'name2',\r\n          type: 'text',\r\n          id: 'name2-id',\r\n          value: 'hello',\r\n          placeholder: 'Placeholder 2'\r\n        },\r\n        {\r\n          name: 'name3',\r\n          value: 'http://ionicframework.com',\r\n          type: 'url',\r\n          placeholder: 'Favorite site ever'\r\n        },\r\n        // input date with min & max\r\n        {\r\n          name: 'name4',\r\n          type: 'date',\r\n          min: '2017-03-01',\r\n          max: '2018-01-12'\r\n        },\r\n        // input date without min nor max\r\n        {\r\n          name: 'name5',\r\n          type: 'date'\r\n        },\r\n        {\r\n          name: 'name6',\r\n          type: 'number',\r\n          min: -5,\r\n          max: 10\r\n        },\r\n        {\r\n          name: 'name7',\r\n          type: 'number'\r\n        }\r\n      ],\r\n      buttons: [\r\n        {\r\n          text: 'Cancel',\r\n          role: 'cancel',\r\n          cssClass: 'secondary',\r\n          handler: () => {\r\n            console.log('Confirm Cancel');\r\n          }\r\n        }, {\r\n          text: 'Ok',\r\n          handler: () => {\r\n            console.log('Confirm Ok');\r\n          }\r\n        }\r\n      ]\r\n    });\r\n\r\n    await alert.present();\r\n  }\r\n\r\n  async presentAlertRadio() {\r\n    const alert = await this.alertController.create({\r\n      header: 'Radio',\r\n      inputs: [\r\n        {\r\n          name: 'radio1',\r\n          type: 'radio',\r\n          label: 'Radio 1',\r\n          value: 'value1',\r\n          checked: true\r\n        },\r\n        {\r\n          name: 'radio2',\r\n          type: 'radio',\r\n          label: 'Radio 2',\r\n          value: 'value2'\r\n        },\r\n        {\r\n          name: 'radio3',\r\n          type: 'radio',\r\n          label: 'Radio 3',\r\n          value: 'value3'\r\n        },\r\n        {\r\n          name: 'radio4',\r\n          type: 'radio',\r\n          label: 'Radio 4',\r\n          value: 'value4'\r\n        },\r\n        {\r\n          name: 'radio5',\r\n          type: 'radio',\r\n          label: 'Radio 5',\r\n          value: 'value5'\r\n        },\r\n        {\r\n          name: 'radio6',\r\n          type: 'radio',\r\n          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',\r\n          value: 'value6'\r\n        }\r\n      ],\r\n      buttons: [\r\n        {\r\n          text: 'Cancel',\r\n          role: 'cancel',\r\n          cssClass: 'secondary',\r\n          handler: () => {\r\n            console.log('Confirm Cancel');\r\n          }\r\n        }, {\r\n          text: 'Ok',\r\n          handler: () => {\r\n            console.log('Confirm Ok');\r\n          }\r\n        }\r\n      ]\r\n    });\r\n\r\n    await alert.present();\r\n  }\r\n\r\n  async presentAlertCheckbox() {\r\n    const alert = await this.alertController.create({\r\n      header: 'Checkbox',\r\n      inputs: [\r\n        {\r\n          name: 'checkbox1',\r\n          type: 'checkbox',\r\n          label: 'Checkbox 1',\r\n          value: 'value1',\r\n          checked: true\r\n        },\r\n\r\n        {\r\n          name: 'checkbox2',\r\n          type: 'checkbox',\r\n          label: 'Checkbox 2',\r\n          value: 'value2'\r\n        },\r\n\r\n        {\r\n          name: 'checkbox3',\r\n          type: 'checkbox',\r\n          label: 'Checkbox 3',\r\n          value: 'value3'\r\n        },\r\n\r\n        {\r\n          name: 'checkbox4',\r\n          type: 'checkbox',\r\n          label: 'Checkbox 4',\r\n          value: 'value4'\r\n        },\r\n\r\n        {\r\n          name: 'checkbox5',\r\n          type: 'checkbox',\r\n          label: 'Checkbox 5',\r\n          value: 'value5'\r\n        },\r\n\r\n        {\r\n          name: 'checkbox6',\r\n          type: 'checkbox',\r\n          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',\r\n          value: 'value6'\r\n        }\r\n      ],\r\n      buttons: [\r\n        {\r\n          text: 'Cancel',\r\n          role: 'cancel',\r\n          cssClass: 'secondary',\r\n          handler: () => {\r\n            console.log('Confirm Cancel');\r\n          }\r\n        }, {\r\n          text: 'Ok',\r\n          handler: () => {\r\n            console.log('Confirm Ok');\r\n          }\r\n        }\r\n      ]\r\n    });\r\n\r\n    await alert.present();\r\n  }\r\n\r\n}\r\n```\r\n",
        javascript:
          "```javascript\r\nasync function presentAlert() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Alert',\r\n    subHeader: 'Subtitle',\r\n    message: 'This is an alert message.',\r\n    buttons: ['OK']\r\n  });\r\n  return await alert.present();\r\n}\r\n\r\nasync function presentAlertMultipleButtons() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Alert',\r\n    subHeader: 'Subtitle',\r\n    message: 'This is an alert message.',\r\n    buttons: ['Cancel', 'Open Modal', 'Delete']\r\n  });\r\n  return await alert.present();\r\n}\r\n\r\nasync function presentAlertConfirm() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Confirm!',\r\n    message: 'Message <strong>text</strong>!!!',\r\n    buttons: [\r\n      {\r\n        text: 'Cancel',\r\n        role: 'cancel',\r\n        cssClass: 'secondary',\r\n        handler: (blah) => {\r\n          console.log('Confirm Cancel: blah');\r\n        }\r\n      }, {\r\n        text: 'Okay',\r\n        handler: () => {\r\n          console.log('Confirm Okay')\r\n        }\r\n      }\r\n    ]\r\n  });\r\n  return await alert.present();\r\n}\r\n\r\nasync function presentAlertPrompt() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Prompt!',\r\n    inputs: [\r\n      {\r\n        placeholder: 'Placeholder 1'\r\n      },\r\n      {\r\n        name: 'name2',\r\n        id: 'name2-id',\r\n        value: 'hello',\r\n        placeholder: 'Placeholder 2'\r\n      },\r\n      {\r\n        name: 'name3',\r\n        value: 'http://ionicframework.com',\r\n        type: 'url',\r\n        placeholder: 'Favorite site ever'\r\n      },\r\n      // input date with min & max\r\n      {\r\n        name: 'name4',\r\n        type: 'date',\r\n        min: '2017-03-01',\r\n        max: '2018-01-12'\r\n      },\r\n      // input date without min nor max\r\n      {\r\n        name: 'name5',\r\n        type: 'date'\r\n      },\r\n      {\r\n        name: 'name6',\r\n        type: 'number',\r\n        min: -5,\r\n        max: 10\r\n      },\r\n      {\r\n        name: 'name7',\r\n        type: 'number'\r\n      }\r\n    ],\r\n    buttons: [\r\n      {\r\n        text: 'Cancel',\r\n        role: 'cancel',\r\n        cssClass: 'secondary',\r\n        handler: () => {\r\n          console.log('Confirm Cancel')\r\n        }\r\n      }, {\r\n        text: 'Ok',\r\n        handler: () => {\r\n          console.log('Confirm Ok')\r\n        }\r\n      }\r\n    ]\r\n  });\r\n  return await alert.present();\r\n}\r\n\r\nasync function presentAlertRadio() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Radio',\r\n    inputs: [\r\n      {\r\n        type: 'radio',\r\n        label: 'Radio 1',\r\n        value: 'value1',\r\n        checked: true\r\n      },\r\n      {\r\n        type: 'radio',\r\n        label: 'Radio 2',\r\n        value: 'value2'\r\n      },\r\n      {\r\n        type: 'radio',\r\n        label: 'Radio 3',\r\n        value: 'value3'\r\n      },\r\n      {\r\n        type: 'radio',\r\n        label: 'Radio 4',\r\n        value: 'value4'\r\n      },\r\n      {\r\n        type: 'radio',\r\n        label: 'Radio 5',\r\n        value: 'value5'\r\n      },\r\n      {\r\n        type: 'radio',\r\n        label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',\r\n        value: 'value6'\r\n      }\r\n    ],\r\n    buttons: [\r\n      {\r\n        text: 'Cancel',\r\n        role: 'cancel',\r\n        cssClass: 'secondary',\r\n        handler: () => {\r\n          console.log('Confirm Cancel')\r\n        }\r\n      }, {\r\n        text: 'Ok',\r\n        handler: () => {\r\n          console.log('Confirm Ok')\r\n        }\r\n      }\r\n    ]\r\n  });\r\n  return await alert.present();\r\n}\r\n\r\nasync function presentAlertCheckbox() {\r\n  const alertController = document.querySelector('ion-alert-controller');\r\n  await alertController.componentOnReady();\r\n\r\n  const alert = await alertController.create({\r\n    header: 'Checkbox',\r\n    inputs: [\r\n      {\r\n        type: 'checkbox',\r\n        label: 'Checkbox 1',\r\n        value: 'value1',\r\n        checked: true\r\n      },\r\n\r\n      {\r\n        type: 'checkbox',\r\n        label: 'Checkbox 2',\r\n        value: 'value2'\r\n      },\r\n\r\n      {\r\n        type: 'checkbox',\r\n        label: 'Checkbox 3',\r\n        value: 'value3'\r\n      },\r\n\r\n      {\r\n        type: 'checkbox',\r\n        label: 'Checkbox 4',\r\n        value: 'value4'\r\n      },\r\n\r\n      {\r\n        type: 'checkbox',\r\n        label: 'Checkbox 5',\r\n        value: 'value5'\r\n      },\r\n\r\n      {\r\n        type: 'checkbox',\r\n        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',\r\n        value: 'value6'\r\n      }\r\n    ],\r\n    buttons: [\r\n      {\r\n        text: 'Cancel',\r\n        role: 'cancel',\r\n        cssClass: 'secondary',\r\n        handler: () => {\r\n          console.log('Confirm Cancel')\r\n        }\r\n      }, {\r\n        text: 'Ok',\r\n        handler: () => {\r\n          console.log('Confirm Ok')\r\n        }\r\n      }\r\n    ]\r\n  });\r\n  return await alert.present();\r\n}\r\n```\r\n",
        react:
          "```tsx\r\nimport React, { Component } from 'react'\r\nimport { IonAlert } from '@ionic/react';\r\n\r\ntype Props = {}\r\ntype State = {\r\n  showAlert1: boolean\r\n  showAlert2: boolean\r\n  showAlert3: boolean\r\n  showAlert4: boolean\r\n  showAlert5: boolean\r\n  showAlert6: boolean\r\n}\r\n\r\nexport default class AlertExample extends Component<Props, State> {\r\n\r\n  constructor(props: Props) {\r\n    super(props);\r\n    this.state = {\r\n      showAlert1: false\r\n      showAlert2: false\r\n      showAlert3: false\r\n      showAlert4: false\r\n      showAlert5: false\r\n      showAlert6: false\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IonAlert\r\n        isOpen={this.state.showAlert1}\r\n        onDidDismiss={() => this.setState(() => ({ showAlert1: false }))}\r\n        header={'Alert'}\r\n        subHeader={'Subtitle'}\r\n        message={'This is an alert message.'}\r\n        buttons={['OK']}\r\n      >\r\n      </IonAlert>\r\n\r\n\r\n      <IonAlert\r\n        isOpen={this.state.showAlert2}\r\n        onDidDismiss={() => this.setState(() => ({ showAlert2: false }))}\r\n        header={'Alert'}\r\n        subHeader={'Subtitle'}\r\n        message={'This is an alert message.'}\r\n        buttons={['Cancel', 'Open Modal', 'Delete']}\r\n      >\r\n      </IonAlert>\r\n\r\n\r\n      <IonAlert\r\n        isOpen={this.state.showAlert3}\r\n        onDidDismiss={() => this.setState(() => ({ showAlert3: false }))}\r\n        header={'Confirm!'}\r\n        message={'Message <strong>text</strong>!!!'}\r\n        buttons={[\r\n          {\r\n            text: 'Cancel',\r\n            role: 'cancel',\r\n            cssClass: 'secondary',\r\n            handler: (blah) => {\r\n              console.log('Confirm Cancel: blah');\r\n            }\r\n          }, {\r\n            text: 'Okay',\r\n            handler: () => {\r\n              console.log('Confirm Okay');\r\n            }\r\n          }\r\n        ]}\r\n      >\r\n      </IonAlert>\r\n\r\n\r\n      <IonAlert\r\n        isOpen={this.state.showAlert4}\r\n        onDidDismiss={() => this.setState(() => ({ showAlert4: false }))}\r\n        header={'Prompt!'}\r\n        inputs={[\r\n          {\r\n            name: 'name1',\r\n            type: 'text',\r\n            placeholder: 'Placeholder 1'\r\n          },\r\n          {\r\n            name: 'name2',\r\n            type: 'text',\r\n            id: 'name2-id',\r\n            value: 'hello',\r\n            placeholder: 'Placeholder 2'\r\n          },\r\n          {\r\n            name: 'name3',\r\n            value: 'http://ionicframework.com',\r\n            type: 'url',\r\n            placeholder: 'Favorite site ever'\r\n          },\r\n          // input date with min & max\r\n          {\r\n            name: 'name4',\r\n            type: 'date',\r\n            min: '2017-03-01',\r\n            max: '2018-01-12'\r\n          },\r\n          // input date without min nor max\r\n          {\r\n            name: 'name5',\r\n            type: 'date'\r\n          },\r\n          {\r\n            name: 'name6',\r\n            type: 'number',\r\n            min: -5,\r\n            max: 10\r\n          },\r\n          {\r\n            name: 'name7',\r\n            type: 'number'\r\n          }\r\n        ]}\r\n        buttons={[\r\n          {\r\n            text: 'Cancel',\r\n            role: 'cancel',\r\n            cssClass: 'secondary',\r\n            handler: () => {\r\n              console.log('Confirm Cancel');\r\n            }\r\n          }, {\r\n            text: 'Ok',\r\n            handler: () => {\r\n              console.log('Confirm Ok');\r\n            }\r\n          }\r\n        ]}\r\n      >\r\n      </IonAlert>\r\n\r\n\r\n\r\n\r\n      <IonAlert\r\n        isOpen={this.state.showAlert5}\r\n        onDidDismiss={() => this.setState(() => ({ showAlert5: false }))}\r\n        header={'Radio'}\r\n        inputs={[\r\n          {\r\n            name: 'radio1',\r\n            type: 'radio',\r\n            label: 'Radio 1',\r\n            value: 'value1',\r\n            checked: true\r\n          },\r\n          {\r\n            name: 'radio2',\r\n            type: 'radio',\r\n            label: 'Radio 2',\r\n            value: 'value2'\r\n          },\r\n          {\r\n            name: 'radio3',\r\n            type: 'radio',\r\n            label: 'Radio 3',\r\n            value: 'value3'\r\n          },\r\n          {\r\n            name: 'radio4',\r\n            type: 'radio',\r\n            label: 'Radio 4',\r\n            value: 'value4'\r\n          },\r\n          {\r\n            name: 'radio5',\r\n            type: 'radio',\r\n            label: 'Radio 5',\r\n            value: 'value5'\r\n          },\r\n          {\r\n            name: 'radio6',\r\n            type: 'radio',\r\n            label: 'Radio 6',\r\n            value: 'value6'\r\n          }\r\n        ]}\r\n        buttons={[\r\n          {\r\n            text: 'Cancel',\r\n            role: 'cancel',\r\n            cssClass: 'secondary',\r\n            handler: () => {\r\n              console.log('Confirm Cancel');\r\n            }\r\n          }, {\r\n            text: 'Ok',\r\n            handler: () => {\r\n              console.log('Confirm Ok');\r\n            }\r\n          }\r\n        ]}\r\n      >\r\n      </IonAlert>\r\n\r\n\r\n\r\n      <IonAlert\r\n        isOpen={this.state.showAlert6}\r\n        onDidDismiss={() => this.setState(() => ({ showAlert6: false }))}\r\n        header={'Checkbox'}\r\n        inputs={[\r\n          {\r\n            name: 'checkbox1',\r\n            type: 'checkbox',\r\n            label: 'Checkbox 1',\r\n            value: 'value1',\r\n            checked: true\r\n          },\r\n          {\r\n            name: 'checkbox2',\r\n            type: 'checkbox',\r\n            label: 'Checkbox 2',\r\n            value: 'value2'\r\n          },\r\n          {\r\n            name: 'checkbox3',\r\n            type: 'checkbox',\r\n            label: 'Checkbox 3',\r\n            value: 'value3'\r\n          },\r\n          {\r\n            name: 'checkbox4',\r\n            type: 'checkbox',\r\n            label: 'Checkbox 4',\r\n            value: 'value4'\r\n          },\r\n          {\r\n            name: 'checkbox5',\r\n            type: 'checkbox',\r\n            label: 'Checkbox 5',\r\n            value: 'value5'\r\n          },\r\n          {\r\n            name: 'checkbox6',\r\n            type: 'checkbox',\r\n            label: 'Checkbox 6',\r\n            value: 'value6'\r\n          }\r\n        ]}\r\n        buttons={[\r\n          {\r\n            text: 'Cancel',\r\n            role: 'cancel',\r\n            cssClass: 'secondary',\r\n            handler: () => {\r\n              console.log('Confirm Cancel');\r\n            }\r\n          }, {\r\n            text: 'Ok',\r\n            handler: () => {\r\n              console.log('Confirm Ok');\r\n            }\r\n          }\r\n        ]}\r\n      >\r\n      </IonAlert>\r\n    );\r\n  }\r\n}\r\n\r\n```\r\n",
        vue:
          "```html\r\n<template>\r\n  <IonVuePage :title=\"'Alert'\">\r\n    <ion-button @click=\"presentAlert\">Show Alert</ion-button>\r\n    <ion-button @click=\"presentAlertMultipleButtons\">Show Alert (multiple buttons)</ion-button>\r\n    <ion-button @click=\"presentAlertConfirm\">Show Alert (confirm)</ion-button>\r\n    <ion-button @click=\"presentAlertPrompt\">Show Alert (prompt)</ion-button>\r\n    <ion-button @click=\"presentAlertRadio\">Show Alert (radio)</ion-button>\r\n    <ion-button @click=\"presentAlertCheckbox\">Show Alert (checkbox)</ion-button>\r\n  </IonVuePage>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  methods: {\r\n    presentAlert() {\r\n      return this.$ionic.alertController\r\n        .create({\r\n          header: 'Alert',\r\n          subHeader: 'Subtitle',\r\n          message: 'This is an alert message.',\r\n          buttons: ['OK'],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n\r\n    presentAlertMultipleButtons() {\r\n      return this.$ionic.alertController\r\n        .create({\r\n          header: 'Alert',\r\n          subHeader: 'Subtitle',\r\n          message: 'This is an alert message.',\r\n          buttons: ['Cancel', 'Open Modal', 'Delete'],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n\r\n    presentAlertConfirm() {\r\n      return this.$ionic.alertController\r\n        .create({\r\n          header: 'Confirm!',\r\n          message: 'Message <strong>text</strong>!!!',\r\n          buttons: [\r\n            {\r\n              text: 'Cancel',\r\n              role: 'cancel',\r\n              cssClass: 'secondary',\r\n              handler: blah => {\r\n                console.log('Confirm Cancel:', blah)\r\n              },\r\n            },\r\n            {\r\n              text: 'Okay',\r\n              handler: () => {\r\n                console.log('Confirm Okay')\r\n              },\r\n            },\r\n          ],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n\r\n    presentAlertPrompt() {\r\n      return this.$ionic.alertController\r\n        .create({\r\n          header: 'Prompt!',\r\n          inputs: [\r\n            {\r\n              placeholder: 'Placeholder 1',\r\n            },\r\n            {\r\n              name: 'name2',\r\n              id: 'name2-id',\r\n              value: 'hello',\r\n              placeholder: 'Placeholder 2',\r\n            },\r\n            {\r\n              name: 'name3',\r\n              value: 'http://ionicframework.com',\r\n              type: 'url',\r\n              placeholder: 'Favorite site ever',\r\n            },\r\n            // input date with min & max\r\n            {\r\n              name: 'name4',\r\n              type: 'date',\r\n              min: '2017-03-01',\r\n              max: '2018-01-12',\r\n            },\r\n            // input date without min nor max\r\n            {\r\n              name: 'name5',\r\n              type: 'date',\r\n            },\r\n            {\r\n              name: 'name6',\r\n              type: 'number',\r\n              min: -5,\r\n              max: 10,\r\n            },\r\n            {\r\n              name: 'name7',\r\n              type: 'number',\r\n            },\r\n          ],\r\n          buttons: [\r\n            {\r\n              text: 'Cancel',\r\n              role: 'cancel',\r\n              cssClass: 'secondary',\r\n              handler: () => {\r\n                console.log('Confirm Cancel')\r\n              },\r\n            },\r\n            {\r\n              text: 'Ok',\r\n              handler: () => {\r\n                console.log('Confirm Ok')\r\n              },\r\n            },\r\n          ],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n\r\n    presentAlertRadio() {\r\n      return this.$ionic.alertController\r\n        .create({\r\n          header: 'Radio',\r\n          inputs: [\r\n            {\r\n              type: 'radio',\r\n              label: 'Radio 1',\r\n              value: 'value1',\r\n              checked: true,\r\n            },\r\n            {\r\n              type: 'radio',\r\n              label: 'Radio 2',\r\n              value: 'value2',\r\n            },\r\n            {\r\n              type: 'radio',\r\n              label: 'Radio 3',\r\n              value: 'value3',\r\n            },\r\n            {\r\n              type: 'radio',\r\n              label: 'Radio 4',\r\n              value: 'value4',\r\n            },\r\n            {\r\n              type: 'radio',\r\n              label: 'Radio 5',\r\n              value: 'value5',\r\n            },\r\n            {\r\n              type: 'radio',\r\n              label: 'Radio 6',\r\n              value: 'value6',\r\n            },\r\n          ],\r\n          buttons: [\r\n            {\r\n              text: 'Cancel',\r\n              role: 'cancel',\r\n              cssClass: 'secondary',\r\n              handler: () => {\r\n                console.log('Confirm Cancel')\r\n              },\r\n            },\r\n            {\r\n              text: 'Ok',\r\n              handler: () => {\r\n                console.log('Confirm Ok')\r\n              },\r\n            },\r\n          ],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n\r\n    presentAlertCheckbox() {\r\n      return this.$ionic.alertController\r\n        .create({\r\n          header: 'Checkbox',\r\n          inputs: [\r\n            {\r\n              type: 'checkbox',\r\n              label: 'Checkbox 1',\r\n              value: 'value1',\r\n              checked: true,\r\n            },\r\n\r\n            {\r\n              type: 'checkbox',\r\n              label: 'Checkbox 2',\r\n              value: 'value2',\r\n            },\r\n\r\n            {\r\n              type: 'checkbox',\r\n              label: 'Checkbox 3',\r\n              value: 'value3',\r\n            },\r\n\r\n            {\r\n              type: 'checkbox',\r\n              label: 'Checkbox 4',\r\n              value: 'value4',\r\n            },\r\n\r\n            {\r\n              type: 'checkbox',\r\n              label: 'Checkbox 5',\r\n              value: 'value5',\r\n            },\r\n\r\n            {\r\n              type: 'checkbox',\r\n              label: 'Checkbox 6',\r\n              value: 'value6',\r\n            },\r\n          ],\r\n          buttons: [\r\n            {\r\n              text: 'Cancel',\r\n              role: 'cancel',\r\n              cssClass: 'secondary',\r\n              handler: () => {\r\n                console.log('Confirm Cancel')\r\n              },\r\n            },\r\n            {\r\n              text: 'Ok',\r\n              handler: () => {\r\n                console.log('Confirm Ok')\r\n              },\r\n            },\r\n          ],\r\n        })\r\n        .then(a => a.present())\r\n    },\r\n  },\r\n}\r\n</script>\r\n```\r\n"
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the alert will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "backdropDismiss",
          type: "boolean",
          mutable: false,
          attr: "backdrop-dismiss",
          reflectToAttr: false,
          docs:
            "If `true`, the alert will be dismissed when the backdrop is clicked.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "buttons",
          type: "(string | AlertButton)[]",
          mutable: false,
          reflectToAttr: false,
          docs: "Array of buttons to be added to the alert.",
          docsTags: [],
          default: "[]",
          optional: false,
          required: false
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the alert is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "header",
          type: "string | undefined",
          mutable: false,
          attr: "header",
          reflectToAttr: false,
          docs: "The main title in the heading of the alert.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "inputs",
          type: "AlertInput[]",
          mutable: true,
          reflectToAttr: false,
          docs: "Array of input to show in the alert.",
          docsTags: [],
          default: "[]",
          optional: false,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the alert is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "message",
          type: "string | undefined",
          mutable: false,
          attr: "message",
          reflectToAttr: false,
          docs: "The main message to be displayed in the alert.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "subHeader",
          type: "string | undefined",
          mutable: false,
          attr: "sub-header",
          reflectToAttr: false,
          docs:
            "The subtitle in the heading of the alert. Displayed under the title.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the alert will be translucent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the alert overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the alert did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the alert will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the alert overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionAlertDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the alert has dismissed.",
          docsTags: []
        },
        {
          event: "ionAlertDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the alert has presented.",
          docsTags: []
        },
        {
          event: "ionAlertWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the alert has dismissed.",
          docsTags: []
        },
        {
          event: "ionAlertWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the alert has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the alert"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the alert"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the alert"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the alert"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the alert"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the alert"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the alert"
        }
      ],
      slots: []
    },
    {
      tag: "ion-anchor",
      encapsulation: "shadow",
      readme:
        "# ion-anchor\r\n\r\nThe Anchor component is used for navigating to a specified link. Similar to the browser's anchor tag, it can accept a href for the location, and a direction for the transition animation.\r\n\r\n\r",
      docs:
        "The Anchor component is used for navigating to a specified link. Similar to the browser's anchor tag, it can accept a href for the location, and a direction for the transition animation.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "href",
          type: "string | undefined",
          mutable: false,
          attr: "href",
          reflectToAttr: false,
          docs:
            "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "routerDirection",
          type: '"back" | "forward" | "root"',
          mutable: false,
          attr: "router-direction",
          reflectToAttr: false,
          docs:
            "When using a router, it specifies the transition direction when navigating to\r\nanother page using `href`.",
          docsTags: [],
          default: "'forward'",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the badge"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Text color of the badge"
        }
      ],
      slots: []
    },
    {
      tag: "ion-app",
      encapsulation: "none",
      readme:
        "# ion-app\r\n\r\nApp is a container element for an Ionic application. There should only be one `<ion-app>` element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the `<ion-app>` when they are presented.\r\n\r",
      docs:
        "App is a container element for an Ionic application. There should only be one `<ion-app>` element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the `<ion-app>` when they are presented.",
      docsTags: [],
      usage: {},
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-avatar",
      encapsulation: "shadow",
      readme:
        "# ion-avatar\r\n\r\nAvatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.\r\n\r\nAvatars can be used by themselves or inside of any element. If placed inside of an `ion-chip` or `ion-item`, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an item, set the slot to `start` or `end`, respectively.\r\n\r\n\r",
      docs:
        "Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.\r\n\r\nAvatars can be used by themselves or inside of any element. If placed inside of an `ion-chip` or `ion-item`, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an item, set the slot to `start` or `end`, respectively.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-avatar>\r\n  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n</ion-avatar>\r\n\r\n<ion-chip>\r\n  <ion-avatar>\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n  <ion-label>Chip Avatar</ion-label>\r\n</ion-chip>\r\n\r\n<ion-item>\r\n  <ion-avatar slot="start">\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n  <ion-label>Item Avatar</ion-label>\r\n</ion-item>\r\n```',
        javascript:
          '```html\r\n<ion-avatar>\r\n  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n</ion-avatar>\r\n\r\n<ion-chip>\r\n  <ion-avatar>\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n  <ion-label>Chip Avatar</ion-label>\r\n</ion-chip>\r\n\r\n<ion-item>\r\n  <ion-avatar slot="start">\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n  <ion-label>Item Avatar</ion-label>\r\n</ion-item>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\'\r\nimport { IonAvatar, IonChip, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst AvatarExample: React.SFC<{}> = () => (\r\n  <>\r\n    <IonAvatar>\r\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\r\n    </IonAvatar>\r\n\r\n    <IonChip>\r\n      <IonAvatar>\r\n        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\r\n      </IonAvatar>\r\n      <IonLabel>Chip Avatar</IonLabel>\r\n    </IonChip>\r\n\r\n    <IonItem>\r\n      <IonAvatar slot="start">\r\n        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\r\n      </IonAvatar>\r\n      <IonLabel>Item Avatar</IonLabel>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default AvatarExample;\r\n```',
        vue:
          '```html\r\n<template>\r\n  <ion-avatar>\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n\r\n  <ion-chip>\r\n    <ion-avatar>\r\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n    </ion-avatar>\r\n    <ion-label>Chip Avatar</ion-label>\r\n  </ion-chip>\r\n\r\n  <ion-item>\r\n    <ion-avatar slot="start">\r\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n  </ion-item>\r\n</template>\r\n```'
      },
      props: [],
      methods: [],
      events: [],
      styles: [
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the avatar and inner image"
        }
      ],
      slots: []
    },
    {
      tag: "ion-back-button",
      encapsulation: "scoped",
      readme:
        "# ion-back-button\r\n\r\nThe back button navigates back in the app's history upon click. It is smart enough to know what to render based on the mode and when to show based on the navigation stack.\r\n\r\nTo change what is displayed in the back button, use the `text` and `icon` properties.\r\n\r\n\r",
      docs:
        "The back button navigates back in the app's history upon click. It is smart enough to know what to render based on the mode and when to show based on the navigation stack.\r\n\r\nTo change what is displayed in the back button, use the `text` and `icon` properties.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default back button -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Back button with a default href -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button defaultHref="home"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Back button with custom text and icon -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button\r\n          [text]="buttonText"\r\n          [icon]="buttonIcon">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Back button with no text and custom icon -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button text="" icon="add"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Danger back button next to a menu button -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button color="danger"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n```',
        javascript:
          '```html\r\n<!-- Default back button -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Back button with a default href -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button default-href="home"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Back button with custom text and icon -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button text="Volver" icon="close"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Back button with no text and custom icon -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button text="" icon="add"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Danger back button next to a menu button -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button color="danger"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default back button --*/}\r\n    <IonHeader>\r\n      <IonToolbar>\r\n        <IonButtons slot="start">\r\n          <IonBackButton goBack={() => {}} />\r\n        </IonButtons>\r\n      </IonToolbar>\r\n    </IonHeader>\r\n\r\n    {/*-- Back button with a default href --*/}\r\n    <IonHeader>\r\n      <IonToolbar>\r\n        <IonButtons slot="start">\r\n          <IonBackButton goBack={() => {}} defaultHref="home" />\r\n        </IonButtons>\r\n      </IonToolbar>\r\n    </IonHeader>\r\n\r\n    {/*-- Back button with custom text and icon --*/}\r\n    <IonHeader>\r\n      <IonToolbar>\r\n        <IonButtons slot="start">\r\n          <IonBackButton\r\n            goBack={() => {}}\r\n            text="buttonText"\r\n            icon="buttonIcon"\r\n          />\r\n        </IonButtons>\r\n      </IonToolbar>\r\n    </IonHeader>\r\n\r\n    {/*-- Back button with no text and custom icon --*/}\r\n    <IonHeader>\r\n      <IonToolbar>\r\n        <IonButtons slot="start">\r\n          <IonBackButton goBack={() => {}} text="" icon="add" />\r\n        </IonButtons>\r\n      </IonToolbar>\r\n    </IonHeader>\r\n\r\n    {/*-- Danger back button next to a menu button --*/}\r\n    <IonHeader>\r\n      <IonToolbar>\r\n        <IonButtons slot="start">\r\n          <IonMenuButton />\r\n          <IonBackButton goBack={() => {}} color="danger" />\r\n        </IonButtons>\r\n      </IonToolbar>\r\n    </IonHeader>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```',
        vue:
          '```html\r\n<template>\r\n  <!-- Default back button -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot="start">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- Back button with a default href -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot="start">\r\n        <ion-back-button defaultHref="home"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- Back button with custom text and icon -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot="start">\r\n        <ion-back-button\r\n            :text="buttonText"\r\n            :icon="buttonIcon">\r\n        </ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- Back button with no text and custom icon -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot="start">\r\n        <ion-back-button text="" icon="add"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- Danger back button next to a menu button -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot="start">\r\n        <ion-menu-button></ion-menu-button>\r\n        <ion-back-button color="danger"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "defaultHref",
          type: "string | undefined",
          mutable: false,
          attr: "default-href",
          reflectToAttr: false,
          docs:
            "The url to navigate back to by default when there is no history.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "icon",
          type: "null | string | undefined",
          mutable: false,
          attr: "icon",
          reflectToAttr: false,
          docs: "The icon name to use for the back button.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "text",
          type: "null | string | undefined",
          mutable: false,
          attr: "text",
          reflectToAttr: false,
          docs: "The text to display in the back button.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the button"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the button"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Text color of the button"
        },
        {
          name: "--icon-font-size",
          annotation: "prop",
          docs: "Font size of the button icon"
        },
        {
          name: "--icon-font-weight",
          annotation: "prop",
          docs: "Font weight of the button icon"
        },
        {
          name: "--icon-margin-bottom",
          annotation: "prop",
          docs: "Margin bottom of the button icon"
        },
        {
          name: "--icon-margin-end",
          annotation: "prop",
          docs: "Margin end of the button icon"
        },
        {
          name: "--icon-margin-start",
          annotation: "prop",
          docs: "Margin start of the button icon"
        },
        {
          name: "--icon-margin-top",
          annotation: "prop",
          docs: "Margin top of the button icon"
        },
        {
          name: "--icon-padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the button icon"
        },
        {
          name: "--icon-padding-end",
          annotation: "prop",
          docs: "Padding end of the button icon"
        },
        {
          name: "--icon-padding-start",
          annotation: "prop",
          docs: "Padding start of the button icon"
        },
        {
          name: "--icon-padding-top",
          annotation: "prop",
          docs: "Padding top of the button icon"
        },
        {
          name: "--margin-bottom",
          annotation: "prop",
          docs: "Margin bottom of the button"
        },
        {
          name: "--margin-end",
          annotation: "prop",
          docs: "Margin end of the button"
        },
        {
          name: "--margin-start",
          annotation: "prop",
          docs: "Margin start of the button"
        },
        {
          name: "--margin-top",
          annotation: "prop",
          docs: "Margin top of the button"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the button"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the button"
        },
        {
          name: "--opacity",
          annotation: "prop",
          docs: "Opacity of the button"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the button"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "Padding end of the button"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Padding start of the button"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Padding top of the button"
        },
        {
          name: "--ripple-color",
          annotation: "prop",
          docs: "Color of the button ripple effect"
        },
        {
          name: "--transition",
          annotation: "prop",
          docs: "Transition of the button"
        }
      ],
      slots: []
    },
    {
      tag: "ion-backdrop",
      encapsulation: "shadow",
      readme:
        "# ion-backdrop\r\n\r\nBackdrops are full screen components that overlay other components. They are useful behind components that transition in on top of other content and can be used to dismiss that component.\r\n\r\n\r",
      docs:
        "Backdrops are full screen components that overlay other components. They are useful behind components that transition in on top of other content and can be used to dismiss that component.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default backdrop -->\r\n<ion-backdrop></ion-backdrop>\r\n\r\n<!-- Backdrop that is not tappable -->\r\n<ion-backdrop tappable="false"></ion-backdrop>\r\n\r\n<!-- Backdrop that is not visible -->\r\n<ion-backdrop visible="false"></ion-backdrop>\r\n\r\n<!-- Backdrop with propagation -->\r\n<ion-backdrop stopPropagation="false"></ion-backdrop>\r\n\r\n<!-- Backdrop that sets dynamic properties -->\r\n<ion-backdrop\r\n  [tappable]="enableBackdropDismiss"\r\n  [visible]="showBackdrop"\r\n  [stopPropagation]="shouldPropagate">\r\n</ion-backdrop>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'backdrop-example\',\r\n  templateUrl: \'backdrop-example.html\',\r\n  styleUrls: [\'./backdrop-example.css\'],\r\n})\r\nexport class BackdropExample {\r\n  backdropDismiss = false;\r\n  showBackdrop = false;\r\n  shouldPropagate = false;\r\n}\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default backdrop -->\r\n<ion-backdrop></ion-backdrop>\r\n\r\n<!-- Backdrop that is not tappable -->\r\n<ion-backdrop tappable="false"></ion-backdrop>\r\n\r\n<!-- Backdrop that is not visible -->\r\n<ion-backdrop visible="false"></ion-backdrop>\r\n\r\n<!-- Backdrop with propagation -->\r\n<ion-backdrop stop-propagation="false"></ion-backdrop>\r\n\r\n<!-- Backdrop that sets dynamic properties -->\r\n<ion-backdrop id="customBackdrop"></ion-backdrop>\r\n```\r\n\r\n```javascript\r\nvar backdrop = document.getElementById(\'customBackdrop\');\r\nbackdrop.visible = false;\r\nbackdrop.tappable = false;\r\nbackdrop.stopPropagation = false;\r\n```',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonBackdrop } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default backdrop --*/}\r\n    <IonBackdrop />\r\n\r\n    {/*-- Backdrop that is not tappable --*/}\r\n    <IonBackdrop tappable={false} />\r\n\r\n    {/*-- Backdrop that is not visible --*/}\r\n    <IonBackdrop visible={false} />\r\n\r\n    {/*-- Backdrop with propagation --*/}\r\n    <IonBackdrop stopPropagation={false} />\r\n\r\n    <IonBackdrop\r\n      tappable={true}\r\n      visible={true}\r\n      stopPropagation={true}\r\n    />\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n",
        vue:
          '```html\r\n<template>\r\n  <!-- Default backdrop -->\r\n  <ion-backdrop></ion-backdrop>\r\n\r\n  <!-- Backdrop that is not tappable -->\r\n  <ion-backdrop tappable="false"></ion-backdrop>\r\n\r\n  <!-- Backdrop that is not visible -->\r\n  <ion-backdrop visible="false"></ion-backdrop>\r\n\r\n  <!-- Backdrop with propagation -->\r\n  <ion-backdrop stopPropagation="false"></ion-backdrop>\r\n\r\n  <!-- Backdrop that sets dynamic properties -->\r\n  <ion-backdrop\r\n    :tappable="enableBackdropDismiss"\r\n    :visible="showBackdrop"\r\n    :stopPropagation="shouldPropagate">\r\n  </ion-backdrop>\r\n</template>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class Menu extends Vue {\r\n    backdropDismiss = false;\r\n    showBackdrop = false;\r\n    shouldPropagate = false;\r\n  }\r\n</script>\r\n```'
      },
      props: [
        {
          name: "stopPropagation",
          type: "boolean",
          mutable: false,
          attr: "stop-propagation",
          reflectToAttr: false,
          docs: "If `true`, the backdrop will stop propagation on tap.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "tappable",
          type: "boolean",
          mutable: false,
          attr: "tappable",
          reflectToAttr: false,
          docs:
            "If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "visible",
          type: "boolean",
          mutable: false,
          attr: "visible",
          reflectToAttr: false,
          docs: "If `true`, the backdrop will be visible.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBackdropTap",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the backdrop is tapped.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-badge",
      encapsulation: "shadow",
      readme:
        "# ion-badge\r\n\r\nBadges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are.\r\n\r\n\r",
      docs:
        "Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default -->\r\n<ion-badge>99</ion-badge>\r\n\r\n<!-- Colors -->\r\n<ion-badge color="primary">11</ion-badge>\r\n<ion-badge color="secondary">22</ion-badge>\r\n<ion-badge color="tertiary">33</ion-badge>\r\n<ion-badge color="success">44</ion-badge>\r\n<ion-badge color="warning">55</ion-badge>\r\n<ion-badge color="danger">66</ion-badge>\r\n<ion-badge color="light">77</ion-badge>\r\n<ion-badge color="medium">88</ion-badge>\r\n<ion-badge color="dark">99</ion-badge>\r\n\r\n<!-- Item with badge on left and right -->\r\n<ion-item>\r\n  <ion-badge slot="start">11</ion-badge>\r\n  <ion-label>My Item</ion-label>\r\n  <ion-badge slot="end">22</ion-badge>\r\n</ion-item>\r\n```',
        javascript:
          '```html\r\n<!-- Default -->\r\n<ion-badge>99</ion-badge>\r\n\r\n<!-- Colors -->\r\n<ion-badge color="primary">11</ion-badge>\r\n<ion-badge color="secondary">22</ion-badge>\r\n<ion-badge color="tertiary">33</ion-badge>\r\n<ion-badge color="success">44</ion-badge>\r\n<ion-badge color="warning">55</ion-badge>\r\n<ion-badge color="danger">66</ion-badge>\r\n<ion-badge color="light">77</ion-badge>\r\n<ion-badge color="medium">88</ion-badge>\r\n<ion-badge color="dark">99</ion-badge>\r\n\r\n<!-- Item with badge on left and right -->\r\n<ion-item>\r\n  <ion-badge slot="start">11</ion-badge>\r\n  <ion-label>My Item</ion-label>\r\n  <ion-badge slot="end">22</ion-badge>\r\n</ion-item>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonBadge, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default --*/}\r\n    <IonBadge>99</IonBadge>\r\n\r\n    {/*-- Colors --*/}\r\n    <IonBadge color="primary">11</IonBadge>\r\n    <IonBadge color="secondary">22</IonBadge>\r\n    <IonBadge color="tertiary">33</IonBadge>\r\n    <IonBadge color="success">44</IonBadge>\r\n    <IonBadge color="warning">55</IonBadge>\r\n    <IonBadge color="danger">66</IonBadge>\r\n    <IonBadge color="light">77</IonBadge>\r\n    <IonBadge color="medium">88</IonBadge>\r\n    <IonBadge color="dark">99</IonBadge>\r\n\r\n    {/*-- Item with badge on left and right --*/}\r\n    <IonItem>\r\n      <IonBadge slot="start">11</IonBadge>\r\n      <IonLabel>My Item</IonLabel>\r\n      <IonBadge slot="end">22</IonBadge>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default -->\r\n  <ion-badge>99</ion-badge>\r\n\r\n  <!-- Colors -->\r\n  <ion-badge color="primary">11</ion-badge>\r\n  <ion-badge color="secondary">22</ion-badge>\r\n  <ion-badge color="tertiary">33</ion-badge>\r\n  <ion-badge color="success">44</ion-badge>\r\n  <ion-badge color="warning">55</ion-badge>\r\n  <ion-badge color="danger">66</ion-badge>\r\n  <ion-badge color="light">77</ion-badge>\r\n  <ion-badge color="medium">88</ion-badge>\r\n  <ion-badge color="dark">99</ion-badge>\r\n\r\n  <!-- Item with badge on left and right -->\r\n  <ion-item>\r\n    <ion-badge slot="start">11</ion-badge>\r\n    <ion-label>My Item</ion-label>\r\n    <ion-badge slot="end">22</ion-badge>\r\n  </ion-item>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the badge"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Text color of the badge"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the badge"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "Padding end of the badge"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Padding start of the badge"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Padding top of the badge"
        }
      ],
      slots: []
    },
    {
      tag: "ion-button",
      encapsulation: "shadow",
      readme:
        "# ion-button\r\n\r\nButtons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.\r\n\r\n## Expand\r\n\r\nThis attribute lets you specify how wide the button should be. By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.\r\n\r\n| Value          | Details                                                                      |\r\n|----------------|------------------------------------------------------------------------------|\r\n| `block`        | Full-width button with rounded corners.                                      |\r\n| `full`         | Full-width button with square corners and no border on the left or right.    |\r\n\r\n## Fill\r\n\r\nThis attributes determines the background and border color of the button. By default, buttons have a solid background unless the button is inside of a toolbar, in which case it has a transparent background.\r\n\r\n| Value          | Details                                                                      |\r\n|----------------|------------------------------------------------------------------------------|\r\n| `clear`        | Button with a transparent background that resembles a flat button.           |\r\n| `outline`      | Button with a transparent background and a visible border.                   |\r\n| `solid`        | Button with a filled background. Useful for buttons in a toolbar.            |\r\n\r\n## Size\r\n\r\nThis attribute specifies the size of the button. Setting this attribute will change the height and padding of a button.\r\n\r\n| Value          | Details                                                                      |\r\n|----------------|------------------------------------------------------------------------------|\r\n| `small`        | Button with less height and padding. Default for buttons in an item.         |\r\n| `default`      | Button with the default height and padding. Useful for buttons in an item.   |\r\n| `large`        | Button with more height and padding.                                         |\r\n\r\n\r",
      docs:
        "Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.",
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed between the named slots if provided without a slot."
        },
        {
          name: "slot",
          text:
            "icon-only - Should be used on an icon in a button that has no text."
        },
        {
          name: "slot",
          text:
            "start - Content is placed to the left of the button text in LTR, and to the right in RTL."
        },
        {
          name: "slot",
          text:
            "end - Content is placed to the right of the button text in LTR, and to the left in RTL."
        }
      ],
      usage: {
        angular:
          '\r\n```html\r\n<!-- Default -->\r\n<ion-button>Default</ion-button>\r\n\r\n<!-- Anchor -->\r\n<ion-button href="#">Anchor</ion-button>\r\n\r\n<!-- Colors -->\r\n<ion-button color="primary">Primary</ion-button>\r\n<ion-button color="secondary">Secondary</ion-button>\r\n<ion-button color="tertiary">Tertiary</ion-button>\r\n<ion-button color="success">Success</ion-button>\r\n<ion-button color="warning">Warning</ion-button>\r\n<ion-button color="danger">Danger</ion-button>\r\n<ion-button color="light">Light</ion-button>\r\n<ion-button color="medium">Medium</ion-button>\r\n<ion-button color="dark">Dark</ion-button>\r\n\r\n<!-- Expand -->\r\n<ion-button expand="full">Full Button</ion-button>\r\n<ion-button expand="block">Block Button</ion-button>\r\n\r\n<!-- Round -->\r\n<ion-button shape="round">Round Button</ion-button>\r\n\r\n<!-- Fill -->\r\n<ion-button expand="full" fill="outline">Outline + Full</ion-button>\r\n<ion-button expand="block" fill="outline">Outline + Block</ion-button>\r\n<ion-button shape="round" fill="outline">Outline + Round</ion-button>\r\n\r\n<!-- Icons -->\r\n<ion-button>\r\n  <ion-icon slot="start" name="star"></ion-icon>\r\n  Left Icon\r\n</ion-button>\r\n\r\n<ion-button>\r\n  Right Icon\r\n  <ion-icon slot="end" name="star"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-button>\r\n  <ion-icon slot="icon-only" name="star"></ion-icon>\r\n</ion-button>\r\n\r\n<!-- Sizes -->\r\n<ion-button size="large">Large</ion-button>\r\n<ion-button>Default</ion-button>\r\n<ion-button size="small">Small</ion-button>\r\n```\r\n',
        javascript:
          '\r\n```html\r\n<!-- Default -->\r\n<ion-button>Default</ion-button>\r\n\r\n<!-- Anchor -->\r\n<ion-button href="#">Anchor</ion-button>\r\n\r\n<!-- Colors -->\r\n<ion-button color="primary">Primary</ion-button>\r\n<ion-button color="secondary">Secondary</ion-button>\r\n<ion-button color="tertiary">Tertiary</ion-button>\r\n<ion-button color="success">Success</ion-button>\r\n<ion-button color="warning">Warning</ion-button>\r\n<ion-button color="danger">Danger</ion-button>\r\n<ion-button color="light">Light</ion-button>\r\n<ion-button color="medium">Medium</ion-button>\r\n<ion-button color="dark">Dark</ion-button>\r\n\r\n<!-- Expand -->\r\n<ion-button expand="full">Full Button</ion-button>\r\n<ion-button expand="block">Block Button</ion-button>\r\n\r\n<!-- Round -->\r\n<ion-button shape="round">Round Button</ion-button>\r\n\r\n<!-- Fill -->\r\n<ion-button expand="full" fill="outline">Outline + Full</ion-button>\r\n<ion-button expand="block" fill="outline">Outline + Block</ion-button>\r\n<ion-button shape="round" fill="outline">Outline + Round</ion-button>\r\n\r\n<!-- Icons -->\r\n<ion-button>\r\n  <ion-icon slot="start" name="star"></ion-icon>\r\n  Left Icon\r\n</ion-button>\r\n\r\n<ion-button>\r\n  Right Icon\r\n  <ion-icon slot="end" name="star"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-button>\r\n  <ion-icon slot="icon-only" name="star"></ion-icon>\r\n</ion-button>\r\n\r\n<!-- Sizes -->\r\n<ion-button size="large">Large</ion-button>\r\n<ion-button>Default</ion-button>\r\n<ion-button size="small">Small</ion-button>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonButton, IonIcon } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default --*/}\r\n    <IonButton>Default</IonButton>\r\n\r\n    {/*-- Anchor --*/}\r\n    <IonButton href="#">Anchor</IonButton>\r\n\r\n    {/*-- Colors --*/}\r\n    <IonButton color="primary">Primary</IonButton>\r\n    <IonButton color="secondary">Secondary</IonButton>\r\n    <IonButton color="tertiary">Tertiary</IonButton>\r\n    <IonButton color="success">Success</IonButton>\r\n    <IonButton color="warning">Warning</IonButton>\r\n    <IonButton color="danger">Danger</IonButton>\r\n    <IonButton color="light">Light</IonButton>\r\n    <IonButton color="medium">Medium</IonButton>\r\n    <IonButton color="dark">Dark</IonButton>\r\n\r\n    {/*-- Expand --*/}\r\n    <IonButton expand="full">Full Button</IonButton>\r\n    <IonButton expand="block">Block Button</IonButton>\r\n\r\n    {/*-- Round --*/}\r\n    <IonButton shape="round">Round Button</IonButton>\r\n\r\n    {/*-- Fill --*/}\r\n    <IonButton expand="full" fill="outline">Outline + Full</IonButton>\r\n    <IonButton expand="block" fill="outline">Outline + Block</IonButton>\r\n    <IonButton shape="round" fill="outline">Outline + Round</IonButton>\r\n\r\n    {/*-- Icons --*/}\r\n    <IonButton>\r\n      <IonIcon slot="start" name="star" />\r\n      Left Icon\r\n    </IonButton>\r\n\r\n    <IonButton>\r\n      Right Icon\r\n      <IonIcon slot="end" name="star" />\r\n    </IonButton>\r\n\r\n    <IonButton>\r\n      <IonIcon slot="icon-only" name="star" />\r\n    </IonButton>\r\n\r\n    {/*-- Sizes --*/}\r\n    <IonButton size="large">Large</IonButton>\r\n    <IonButton>Default</IonButton>\r\n    <IonButton size="small">Small</IonButton>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default -->\r\n  <ion-button>Default</ion-button>\r\n\r\n  <!-- Anchor -->\r\n  <ion-button href="#">Anchor</ion-button>\r\n\r\n  <!-- Colors -->\r\n  <ion-button color="primary">Primary</ion-button>\r\n  <ion-button color="secondary">Secondary</ion-button>\r\n  <ion-button color="tertiary">Tertiary</ion-button>\r\n  <ion-button color="success">Success</ion-button>\r\n  <ion-button color="warning">Warning</ion-button>\r\n  <ion-button color="danger">Danger</ion-button>\r\n  <ion-button color="light">Light</ion-button>\r\n  <ion-button color="medium">Medium</ion-button>\r\n  <ion-button color="dark">Dark</ion-button>\r\n\r\n  <!-- Expand -->\r\n  <ion-button expand="full">Full Button</ion-button>\r\n  <ion-button expand="block">Block Button</ion-button>\r\n\r\n  <!-- Round -->\r\n  <ion-button shape="round">Round Button</ion-button>\r\n\r\n  <!-- Fill -->\r\n  <ion-button expand="full" fill="outline">Outline + Full</ion-button>\r\n  <ion-button expand="block" fill="outline">Outline + Block</ion-button>\r\n  <ion-button shape="round" fill="outline">Outline + Round</ion-button>\r\n\r\n  <!-- Icons -->\r\n  <ion-button>\r\n    <ion-icon slot="start" name="star"></ion-icon>\r\n    Left Icon\r\n  </ion-button>\r\n\r\n  <ion-button>\r\n    Right Icon\r\n    <ion-icon slot="end" name="star"></ion-icon>\r\n  </ion-button>\r\n\r\n  <ion-button>\r\n    <ion-icon slot="icon-only" name="star"></ion-icon>\r\n  </ion-button>\r\n\r\n  <!-- Sizes -->\r\n  <ion-button size="large">Large</ion-button>\r\n  <ion-button>Default</ion-button>\r\n  <ion-button size="small">Small</ion-button>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "buttonType",
          type: "string",
          mutable: true,
          attr: "button-type",
          reflectToAttr: false,
          docs: "The type of button.",
          docsTags: [],
          default: "'button'",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: true,
          docs: "If `true`, the user cannot interact with the button.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "expand",
          type: '"block" | "full" | undefined',
          mutable: false,
          attr: "expand",
          reflectToAttr: true,
          docs:
            'Set to `"block"` for a full-width button or to `"full"` for a full-width button\r\nwithout left and right borders.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "fill",
          type: '"clear" | "default" | "outline" | "solid" | undefined',
          mutable: true,
          attr: "fill",
          reflectToAttr: true,
          docs:
            'Set to `"clear"` for a transparent button, to `"outline"` for a transparent\r\nbutton with a border, or to `"solid"`. The default style is `"solid"` except inside of\r\na toolbar, where the default is `"clear"`.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "href",
          type: "string | undefined",
          mutable: false,
          attr: "href",
          reflectToAttr: false,
          docs:
            "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "routerDirection",
          type: '"back" | "forward" | "root"',
          mutable: false,
          attr: "router-direction",
          reflectToAttr: false,
          docs:
            "When using a router, it specifies the transition direction when navigating to\r\nanother page using `href`.",
          docsTags: [],
          default: "'forward'",
          optional: false,
          required: false
        },
        {
          name: "shape",
          type: '"round" | undefined',
          mutable: false,
          attr: "shape",
          reflectToAttr: true,
          docs: "The button shape.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "size",
          type: '"default" | "large" | "small" | undefined',
          mutable: false,
          attr: "size",
          reflectToAttr: true,
          docs: "The button size.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "strong",
          type: "boolean",
          mutable: false,
          attr: "strong",
          reflectToAttr: false,
          docs: "If `true`, activates a button with a heavier font weight.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "type",
          type: '"button" | "reset" | "submit"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs: "The type of the button.",
          docsTags: [],
          default: "'button'",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the button loses focus.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the button has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the button"
        },
        {
          name: "--background-activated",
          annotation: "prop",
          docs: "Background of the button when activated"
        },
        {
          name: "--background-focused",
          annotation: "prop",
          docs: "Background of the button when focused"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Border color of the button"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the button"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Border style of the button"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Border width of the button"
        },
        {
          name: "--box-shadow",
          annotation: "prop",
          docs: "Box shadow of the button"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Text color of the button"
        },
        {
          name: "--color-activated",
          annotation: "prop",
          docs: "Text color of the button when activated"
        },
        {
          name: "--color-focused",
          annotation: "prop",
          docs: "Text color of the button when focused"
        },
        {
          name: "--opacity",
          annotation: "prop",
          docs: "Opacity of the button"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the button"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "Padding end of the button"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Padding start of the button"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Padding top of the button"
        },
        {
          name: "--ripple-color",
          annotation: "prop",
          docs: "Color of the button ripple effect"
        },
        {
          name: "--transition",
          annotation: "prop",
          docs: "Transition of the button"
        }
      ],
      slots: [
        {
          name: "",
          docs:
            "Content is placed between the named slots if provided without a slot."
        },
        {
          name: "end",
          docs:
            "Content is placed to the right of the button text in LTR, and to the left in RTL."
        },
        {
          name: "icon-only",
          docs: "Should be used on an icon in a button that has no text."
        },
        {
          name: "start",
          docs:
            "Content is placed to the left of the button text in LTR, and to the right in RTL."
        }
      ]
    },
    {
      tag: "ion-buttons",
      encapsulation: "scoped",
      readme:
        "# ion-buttons\r\n\r\nThe Buttons component is a container element. Buttons placed in a toolbar should be placed inside of the `<ion-buttons>` element.\r\n\r\nThe `<ion-buttons>` element can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.\r\n\r\n| Slot         | Description                                                                                              |\r\n|--------------|----------------------------------------------------------------------------------------------------------|\r\n| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |\r\n| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |\r\n| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |\r\n| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |\r\n\r\n\r",
      docs:
        "The Buttons component is a container element. Buttons placed in a toolbar should be placed inside of the `<ion-buttons>` element.\r\n\r\nThe `<ion-buttons>` element can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.\r\n\r\n| Slot         | Description                                                                                              |\r\n|--------------|----------------------------------------------------------------------------------------------------------|\r\n| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |\r\n| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |\r\n| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |\r\n| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-toolbar>\r\n  <ion-buttons slot="start">\r\n    <ion-back-button></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>Back Button</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Default Buttons</ion-title>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="secondary">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="primary">\r\n    <ion-button (click)="clickedStar()">\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Right side menu toggle</ion-title>\r\n  <ion-buttons slot="end">\r\n    <ion-menu-button autoHide="false"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n```',
        javascript:
          '```html\r\n<ion-toolbar>\r\n  <ion-buttons slot="start">\r\n    <ion-back-button></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>Back Button</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Default Buttons</ion-title>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="secondary">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="primary">\r\n    <ion-button onclick="clickedStar()">\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Right side menu toggle</ion-title>\r\n  <ion-buttons slot="end">\r\n    <ion-menu-toggle auto-hide="false">\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="menu"></ion-icon>\r\n      </ion-button>\r\n    </ion-menu-toggle>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonButtons, IonToolbar, IonBackButton, IonTitle, IonButton, IonIcon, IonMenuButton } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonToolbar>\r\n      <IonButtons slot="start">\r\n        <IonBackButton goBack={() => {}} />\r\n      </IonButtons>\r\n      <IonTitle>Back Button</IonTitle>\r\n    </IonToolbar>\r\n\r\n    <IonToolbar>\r\n      <IonButtons slot="secondary">\r\n        <IonButton>\r\n          <IonIcon slot="icon-only" name="contact" />\r\n        </IonButton>\r\n        <IonButton> />\r\n          <IonIcon slot="icon-only" name="search" />\r\n        </IonButton>\r\n      </IonButtons>\r\n      <IonTitle>Default Buttons</IonTitle>\r\n      <IonButtons slot="primary">\r\n        <IonButton color="secondary"> />\r\n          <IonIcon slot="icon-only" name="more" />\r\n        </IonButton>\r\n      </IonButtons>\r\n    </IonToolbar>\r\n\r\n    <IonToolbar>\r\n      <IonButtons slot="primary">\r\n        <IonButton onClick={() => {}}>\r\n          <IonIcon slot="icon-only" name="star" />\r\n        </IonButton>\r\n      </IonButtons>\r\n      <IonTitle>Right side menu toggle</IonTitle>\r\n      <IonButtons slot="end">\r\n        <IonMenuButton autoHide={false} />\r\n      </IonButtons>\r\n    </IonToolbar>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Back Button</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="secondary">\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="search"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Default Buttons</ion-title>\r\n    <ion-buttons slot="primary">\r\n      <ion-button color="secondary">\r\n        <ion-icon slot="icon-only" name="more"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="primary">\r\n      <ion-button @click="clickedStar()">\r\n        <ion-icon slot="icon-only" name="star"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Right side menu toggle</ion-title>\r\n    <ion-buttons slot="end">\r\n      <ion-menu-button autoHide="false"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</template>\r\n```'
      },
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-card-content",
      encapsulation: "none",
      readme:
        "# ion-card-content\r\n\r\n`ion-card-content` is child component of `ion-card` that adds some content padding.\r\nIt is recommended that any text content for a card should be placed in an `ion-card-content`.\r\n\r\n\r",
      docs:
        "`ion-card-content` is child component of `ion-card` that adds some content padding.\r\nIt is recommended that any text content for a card should be placed in an `ion-card-content`.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
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
      tag: "ion-card-header",
      encapsulation: "shadow",
      readme:
        "# ion-card-header\r\n\r\n`ion-card-header` is a header component for `ion-card`.\r\n\r\n\r",
      docs: "`ion-card-header` is a header component for `ion-card`.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the card header will be translucent.",
          docsTags: [],
          default: "false",
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
      tag: "ion-card-subtitle",
      encapsulation: "shadow",
      readme:
        "# ion-card-subtitle\r\n\r\n`ion-card-subtitle` is a child component of `ion-card`\r\n\r",
      docs: "`ion-card-subtitle` is a child component of `ion-card`",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the card subtitle"
        }
      ],
      slots: []
    },
    {
      tag: "ion-card-title",
      encapsulation: "shadow",
      readme:
        "# ion-card-title\r\n\r\n`ion-card-title` is a child component of `ion-card`\r\n\r\n\r",
      docs: "`ion-card-title` is a child component of `ion-card`",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the card title"
        }
      ],
      slots: []
    },
    {
      tag: "ion-card",
      encapsulation: "scoped",
      readme:
        "# ion-card\r\n\r\nCards are a standard piece of UI that serves as an entry point to more detailed\r\ninformation. A card can be a single component, but is often made up of some\r\nheader, title, subtitle, and content. `ion-card` is broken up into several\r\nsub-components to reflect this. Please see `ion-card-content`,\r\n`ion-card-header`, `ion-card-title`, `ion-card-subtitle`.\r\n\r",
      docs:
        "Cards are a standard piece of UI that serves as an entry point to more detailed\r\ninformation. A card can be a single component, but is often made up of some\r\nheader, title, subtitle, and content. `ion-card` is broken up into several\r\nsub-components to reflect this. Please see `ion-card-content`,\r\n`ion-card-header`, `ion-card-title`, `ion-card-subtitle`.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n    <ion-card-title>Card Title</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    Keep close to Nature\'s heart... and break clear away, once in awhile,\r\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-item>\r\n    <ion-icon name="pin" slot="start"></ion-icon>\r\n    <ion-label>ion-item in a card, icon left, button right</ion-label>\r\n    <ion-button fill="outline" slot="end">View</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-card-content>\r\n    This is content, without any paragraph or header tags,\r\n    within an ion-card-content element.\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-item href="#" class="activated">\r\n    <ion-icon name="wifi" slot="start"></ion-icon>\r\n    <ion-label>Card Link Item 1 .activated</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item href="#">\r\n    <ion-icon name="wine" slot="start"></ion-icon>\r\n    <ion-label>Card Link Item 2</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item class="activated">\r\n    <ion-icon name="warning" slot="start"></ion-icon>\r\n    <ion-label>Card Button Item 1 .activated</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name="walk" slot="start"></ion-icon>\r\n    <ion-label>Card Button Item 2</ion-label>\r\n  </ion-item>\r\n</ion-card>\r\n```',
        javascript:
          '```html\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n    <ion-card-title>Card Title</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    Keep close to Nature\'s heart... and break clear away, once in awhile,\r\n    and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-item>\r\n    <ion-icon name="pin" slot="start"></ion-icon>\r\n    <ion-label>ion-item in a card, icon left, button right</ion-label>\r\n    <ion-button fill="outline" slot="end">View</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-card-content>\r\n    This is content, without any paragraph or header tags,\r\n    within an ion-card-content element.\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-item href="#" class="activated">\r\n    <ion-icon name="wifi" slot="start"></ion-icon>\r\n    <ion-label>Card Link Item 1 .activated</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item href="#">\r\n    <ion-icon name="wine" slot="start"></ion-icon>\r\n    <ion-label>Card Link Item 2</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item class="activated">\r\n    <ion-icon name="warning" slot="start"></ion-icon>\r\n    <ion-label>Card Button Item 1 .activated</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name="walk" slot="start"></ion-icon>\r\n    <ion-label>Card Button Item 2</ion-label>\r\n  </ion-item>\r\n</ion-card>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonCard>\r\n      <IonCardHeader>\r\n        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>\r\n        <IonCardTitle>Card Title</IonCardTitle>\r\n      </IonCardHeader>\r\n\r\n      <IonCardContent>\r\n        Keep close to Nature\'s heart... and break clear away, once in awhile,\r\n        and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n      </IonCardContent>\r\n    </IonCard>\r\n\r\n    <IonCard>\r\n      <IonItem>\r\n        <IonIcon name="pin" slot="start" />\r\n        <IonLabel>ion-item in a card, icon left, button right</IonLabel>\r\n        <IonButton fill="outline" slot="end">View</IonButton>\r\n      </IonItem>\r\n\r\n      <IonCardContent>\r\n        This is content, without any paragraph or header tags,\r\n        within an ion-cardContent element.\r\n      </IonCardContent>\r\n    </IonCard>\r\n\r\n    <IonCard>\r\n      <IonItem href="#" class="activated">\r\n        <IonIcon name="wifi" slot="start" />\r\n        <IonLabel>Card Link Item 1 .activated</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem href="#">\r\n        <IonIcon name="wine" slot="start" />\r\n        <IonLabel>Card Link Item 2</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem class="activated">\r\n        <IonIcon name="warning" slot="start" />\r\n        <IonLabel>Card Button Item 1 .activated</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonIcon name="walk" slot="start" />\r\n        <IonLabel>Card Button Item 2</IonLabel>\r\n      </IonItem>\r\n    </IonCard>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\r\n      <ion-card-title>Card Title</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      Keep close to Nature\'s heart... and break clear away, once in awhile,\r\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name="pin" slot="start"></ion-icon>\r\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\r\n      <ion-button fill="outline" slot="end">View</ion-button>\r\n    </ion-item>\r\n\r\n    <ion-card-content>\r\n      This is content, without any paragraph or header tags,\r\n      within an ion-card-content element.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-item href="#" class="activated">\r\n      <ion-icon name="wifi" slot="start"></ion-icon>\r\n      <ion-label>Card Link Item 1 .activated</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item href="#">\r\n      <ion-icon name="wine" slot="start"></ion-icon>\r\n      <ion-label>Card Link Item 2</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item class="activated">\r\n      <ion-icon name="warning" slot="start"></ion-icon>\r\n      <ion-label>Card Button Item 1 .activated</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name="walk" slot="start"></ion-icon>\r\n      <ion-label>Card Button Item 2</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the card"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the card"
        }
      ],
      slots: []
    },
    {
      tag: "ion-checkbox",
      encapsulation: "shadow",
      readme:
        "# ion-checkbox\r\n\r\nCheckboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.\r\n\r\n\r\n\r\n\r",
      docs:
        "Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Checkbox -->\r\n<ion-checkbox></ion-checkbox>\r\n\r\n<!-- Disabled Checkbox -->\r\n<ion-checkbox disabled="true"></ion-checkbox>\r\n\r\n<!-- Checked Checkbox -->\r\n<ion-checkbox checked="true"></ion-checkbox>\r\n\r\n<!-- Checkbox Colors -->\r\n<ion-checkbox color="primary"></ion-checkbox>\r\n<ion-checkbox color="secondary"></ion-checkbox>\r\n<ion-checkbox color="danger"></ion-checkbox>\r\n<ion-checkbox color="light"></ion-checkbox>\r\n<ion-checkbox color="dark"></ion-checkbox>\r\n\r\n<!-- Checkboxes in a List -->\r\n<ion-list>\r\n  <ion-item *ngFor="let entry of form">\r\n    <ion-label>{{entry.val}}</ion-label>\r\n    <ion-checkbox slot="end" [(ngModel)]="entry.isChecked"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'app-page-home\',\r\n  templateUrl: \'home.page.html\',\r\n  styleUrls: [\'home.page.scss\']\r\n})\r\nexport class HomePage {\r\n  public form = [\r\n      { val: \'Pepperoni\', isChecked: true },\r\n      { val: \'Sausage\', isChecked: false },\r\n      { val: \'Mushroom\', isChecked: false }\r\n    ];\r\n}\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Checkbox -->\r\n<ion-checkbox></ion-checkbox>\r\n\r\n<!-- Disabled Checkbox -->\r\n<ion-checkbox disabled></ion-checkbox>\r\n\r\n<!-- Checked Checkbox -->\r\n<ion-checkbox checked></ion-checkbox>\r\n\r\n<!-- Checkbox Colors -->\r\n<ion-checkbox color="primary"></ion-checkbox>\r\n<ion-checkbox color="secondary"></ion-checkbox>\r\n<ion-checkbox color="danger"></ion-checkbox>\r\n<ion-checkbox color="light"></ion-checkbox>\r\n<ion-checkbox color="dark"></ion-checkbox>\r\n\r\n<!-- Checkboxes in a List -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pepperoni</ion-label>\r\n    <ion-checkbox slot="end" value="pepperoni" checked></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Sausage</ion-label>\r\n    <ion-checkbox slot="end" value="sausage" disabled></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Mushrooms</ion-label>\r\n    <ion-checkbox slot="end" value="mushrooms"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonCheckbox, IonList, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst form = [\r\n  { val: \'Pepperoni\', isChecked: true },\r\n  { val: \'Sausage\', isChecked: false },\r\n  { val: \'Mushroom\', isChecked: false }\r\n];\r\n\r\nconst CheckboxExample: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Checkbox --*/}\r\n    <IonCheckbox />\r\n\r\n    {/*-- Disabled Checkbox --*/}\r\n    <IonCheckbox disabled={true} />\r\n\r\n    {/*-- Checked Checkbox --*/}\r\n    <IonCheckbox checked={true} />\r\n\r\n    {/*-- Checkbox Colors --*/}\r\n    <IonCheckbox color="primary" />\r\n    <IonCheckbox color="secondary" />\r\n    <IonCheckbox color="danger" />\r\n    <IonCheckbox color="light" />\r\n    <IonCheckbox color="dark" />\r\n\r\n    {/*-- Checkboxes in a List --*/}\r\n    <IonList>\r\n      { form.map(({val, isChecked}) => (\r\n        <IonItem key={val}>\r\n          <IonLabel>{{val}}</IonLabel>\r\n          <IonCheckbox slot="end" value={val} checked={isChecked} />\r\n        </IonItem>\r\n      )) }\r\n    </IonList>\r\n  </>\r\n);\r\n\r\nexport default CheckboxExample;\r\n\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Checkbox -->\r\n  <ion-checkbox></ion-checkbox>\r\n\r\n  <!-- Disabled Checkbox -->\r\n  <ion-checkbox disabled="true"></ion-checkbox>\r\n\r\n  <!-- Checked Checkbox -->\r\n  <ion-checkbox checked="true"></ion-checkbox>\r\n\r\n  <!-- Checkbox Colors -->\r\n  <ion-checkbox color="primary"></ion-checkbox>\r\n  <ion-checkbox color="secondary"></ion-checkbox>\r\n  <ion-checkbox color="danger"></ion-checkbox>\r\n  <ion-checkbox color="light"></ion-checkbox>\r\n  <ion-checkbox color="dark"></ion-checkbox>\r\n\r\n  <!-- Checkboxes in a List -->\r\n  <ion-list>\r\n    <ion-item v-for="entry in form">\r\n      <ion-label>{{entry.val}}</ion-label>\r\n      <ion-checkbox slot="end" v-on:input="entry.checked = $event.target.value" v-bind:value="entry.isChecked"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class Menu extends Vue {\r\n    form = [\r\n      { val: \'Pepperoni\', isChecked: true },\r\n      { val: \'Sausage\', isChecked: false },\r\n      { val: \'Mushroom\', isChecked: false }\r\n    ];\r\n  }\r\n</script>\r\n```'
      },
      props: [
        {
          name: "checked",
          type: "boolean",
          mutable: true,
          attr: "checked",
          reflectToAttr: false,
          docs: "If `true`, the checkbox is selected.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
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
          docs: "If `true`, the user cannot interact with the checkbox.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "indeterminate",
          type: "boolean",
          mutable: true,
          attr: "indeterminate",
          reflectToAttr: false,
          docs:
            "If `true`, the checkbox will visually appear as indeterminate.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "string",
          mutable: false,
          attr: "value",
          reflectToAttr: false,
          docs:
            "The value of the toggle does not mean if it's checked or not, use the `checked`\r\nproperty for that.\r\n\r\nThe value of a toggle is analogous to the value of a `<input type=\"checkbox\">`,\r\nit's only used when the toggle participates in a native `<form>`.",
          docsTags: [],
          default: "'on'",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the toggle loses focus.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "CheckboxChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the checked property has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the toggle has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the checkbox icon"
        },
        {
          name: "--background-checked",
          annotation: "prop",
          docs: "Background of the checkbox icon when checked"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Border color of the checkbox icon"
        },
        {
          name: "--border-color-checked",
          annotation: "prop",
          docs: "Border color of the checkbox icon when checked"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the checkbox icon"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Border style of the checkbox icon"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Border width of the checkbox icon"
        },
        {
          name: "--checkmark-color",
          annotation: "prop",
          docs: "Color of the checkbox checkmark when checked"
        },
        {
          name: "--size",
          annotation: "prop",
          docs: "Size of the checkbox icon"
        },
        {
          name: "--transition",
          annotation: "prop",
          docs: "Transition of the checkbox icon"
        }
      ],
      slots: []
    },
    {
      tag: "ion-chip",
      encapsulation: "shadow",
      readme:
        "# ion-chip\r\n\r\nChips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, and icons.\r\n\r",
      docs:
        "Chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, and icons.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-chip>\r\n  <ion-label>Default</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-label color="secondary">Secondary Label</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip color="secondary">\r\n  <ion-label color="dark">Secondary w/ Dark label</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-icon name="pin"></ion-icon>\r\n  <ion-label>Default</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-icon name="heart" color="dark"></ion-icon>\r\n  <ion-label>Default</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-label>Button Chip</ion-label>\r\n  <ion-icon name="close-circle"></ion-icon>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-icon name="pin" color="primary"></ion-icon>\r\n  <ion-label>Icon Chip</ion-label>\r\n  <ion-icon name="close"></ion-icon>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-avatar>\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n  <ion-label>Avatar Chip</ion-label>\r\n  <ion-icon name="close-circle"></ion-icon>\r\n</ion-chip>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-chip>\r\n  <ion-label>Default</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-label color="secondary">Secondary Label</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip color="secondary">\r\n  <ion-label color="dark">Secondary w/ Dark label</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-icon name="pin"></ion-icon>\r\n  <ion-label>Default</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-icon name="heart" color="dark"></ion-icon>\r\n  <ion-label>Default</ion-label>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-label>Button Chip</ion-label>\r\n  <ion-icon name="close-circle"></ion-icon>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-icon name="pin" color="primary"></ion-icon>\r\n  <ion-label>Icon Chip</ion-label>\r\n  <ion-icon name="close"></ion-icon>\r\n</ion-chip>\r\n\r\n<ion-chip>\r\n  <ion-avatar>\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-avatar>\r\n  <ion-label>Avatar Chip</ion-label>\r\n  <ion-icon name="close-circle"></ion-icon>\r\n</ion-chip>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonChip, IonLabel, IonIcon, IonAvatar } from \'@ionic/react\';\r\n\r\nconst ChipExample: React.SFC<{}> = () => (\r\n  <>\r\n    <IonChip>\r\n      <IonLabel>Default</IonLabel>\r\n    </IonChip>\r\n\r\n    <IonChip>\r\n      <IonLabel color="secondary">Secondary Label</IonLabel>\r\n    </IonChip>\r\n\r\n    <IonChip color="secondary">\r\n      <IonLabel color="dark">Secondary w/ Dark label</IonLabel>\r\n    </IonChip>\r\n\r\n    <IonChip>\r\n      <IonIcon name="pin" />\r\n      <IonLabel>Default</IonLabel>\r\n    </IonChip>\r\n\r\n    <IonChip>\r\n      <IonIcon name="heart" color="dark" />\r\n      <IonLabel>Default</IonLabel>\r\n    </IonChip>\r\n\r\n    <IonChip>\r\n      <IonLabel>Button Chip</IonLabel>\r\n      <IonIcon name="close-circle" />\r\n    </IonChip>\r\n\r\n    <IonChip>\r\n      <IonIcon name="pin" color="primary" />\r\n      <IonLabel>Icon Chip</IonLabel>\r\n      <IonIcon name="close" />\r\n    </IonChip>\r\n\r\n    <IonChip>\r\n      <IonAvatar>\r\n        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\r\n      </IonAvatar>\r\n      <IonLabel>Avatar Chip</IonLabel>\r\n      <IonIcon name="close-circle" />\r\n    </IonChip>\r\n  </>\r\n);\r\n\r\nexport default ChipExample;\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-chip>\r\n    <ion-label>Default</ion-label>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    <ion-label color="secondary">Secondary Label</ion-label>\r\n  </ion-chip>\r\n\r\n  <ion-chip color="secondary">\r\n    <ion-label color="dark">Secondary w/ Dark label</ion-label>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    <ion-icon name="pin"></ion-icon>\r\n    <ion-label>Default</ion-label>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    <ion-icon name="heart" color="dark"></ion-icon>\r\n    <ion-label>Default</ion-label>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    <ion-label>Button Chip</ion-label>\r\n    <ion-icon name="close-circle"></ion-icon>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    <ion-icon name="pin" color="primary"></ion-icon>\r\n    <ion-label>Icon Chip</ion-label>\r\n    <ion-icon name="close"></ion-icon>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    <ion-avatar>\r\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n    </ion-avatar>\r\n    <ion-label>Avatar Chip</ion-label>\r\n    <ion-icon name="close-circle"></ion-icon>\r\n  </ion-chip>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "outline",
          type: "boolean",
          mutable: false,
          attr: "outline",
          reflectToAttr: false,
          docs: "Display an outline style button.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the chip"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the chip"
        }
      ],
      slots: []
    },
    {
      tag: "ion-col",
      encapsulation: "shadow",
      readme:
        "# ion-col\r\n\r\nColumns are cellular components of the [grid](../grid) system and go inside of a [row](../row).\r\nThey will expand to fill their row. All content within a grid should go inside of a column.\r\n\r\nSee [Grid Layout](/docs/layout/grid) for more information.\r\n\r\n\r\n## Column attributes\r\n\r\nBy default, columns will stretch to fill the entire height of the row.\r\nThere are several attributes that can be added to a column to customize this behavior.\r\n\r\n| Property              | Description                                                                                                 |\r\n|-----------------------|-------------------------------------------------------------------------------------------------------------|\r\n| align-self-start      | Adds `align-self: flex-start`. The column will be vertically aligned at the top.                            |\r\n| align-self-center     | Adds `align-self: center`. The column will be vertically aligned in the center.                             |\r\n| align-self-end        | Adds `align-self: flex-end`. The column will be vertically aligned at the bottom.                           |\r\n| align-self-stretch    | Adds `align-self: stretch`. The column will be stretched to take up the entire height of the row.           |\r\n| align-self-baseline   | Adds `align-self: baseline`. The column will be vertically aligned at its baseline.                         |\r\n\r\n\r\n\r",
      docs:
        "Columns are cellular components of the [grid](../grid) system and go inside of a [row](../row).\r\nThey will expand to fill their row. All content within a grid should go inside of a column.\r\n\r\nSee [Grid Layout](/docs/layout/grid) for more information.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "offset",
          type: "string | undefined",
          mutable: false,
          attr: "offset",
          reflectToAttr: false,
          docs:
            "The amount to offset the column, in terms of how many columns it should shift to the end\r\nof the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "offsetLg",
          type: "string | undefined",
          mutable: false,
          attr: "offset-lg",
          reflectToAttr: false,
          docs:
            "The amount to offset the column for lg screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "offsetMd",
          type: "string | undefined",
          mutable: false,
          attr: "offset-md",
          reflectToAttr: false,
          docs:
            "The amount to offset the column for md screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "offsetSm",
          type: "string | undefined",
          mutable: false,
          attr: "offset-sm",
          reflectToAttr: false,
          docs:
            "The amount to offset the column for sm screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "offsetXl",
          type: "string | undefined",
          mutable: false,
          attr: "offset-xl",
          reflectToAttr: false,
          docs:
            "The amount to offset the column for xl screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "offsetXs",
          type: "string | undefined",
          mutable: false,
          attr: "offset-xs",
          reflectToAttr: false,
          docs:
            "The amount to offset the column for xs screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pull",
          type: "string | undefined",
          mutable: false,
          attr: "pull",
          reflectToAttr: false,
          docs:
            "The amount to pull the column, in terms of how many columns it should shift to the start of\r\nthe total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pullLg",
          type: "string | undefined",
          mutable: false,
          attr: "pull-lg",
          reflectToAttr: false,
          docs:
            "The amount to pull the column for lg screens, in terms of how many columns it should shift\r\nto the start of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pullMd",
          type: "string | undefined",
          mutable: false,
          attr: "pull-md",
          reflectToAttr: false,
          docs:
            "The amount to pull the column for md screens, in terms of how many columns it should shift\r\nto the start of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pullSm",
          type: "string | undefined",
          mutable: false,
          attr: "pull-sm",
          reflectToAttr: false,
          docs:
            "The amount to pull the column for sm screens, in terms of how many columns it should shift\r\nto the start of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pullXl",
          type: "string | undefined",
          mutable: false,
          attr: "pull-xl",
          reflectToAttr: false,
          docs:
            "The amount to pull the column for xl screens, in terms of how many columns it should shift\r\nto the start of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pullXs",
          type: "string | undefined",
          mutable: false,
          attr: "pull-xs",
          reflectToAttr: false,
          docs:
            "The amount to pull the column for xs screens, in terms of how many columns it should shift\r\nto the start of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "push",
          type: "string | undefined",
          mutable: false,
          attr: "push",
          reflectToAttr: false,
          docs:
            "The amount to push the column, in terms of how many columns it should shift to the end\r\nof the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pushLg",
          type: "string | undefined",
          mutable: false,
          attr: "push-lg",
          reflectToAttr: false,
          docs:
            "The amount to push the column for lg screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pushMd",
          type: "string | undefined",
          mutable: false,
          attr: "push-md",
          reflectToAttr: false,
          docs:
            "The amount to push the column for md screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pushSm",
          type: "string | undefined",
          mutable: false,
          attr: "push-sm",
          reflectToAttr: false,
          docs:
            "The amount to push the column for sm screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pushXl",
          type: "string | undefined",
          mutable: false,
          attr: "push-xl",
          reflectToAttr: false,
          docs:
            "The amount to push the column for xl screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pushXs",
          type: "string | undefined",
          mutable: false,
          attr: "push-xs",
          reflectToAttr: false,
          docs:
            "The amount to push the column for xs screens, in terms of how many columns it should shift\r\nto the end of the total available.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "size",
          type: "string | undefined",
          mutable: false,
          attr: "size",
          reflectToAttr: false,
          docs:
            'The size of the column, in terms of how many columns it should take up out of the total\r\navailable. If `"auto"` is passed, the column will be the size of its content.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "sizeLg",
          type: "string | undefined",
          mutable: false,
          attr: "size-lg",
          reflectToAttr: false,
          docs:
            'The size of the column for lg screens, in terms of how many columns it should take up out\r\nof the total available. If `"auto"` is passed, the column will be the size of its content.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "sizeMd",
          type: "string | undefined",
          mutable: false,
          attr: "size-md",
          reflectToAttr: false,
          docs:
            'The size of the column for md screens, in terms of how many columns it should take up out\r\nof the total available. If `"auto"` is passed, the column will be the size of its content.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "sizeSm",
          type: "string | undefined",
          mutable: false,
          attr: "size-sm",
          reflectToAttr: false,
          docs:
            'The size of the column for sm screens, in terms of how many columns it should take up out\r\nof the total available. If `"auto"` is passed, the column will be the size of its content.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "sizeXl",
          type: "string | undefined",
          mutable: false,
          attr: "size-xl",
          reflectToAttr: false,
          docs:
            'The size of the column for xl screens, in terms of how many columns it should take up out\r\nof the total available. If `"auto"` is passed, the column will be the size of its content.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "sizeXs",
          type: "string | undefined",
          mutable: false,
          attr: "size-xs",
          reflectToAttr: false,
          docs:
            'The size of the column for xs screens, in terms of how many columns it should take up out\r\nof the total available. If `"auto"` is passed, the column will be the size of its content.',
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--ion-grid-column-padding",
          annotation: "prop",
          docs: "Padding for the Column"
        },
        {
          name: "--ion-grid-column-padding-lg",
          annotation: "prop",
          docs: "Padding for the Column on lg screens and up"
        },
        {
          name: "--ion-grid-column-padding-md",
          annotation: "prop",
          docs: "Padding for the Column on md screens and up"
        },
        {
          name: "--ion-grid-column-padding-sm",
          annotation: "prop",
          docs: "Padding for the Column on sm screens and up"
        },
        {
          name: "--ion-grid-column-padding-xl",
          annotation: "prop",
          docs: "Padding for the Column on xl screens and up"
        },
        {
          name: "--ion-grid-column-padding-xs",
          annotation: "prop",
          docs: "Padding for the Column on xs screens and up"
        },
        {
          name: "--ion-grid-columns",
          annotation: "prop",
          docs: "The number of total Columns in the Grid"
        }
      ],
      slots: []
    },
    {
      tag: "ion-content",
      encapsulation: "shadow",
      readme:
        "# ion-content\r\n\r\nContent component provides an easy to use content area with some useful methods\r\nto control the scrollable area. There should only be one content in a single\r\nview component.\r\n\r",
      docs:
        "Content component provides an easy to use content area with some useful methods\r\nto control the scrollable area. There should only be one content in a single\r\nview component.",
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed in the scrollable area if provided without a slot."
        },
        {
          name: "slot",
          text:
            "fixed - Should be used for fixed content that should not scroll."
        }
      ],
      usage: {
        angular:
          '```html\r\n<ion-content\r\n  [scrollEvents]="true"\r\n  (ionScrollStart)="logScrollStart()"\r\n  (ionScroll)="logScrolling($event)"\r\n  (ionScrollEnd)="logScrollEnd()">\r\n</ion-content>\r\n```\r\n\r\n',
        javascript:
          "```html\r\n<ion-content></ion-content>\r\n```\r\n\r\n```javascript\r\nvar content = document.querySelector('ion-content');\r\ncontent.scrollEvents = true;\r\ncontent.addEventListener('ionScrollStart', () => console.log('scroll start'));\r\ncontent.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));\r\ncontent.addEventListener('ionScrollEnd', () => console.log('scroll end'));\r\n```\r\n",
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonContent } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <IonContent\r\n    scrollEvents={true}\r\n    onIonScrollStart={() => {}}\r\n    onIonScroll={() => {}}\r\n    onIonScrollEnd={() => {}}>\r\n  </IonContent>\r\n);\r\n\r\nexport default Example;\r\n```\r\n",
        vue:
          '```html\r\n<template>\r\n  <ion-content\r\n    :scrollEvents="true"\r\n    @ionScrollStart="logScrollStart()"\r\n    @ionScroll="logScrolling($event)"\r\n    @ionScrollEnd="logScrollEnd()">\r\n  </ion-content>\r\n</template>\r\n```\r\n\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "forceOverscroll",
          type: "boolean | undefined",
          mutable: true,
          attr: "force-overscroll",
          reflectToAttr: false,
          docs:
            "If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.\r\nIf the content exceeds the bounds of ionContent, nothing will change.\r\nNote, the does not disable the system bounce on iOS. That is an OS level setting.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "fullscreen",
          type: "boolean",
          mutable: false,
          attr: "fullscreen",
          reflectToAttr: false,
          docs:
            "If `true`, the content will scroll behind the headers\r\nand footers. This effect can easily be seen by setting the toolbar\r\nto transparent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "scrollEvents",
          type: "boolean",
          mutable: false,
          attr: "scroll-events",
          reflectToAttr: false,
          docs:
            "Because of performance reasons, ionScroll events are disabled by default, in order to enable them\r\nand start listening from (ionScroll), set this property to `true`.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "scrollX",
          type: "boolean",
          mutable: false,
          attr: "scroll-x",
          reflectToAttr: false,
          docs:
            "If you want to enable the content scrolling in the X axis, set this property to `true`.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "scrollY",
          type: "boolean",
          mutable: false,
          attr: "scroll-y",
          reflectToAttr: false,
          docs:
            "If you want to disable the content scrolling in the Y axis, set this property to `false`.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "getScrollElement",
          returns: {
            type: "Promise<HTMLElement>",
            docs: ""
          },
          signature: "getScrollElement() => Promise<HTMLElement>",
          parameters: [],
          docs:
            "Returns the element where the actual scrolling takes places.\r\nThis element is the one you could subscribe to `scroll` events or manually modify\r\n`scrollTop`, however, it's recommended to use the API provided by `ion-content`:\r\n\r\nIe. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events\r\nand scrollToPoint() to scroll the content into a certain point.",
          docsTags: []
        },
        {
          name: "scrollByPoint",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "scrollByPoint(x: number, y: number, duration: number) => Promise<void>",
          parameters: [
            {
              name: "x",
              type: "number",
              docs: ""
            },
            {
              name: "y",
              type: "number",
              docs: ""
            },
            {
              name: "duration",
              type: "number",
              docs: ""
            }
          ],
          docs: "Scroll by a specified X/Y distance in the component",
          docsTags: []
        },
        {
          name: "scrollToBottom",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "scrollToBottom(duration?: number) => Promise<void>",
          parameters: [
            {
              name: "duration",
              type: "number",
              docs: ""
            }
          ],
          docs: "Scroll to the bottom of the component",
          docsTags: []
        },
        {
          name: "scrollToPoint",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "scrollToPoint(x: number | null | undefined, y: number | null | undefined, duration?: number) => Promise<void>",
          parameters: [
            {
              name: "x",
              type: "null | number | undefined",
              docs: ""
            },
            {
              name: "y",
              type: "null | number | undefined",
              docs: ""
            },
            {
              name: "duration",
              type: "number",
              docs: ""
            }
          ],
          docs: "Scroll to a specified X/Y location in the component",
          docsTags: []
        },
        {
          name: "scrollToTop",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "scrollToTop(duration?: number) => Promise<void>",
          parameters: [
            {
              name: "duration",
              type: "number",
              docs: ""
            }
          ],
          docs: "Scroll to the top of the component",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionScroll",
          detail: "ScrollDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Emitted while scrolling. This event is disabled by default.\r\nLook at the property: `scrollEvents`",
          docsTags: []
        },
        {
          event: "ionScrollEnd",
          detail: "ScrollBaseDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the scroll has ended.",
          docsTags: []
        },
        {
          event: "ionScrollStart",
          detail: "ScrollBaseDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the scroll has started.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the Content"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the Content"
        },
        {
          name: "--keyboard-offset",
          annotation: "prop",
          docs: "Keyboard offset of the Content"
        },
        {
          name: "--offset-bottom",
          annotation: "prop",
          docs: "Offset bottom of the Content"
        },
        {
          name: "--offset-top",
          annotation: "prop",
          docs: "Offset top of the Content"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the Content"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "Padding end of the Content"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Padding start of the Content"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Padding top of the Content"
        }
      ],
      slots: [
        {
          name: "",
          docs:
            "Content is placed in the scrollable area if provided without a slot."
        },
        {
          name: "fixed",
          docs: "Should be used for fixed content that should not scroll."
        }
      ]
    },
    {
      tag: "ion-datetime",
      encapsulation: "shadow",
      readme:
        '# ion-datetime\r\n\r\nDatetimes present a picker interface from the bottom of a page, making it easy for users to select\r\ndates and times. The picker displays scrollable columns that can be used to individually select years,\r\nmonths, days, hours and minute values. Datetimes are similar to the native `input` elements of type\r\n`datetime-local`, however, Ionic\'s Datetime component makes it easy to display the date and time in a\r\npreferred format, and manage the datetime values.\r\n\r\n\r\n## Display and Picker Formats\r\n\r\nThe datetime component displays the values in two places: in the `<ion-datetime>` component,\r\nand in the picker interface that is presented from the bottom of the screen. The following\r\nchart lists all of the formats that can be used.\r\n\r\n| Format | Description                    | Example                 |\r\n| ------ | ------------------------------ | ----------------------- |\r\n| `YYYY` | Year, 4 digits                 | `2018`                  |\r\n| `YY`   | Year, 2 digits                 | `18`                    |\r\n| `M`    | Month                          | `1` ... `12`            |\r\n| `MM`   | Month, leading zero            | `01` ... `12`           |\r\n| `MMM`  | Month, short name              | `Jan`                   |\r\n| `MMMM` | Month, full name               | `January`               |\r\n| `D`    | Day                            | `1` ... `31`            |\r\n| `DD`   | Day, leading zero              | `01` ... `31`           |\r\n| `DDD`  | Day, short name                | `Fri`                   |\r\n| `DDDD` | Day, full name                 | `Friday`                |\r\n| `H`    | Hour, 24-hour                  | `0` ... `23`            |\r\n| `HH`   | Hour, 24-hour, leading zero    | `00` ... `23`           |\r\n| `h`    | Hour, 12-hour                  | `1` ... `12`            |\r\n| `hh`   | Hour, 12-hour, leading zero    | `01` ... `12`           |\r\n| `a`    | 12-hour time period, lowercase | `am` `pm`               |\r\n| `A`    | 12-hour time period, uppercase | `AM` `PM`               |\r\n| `m`    | Minute                         | `1` ... `59`            |\r\n| `mm`   | Minute, leading zero           | `01` ... `59`           |\r\n| `s`    | Second                         | `1` ... `59`            |\r\n| `ss`   | Second, leading zero           | `01` ... `59`           |\r\n| `Z`    | UTC Timezone Offset            | `Z or +HH:mm or -HH:mm` |\r\n\r\n**Important**: See the [Month Names and Day of the Week\r\nNames](#month-names-and-day-of-the-week-names) section below on how to use\r\ndifferent names for the month and day.\r\n\r\n### Display Format\r\n\r\nThe `displayFormat` input property specifies how a datetime\'s value should be\r\nprinted, as formatted text, within the datetime component.\r\n\r\nIn the following example, the display in the `<ion-datetime>` will use the\r\nmonth\'s short name, the numerical day with a leading zero, a comma and the\r\nfour-digit year. In addition to the date, it will display the time with the\r\nhours in the 24-hour format and the minutes. Any character can be used as a\r\nseparator. An example display using this format is: `Jun 17, 2005 11:06`.\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>Date</ion-label>\r\n  <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>\r\n</ion-item>\r\n```\r\n\r\n### Picker Format\r\n\r\nThe `pickerFormat` input property determines which columns should be shown in\r\nthe interface, the order of the columns, and which format to use within each\r\ncolumn. If the `pickerFormat` input is not provided then it will default to the\r\n`displayFormat`.\r\n\r\nIn the following example, the display in the `<ion-datetime>` will use the\r\n`MM/YYYY` format, such as `06/2020`. However, the picker interface will display\r\ntwo columns with the month\'s long name, and the four-digit year.\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>Date</ion-label>\r\n  <ion-datetime display-format="MM/YYYY" picker-format="MMMM YYYY"></ion-datetime>\r\n</ion-item>\r\n```\r\n\r\n### Datetime Data\r\n\r\nHistorically, handling datetime values within JavaScript, or even within HTML\r\ninputs, has always been a challenge. Specifically, JavaScript\'s `Date` object is\r\nnotoriously difficult to correctly parse apart datetime strings or to format\r\ndatetime values. Even worse is how different browsers and JavaScript versions\r\nparse various datetime strings differently, especially per locale.\r\n\r\nFortunately, Ionic\'s datetime input has been designed so developers can avoid\r\nthe common pitfalls, allowing developers to easily format datetime values within\r\nthe input, and give the user a simple datetime picker for a great user\r\nexperience.\r\n\r\n##### ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ\r\n\r\nIonic uses the [ISO 8601 datetime format](https://www.w3.org/TR/NOTE-datetime)\r\nfor its value. The value is simply a string, rather than using JavaScript\'s\r\n`Date` object. Additionally, when using the ISO datetime format, it makes it\r\neasier to serialize and pass within JSON objects, and sending databases a\r\nstandardized format which it can be easily parsed if need be.\r\n\r\nAn ISO format can be used as a simple year, or just the hour and minute, or get\r\nmore detailed down to the millisecond and timezone. Any of the ISO formats below\r\ncan be used, and after a user selects a new value, Ionic will continue to use\r\nthe same ISO format which datetime value was originally given as.\r\n\r\n| Description          | Format                 | Datetime Value Example        |\r\n| -------------------- | ---------------------- | ----------------------------  |\r\n| Year                 | YYYY                   | 1994                          |\r\n| Year and Month       | YYYY-MM                | 1994-12                       |\r\n| Complete Date        | YYYY-MM-DD             | 1994-12-15                    |\r\n| Date and Time        | YYYY-MM-DDTHH:mm       | 1994-12-15T13:47              |\r\n| UTC Timezone         | YYYY-MM-DDTHH:mm:ssTZD | 1994-12-15T13:47:20.789Z      |\r\n| Timezone Offset      | YYYY-MM-DDTHH:mm:ssTZD | 1994-12-15T13:47:20.789+05:00 |\r\n| Hour and Minute      | HH:mm                  | 13:47                         |\r\n| Hour, Minute, Second | HH:mm:ss               | 13:47:20                      |\r\n\r\nNote that the year is always four-digits, milliseconds (if it\'s added) is always\r\nthree-digits, and all others are always two-digits. So the number representing\r\nJanuary always has a leading zero, such as `01`. Additionally, the hour is\r\nalways in the 24-hour format, so `00` is `12am` on a 12-hour clock, `13` means\r\n`1pm`, and `23` means `11pm`.\r\n\r\nIt\'s also important to note that neither the `displayFormat` or `pickerFormat`\r\ncan set the datetime value\'s output, which is the value that is set by the\r\ncomponent\'s `ngModel`. The format\'s are merely for displaying the value as text\r\nand the picker\'s interface, but the datetime\'s value is always persisted as a\r\nvalid ISO 8601 datetime string.\r\n\r\n## Min and Max Datetimes\r\n\r\nDates are infinite in either direction, so for a user\'s selection there should\r\nbe at least some form of restricting the dates that can be selected. By default,\r\nthe maximum date is to the end of the current year, and the minimum date is from\r\nthe beginning of the year that was 100 years ago.\r\n\r\nTo customize the minimum and maximum datetime values, the `min` and `max`\r\ncomponent inputs can be provided which may make more sense for the app\'s\r\nuse-case, rather than the default of the last 100 years. Following the same IS0\r\n8601 format listed in the table above, each component can restrict which dates\r\ncan be selected by the user. Below is an example of restricting the date\r\nselection between the beginning of 2016, and October 31st of 2020:\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>Date</ion-label>\r\n  <ion-datetime display-format="MMMM YYYY" min="2016" max="2020-10-31"></ion-datetime>\r\n</ion-item>\r\n```\r\n\r\n## Month Names and Day of the Week Names\r\n\r\nAt this time, there is no one-size-fits-all standard to automatically choose the\r\ncorrect language/spelling for a month name, or day of the week name, depending\r\non the language or locale. \r\n\r\nThe good news is that there is an [Intl.DatetimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat)\r\nstandard which [most browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat#Browser_compatibility) have adopted.\r\n\r\nHowever, at this time the standard has not been fully implemented by all popular browsers\r\nso Ionic is unavailable to take advantage of it yet. \r\n\r\nAdditionally, Angular also provides an internationalization service, but it is still\r\nunder heavy development so Ionic does not depend on it at this time.\r\n\r\nThe current best practice is to provide an array of names if the app needs to use names other \r\nthan the default English version of month and day names. The month names and day names can be \r\neither configured at the app level, or individual `ion-datetime` level.\r\n\r\n### Component Input Level\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>Período</ion-label>\r\n  <ion-datetime\r\n    display-format="DDDD MMM D, YYYY"\r\n    month-names="janeiro, fevereiro, mar\\u00e7o, ..."\r\n    month-short-names="jan, fev, mar, ..."\r\n    day-names="domingo, segunda-feira, ter\\u00e7a-feira, ..."\r\n    day-short-names="dom, seg, ter, ...">\r\n  </ion-datetime>\r\n</ion-item>\r\n```\r\n\r\n### Advanced Datetime Validation and Manipulation\r\n\r\nThe datetime picker provides the simplicity of selecting an exact format, and\r\npersists the datetime values as a string using the standardized [ISO 8601\r\ndatetime format](https://www.w3.org/TR/NOTE-datetime). However, it\'s important\r\nto note that `ion-datetime` does not attempt to solve all situtations when\r\nvalidating and manipulating datetime values. If datetime values need to be\r\nparsed from a certain format, or manipulated (such as adding 5 days to a date,\r\nsubtracting 30 minutes, etc.), or even formatting data to a specific locale,\r\nthen we highly recommend using [date-fns](https://date-fns.org) to work with\r\ndates in JavaScript.\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>Date</ion-label>\r\n  <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>\r\n</ion-item>\r\n```\r\n\r',
      docs:
        "Datetimes present a picker interface from the bottom of a page, making it easy for users to select\r\ndates and times. The picker displays scrollable columns that can be used to individually select years,\r\nmonths, days, hours and minute values. Datetimes are similar to the native `input` elements of type\r\n`datetime-local`, however, Ionic's Datetime component makes it easy to display the date and time in a\r\npreferred format, and manage the datetime values.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-item>\r\n  <ion-label>MMMM</ion-label>\r\n  <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>MM DD YY</ion-label>\r\n  <ion-datetime displayFormat="MM DD YY" placeholder="Select Date"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Disabled</ion-label>\r\n  <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>YYYY</ion-label>\r\n  <ion-datetime [pickerOptions]="customPickerOptions" placeholder="Custom Options" displayFormat="YYYY" min="1981" max="2002"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="stacked">MMMM YY</ion-label>\r\n  <ion-datetime displayFormat="MMMM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.789"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">MM/DD/YYYY</ion-label>\r\n  <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value="2002-09-23T15:03:46.789"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">MM/DD/YYYY</ion-label>\r\n  <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>\r\n  <ion-datetime value="1995-04-15" min="1990-02" max="2000"\r\n    [dayShortNames]="customDayShortNames"\r\n    displayFormat="DDD. MMM DD, YY"\r\n    monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>D MMM YYYY H:mm</ion-label>\r\n  <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>DDDD MMM D, YYYY</ion-label>\r\n  <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>HH:mm</ion-label>\r\n  <ion-datetime displayFormat="HH:mm"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>h:mm a</ion-label>\r\n  <ion-datetime displayFormat="h:mm a"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>hh:mm A (15 min steps)</ion-label>\r\n  <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Leap years, summer months</ion-label>\r\n  <ion-datetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" monthValues="6,7,8" [yearValues]="customYearValues"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Specific days/months/years</ion-label>\r\n  <ion-datetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14" displayFormat="DD/MMM/YYYY"></ion-datetime>\r\n</ion-item>\r\n```\r\n\r\n```typescript\r\n@Component({…})\r\nexport class MyComponent {\r\n  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];\r\n  customDayShortNames = [\'s\\u00f8n\', \'man\', \'tir\', \'ons\', \'tor\', \'fre\', \'l\\u00f8r\'];\r\n  customPickerOptions: any;\r\n\r\n  constructor() {\r\n    this.customPickerOptions = {\r\n      buttons: [{\r\n        text: \'Save\',\r\n        handler: () => console.log(\'Clicked Save!\')\r\n      }, {\r\n        text: \'Log\',\r\n        handler: () => {\r\n          console.log(\'Clicked Log. Do not Dismiss.\');\r\n          return false;\r\n        }\r\n      }]\r\n    }\r\n  }\r\n\r\n}\r\n```\r\n',
        javascript:
          '```html\r\n<ion-item>\r\n  <ion-label>MMMM</ion-label>\r\n  <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>MM DD YY</ion-label>\r\n  <ion-datetime display-format="MM DD YY" placeholder="Select Date"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Disabled</ion-label>\r\n  <ion-datetime id="dynamicDisabled" display-format="MM DD YY" disabled value="1994-12-15"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>YYYY</ion-label>\r\n  <ion-datetime id="customPickerOptions" placeholder="Custom Options" display-format="YYYY" min="1981" max="2002"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="stacked">MMMM YY</ion-label>\r\n  <ion-datetime display-format="MMMM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.789"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">MM/DD/YYYY</ion-label>\r\n  <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value="2002-09-23T15:03:46.789"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">MM/DD/YYYY</ion-label>\r\n  <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>\r\n  <ion-datetime id="customDayShortNames" value="1995-04-15" min="1990-02" max="2000"\r\n    display-format="DDD. MMM DD, YY"\r\n    month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>D MMM YYYY H:mm</ion-label>\r\n  <ion-datetime display-format="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>DDDD MMM D, YYYY</ion-label>\r\n  <ion-datetime display-format="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>HH:mm</ion-label>\r\n  <ion-datetime display-format="HH:mm"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>h:mm a</ion-label>\r\n  <ion-datetime display-format="h:mm a"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>hh:mm A (15 min steps)</ion-label>\r\n  <ion-datetime display-format="h:mm A" minute-values="0,15,30,45"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Leap years, summer months</ion-label>\r\n  <ion-datetime id="customYearValues" display-format="MM/YYYY" picker-format="MMMM YYYY" month-values="6,7,8"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Specific days/months/years</ion-label>\r\n  <ion-datetime month-values="6,7,8" year-values="2014,2015" day-values="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14" display-format="DD/MMM/YYYY"></ion-datetime>\r\n</ion-item>\r\n```\r\n\r\n```javascript\r\nvar yearValuesArray = [2020, 2016, 2008, 2004, 2000, 1996];\r\nvar customYearValues = document.getElementById(\'customYearValues\');\r\ncustomYearValues.yearValues = yearValuesArray;\r\n\r\nvar dayShortNamesArray = [\r\n  \'s\\u00f8n\',\r\n  \'man\',\r\n  \'tir\',\r\n  \'ons\',\r\n  \'tor\',\r\n  \'fre\',\r\n  \'l\\u00f8r\'\r\n];\r\nvar customDayShortNames = document.getElementById(\'customDayShortNames\');\r\ncustomDayShortNames.dayShortNames = dayShortNamesArray;\r\n\r\nvar customPickerButtons = {\r\n  buttons: [{\r\n    text: \'Save\',\r\n    handler: () => console.log(\'Clicked Save!\')\r\n  }, {\r\n    text: \'Log\',\r\n    handler: () => {\r\n      console.log(\'Clicked Log. Do not Dismiss.\');\r\n      return false;\r\n    }\r\n  }]\r\n}\r\nvar customPickerOptions = document.getElementById(\'customPickerOptions\');\r\ncustomPickerOptions.pickerOptions = customPickerButtons;\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonItem, IonLabel, IonDatetime } from \'@ionic/react\';\r\n\r\nconst customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];\r\n\r\nconst customDayShortNames = [\r\n  \'s\\u00f8n\',\r\n  \'man\',\r\n  \'tir\',\r\n  \'ons\',\r\n  \'tor\',\r\n  \'fre\',\r\n  \'l\\u00f8r\'\r\n];\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonItem>\r\n      <IonLabel>MMMM</IonLabel>\r\n      <IonDatetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>MM DD YY</IonLabel>\r\n      <IonDatetime displayFormat="MM DD YY" placeholder="Select Date"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Disabled</IonLabel>\r\n      <IonDatetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>YYYY</IonLabel>\r\n      <IonDatetime pickerOptions={{\r\n          buttons: [\r\n            {\r\n              text: \'Save\',\r\n              handler: () => console.log(\'Clicked Save!\')\r\n            }, {\r\n              text: \'Log\',\r\n              handler: () => {\r\n                console.log(\'Clicked Log. Do not Dismiss.\');\r\n                return false;\r\n              }\r\n            }\r\n          ]\r\n        }}\r\n        placeholder="Custom Options" displayFormat="YYYY" min="1981" max="2002"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="stacked">MMMM YY</IonLabel>\r\n      <IonDatetime displayFormat="MMMM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.789"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">MM/DD/YYYY</IonLabel>\r\n      <IonDatetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value="2002-09-23T15:03:46.789"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">MM/DD/YYYY</IonLabel>\r\n      <IonDatetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>DDD. MMM DD, YY (custom locale)</IonLabel>\r\n      <IonDatetime\r\n        value="1995-04-15"\r\n        min="1990-02"\r\n        max="2000"\r\n        dayShortNames={customDayShortNames}\r\n        displayFormat="DDD. MMM DD, YY"\r\n        monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"\r\n      ></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>D MMM YYYY H:mm</IonLabel>\r\n      <IonDatetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>DDDD MMM D, YYYY</IonLabel>\r\n      <IonDatetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>HH:mm</IonLabel>\r\n      <IonDatetime displayFormat="HH:mm"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>h:mm a</IonLabel>\r\n      <IonDatetime displayFormat="h:mm a"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>hh:mm A (15 min steps)</IonLabel>\r\n      <IonDatetime displayFormat="h:mm A" minuteValues="0,15,30,45"></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Leap years, summer months</IonLabel>\r\n      <IonDatetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" monthValues="6,7,8" yearValues={customYearValues}></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Specific days/months/years</IonLabel>\r\n      <IonDatetime\r\n        monthValues=\'6,7,8\'\r\n        yearValues=\'2014,2015\'\r\n        dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14"\r\n        displayFormat="DD/MMM/YYYY"\r\n      ></IonDatetime>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-item>\r\n    <ion-label>MMMM</ion-label>\r\n    <ion-datetime displayFormat="MMMM" value="2012-12-15T13:47:20.789"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>MM DD YY</ion-label>\r\n    <ion-datetime displayFormat="MM DD YY" placeholder="Select Date"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Disabled</ion-label>\r\n    <ion-datetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>YYYY</ion-label>\r\n    <ion-datetime :pickerOptions="customPickerOptions" placeholder="Custom Options" displayFormat="YYYY" min="1981" max="2002"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="stacked">MMMM YY</ion-label>\r\n    <ion-datetime displayFormat="MMMM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.789"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="floating">MM/DD/YYYY</ion-label>\r\n    <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value="2002-09-23T15:03:46.789"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="floating">MM/DD/YYYY</ion-label>\r\n    <ion-datetime displayFormat="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>\r\n    <ion-datetime value="1995-04-15" min="1990-02" max="2000"\r\n      :dayShortNames="customDayShortNames"\r\n      displayFormat="DDD. MMM DD, YY"\r\n      monthShortNames="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>D MMM YYYY H:mm</ion-label>\r\n    <ion-datetime displayFormat="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>DDDD MMM D, YYYY</ion-label>\r\n    <ion-datetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>HH:mm</ion-label>\r\n    <ion-datetime displayFormat="HH:mm"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>h:mm a</ion-label>\r\n    <ion-datetime displayFormat="h:mm a"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>hh:mm A (15 min steps)</ion-label>\r\n    <ion-datetime displayFormat="h:mm A" minuteValues="0,15,30,45"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Leap years, summer months</ion-label>\r\n    <ion-datetime displayFormat="MM/YYYY" pickerFormat="MMMM YYYY" monthValues="6,7,8" :yearValues="customYearValues"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Specific days/months/years</ion-label>\r\n    <ion-datetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14" displayFormat="DD/MMM/YYYY"></ion-datetime>\r\n  </ion-item>\r\n</template>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class Menu extends Vue {\r\n    customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];\r\n\r\n    customDayShortNames = [\r\n      \'s\\u00f8n\',\r\n      \'man\',\r\n      \'tir\',\r\n      \'ons\',\r\n      \'tor\',\r\n      \'fre\',\r\n      \'l\\u00f8r\'\r\n    ];\r\n\r\n    customPickerOptions = {\r\n      buttons: [{\r\n        text: \'Save\',\r\n        handler: () => console.log(\'Clicked Save!\')\r\n      }, {\r\n        text: \'Log\',\r\n        handler: () => {\r\n          console.log(\'Clicked Log. Do not Dismiss.\');\r\n          return false;\r\n        }\r\n      }]\r\n    }\r\n  }\r\n</script>\r\n```'
      },
      props: [
        {
          name: "cancelText",
          type: "string",
          mutable: false,
          attr: "cancel-text",
          reflectToAttr: false,
          docs: "The text to display on the picker's cancel button.",
          docsTags: [],
          default: "'Cancel'",
          optional: false,
          required: false
        },
        {
          name: "dayNames",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "day-names",
          reflectToAttr: false,
          docs:
            "Full day of the week names. This can be used to provide\r\nlocale names for each day in the week. Defaults to English.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "dayShortNames",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "day-short-names",
          reflectToAttr: false,
          docs:
            "Short abbreviated day of the week names. This can be used to provide\r\nlocale names for each day in the week. Defaults to English.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "dayValues",
          type: "number | number[] | string | undefined",
          mutable: false,
          attr: "day-values",
          reflectToAttr: false,
          docs:
            "Values used to create the list of selectable days. By default\r\nevery day is shown for the given month. However, to control exactly which days of\r\nthe month to display, the `dayValues` input can take a number, an array of numbers, or\r\na string of comma separated numbers. Note that even if the array days have an invalid\r\nnumber for the selected month, like `31` in February, it will correctly not show\r\ndays which are not valid for the selected month.",
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
          docs: "If `true`, the user cannot interact with the datetime.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "displayFormat",
          type: "string",
          mutable: false,
          attr: "display-format",
          reflectToAttr: false,
          docs:
            "The display format of the date and time as text that shows\r\nwithin the item. When the `pickerFormat` input is not used, then the\r\n`displayFormat` is used for both display the formatted text, and determining\r\nthe datetime picker's columns. See the `pickerFormat` input description for\r\nmore info. Defaults to `MMM D, YYYY`.",
          docsTags: [],
          default: "'MMM D, YYYY'",
          optional: false,
          required: false
        },
        {
          name: "doneText",
          type: "string",
          mutable: false,
          attr: "done-text",
          reflectToAttr: false,
          docs: 'The text to display on the picker\'s "Done" button.',
          docsTags: [],
          default: "'Done'",
          optional: false,
          required: false
        },
        {
          name: "hourValues",
          type: "number | number[] | string | undefined",
          mutable: false,
          attr: "hour-values",
          reflectToAttr: false,
          docs:
            "Values used to create the list of selectable hours. By default\r\nthe hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However,\r\nto control exactly which hours to display, the `hourValues` input can take a number, an\r\narray of numbers, or a string of comma separated numbers.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "max",
          type: "string | undefined",
          mutable: true,
          attr: "max",
          reflectToAttr: false,
          docs:
            "The maximum datetime allowed. Value must be a date string\r\nfollowing the\r\n[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),\r\n`1996-12-19`. The format does not have to be specific to an exact\r\ndatetime. For example, the maximum could just be the year, such as `1994`.\r\nDefaults to the end of this year.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "min",
          type: "string | undefined",
          mutable: true,
          attr: "min",
          reflectToAttr: false,
          docs:
            "The minimum datetime allowed. Value must be a date string\r\nfollowing the\r\n[ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),\r\nsuch as `1996-12-19`. The format does not have to be specific to an exact\r\ndatetime. For example, the minimum could just be the year, such as `1994`.\r\nDefaults to the beginning of the year, 100 years ago from today.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "minuteValues",
          type: "number | number[] | string | undefined",
          mutable: false,
          attr: "minute-values",
          reflectToAttr: false,
          docs:
            'Values used to create the list of selectable minutes. By default\r\nthe minutes range from `0` to `59`. However, to control exactly which minutes to display,\r\nthe `minuteValues` input can take a number, an array of numbers, or a string of comma\r\nseparated numbers. For example, if the minute selections should only be every 15 minutes,\r\nthen this input value would be `minuteValues="0,15,30,45"`.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "monthNames",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "month-names",
          reflectToAttr: false,
          docs:
            "Full names for each month name. This can be used to provide\r\nlocale month names. Defaults to English.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "monthShortNames",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "month-short-names",
          reflectToAttr: false,
          docs:
            "Short abbreviated names for each month name. This can be used to provide\r\nlocale month names. Defaults to English.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "monthValues",
          type: "number | number[] | string | undefined",
          mutable: false,
          attr: "month-values",
          reflectToAttr: false,
          docs:
            "Values used to create the list of selectable months. By default\r\nthe month values range from `1` to `12`. However, to control exactly which months to\r\ndisplay, the `monthValues` input can take a number, an array of numbers, or a string of\r\ncomma separated numbers. For example, if only summer months should be shown, then this\r\ninput value would be `monthValues=\"6,7,8\"`. Note that month numbers do *not* have a\r\nzero-based index, meaning January's value is `1`, and December's is `12`.",
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
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "pickerFormat",
          type: "string | undefined",
          mutable: false,
          attr: "picker-format",
          reflectToAttr: false,
          docs:
            "The format of the date and time picker columns the user selects.\r\nA datetime input can have one or many datetime parts, each getting their\r\nown column which allow individual selection of that particular datetime part. For\r\nexample, year and month columns are two individually selectable columns which help\r\nchoose an exact date from the datetime picker. Each column follows the string\r\nparse format. Defaults to use `displayFormat`.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pickerOptions",
          type:
            'undefined | { columns?: PickerColumn[] | undefined; buttons?: PickerButton[] | undefined; cssClass?: string | string[] | undefined; backdropDismiss?: boolean | undefined; animated?: boolean | undefined; mode?: "ios" | "md" | undefined; keyboardClose?: boolean | undefined; id?: string | undefined; enterAnimation?: AnimationBuilder | undefined; leaveAnimation?: AnimationBuilder | undefined; }',
          mutable: false,
          reflectToAttr: false,
          docs:
            "Any additional options that the picker interface can accept.\r\nSee the [Picker API docs](../picker) for the picker options.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "placeholder",
          type: "null | string | undefined",
          mutable: false,
          attr: "placeholder",
          reflectToAttr: false,
          docs:
            "The text to display when there's no date selected yet.\r\nUsing lowercase to match the input attribute",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "readonly",
          type: "boolean",
          mutable: false,
          attr: "readonly",
          reflectToAttr: false,
          docs:
            "If `true`, the datetime appears normal but is not interactive.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "null | string | undefined",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs:
            "The value of the datetime as a valid ISO 8601 datetime string.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "yearValues",
          type: "number | number[] | string | undefined",
          mutable: false,
          attr: "year-values",
          reflectToAttr: false,
          docs:
            'Values used to create the list of selectable years. By default\r\nthe year values range between the `min` and `max` datetime inputs. However, to\r\ncontrol exactly which years to display, the `yearValues` input can take a number, an array\r\nof numbers, or string of comma separated numbers. For example, to show upcoming and\r\nrecent leap years, then this input\'s value would be `yearValues="2024,2020,2016,2012,2008"`.',
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "open",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "open() => Promise<void>",
          parameters: [],
          docs: "Opens the datetime overlay.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the datetime loses focus.",
          docsTags: []
        },
        {
          event: "ionCancel",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the datetime selection was cancelled.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "DatetimeChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value (selected date) has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the datetime has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the datetime"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "Padding end of the datetime"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Padding start of the datetime"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Padding top of the datetime"
        },
        {
          name: "--placeholder-color",
          annotation: "prop",
          docs: "Color of the datetime placeholder"
        }
      ],
      slots: []
    },
    {
      tag: "ion-fab-button",
      encapsulation: "shadow",
      readme:
        "# ion-fab-button\r\n\r\nFloating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions. As the name suggests, FABs generally float over the content in a fixed position. This is not achieved exclusively by using an `<ion-fab-button>FAB</ion-fab-button>`. They need to be wrapped with an `<ion-fab>` component in order to be fixed over the content.\r\n\r\nIf the FAB button is not wrapped with `<ion-fab>`, it will scroll with the content. FAB buttons have a default size, a mini size and can accept different colors:\r\n\r",
      docs:
        "Floating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions. As the name suggests, FABs generally float over the content in a fixed position. This is not achieved exclusively by using an `<ion-fab-button>FAB</ion-fab-button>`. They need to be wrapped with an `<ion-fab>` component in order to be fixed over the content.\r\n\r\nIf the FAB button is not wrapped with `<ion-fab>`, it will scroll with the content. FAB buttons have a default size, a mini size and can accept different colors:",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-content>\r\n\r\n  <!-- Fixed Floating Action Button that does not scroll with the content -->\r\n  <ion-fab>\r\n    <ion-fab-button>Button</ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- Default Floating Action Button that scrolls with the content.-->\r\n  <ion-fab-button>Default</ion-fab-button>\r\n\r\n  <!-- Mini -->\r\n  <ion-fab-button size="small">Mini</ion-fab-button>\r\n\r\n  <!-- Colors -->\r\n  <ion-fab-button color="primary">Primary</ion-fab-button>\r\n  <ion-fab-button color="secondary">Secondary</ion-fab-button>\r\n  <ion-fab-button color="danger">Danger</ion-fab-button>\r\n  <ion-fab-button color="light">Light</ion-fab-button>\r\n  <ion-fab-button color="dark">Dark</ion-fab-button>\r\n\r\n</ion-content>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-content>\r\n\r\n  <!-- Fixed Floating Action Button that does not scroll with the content -->\r\n  <ion-fab>\r\n    <ion-fab-button>Button</ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- Default Floating Action Button that scrolls with the content.-->\r\n  <ion-fab-button>Default</ion-fab-button>\r\n\r\n  <!-- Mini -->\r\n  <ion-fab-button size="small">Mini</ion-fab-button>\r\n\r\n  <!-- Colors -->\r\n  <ion-fab-button color="primary">Primary</ion-fab-button>\r\n  <ion-fab-button color="secondary">Secondary</ion-fab-button>\r\n  <ion-fab-button color="danger">Danger</ion-fab-button>\r\n  <ion-fab-button color="light">Light</ion-fab-button>\r\n  <ion-fab-button color="dark">Dark</ion-fab-button>\r\n\r\n</ion-content>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonContent, IonFab, IonFabButton } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <IonContent>\r\n\r\n    {/*-- Fixed Floating Action Button that does not scroll with the content --*/}\r\n    <IonFab>\r\n      <IonFabButton>Button</IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- Default Floating Action Button that scrolls with the content.--*/}\r\n    <IonFabButton>Default</IonFabButton>\r\n\r\n    {/*-- Mini --*/}\r\n    <IonFabButton size="small">Mini</IonFabButton>\r\n\r\n    {/*-- Colors --*/}\r\n    <IonFabButton color="primary">Primary</IonFabButton>\r\n    <IonFabButton color="secondary">Secondary</IonFabButton>\r\n    <IonFabButton color="danger">Danger</IonFabButton>\r\n    <IonFabButton color="light">Light</IonFabButton>\r\n    <IonFabButton color="dark">Dark</IonFabButton>\r\n  </IonContent>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-content>\r\n\r\n    <!-- Fixed Floating Action Button that does not scroll with the content -->\r\n    <ion-fab>\r\n      <ion-fab-button>Button</ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- Default Floating Action Button that scrolls with the content.-->\r\n    <ion-fab-button>Default</ion-fab-button>\r\n\r\n    <!-- Mini -->\r\n    <ion-fab-button size="small">Mini</ion-fab-button>\r\n\r\n    <!-- Colors -->\r\n    <ion-fab-button color="primary">Primary</ion-fab-button>\r\n    <ion-fab-button color="secondary">Secondary</ion-fab-button>\r\n    <ion-fab-button color="danger">Danger</ion-fab-button>\r\n    <ion-fab-button color="light">Light</ion-fab-button>\r\n    <ion-fab-button color="dark">Dark</ion-fab-button>\r\n\r\n  </ion-content>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "activated",
          type: "boolean",
          mutable: false,
          attr: "activated",
          reflectToAttr: false,
          docs: "If `true`, the fab button will be show a close icon.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
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
          docs: "If `true`, the user cannot interact with the fab button.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "href",
          type: "string | undefined",
          mutable: false,
          attr: "href",
          reflectToAttr: false,
          docs:
            "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "routerDirection",
          type: '"back" | "forward" | "root"',
          mutable: false,
          attr: "router-direction",
          reflectToAttr: false,
          docs:
            "When using a router, it specifies the transition direction when navigating to\r\nanother page using `href`.",
          docsTags: [],
          default: "'forward'",
          optional: false,
          required: false
        },
        {
          name: "show",
          type: "boolean",
          mutable: false,
          attr: "show",
          reflectToAttr: false,
          docs: "If `true`, the fab button will show when in a fab-list.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "size",
          type: '"small" | undefined',
          mutable: false,
          attr: "size",
          reflectToAttr: false,
          docs:
            "The size of the button. Set this to `small` in order to have a mini fab.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the fab button will be translucent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "type",
          type: '"button" | "reset" | "submit"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs: "The type of the button.",
          docsTags: [],
          default: "'button'",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the button loses focus.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the button has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the button"
        },
        {
          name: "--background-activated",
          annotation: "prop",
          docs: "Background of the button when activated"
        },
        {
          name: "--background-focused",
          annotation: "prop",
          docs: "Background of the button when focused"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Border color of the button"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the button"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Border style of the button"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Border width of the button"
        },
        {
          name: "--box-shadow",
          annotation: "prop",
          docs: "Box shadow of the button"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Text color of the button"
        },
        {
          name: "--color-activated",
          annotation: "prop",
          docs: "Text color of the button when activated"
        },
        {
          name: "--color-focused",
          annotation: "prop",
          docs: "Text color of the button when focused"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Padding bottom of the button"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "Padding end of the button"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Padding start of the button"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Padding top of the button"
        },
        {
          name: "--ripple-color",
          annotation: "prop",
          docs: "Color of the button ripple effect"
        },
        {
          name: "--transition",
          annotation: "prop",
          docs: "Transition of the button"
        }
      ],
      slots: []
    },
    {
      tag: "ion-fab-list",
      encapsulation: "shadow",
      readme:
        "# ion-fab-list\r\n\r\nThe `ion-fab-list` element is a container for multiple fab buttons. This collection of fab buttons contains actions related to the main fab button and is flung out on click. To specify what side the buttons should appear on, set the `side` property to 'start', 'end', 'top', 'bottom'\r\n\r",
      docs:
        "The `ion-fab-list` element is a container for multiple fab buttons. This collection of fab buttons contains actions related to the main fab button and is flung out on click. To specify what side the buttons should appear on, set the `side` property to 'start', 'end', 'top', 'bottom'",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-fab vertical="bottom" horizontal="end">\r\n  <ion-fab-button>Share</ion-fab-button>\r\n\r\n  <ion-fab-list side="top">\r\n    <ion-fab-button>Facebook</ion-fab-button>\r\n    <ion-fab-button>Twitter</ion-fab-button>\r\n    <ion-fab-button>Youtube</ion-fab-button>\r\n  </ion-fab-list>\r\n\r\n  <ion-fab-list side="start">\r\n    <ion-fab-button>Vimeo</ion-fab-button>\r\n  </ion-fab-list>\r\n\r\n</ion-fab>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-fab vertical="bottom" horizontal="end">\r\n  <ion-fab-button>Share</ion-fab-button>\r\n\r\n  <ion-fab-list side="top">\r\n    <ion-fab-button>Facebook</ion-fab-button>\r\n    <ion-fab-button>Twitter</ion-fab-button>\r\n    <ion-fab-button>Youtube</ion-fab-button>\r\n  </ion-fab-list>\r\n\r\n  <ion-fab-list side="start">\r\n    <ion-fab-button>Vimeo</ion-fab-button>\r\n  </ion-fab-list>\r\n\r\n</ion-fab>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonFab, IonFabButton, IonFabList } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonFab vertical="bottom" horizontal="end">\r\n    <IonFabButton>Share</IonFabButton>\r\n\r\n    <IonFabList side="top">\r\n      <IonFabButton>Facebook</IonFabButton>\r\n      <IonFabButton>Twitter</IonFabButton>\r\n      <IonFabButton>Youtube</IonFabButton>\r\n    </IonFabList>\r\n\r\n    <IonFabList side="start">\r\n      <IonFabButton>Vimeo</IonFabButton>\r\n    </IonFabList>\r\n\r\n  </IonFab>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-fab vertical="bottom" horizontal="end">\r\n    <ion-fab-button>Share</ion-fab-button>\r\n\r\n    <ion-fab-list side="top">\r\n      <ion-fab-button>Facebook</ion-fab-button>\r\n      <ion-fab-button>Twitter</ion-fab-button>\r\n      <ion-fab-button>Youtube</ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side="start">\r\n      <ion-fab-button>Vimeo</ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n  </ion-fab>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "activated",
          type: "boolean",
          mutable: false,
          attr: "activated",
          reflectToAttr: false,
          docs:
            "If `true`, the fab list will be show all fab buttons in the list.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "side",
          type: '"bottom" | "end" | "start" | "top"',
          mutable: false,
          attr: "side",
          reflectToAttr: false,
          docs:
            "The side the fab list will show on relative to the main fab button.",
          docsTags: [],
          default: "'bottom'",
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
      tag: "ion-fab",
      encapsulation: "shadow",
      readme:
        "# ion-fab\r\n\r\nFabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content. Fab should have one main fab-button. Fabs can also contain fab-lists which contain related buttons that show when the main fab button is clicked. The same fab container can contain several [fab-list](../fab-list) elements with different side values.\r\n\r",
      docs:
        "Fabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content. Fab should have one main fab-button. Fabs can also contain fab-lists which contain related buttons that show when the main fab button is clicked. The same fab container can contain several [fab-list](../fab-list) elements with different side values.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-content>\r\n  <!-- fab placed to the top end -->\r\n  <ion-fab vertical="top" horizontal="end" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="add"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the bottom end -->\r\n  <ion-fab vertical="bottom" horizontal="end" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="arrow-dropleft"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the top start -->\r\n  <ion-fab vertical="top" horizontal="start" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="arrow-dropright"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the bottom start -->\r\n  <ion-fab vertical="bottom" horizontal="start" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="arrow-dropup"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the (vertical) center and start -->\r\n  <ion-fab vertical="center" horizontal="start" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="share"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the (vertical) center and end -->\r\n  <ion-fab vertical="center" horizontal="end" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="add"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the top and end and on the top edge of the content overlapping header -->\r\n  <ion-fab vertical="top" horizontal="end" edge slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="person"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->\r\n  <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="settings"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side="end">\r\n      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed in the center of the content with a list on each side -->\r\n  <ion-fab vertical="center" horizontal="center" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="share"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side="top">\r\n      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side="bottom">\r\n      <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side="start">\r\n      <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side="end">\r\n      <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-content>\r\n  <!-- fab placed to the top end -->\r\n  <ion-fab vertical="top" horizontal="end" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="add"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the bottom end -->\r\n  <ion-fab vertical="bottom" horizontal="end" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="arrow-dropleft"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the top start -->\r\n  <ion-fab vertical="top" horizontal="start" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="arrow-dropright"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the bottom start -->\r\n  <ion-fab vertical="bottom" horizontal="start" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="arrow-dropup"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the (vertical) center and start -->\r\n  <ion-fab vertical="center" horizontal="start" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="share"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the (vertical) center and end -->\r\n  <ion-fab vertical="center" horizontal="end" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="add"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the top and end and on the top edge of the content overlapping header -->\r\n  <ion-fab vertical="top" horizontal="end" edge slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="person"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->\r\n  <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="settings"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side="end">\r\n      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <!-- fab placed in the center of the content with a list on each side -->\r\n  <ion-fab vertical="center" horizontal="center" slot="fixed">\r\n    <ion-fab-button>\r\n      <ion-icon name="share"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side="top">\r\n      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side="bottom">\r\n      <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side="start">\r\n      <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side="end">\r\n      <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonContent, IonFab, IonFabButton, IonIcon, IonFabList } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonContent>\r\n    {/*-- fab placed to the top end --*/}\r\n    <IonFab vertical="top" horizontal="end" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="add" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the bottom end --*/}\r\n    <IonFab vertical="bottom" horizontal="end" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="arrow-dropleft" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the top start --*/}\r\n    <IonFab vertical="top" horizontal="start" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="arrow-dropright" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the bottom start --*/}\r\n    <IonFab vertical="bottom" horizontal="start" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="arrow-dropup" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the (vertical) center and start --*/}\r\n    <IonFab vertical="center" horizontal="start" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="share" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the (vertical) center and end --*/}\r\n    <IonFab vertical="center" horizontal="end" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="add" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the top and end and on the top edge of the content overlapping header --*/}\r\n    <IonFab vertical="top" horizontal="end" edge slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="person" />\r\n      </IonFabButton>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right --*/}\r\n    <IonFab vertical="bottom" horizontal="start" edge slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="settings" />\r\n      </IonFabButton>\r\n      <IonFabList side="end">\r\n        <IonFabButton><IonIcon name="logo-vimeo" /></IonFabButton>\r\n      </IonFabList>\r\n    </IonFab>\r\n\r\n    {/*-- fab placed in the center of the content with a list on each side --*/}\r\n    <IonFab vertical="center" horizontal="center" slot="fixed">\r\n      <IonFabButton>\r\n        <IonIcon name="share" />\r\n      </IonFabButton>\r\n      <IonFabList side="top">\r\n        <IonFabButton><IonIcon name="logo-vimeo" /></IonFabButton>\r\n      </IonFabList>\r\n      <IonFabList side="bottom">\r\n        <IonFabButton><IonIcon name="logo-facebook" /></IonFabButton>\r\n      </IonFabList>\r\n      <IonFabList side="start">\r\n        <IonFabButton><IonIcon name="logo-instagram" /></IonFabButton>\r\n      </IonFabList>\r\n      <IonFabList side="end">\r\n        <IonFabButton><IonIcon name="logo-twitter" /></IonFabButton>\r\n      </IonFabList>\r\n    </IonFab>\r\n  </IonContent>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-content>\r\n    <!-- fab placed to the top end -->\r\n    <ion-fab vertical="top" horizontal="end" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="add"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the bottom end -->\r\n    <ion-fab vertical="bottom" horizontal="end" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="arrow-dropleft"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the top start -->\r\n    <ion-fab vertical="top" horizontal="start" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="arrow-dropright"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the bottom start -->\r\n    <ion-fab vertical="bottom" horizontal="start" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="arrow-dropup"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the (vertical) center and start -->\r\n    <ion-fab vertical="center" horizontal="start" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="share"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the (vertical) center and end -->\r\n    <ion-fab vertical="center" horizontal="end" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="add"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the top and end and on the top edge of the content overlapping header -->\r\n    <ion-fab vertical="top" horizontal="end" edge slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="person"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->\r\n    <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="settings"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side="end">\r\n        <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n    </ion-fab>\r\n\r\n    <!-- fab placed in the center of the content with a list on each side -->\r\n    <ion-fab vertical="center" horizontal="center" slot="fixed">\r\n      <ion-fab-button>\r\n        <ion-icon name="share"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side="top">\r\n        <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n      <ion-fab-list side="bottom">\r\n        <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n      <ion-fab-list side="start">\r\n        <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n      <ion-fab-list side="end">\r\n        <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n    </ion-fab>\r\n  </ion-content>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "activated",
          type: "boolean",
          mutable: true,
          attr: "activated",
          reflectToAttr: false,
          docs:
            "If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.\r\nThat means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "edge",
          type: "boolean",
          mutable: false,
          attr: "edge",
          reflectToAttr: false,
          docs:
            'If `true`, the fab will display on the edge of the header if\r\n`vertical` is `"top"`, and on the edge of the footer if\r\nit is `"bottom"`. Should be used with a `fixed` slot.',
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "horizontal",
          type: '"center" | "end" | "start" | undefined',
          mutable: false,
          attr: "horizontal",
          reflectToAttr: false,
          docs: "Where to align the fab horizontally in the viewport.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "vertical",
          type: '"bottom" | "center" | "top" | undefined',
          mutable: false,
          attr: "vertical",
          reflectToAttr: false,
          docs: "Where to align the fab vertically in the viewport.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "close",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "close() => void",
          parameters: [],
          docs: "Close an active FAB list container",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-footer",
      encapsulation: "none",
      readme:
        "# ion-footer\r\n\r\nFooter is a root component of a page that sits at the bottom of the page.\r\nFooter can be a wrapper for ion-toolbar to make sure the content area is sized correctly.\r\n\r",
      docs:
        "Footer is a root component of a page that sits at the bottom of the page.\r\nFooter can be a wrapper for ion-toolbar to make sure the content area is sized correctly.",
      docsTags: [],
      usage: {
        javascript:
          "```html\r\n<ion-content></ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title>Footer</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n```\r\n",
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonContent></IonContent>\r\n\r\n    <IonFooter>\r\n      <IonToolbar>\r\n        <IonTitle>Footer</IonTitle>\r\n      </IonToolbar>\r\n    </IonFooter>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n"
      },
      props: [
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs:
            "If `true`, the footer will be translucent.\r\nNote: In order to scroll content behind the footer, the `fullscreen`\r\nattribute needs to be set on the content.",
          docsTags: [],
          default: "false",
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
      tag: "ion-grid",
      encapsulation: "shadow",
      readme:
        "# ion-grid\r\n\r\n\r\nThe grid is a powerful mobile-first flexbox system for building custom layouts.\r\n\r\nIt is composed of three units — a grid, [row(s)](../row) and [column(s)](../col). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.\r\n\r\nSee [Grid Layout](/docs/layout/grid) for more information.\r\n\r",
      docs:
        "The grid is a powerful mobile-first flexbox system for building custom layouts.\r\n\r\nIt is composed of three units — a grid, [row(s)](../row) and [column(s)](../col). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.\r\n\r\nSee [Grid Layout](/docs/layout/grid) for more information.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="6">\r\n      ion-col [size="6"]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="3">\r\n      ion-col [size="3"]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col size="3">\r\n      ion-col [size="3"]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="3">\r\n      ion-col [size="3"]\r\n    </ion-col>\r\n    <ion-col size="3" offset="3">\r\n      ion-col [size="3"] [offset="3"]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col align-self-start>\r\n      ion-col [start]\r\n    </ion-col>\r\n    <ion-col align-self-center>\r\n      ion-col [center]\r\n    </ion-col>\r\n    <ion-col align-self-end>\r\n      ion-col [end]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row align-items-start>\r\n    <ion-col>\r\n      [start] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      [start] ion-col\r\n    </ion-col>\r\n    <ion-col align-self-end>\r\n      [start] ion-col [end]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row align-items-center>\r\n    <ion-col>\r\n      [center] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      [center] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      [center] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row align-items-end>\r\n    <ion-col>\r\n      [end] ion-col\r\n    </ion-col>\r\n    <ion-col align-self-start>\r\n      [end] ion-col [start]\r\n    </ion-col>\r\n    <ion-col>\r\n      [end] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="6" size-lg offset="3">\r\n      ion-col [size="6"] [size-lg] [offset="3"]\r\n    </ion-col>\r\n    <ion-col size="3" size-lg>\r\n      ion-col [size="3"] [size-lg]\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n```',
        javascript:
          '```html\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="6">\r\n      ion-col [size="6"]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="3">\r\n      ion-col [size="3"]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col size="3">\r\n      ion-col [size="3"]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="3">\r\n      ion-col [size="3"]\r\n    </ion-col>\r\n    <ion-col size="3" offset="3">\r\n      ion-col [size="3"] [offset="3"]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col align-self-start>\r\n      ion-col [start]\r\n    </ion-col>\r\n    <ion-col align-self-center>\r\n      ion-col [center]\r\n    </ion-col>\r\n    <ion-col align-self-end>\r\n      ion-col [end]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row align-items-start>\r\n    <ion-col>\r\n      [start] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      [start] ion-col\r\n    </ion-col>\r\n    <ion-col align-self-end>\r\n      [start] ion-col [end]\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row align-items-center>\r\n    <ion-col>\r\n      [center] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      [center] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      [center] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row align-items-end>\r\n    <ion-col>\r\n      [end] ion-col\r\n    </ion-col>\r\n    <ion-col align-self-start>\r\n      [end] ion-col [start]\r\n    </ion-col>\r\n    <ion-col>\r\n      [end] ion-col\r\n    </ion-col>\r\n    <ion-col>\r\n      ion-col\r\n      <br>#\r\n      <br>#\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n    <ion-col size="12" size-sm>\r\n      ion-col [size="12"] [size-sm]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n    <ion-col size="12" size-md>\r\n      ion-col [size="12"] [size-md]\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size="6" size-lg offset="3">\r\n      ion-col [size="6"] [size-lg] [offset="3"]\r\n    </ion-col>\r\n    <ion-col size="3" size-lg>\r\n      ion-col [size="3"] [size-lg]\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonGrid, IonRow, IonCol } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <IonGrid>\r\n    <IonRow>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol size="6">\r\n        ion-col size="6"\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol size="3">\r\n        ion-col size="3"\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n      <IonCol size="3">\r\n        ion-col size="3"\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol size="3">\r\n        ion-col size="3"\r\n      </IonCol>\r\n      <IonCol size="3" offset="3">\r\n        ion-col size="3" offset="3"\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol>\r\n        ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n        <br/>#\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n        <br/>#\r\n        <br/>#\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol align-self-start>\r\n        ion-col start\r\n      </IonCol>\r\n      <IonCol align-self-center>\r\n        ion-col center\r\n      </IonCol>\r\n      <IonCol align-self-end>\r\n        ion-col end\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n        <br/>#\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow align-items-start>\r\n      <IonCol>\r\n        start ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        start ion-col\r\n      </IonCol>\r\n      <IonCol align-self-end>\r\n        start ion-col end\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n        <br/>#\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow align-items-center>\r\n      <IonCol>\r\n        center ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        center ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        center ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n        <br/>#\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow align-items-end>\r\n      <IonCol>\r\n        end ion-col\r\n      </IonCol>\r\n      <IonCol align-self-start>\r\n        end ion-col start\r\n      </IonCol>\r\n      <IonCol>\r\n        end ion-col\r\n      </IonCol>\r\n      <IonCol>\r\n        ion-col\r\n        <br/>#\r\n        <br/>#\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol size="12" size-sm>\r\n        ion-col size="12" size-sm\r\n      </IonCol>\r\n      <IonCol size="12" size-sm>\r\n        ion-col size="12" size-sm\r\n      </IonCol>\r\n      <IonCol size="12" size-sm>\r\n        ion-col size="12" size-sm\r\n      </IonCol>\r\n      <IonCol size="12" size-sm>\r\n        ion-col size="12" size-sm\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol size="12" size-md>\r\n        ion-col size="12" size-md\r\n      </IonCol>\r\n      <IonCol size="12" size-md>\r\n        ion-col size="12" size-md\r\n      </IonCol>\r\n      <IonCol size="12" size-md>\r\n        ion-col size="12" size-md\r\n      </IonCol>\r\n      <IonCol size="12" size-md>\r\n        ion-col size="12" size-md\r\n      </IonCol>\r\n    </IonRow>\r\n\r\n    <IonRow>\r\n      <IonCol size="6" size-lg offset="3">\r\n        ion-col size="6" size-lg offset="3"\r\n      </IonCol>\r\n      <IonCol size="3" size-lg>\r\n        ion-col size="3" size-lg\r\n      </IonCol>\r\n    </IonRow>\r\n  </IonGrid>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size="6">\r\n        ion-col [size="6"]\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size="3">\r\n        ion-col [size="3"]\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col size="3">\r\n        ion-col [size="3"]\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size="3">\r\n        ion-col [size="3"]\r\n      </ion-col>\r\n      <ion-col size="3" offset="3">\r\n        ion-col [size="3"] [offset="3"]\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n        <br>#\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n        <br>#\r\n        <br>#\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col align-self-start>\r\n        ion-col [start]\r\n      </ion-col>\r\n      <ion-col align-self-center>\r\n        ion-col [center]\r\n      </ion-col>\r\n      <ion-col align-self-end>\r\n        ion-col [end]\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n        <br>#\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row align-items-start>\r\n      <ion-col>\r\n        [start] ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        [start] ion-col\r\n      </ion-col>\r\n      <ion-col align-self-end>\r\n        [start] ion-col [end]\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n        <br>#\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row align-items-center>\r\n      <ion-col>\r\n        [center] ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        [center] ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        [center] ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n        <br>#\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row align-items-end>\r\n      <ion-col>\r\n        [end] ion-col\r\n      </ion-col>\r\n      <ion-col align-self-start>\r\n        [end] ion-col [start]\r\n      </ion-col>\r\n      <ion-col>\r\n        [end] ion-col\r\n      </ion-col>\r\n      <ion-col>\r\n        ion-col\r\n        <br>#\r\n        <br>#\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size="12" size-sm>\r\n        ion-col [size="12"] [size-sm]\r\n      </ion-col>\r\n      <ion-col size="12" size-sm>\r\n        ion-col [size="12"] [size-sm]\r\n      </ion-col>\r\n      <ion-col size="12" size-sm>\r\n        ion-col [size="12"] [size-sm]\r\n      </ion-col>\r\n      <ion-col size="12" size-sm>\r\n        ion-col [size="12"] [size-sm]\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size="12" size-md>\r\n        ion-col [size="12"] [size-md]\r\n      </ion-col>\r\n      <ion-col size="12" size-md>\r\n        ion-col [size="12"] [size-md]\r\n      </ion-col>\r\n      <ion-col size="12" size-md>\r\n        ion-col [size="12"] [size-md]\r\n      </ion-col>\r\n      <ion-col size="12" size-md>\r\n        ion-col [size="12"] [size-md]\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size="6" size-lg offset="3">\r\n        ion-col [size="6"] [size-lg] [offset="3"]\r\n      </ion-col>\r\n      <ion-col size="3" size-lg>\r\n        ion-col [size="3"] [size-lg]\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "fixed",
          type: "boolean",
          mutable: false,
          attr: "fixed",
          reflectToAttr: false,
          docs:
            "If `true`, the grid will have a fixed width based on the screen size.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--ion-grid-padding",
          annotation: "prop",
          docs: "Padding for the Grid"
        },
        {
          name: "--ion-grid-padding-lg",
          annotation: "prop",
          docs: "Padding for the Grid on lg screens"
        },
        {
          name: "--ion-grid-padding-md",
          annotation: "prop",
          docs: "Padding for the Grid on md screens"
        },
        {
          name: "--ion-grid-padding-sm",
          annotation: "prop",
          docs: "Padding for the Grid on sm screens"
        },
        {
          name: "--ion-grid-padding-xl",
          annotation: "prop",
          docs: "Padding for the Grid on xl screens"
        },
        {
          name: "--ion-grid-padding-xs",
          annotation: "prop",
          docs: "Padding for the Grid on xs screens"
        },
        {
          name: "--ion-grid-width",
          annotation: "prop",
          docs: "Width of the fixed Grid"
        },
        {
          name: "--ion-grid-width-lg",
          annotation: "prop",
          docs: "Width of the fixed Grid on lg screens"
        },
        {
          name: "--ion-grid-width-md",
          annotation: "prop",
          docs: "Width of the fixed Grid on md screens"
        },
        {
          name: "--ion-grid-width-sm",
          annotation: "prop",
          docs: "Width of the fixed Grid on sm screens"
        },
        {
          name: "--ion-grid-width-xl",
          annotation: "prop",
          docs: "Width of the fixed Grid on xl screens"
        },
        {
          name: "--ion-grid-width-xs",
          annotation: "prop",
          docs: "Width of the fixed Grid on xs screens"
        }
      ],
      slots: []
    },
    {
      tag: "ion-header",
      encapsulation: "none",
      readme:
        "# ion-header\r\n\r\nHeader is a parent component that holds the toolbar component.\r\nIt's important to note that ion-header needs to be the one of the three root elements of a page\r\n\r\n\r\n\r",
      docs:
        "Header is a parent component that holds the toolbar component.\r\nIt's important to note that ion-header needs to be the one of the three root elements of a page",
      docsTags: [],
      usage: {
        javascript:
          '```html\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>My Navigation Bar</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-title>Subheader</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content></ion-content>\r\n```\r\n',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonHeader>\r\n      <IonToolbar>\r\n        <IonButtons slot=\"start\">\r\n          <IonBackButton goBack={() => {}} />\r\n        </IonButtons>\r\n        <IonTitle>My Navigation Bar</IonTitle>\r\n      </IonToolbar>\r\n\r\n      <IonToolbar>\r\n        <IonTitle>Subheader</IonTitle>\r\n      </IonToolbar>\r\n    </IonHeader>\r\n\r\n    <IonContent />\r\n  </>\r\n);\r\n\r\nexport default Example\r\n"
      },
      props: [
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs:
            "If `true`, the header will be translucent.\r\nNote: In order to scroll content behind the header, the `fullscreen`\r\nattribute needs to be set on the content.",
          docsTags: [],
          default: "false",
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
      tag: "ion-img",
      encapsulation: "shadow",
      readme:
        "# ion-img\r\n\r\nImg is a tag that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browser, but falls back to a `setTimeout` when it is not supported.\r\n\r\n\r",
      docs:
        "Img is a tag that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browser, but falls back to a `setTimeout` when it is not supported.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-list>\r\n  <ion-item *ngFor="let item of items">\r\n    <ion-thumbnail slot="start">\r\n      <ion-img [src]="item.src"></ion-img>\r\n    </ion-thumbnail>\r\n    <ion-label>{{item.text}}</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonList, IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/react';\r\n\r\ntype Item = {\r\n  src: string;\r\n  text: string\r\n};\r\nconst items: Item[] = [];\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonList>\r\n    {items.map(({src, text}) =>\r\n      <IonItem>\r\n        <IonThumbnail slot=\"start\">\r\n          <IonImg src={src}></IonImg>\r\n        </IonThumbnail>\r\n        <IonLabel>{text}}</IonLabel>\r\n      </IonItem>\r\n    )}\r\n  </IonList>\r\n);\r\n\r\nexport default Example\r\n",
        vue:
          '```html\r\n<template>\r\n  <ion-list>\r\n    <ion-item v-for="item in items" :key="item.src">\r\n      <ion-thumbnail slot="start">\r\n        <ion-img :src="item.src"></ion-img>\r\n      </ion-thumbnail>\r\n      <ion-label>{{item.text}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "alt",
          type: "string | undefined",
          mutable: false,
          attr: "alt",
          reflectToAttr: false,
          docs:
            "This attribute defines the alternative text describing the image.\r\nUsers will see this text displayed if the image URL is wrong,\r\nthe image is not in one of the supported formats, or if the image is not yet downloaded.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "src",
          type: "string | undefined",
          mutable: false,
          attr: "src",
          reflectToAttr: false,
          docs:
            "The image URL. This attribute is mandatory for the <img> element.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionImgDidLoad",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the img src is loaded",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-infinite-scroll-content",
      encapsulation: "none",
      readme:
        "# ion-infinite-scroll-content\r\n\r\nThe `ion-infinite-scroll-content` component is the default child used by the `ion-infinite-scroll`. It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the `loadingSpinner` and `loadingText` properties.\r\n\r",
      docs:
        "The `ion-infinite-scroll-content` component is the default child used by the `ion-infinite-scroll`. It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the `loadingSpinner` and `loadingText` properties.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-content>\r\n  <ion-infinite-scroll>\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner="bubbles"\r\n      loadingText="Loading more data…">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-content>\r\n  <ion-infinite-scroll>\r\n    <ion-infinite-scroll-content\r\n      loading-spinner="bubbles"\r\n      loading-text="Loading more data…">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n```\r\n',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonContent, IonInfiniteScroll } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonContent>\r\n    <IonInfiniteScroll>\r\n      <IonInfiniteScrollContent\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more data…\">\r\n      </IonInfiniteScrollContent>\r\n    </IonInfiniteScroll>\r\n  </IonContent>\r\n);\r\n\r\nexport default Example\r\n",
        vue:
          '```html\r\n<template>\r\n  <ion-content>\r\n    <ion-infinite-scroll>\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner="bubbles"\r\n        loadingText="Loading more data…">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </ion-content>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "loadingSpinner",
          type:
            '"bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined',
          mutable: true,
          attr: "loading-spinner",
          reflectToAttr: false,
          docs: "An animated SVG spinner that shows while loading.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "loadingText",
          type: "string | undefined",
          mutable: false,
          attr: "loading-text",
          reflectToAttr: false,
          docs: "Optional text to display while loading.",
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
      tag: "ion-infinite-scroll",
      encapsulation: "none",
      readme:
        "# ion-infinite-scroll\r\n\r\nThe Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.\r\n\r\nThe expression assigned to the `ionInfinite` event is called when the user reaches that defined distance. When this expression has finished any and all tasks, it should call the `complete()` method on the infinite scroll instance.\r\n\r\n## Infinite Scroll Content\r\n\r\nThe `ion-infinite-scroll` component has the infinite scroll logic. It requires a child component in order to display content. Ionic uses its `ion-infinite-scroll-content` component by default. This component displays the infinite scroll and changes the look depending on the infinite scroll's state. It displays a spinner that looks best based on the platform the user is on. However, the default spinner can be changed and text can be added by setting properties on the `ion-infinite-scroll-content` component.\r\n\r\n## Custom Content\r\n\r\nSeparating the `ion-infinite-scroll` and `ion-infinite-scroll-content` components allows developers to create their own content components, if desired. This content can contain anything, from an SVG element to elements with unique CSS animations.\r\n\r",
      docs:
        "The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.\r\n\r\nThe expression assigned to the `ionInfinite` event is called when the user reaches that defined distance. When this expression has finished any and all tasks, it should call the `complete()` method on the infinite scroll instance.",
      docsTags: [],
      usage: {
        angular:
          "```html\r\n<ion-content>\r\n  <ion-button (click)=\"toggleInfiniteScroll()\" expand=\"block\">\r\n    Toggle Infinite Scroll\r\n  </ion-button>\r\n\r\n  <ion-list></ion-list>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n```\r\n\r\n```typescript\r\nimport { Component, ViewChild } from '@angular/core';\r\nimport { IonInfiniteScroll } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'infinite-scroll-example',\r\n  templateUrl: 'infinite-scroll-example.html',\r\n  styleUrls: ['./infinite-scroll-example.css']\r\n})\r\nexport class InfiniteScrollExample {\r\n  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;\r\n\r\n  constructor() {}\r\n\r\n  loadData(event) {\r\n    setTimeout(() => {\r\n      console.log('Done');\r\n      event.target.complete();\r\n\r\n      // App logic to determine if all data is loaded\r\n      // and disable the infinite scroll\r\n      if (data.length == 1000) {\r\n        event.target.disabled = true;\r\n      }\r\n    }, 500);\r\n  }\r\n\r\n  toggleInfiniteScroll() {\r\n    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;\r\n  }\r\n}\r\n```\r\n",
        javascript:
          '```html\r\n<ion-content>\r\n  <ion-button onclick="toggleInfiniteScroll()" expand="block">\r\n    Toggle Infinite Scroll\r\n  </ion-button>\r\n\r\n  <ion-list></ion-list>\r\n\r\n  <ion-infinite-scroll threshold="100px" id="infinite-scroll">\r\n    <ion-infinite-scroll-content\r\n      loading-spinner="bubbles"\r\n      loading-text="Loading more data...">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n```\r\n\r\n```javascript\r\nconst infiniteScroll = document.getElementById(\'infinite-scroll\');\r\n\r\ninfiniteScroll.addEventListener(\'ionInfinite\', function(event) {\r\n  setTimeout(function() {\r\n    console.log(\'Done\');\r\n    event.target.complete();\r\n\r\n    // App logic to determine if all data is loaded\r\n    // and disable the infinite scroll\r\n    if (data.length == 1000) {\r\n      event.target.disabled = true;\r\n    }\r\n  }, 500);\r\n});\r\n\r\nfunction toggleInfiniteScroll() {\r\n  infiniteScroll.disabled = !infiniteScroll.disabled;\r\n}\r\n```\r\n',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonAvatar } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonContent>\r\n    <IonButton onClick=\"toggleInfiniteScroll()\" expand=\"block\">\r\n      Toggle Infinite Scroll\r\n    </IonButton>\r\n\r\n    <IonList></IonList>\r\n\r\n    <IonInfinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <IonInfinite-scrollContent\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more data...\">\r\n      </IonInfinite-scrollContent>\r\n    </IonInfinite-scroll>\r\n  </IonContent>\r\n\r\n\r\n\r\n  import { Component, ViewChild } from '@angular/core';\r\n  import { IonInfiniteScroll } from '@ionic/angular';\r\n\r\n  @Component({\r\n    selector: 'infinite-scroll-example',\r\n    templateUrl: 'infinite-scroll-example.html',\r\n    styleUrls: ['./infinite-scroll-example.css']\r\n  })\r\n  export class InfiniteScrollExample {\r\n    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;\r\n\r\n    constructor() {}\r\n\r\n    loadData(event) {\r\n      setTimeout(() => {\r\n        console.log('Done');\r\n        event.target.complete();\r\n\r\n        // App logic to determine if all data is loaded\r\n        // and disable the infinite scroll\r\n        if (data.length == 1000) {\r\n          event.target.disabled = true;\r\n        }\r\n      }, 500);\r\n    }\r\n\r\n    toggleInfiniteScroll() {\r\n      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;\r\n    }\r\n  }\r\n\r\n\r\n);\r\n\r\nexport default Example\r\n"
      },
      props: [
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs:
            "If `true`, the infinite scroll will be hidden and scroll event listeners\r\nwill be removed.\r\n\r\nSet this to true to disable the infinite scroll from actively\r\ntrying to receive new data while scrolling. This is useful\r\nwhen it is known that there is no more data that can be added, and\r\nthe infinite scroll is no longer needed.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "position",
          type: '"bottom" | "top"',
          mutable: false,
          attr: "position",
          reflectToAttr: false,
          docs:
            "The position of the infinite scroll element.\r\nThe value can be either `top` or `bottom`.",
          docsTags: [],
          default: "'bottom'",
          optional: false,
          required: false
        },
        {
          name: "threshold",
          type: "string",
          mutable: false,
          attr: "threshold",
          reflectToAttr: false,
          docs:
            "The threshold distance from the bottom\r\nof the content to call the `infinite` output event when scrolled.\r\nThe threshold value can be either a percent, or\r\nin pixels. For example, use the value of `10%` for the `infinite`\r\noutput event to get called when the user has scrolled 10%\r\nfrom the bottom of the page. Use the value `100px` when the\r\nscroll is within 100 pixels from the bottom of the page.",
          docsTags: [],
          default: "'15%'",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "complete",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "complete() => void",
          parameters: [],
          docs:
            "Call `complete()` within the `ionInfinite` output event handler when\r\nyour async operation has completed. For example, the `loading`\r\nstate is while the app is performing an asynchronous operation,\r\nsuch as receiving more data from an AJAX request to add more items\r\nto a data list. Once the data has been received and UI updated, you\r\nthen call this method to signify that the loading has completed.\r\nThis method will change the infinite scroll's state from `loading`\r\nto `enabled`.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionInfinite",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Emitted when the scroll reaches\r\nthe threshold distance. From within your infinite handler,\r\nyou must call the infinite scroll's `complete()` method when\r\nyour async operation has completed.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-input",
      encapsulation: "scoped",
      readme:
        '# ion-input\r\n\r\nThe input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.\r\n\r\nIt is meant for text `type` inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more.\r\n\r\n\r',
      docs:
        'The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.\r\n\r\nIt is meant for text `type` inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more.',
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Input -->\r\n<ion-input></ion-input>\r\n\r\n<!-- Input with value -->\r\n<ion-input value="custom"></ion-input>\r\n\r\n<!-- Input with placeholder -->\r\n<ion-input placeholder="Enter Input"></ion-input>\r\n\r\n<!-- Input with clear button when there is a value -->\r\n<ion-input clearInput value="clear me"></ion-input>\r\n\r\n<!-- Number type input -->\r\n<ion-input type="number" value="333"></ion-input>\r\n\r\n<!-- Disabled input -->\r\n<ion-input value="Disabled" disabled></ion-input>\r\n\r\n<!-- Readonly input -->\r\n<ion-input value="Readonly" readonly></ion-input>\r\n\r\n<!-- Inputs with labels -->\r\n<ion-item>\r\n  <ion-label>Default Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Floating Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="fixed">Fixed Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="stacked">Stacked Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n```',
        javascript:
          '```html\r\n<!-- Default Input -->\r\n<ion-input></ion-input>\r\n\r\n<!-- Input with value -->\r\n<ion-input value="custom"></ion-input>\r\n\r\n<!-- Input with placeholder -->\r\n<ion-input placeholder="Enter Input"></ion-input>\r\n\r\n<!-- Input with clear button when there is a value -->\r\n<ion-input clear-input value="clear me"></ion-input>\r\n\r\n<!-- Number type input -->\r\n<ion-input type="number" value="333"></ion-input>\r\n\r\n<!-- Disabled input -->\r\n<ion-input value="Disabled" disabled></ion-input>\r\n\r\n<!-- Readonly input -->\r\n<ion-input value="Readonly" readonly></ion-input>\r\n\r\n<!-- Inputs with labels -->\r\n<ion-item>\r\n  <ion-label>Default Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Floating Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="fixed">Fixed Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="stacked">Stacked Label</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonInput, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Input --*/}\r\n    <IonInput></IonInput>\r\n\r\n    {/*-- Input with value --*/}\r\n    <IonInput value="custom"></IonInput>\r\n\r\n    {/*-- Input with placeholder --*/}\r\n    <IonInput placeholder="Enter Input"></IonInput>\r\n\r\n    {/*-- Input with clear button when there is a value --*/}\r\n    <IonInput clearInput value="clear me"></IonInput>\r\n\r\n    {/*-- Number type input --*/}\r\n    <IonInput type="number" value="333"></IonInput>\r\n\r\n    {/*-- Disabled input --*/}\r\n    <IonInput value="Disabled" disabled></IonInput>\r\n\r\n    {/*-- Readonly input --*/}\r\n    <IonInput value="Readonly" readonly></IonInput>\r\n\r\n    {/*-- Inputs with labels --*/}\r\n    <IonItem>\r\n      <IonLabel>Default Label</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">Floating Label</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="fixed">Fixed Label</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="stacked">Stacked Label</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Input -->\r\n  <ion-input></ion-input>\r\n\r\n  <!-- Input with value -->\r\n  <ion-input value="custom"></ion-input>\r\n\r\n  <!-- Input with placeholder -->\r\n  <ion-input placeholder="Enter Input"></ion-input>\r\n\r\n  <!-- Input with clear button when there is a value -->\r\n  <ion-input clearInput value="clear me"></ion-input>\r\n\r\n  <!-- Number type input -->\r\n  <ion-input type="number" value="333"></ion-input>\r\n\r\n  <!-- Disabled input -->\r\n  <ion-input value="Disabled" disabled></ion-input>\r\n\r\n  <!-- Readonly input -->\r\n  <ion-input value="Readonly" readonly></ion-input>\r\n\r\n  <!-- Inputs with labels -->\r\n  <ion-item>\r\n    <ion-label>Default Label</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="floating">Floating Label</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="fixed">Fixed Label</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="stacked">Stacked Label</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "accept",
          type: "string | undefined",
          mutable: false,
          attr: "accept",
          reflectToAttr: false,
          docs:
            'If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "autocapitalize",
          type: "string",
          mutable: false,
          attr: "autocapitalize",
          reflectToAttr: false,
          docs:
            "Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.",
          docsTags: [],
          default: "'off'",
          optional: false,
          required: false
        },
        {
          name: "autocomplete",
          type: '"off" | "on"',
          mutable: false,
          attr: "autocomplete",
          reflectToAttr: false,
          docs:
            "Indicates whether the value of the control can be automatically completed by the browser.",
          docsTags: [],
          default: "'off'",
          optional: false,
          required: false
        },
        {
          name: "autocorrect",
          type: '"off" | "on"',
          mutable: false,
          attr: "autocorrect",
          reflectToAttr: false,
          docs:
            "Whether auto correction should be enabled when the user is entering/editing the text value.",
          docsTags: [],
          default: "'off'",
          optional: false,
          required: false
        },
        {
          name: "autofocus",
          type: "boolean",
          mutable: false,
          attr: "autofocus",
          reflectToAttr: false,
          docs:
            "This Boolean attribute lets you specify that a form control should have input focus when the page loads.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "clearInput",
          type: "boolean",
          mutable: false,
          attr: "clear-input",
          reflectToAttr: false,
          docs:
            "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "clearOnEdit",
          type: "boolean | undefined",
          mutable: true,
          attr: "clear-on-edit",
          reflectToAttr: false,
          docs:
            'If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "debounce",
          type: "number",
          mutable: false,
          attr: "debounce",
          reflectToAttr: false,
          docs:
            "Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the input.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "inputmode",
          type: "string | undefined",
          mutable: false,
          attr: "inputmode",
          reflectToAttr: false,
          docs:
            'A hint to the browser for which keyboard to display.\r\nThis attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "max",
          type: "string | undefined",
          mutable: false,
          attr: "max",
          reflectToAttr: false,
          docs:
            "The maximum value, which must not be less than its minimum (min attribute) value.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "maxlength",
          type: "number | undefined",
          mutable: false,
          attr: "maxlength",
          reflectToAttr: false,
          docs:
            "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "min",
          type: "string | undefined",
          mutable: false,
          attr: "min",
          reflectToAttr: false,
          docs:
            "The minimum value, which must not be greater than its maximum (max attribute) value.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "minlength",
          type: "number | undefined",
          mutable: false,
          attr: "minlength",
          reflectToAttr: false,
          docs:
            "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "multiple",
          type: "boolean | undefined",
          mutable: false,
          attr: "multiple",
          reflectToAttr: false,
          docs:
            'If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.',
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
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "pattern",
          type: "string | undefined",
          mutable: false,
          attr: "pattern",
          reflectToAttr: false,
          docs:
            'A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "placeholder",
          type: "null | string | undefined",
          mutable: false,
          attr: "placeholder",
          reflectToAttr: false,
          docs: "Instructional text that shows before the input has a value.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "readonly",
          type: "boolean",
          mutable: false,
          attr: "readonly",
          reflectToAttr: false,
          docs: "If `true`, the user cannot modify the value.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "required",
          type: "boolean",
          mutable: false,
          attr: "required",
          reflectToAttr: false,
          docs:
            "If `true`, the user must fill in a value before submitting a form.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "size",
          type: "number | undefined",
          mutable: false,
          attr: "size",
          reflectToAttr: false,
          docs:
            'The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "spellcheck",
          type: "boolean",
          mutable: false,
          attr: "spellcheck",
          reflectToAttr: false,
          docs:
            "If `true`, the element will have its spelling and grammar checked.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "step",
          type: "string | undefined",
          mutable: false,
          attr: "step",
          reflectToAttr: false,
          docs:
            'Works with the min and max attributes to limit the increments at which a value can be set.\r\nPossible values are: `"any"` or a positive floating point number.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "type",
          type:
            '"date" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs: "The type of control to display. The default type is text.",
          docsTags: [],
          default: "'text'",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "null | string | undefined",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "The value of the input.",
          docsTags: [],
          default: "''",
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "getInputElement",
          returns: {
            type: "Promise<HTMLInputElement>",
            docs: ""
          },
          signature: "getInputElement() => Promise<HTMLInputElement>",
          parameters: [],
          docs: "Returns the native `<input>` element used under the hood.",
          docsTags: []
        },
        {
          name: "setFocus",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "setFocus() => void",
          parameters: [],
          docs:
            "Sets focus on the specified `ion-input`. Use this method instead of the global\r\n`input.focus()`.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input loses focus.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "InputChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input has focus.",
          docsTags: []
        },
        {
          event: "ionInput",
          detail: "KeyboardEvent",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when a keyboard input ocurred.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the input"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the input text"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the input"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the input"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the input"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the input"
        },
        {
          name: "--placeholder-color",
          annotation: "prop",
          docs: "Color of the input placeholder text"
        },
        {
          name: "--placeholder-font-style",
          annotation: "prop",
          docs: "Font style of the input placeholder text"
        },
        {
          name: "--placeholder-font-weight",
          annotation: "prop",
          docs: "Font weight of the input placeholder text"
        },
        {
          name: "--placeholder-opacity",
          annotation: "prop",
          docs: "Opacity of the input placeholder text"
        }
      ],
      slots: []
    },
    {
      tag: "ion-item-divider",
      encapsulation: "shadow",
      readme:
        "# ion-item-divider\r\n\r\nItem Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of like items.\r\n\r",
      docs:
        "Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of like items.",
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed between the named slots if provided without a slot."
        },
        {
          name: "slot",
          text:
            "start - Content is placed to the left of the divider text in LTR, and to the right in RTL."
        },
        {
          name: "slot",
          text:
            "end - Content is placed to the right of the divider text in LTR, and to the left in RTL."
        }
      ],
      usage: {
        angular:
          '```html\r\n<ion-item-divider>\r\n  <ion-label>\r\n    Basic Item Divider\r\n  </ion-label>\r\n</ion-item-divider>\r\n\r\n<ion-item-divider color="secondary">\r\n  <ion-label>\r\n    Secondary Item Divider\r\n  </ion-label>\r\n</ion-item-divider>\r\n\r\n<!-- Item Dividers in a List -->\r\n<ion-list>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Section A\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item><ion-label>A1</ion-label></ion-item>\r\n  <ion-item><ion-label>A2</ion-label></ion-item>\r\n  <ion-item><ion-label>A3</ion-label></ion-item>\r\n  <ion-item><ion-label>A4</ion-label></ion-item>\r\n  <ion-item><ion-label>A5</ion-label></ion-item>\r\n\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Section B\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item><ion-label>B1</ion-label></ion-item>\r\n  <ion-item><ion-label>B2</ion-label></ion-item>\r\n  <ion-item><ion-label>B3</ion-label></ion-item>\r\n  <ion-item><ion-label>B4</ion-label></ion-item>\r\n  <ion-item><ion-label>B5</ion-label></ion-item>\r\n</ion-list>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-item-divider>\r\n  <ion-label>\r\n    Basic Item Divider\r\n  </ion-label>\r\n</ion-item-divider>\r\n\r\n<ion-item-divider color="secondary">\r\n  <ion-label>\r\n    Secondary Item Divider\r\n  </ion-label>\r\n</ion-item-divider>\r\n\r\n<!-- Item Dividers in a List -->\r\n<ion-list>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Section A\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item><ion-label>A1</ion-label></ion-item>\r\n  <ion-item><ion-label>A2</ion-label></ion-item>\r\n  <ion-item><ion-label>A3</ion-label></ion-item>\r\n  <ion-item><ion-label>A4</ion-label></ion-item>\r\n  <ion-item><ion-label>A5</ion-label></ion-item>\r\n\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Section B\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item><ion-label>B1</ion-label></ion-item>\r\n  <ion-item><ion-label>B2</ion-label></ion-item>\r\n  <ion-item><ion-label>B3</ion-label></ion-item>\r\n  <ion-item><ion-label>B4</ion-label></ion-item>\r\n  <ion-item><ion-label>B5</ion-label></ion-item>\r\n</ion-list>\r\n```\r\n',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonItemDivider, IonLabel, IonList, IonItem } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonItemDivider>\r\n      <IonLabel>\r\n        Basic Item Divider\r\n      </IonLabel>\r\n    </IonItemDivider>\r\n\r\n    <IonItemDivider color=\"secondary\">\r\n      <IonLabel>\r\n        Secondary Item Divider\r\n      </IonLabel>\r\n    </IonItemDivider>\r\n\r\n    {/*-- Item Dividers in a List --*/}\r\n    <IonList>\r\n      <IonItemDivider>\r\n        <IonLabel>\r\n          Section A\r\n        </IonLabel>\r\n      </IonItemDivider>\r\n\r\n      <IonItem><IonLabel>A1</IonLabel></IonItem>\r\n      <IonItem><IonLabel>A2</IonLabel></IonItem>\r\n      <IonItem><IonLabel>A3</IonLabel></IonItem>\r\n      <IonItem><IonLabel>A4</IonLabel></IonItem>\r\n      <IonItem><IonLabel>A5</IonLabel></IonItem>\r\n\r\n      <IonItemDivider>\r\n        <IonLabel>\r\n          Section B\r\n        </IonLabel>\r\n      </IonItemDivider>\r\n\r\n      <IonItem><IonLabel>B1</IonLabel></IonItem>\r\n      <IonItem><IonLabel>B2</IonLabel></IonItem>\r\n      <IonItem><IonLabel>B3</IonLabel></IonItem>\r\n      <IonItem><IonLabel>B4</IonLabel></IonItem>\r\n      <IonItem><IonLabel>B5</IonLabel></IonItem>\r\n    </IonList>\r\n  </>\r\n);\r\n\r\nexport default Example\r\n",
        vue:
          '```html\r\n<template>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Basic Item Divider\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-divider color="secondary">\r\n    <ion-label>\r\n      Secondary Item Divider\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <!-- Item Dividers in a List -->\r\n  <ion-list>\r\n    <ion-item-divider>\r\n      <ion-label>\r\n        Section A\r\n      </ion-label>\r\n    </ion-item-divider>\r\n\r\n    <ion-item><ion-label>A1</ion-label></ion-item>\r\n    <ion-item><ion-label>A2</ion-label></ion-item>\r\n    <ion-item><ion-label>A3</ion-label></ion-item>\r\n    <ion-item><ion-label>A4</ion-label></ion-item>\r\n    <ion-item><ion-label>A5</ion-label></ion-item>\r\n\r\n    <ion-item-divider>\r\n      <ion-label>\r\n        Section B\r\n      </ion-label>\r\n    </ion-item-divider>\r\n\r\n    <ion-item><ion-label>B1</ion-label></ion-item>\r\n    <ion-item><ion-label>B2</ion-label></ion-item>\r\n    <ion-item><ion-label>B3</ion-label></ion-item>\r\n    <ion-item><ion-label>B4</ion-label></ion-item>\r\n    <ion-item><ion-label>B5</ion-label></ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "sticky",
          type: "boolean",
          mutable: false,
          attr: "sticky",
          reflectToAttr: false,
          docs:
            "When it's set to `true`, the item-divider will stay visible when it reaches the top\r\nof the viewport until the next `ion-item-divider` replaces it.\r\n\r\nThis feature relies in `position:sticky`:\r\nhttps://caniuse.com/#feat=css-sticky",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the item divider"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the item divider"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the item divider"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the item divider"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the item divider"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the item divider"
        }
      ],
      slots: [
        {
          name: "",
          docs:
            "Content is placed between the named slots if provided without a slot."
        },
        {
          name: "end",
          docs:
            "Content is placed to the right of the divider text in LTR, and to the left in RTL."
        },
        {
          name: "start",
          docs:
            "Content is placed to the left of the divider text in LTR, and to the right in RTL."
        }
      ]
    },
    {
      tag: "ion-item-group",
      encapsulation: "none",
      readme:
        "# ion-item-group\r\n\r\nItem groups are containers that organize similar items together. They can contain item dividers to divide the items into multiple sections.\r\n\r\n\r\n\r\n\r",
      docs:
        "Item groups are containers that organize similar items together. They can contain item dividers to divide the items into multiple sections.",
      docsTags: [],
      usage: {
        angular:
          "```html\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>A</ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Angola</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Argentina</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Armenia</ion-label>\r\n  </ion-item>\r\n</ion-item-group>\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>B</ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Bangladesh</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Belarus</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Belgium</ion-label>\r\n  </ion-item>\r\n</ion-item-group>\r\n\r\n\r\n<!-- They can also be used to group sliding items -->\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Fruits\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Grapes</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Apples</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-item-group>\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Vegetables\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Carrots</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Celery</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-item-group>\r\n```\r\n",
        javascript:
          "```html\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>A</ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Angola</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Argentina</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Armenia</ion-label>\r\n  </ion-item>\r\n</ion-item-group>\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>B</ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Bangladesh</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Belarus</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Belgium</ion-label>\r\n  </ion-item>\r\n</ion-item-group>\r\n\r\n\r\n<!-- They can also be used to group sliding items -->\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Fruits\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Grapes</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Apples</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-item-group>\r\n\r\n<ion-item-group>\r\n  <ion-item-divider>\r\n    <ion-label>\r\n      Vegetables\r\n    </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Carrots</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h3>Celery</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option>\r\n        Favorite\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-item-group>\r\n```\r\n",
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonItemGroup, IonItemDivider, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonItemGroup>\r\n      <IonItemDivider>\r\n        <IonLabel>A</IonLabel>\r\n      </IonItemDivider>\r\n\r\n      <IonItem>\r\n        <IonLabel>Angola</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Argentina</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Armenia</IonLabel>\r\n      </IonItem>\r\n    </IonItemGroup>\r\n\r\n    <IonItemGroup>\r\n      <IonItemDivider>\r\n        <IonLabel>B</IonLabel>\r\n      </IonItemDivider>\r\n\r\n      <IonItem>\r\n        <IonLabel>Bangladesh</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Belarus</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Belgium</IonLabel>\r\n      </IonItem>\r\n    </IonItemGroup>\r\n\r\n\r\n    {/*-- They can also be used to group sliding items --*/}\r\n    <IonItemGroup>\r\n      <IonItemDivider>\r\n        <IonLabel>\r\n          Fruits\r\n        </IonLabel>\r\n      </IonItemDivider>\r\n\r\n      <IonItemSliding>\r\n        <IonItem>\r\n          <IonLabel>\r\n            <h3>Grapes</h3>\r\n          </IonLabel>\r\n        </IonItem>\r\n        <IonItemOptions>\r\n          <IonItemOption>\r\n            Favorite\r\n          </IonItemOption>\r\n        </IonItemOptions>\r\n      </IonItemSliding>\r\n\r\n      <IonItemSliding>\r\n        <IonItem>\r\n          <IonLabel>\r\n            <h3>Apples</h3>\r\n          </IonLabel>\r\n        </IonItem>\r\n        <IonItemOptions>\r\n          <IonItemOption>\r\n            Favorite\r\n          </IonItemOption>\r\n        </IonItemOptions>\r\n      </IonItemSliding>\r\n    </IonItemGroup>\r\n\r\n    <IonItemGroup>\r\n      <IonItemDivider>\r\n        <IonLabel>\r\n          Vegetables\r\n        </IonLabel>\r\n      </IonItemDivider>\r\n\r\n      <IonItemSliding>\r\n        <IonItem>\r\n          <IonLabel>\r\n            <h3>Carrots</h3>\r\n          </IonLabel>\r\n        </IonItem>\r\n        <IonItemOptions>\r\n          <IonItemOption>\r\n            Favorite\r\n          </IonItemOption>\r\n        </IonItemOptions>\r\n      </IonItemSliding>\r\n\r\n      <IonItemSliding>\r\n        <IonItem>\r\n          <IonLabel>\r\n            <h3>Celery</h3>\r\n          </IonLabel>\r\n        </IonItem>\r\n        <IonItemOptions>\r\n          <IonItemOption>\r\n            Favorite\r\n          </IonItemOption>\r\n        </IonItemOptions>\r\n      </IonItemSliding>\r\n    </IonItemGroup>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n",
        vue:
          "```html\r\n<template>\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>A</ion-label>\r\n    </ion-item-divider>\r\n\r\n    <ion-item>\r\n      <ion-label>Angola</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Argentina</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Armenia</ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>B</ion-label>\r\n    </ion-item-divider>\r\n\r\n    <ion-item>\r\n      <ion-label>Bangladesh</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Belarus</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Belgium</ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n\r\n  <!-- They can also be used to group sliding items -->\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>\r\n        Fruits\r\n      </ion-label>\r\n    </ion-item-divider>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h3>Grapes</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option>\r\n          Favorite\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h3>Apples</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option>\r\n          Favorite\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>\r\n        Vegetables\r\n      </ion-label>\r\n    </ion-item-divider>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h3>Carrots</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option>\r\n          Favorite\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          <h3>Celery</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option>\r\n          Favorite\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-item-group>\r\n</template>\r\n```\r\n"
      },
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-item-option",
      encapsulation: "shadow",
      readme:
        "# ion-item-option\r\n\r\nThe option button for an `ion-item-sliding`. Must be placed inside of an `<ion-item-options>`.\r\nYou can combine the `ionSwipe` event and the `expandable` directive to create a full swipe\r\naction for the item.\r\n\r",
      docs:
        "The option button for an `ion-item-sliding`. Must be placed inside of an `<ion-item-options>`.\r\nYou can combine the `ionSwipe` event and the `expandable` directive to create a full swipe\r\naction for the item.",
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed between the named slots if provided without a slot."
        },
        {
          name: "slot",
          text:
            "start - Content is placed to the left of the option text in LTR, and to the right in RTL."
        },
        {
          name: "slot",
          text: "top - Content is placed above the option text."
        },
        {
          name: "slot",
          text:
            "icon-only - Should be used on an icon in an option that has no text."
        },
        {
          name: "slot",
          text: "bottom - Content is placed below the option text."
        },
        {
          name: "slot",
          text:
            "end - Content is placed to the right of the option text in LTR, and to the left in RTL."
        }
      ],
      usage: {},
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
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
          docs: "If `true`, the user cannot interact with the item option.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "expandable",
          type: "boolean",
          mutable: false,
          attr: "expandable",
          reflectToAttr: false,
          docs:
            "If `true`, the option will expand to take up the available width and cover any other options.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "href",
          type: "string | undefined",
          mutable: false,
          attr: "href",
          reflectToAttr: false,
          docs:
            "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the item option"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the item option"
        }
      ],
      slots: [
        {
          name: "",
          docs:
            "Content is placed between the named slots if provided without a slot."
        },
        {
          name: "bottom",
          docs: "Content is placed below the option text."
        },
        {
          name: "end",
          docs:
            "Content is placed to the right of the option text in LTR, and to the left in RTL."
        },
        {
          name: "icon-only",
          docs: "Should be used on an icon in an option that has no text."
        },
        {
          name: "start",
          docs:
            "Content is placed to the left of the option text in LTR, and to the right in RTL."
        },
        {
          name: "top",
          docs: "Content is placed above the option text."
        }
      ]
    },
    {
      tag: "ion-item-options",
      encapsulation: "none",
      readme:
        "# ion-item-options\r\n\r\nThe option buttons for an `ion-item-sliding`. These buttons can be placed either on the [start or end side](#side-description).\r\nYou can combine the `ionSwipe` event plus the `expandable` directive to create a full swipe action for the item.\r\n\r\n\r\n### Side description\r\n\r\n| Side    | Position                                                        | Swipe direction                                                   |\r\n|---------|-----------------------------------------------------------------|-------------------------------------------------------------------|\r\n| `start` | To the `left` of the content in LTR, and to the `right` in RTL. | From `left` to `right` in LTR, and from `right` to `left` in RTL. |\r\n| `end`   | To the `right` of the content in LTR, and to the `left` in RTL. | From `right` to `left` in LTR, and from `left` to `right` in RTL. |\r\n\r\n\r",
      docs:
        "The option buttons for an `ion-item-sliding`. These buttons can be placed either on the [start or end side](#side-description).\r\nYou can combine the `ionSwipe` event plus the `expandable` directive to create a full swipe action for the item.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "side",
          type: '"end" | "start"',
          mutable: false,
          attr: "side",
          reflectToAttr: false,
          docs:
            'The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.',
          docsTags: [],
          default: "'end'",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionSwipe",
          detail: "any",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the item has been fully swiped.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-item-sliding",
      encapsulation: "none",
      readme:
        '# ion-item-sliding\r\n\r\nA sliding item contains an item that can be dragged to reveal buttons. It requires an [item](../item) component as a child. All options to reveal should be placed in the [item options](../item-options) element.\r\n\r\n\r\n### Swipe Direction\r\n\r\nBy default, the buttons are placed on the `"end"` side. This means that options are revealed when the sliding item is swiped from end to start, i.e. from right to left in LTR, but from left to right in RTL. To place them on the opposite side, so that they are revealed when swiping in the opposite direction, set the `side` attribute to `"start"` on the [`ion-item-options`]((../item-options) element. Up to two `ion-item-options` can be used at the same time in order to reveal two different sets of options depending on the swiping direction.\r\n\r\n\r\n### Options Layout\r\n\r\nBy default if an icon is placed with text in the [item option](../item-option), it will display the icon on top of the text, but the icon slot can be changed to any of the following to position it in the option.\r\n\r\n| Slot        | description                                                              |\r\n| ----------- | ------------------------------------------------------------------------ |\r\n| `start`     | In LTR, start is the left side of the button, and in RTL it is the right |\r\n| `top`       | The icon is above the text                                               |\r\n| `icon-only` | The icon is the only content of the button                               |\r\n| `bottom`    | The icon is below the text                                               |\r\n| `end`       | In LTR, end is the right side of the button, and in RTL it is the left   |\r\n\r\n\r\n### Expandable Options\r\n\r\nOptions can be expanded to take up the full width of the item if you swipe past a certain point. This can be combined with the `ionSwipe` event to call methods on the class.\r\n\r\n\r',
      docs:
        "A sliding item contains an item that can be dragged to reveal buttons. It requires an [item](../item) component as a child. All options to reveal should be placed in the [item options](../item-options) element.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-list>\r\n  <!-- Sliding item with text options on both sides -->\r\n  <ion-item-sliding>\r\n    <ion-item-options side="start">\r\n      <ion-item-option (click)="favorite(item)">Favorite</ion-item-option>\r\n      <ion-item-option color="danger" (click)="share(item)">Share</ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item>\r\n      <ion-label>Item Options</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side="end">\r\n      <ion-item-option (click)="unread(item)">Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with expandable options on both sides -->\r\n  <ion-item-sliding>\r\n    <ion-item-options side="start">\r\n      <ion-item-option color="danger" expandable>\r\n        Delete\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item>\r\n      <ion-label>Expandable Options</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side="end">\r\n      <ion-item-option color="tertiary" expandable>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Multi-line sliding item with icon options on both sides -->\r\n  <ion-item-sliding id="item100">\r\n    <ion-item href="#">\r\n      <ion-label>\r\n        <h2>HubStruck Notifications</h2>\r\n        <p>A new message in your network</p>\r\n        <p>Oceanic Next has joined your network</p>\r\n      </ion-label>\r\n      <ion-note slot="end">\r\n        10:45 AM\r\n      </ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item-options side="start">\r\n      <ion-item-option>\r\n        <ion-icon slot="icon-only" name="heart"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item-options side="end">\r\n      <ion-item-option color="danger">\r\n        <ion-icon slot="icon-only" name="trash"></ion-icon>\r\n      </ion-item-option>\r\n      <ion-item-option>\r\n        <ion-icon slot="icon-only" name="star"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon start options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Start\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="start" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="start" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon end options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons End\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="end" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="end" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon top options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Top\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="top" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="top" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon bottom options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Bottom\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="bottom" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="bottom" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-list>\r\n  <!-- Sliding item with text options on both sides -->\r\n  <ion-item-sliding>\r\n    <ion-item-options side="start">\r\n      <ion-item-option onClick="favorite(item)">Favorite</ion-item-option>\r\n      <ion-item-option color="danger" onClick="share(item)">Share</ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item>\r\n      <ion-label>Item Options</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side="end">\r\n      <ion-item-option onClick="unread(item)">Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with expandable options on both sides -->\r\n  <ion-item-sliding>\r\n    <ion-item-options side="start">\r\n      <ion-item-option color="danger" expandable>\r\n        Delete\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item>\r\n      <ion-label>Expandable Options</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side="end">\r\n      <ion-item-option color="tertiary" expandable>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Multi-line sliding item with icon options on both sides -->\r\n  <ion-item-sliding id="item100">\r\n    <ion-item href="#">\r\n      <ion-label>\r\n        <h2>HubStruck Notifications</h2>\r\n        <p>A new message in your network</p>\r\n        <p>Oceanic Next has joined your network</p>\r\n      </ion-label>\r\n      <ion-note slot="end">\r\n        10:45 AM\r\n      </ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item-options side="start">\r\n      <ion-item-option>\r\n        <ion-icon slot="icon-only" name="heart"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n\r\n    <ion-item-options side="end">\r\n      <ion-item-option color="danger">\r\n        <ion-icon slot="icon-only" name="trash"></ion-icon>\r\n      </ion-item-option>\r\n      <ion-item-option>\r\n        <ion-icon slot="icon-only" name="star"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon start options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Start\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="start" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="start" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon end options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons End\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="end" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="end" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon top options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Top\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="top" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="top" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <!-- Sliding item with icon bottom options on end side -->\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>\r\n        Sliding Item, Icons Bottom\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item-options>\r\n      <ion-item-option color="primary">\r\n        <ion-icon slot="bottom" name="more"></ion-icon>\r\n        More\r\n      </ion-item-option>\r\n      <ion-item-option color="secondary">\r\n        <ion-icon slot="bottom" name="archive"></ion-icon>\r\n        Archive\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n<IonList>\r\n  {/* Sliding item with text options on both sides */}\r\n  <IonItemSliding>\r\n    <IonItemOptions side="start">\r\n      <IonItemOption onClick={favorite(item)}>Favorite</IonItemOption>\r\n      <IonItemOption color="danger" onClick={share(item)}>Share</IonItemOption>\r\n    </IonItemOptions>\r\n\r\n    <IonItem>\r\n      <IonLabel>Item Options</IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItemOptions side="end">\r\n      <IonItemOption onClick={unread(item)}>Unread</IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n\r\n  {/* Sliding item with expandable options on both sides */}\r\n  <IonItemSliding>\r\n    <IonItemOptions side="start">\r\n      <IonItemOption color="danger" expandable>\r\n        Delete\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n\r\n    <IonItem>\r\n      <IonLabel>Expandable Options</IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItemOptions side="end">\r\n      <IonItemOption color="tertiary" expandable>\r\n        Archive\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n\r\n  {/* Multi-line sliding item with icon options on both sides */}\r\n  <IonItemSliding id="item100">\r\n    <IonItem href="#">\r\n      <IonLabel>\r\n        <h2>HubStruck Notifications</h2>\r\n        <p>A new message in your network</p>\r\n        <p>Oceanic Next has joined your network</p>\r\n      </IonLabel>\r\n      <IonNote slot="end">\r\n        10:45 AM\r\n      </IonNote>\r\n    </IonItem>\r\n\r\n    <IonItemOptions side="start">\r\n      <IonItemOption>\r\n        <IonIcon slot="icon-only" name="heart"></IonIcon>\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n\r\n    <IonItemOptions side="end">\r\n      <IonItemOption color="danger">\r\n        <IonIcon slot="icon-only" name="trash"></IonIcon>\r\n      </IonItemOption>\r\n      <IonItemOption>\r\n        <IonIcon slot="icon-only" name="star"></IonIcon>\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n\r\n  {/* Sliding item with icon start options on end side */}\r\n  <IonItemSliding>\r\n    <IonItem>\r\n      <IonLabel>\r\n        Sliding Item, Icons Start\r\n      </IonLabel>\r\n    </IonItem>\r\n    <IonItemOptions>\r\n      <IonItemOption color="primary">\r\n        <IonIcon slot="start" name="more"></IonIcon>\r\n        More\r\n      </IonItemOption>\r\n      <IonItemOption color="secondary">\r\n        <IonIcon slot="start" name="archive"></IonIcon>\r\n        Archive\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n\r\n  {/* Sliding item with icon end options on end side */}\r\n  <IonItemSliding>\r\n    <IonItem>\r\n      <IonLabel>\r\n        Sliding Item, Icons End\r\n      </IonLabel>\r\n    </IonItem>\r\n    <IonItemOptions>\r\n      <IonItemOption color="primary">\r\n        <IonIcon slot="end" name="more"></IonIcon>\r\n        More\r\n      </IonItemOption>\r\n      <IonItemOption color="secondary">\r\n        <IonIcon slot="end" name="archive"></IonIcon>\r\n        Archive\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n\r\n  {/* Sliding item with icon top options on end side */}\r\n  <IonItemSliding>\r\n    <IonItem>\r\n      <IonLabel>\r\n        Sliding Item, Icons Top\r\n      </IonLabel>\r\n    </IonItem>\r\n    <IonItemOptions>\r\n      <IonItemOption color="primary">\r\n        <IonIcon slot="top" name="more"></IonIcon>\r\n        More\r\n      </IonItemOption>\r\n      <IonItemOption color="secondary">\r\n        <IonIcon slot="top" name="archive"></IonIcon>\r\n        Archive\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n\r\n  {/* Sliding item with icon bottom options on end side */}\r\n  <IonItemSliding>\r\n    <IonItem>\r\n      <IonLabel>\r\n        Sliding Item, Icons Bottom\r\n      </IonLabel>\r\n    </IonItem>\r\n    <IonItemOptions>\r\n      <IonItemOption color="primary">\r\n        <IonIcon slot="bottom" name="more"></IonIcon>\r\n        More\r\n      </IonItemOption>\r\n      <IonItemOption color="secondary">\r\n        <IonIcon slot="bottom" name="archive"></IonIcon>\r\n        Archive\r\n      </IonItemOption>\r\n    </IonItemOptions>\r\n  </IonItemSliding>\r\n</IonList>\r\n\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-list>\r\n    <!-- Sliding item with text options on both sides -->\r\n    <ion-item-sliding>\r\n      <ion-item-options side="start">\r\n        <ion-item-option @click="favorite(item)">Favorite</ion-item-option>\r\n        <ion-item-option color="danger" @click="share(item)">Share</ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item>\r\n        <ion-label>Item Options</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side="end">\r\n        <ion-item-option @click="unread(item)">Unread</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Sliding item with expandable options on both sides -->\r\n    <ion-item-sliding>\r\n      <ion-item-options side="start">\r\n        <ion-item-option color="danger" expandable>\r\n          Delete\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item>\r\n        <ion-label>Expandable Options</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side="end">\r\n        <ion-item-option color="tertiary" expandable>\r\n          Archive\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Multi-line sliding item with icon options on both sides -->\r\n    <ion-item-sliding id="item100">\r\n      <ion-item href="#">\r\n        <ion-label>\r\n          <h2>HubStruck Notifications</h2>\r\n          <p>A new message in your network</p>\r\n          <p>Oceanic Next has joined your network</p>\r\n        </ion-label>\r\n        <ion-note slot="end">\r\n          10:45 AM\r\n        </ion-note>\r\n      </ion-item>\r\n\r\n      <ion-item-options side="start">\r\n        <ion-item-option>\r\n          <ion-icon slot="icon-only" name="heart"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item-options side="end">\r\n        <ion-item-option color="danger">\r\n          <ion-icon slot="icon-only" name="trash"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option>\r\n          <ion-icon slot="icon-only" name="star"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Sliding item with icon start options on end side -->\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          Sliding Item, Icons Start\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option color="primary">\r\n          <ion-icon slot="start" name="more"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color="secondary">\r\n          <ion-icon slot="start" name="archive"></ion-icon>\r\n          Archive\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Sliding item with icon end options on end side -->\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          Sliding Item, Icons End\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option color="primary">\r\n          <ion-icon slot="end" name="more"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color="secondary">\r\n          <ion-icon slot="end" name="archive"></ion-icon>\r\n          Archive\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Sliding item with icon top options on end side -->\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          Sliding Item, Icons Top\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option color="primary">\r\n          <ion-icon slot="top" name="more"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color="secondary">\r\n          <ion-icon slot="top" name="archive"></ion-icon>\r\n          Archive\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Sliding item with icon bottom options on end side -->\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>\r\n          Sliding Item, Icons Bottom\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options>\r\n        <ion-item-option color="primary">\r\n          <ion-icon slot="bottom" name="more"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color="secondary">\r\n          <ion-icon slot="bottom" name="archive"></ion-icon>\r\n          Archive\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the sliding-item.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "close",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "close() => Promise<void>",
          parameters: [],
          docs:
            "Close the sliding item. Items can also be closed from the [List](../../list/List).",
          docsTags: []
        },
        {
          name: "closeOpened",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "closeOpened() => Promise<boolean>",
          parameters: [],
          docs:
            "Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).",
          docsTags: []
        },
        {
          name: "getOpenAmount",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "getOpenAmount() => Promise<number>",
          parameters: [],
          docs: "Get the amount the item is open in pixels.",
          docsTags: []
        },
        {
          name: "getSlidingRatio",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "getSlidingRatio() => Promise<number>",
          parameters: [],
          docs:
            "Get the ratio of the open amount of the item compared to the width of the options.\r\nIf the number returned is positive, then the options on the right side are open.\r\nIf the number returned is negative, then the options on the left side are open.\r\nIf the absolute value of the number is greater than 1, the item is open more than\r\nthe width of the options.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionDrag",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the sliding position changes.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-item",
      encapsulation: "shadow",
      readme:
        "# ion-item\r\n\r\nItems are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Generally they are placed in a list with other items. Items can be swiped, deleted, reordered, edited, and more.\r\n\r\n\r\n## Detail Arrows\r\n\r\nBy default, clickable items will display a right arrow icon on `ios` mode. A clickable item is an item that has an `href` or `button` property set. To hide the right arrow icon on clickable elements, set the `detail` property to `false`. To show the right arrow icon on an item that doesn't display it naturally, add the `detail` attribute to the item.\r\n\r\n<!--\r\n\r\nTODO add this functionality back as a css variable\r\n\r\nThis feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:\r\n\r\n```css\r\n--item-detail-push-show: true;\r\n```\r\n\r\nSee the [theming documentation](/docs/theming/css-variables) for more information.\r\n\r\n-->\r\n\r\n\r\n## Item Placement\r\n\r\nItem uses named [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) in order to position content. This logic makes it possible to write a complex item with simple, understandable markup without having to worry about styling and positioning the elements.\r\n\r\nThe below chart details the item slots and where it will place the element inside of the item:\r\n\r\n| Slot    | Description                                                                 |\r\n|---------|-----------------------------------------------------------------------------|\r\n| `start` | Placed to the left of all other content in LTR, and to the `right` in RTL.  |\r\n| `end`   | Placed to the right of all other content in LTR, and to the `left` in RTL.  |\r\n| none    | Placed inside of the input wrapper.                                         |\r\n\r\n\r\n### Text Alignment\r\n\r\nItems left align text and add an ellipsis when the text is wider than the item. See the [Utility Attributes Documentation](/docs/layout/css-utilities) for attributes that can be added to `<ion-item>` to transform the text.\r\n\r\n\r\n## Input Highlight\r\n\r\n### Highlight Height\r\n\r\nItems containing an input will highlight the bottom border of the input with a different color when focused, valid, or invalid. By default, `md` items have a highlight with a height set to `2px` and `ios` has no highlight (technically the height is set to `0`). The height can be changed using the `--highlight-height` CSS property. To turn off the highlight, set this variable to `0`. For more information on setting CSS properties, see the [theming documentation](/docs/theming/css-variables).\r\n\r\n### Highlight Color\r\n\r\nThe highlight color changes based on the item state, but all of the states use Ionic colors by default. When focused, the input highlight will use the `primary` color. If the input is valid it will use the `success` color, and invalid inputs will use the `danger` color. See the [CSS Custom Properties](#css-custom-properties) section below for the highlight color variables.\r\n\r\n\r",
      docs:
        "Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Generally they are placed in a list with other items. Items can be swiped, deleted, reordered, edited, and more.",
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed between the named slots if provided without a slot."
        },
        {
          name: "slot",
          text:
            "start - Content is placed to the left of the item text in LTR, and to the right in RTL."
        },
        {
          name: "slot",
          text:
            "end - Content is placed to the right of the item text in LTR, and to the left in RTL."
        }
      ],
      usage: {
        angular:
          'Basic Usage\r\n\r\n```html\r\n<!-- Default Item -->\r\n<ion-item>\r\n  <ion-label>\r\n    Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Item as a Button -->\r\n<ion-item (click)="buttonClick()">\r\n  <ion-label>\r\n    Button Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Item as an Anchor -->\r\n<ion-item href="https://www.ionicframework.com">\r\n  <ion-label>\r\n    Anchor Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item color="secondary">\r\n  <ion-label>\r\n    Secondary Color Item\r\n  </ion-label>\r\n</ion-item>\r\n```\r\n\r\nDetail Arrows\r\n\r\n```html\r\n<ion-item detail>\r\n  <ion-label>\r\n    Standard Item with Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item (click)="buttonClick()" detail>\r\n  <ion-label>\r\n    Button Item with Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item detail="false" href="https://www.ionicframework.com">\r\n  <ion-label>\r\n    Anchor Item with no Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n```\r\n\r\nList Items\r\n\r\n```html\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>\r\n      Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines="none">\r\n    <ion-label>\r\n      No Lines Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n    Multiline text that should wrap when it is too long\r\n    to fit on one line in the item.\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <ion-text color="primary">\r\n        <h3>H3 Primary Title</h3>\r\n      </ion-text>\r\n      <p>Paragraph line 1</p>\r\n      <ion-text color="secondary">\r\n        <p>Paragraph line 2 secondary</p>\r\n      </ion-text>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines="full">\r\n    <ion-label>\r\n      Item with Full Lines\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n```\r\n\r\nItem Lines\r\n\r\n```html\r\n<!-- Item Inset Lines -->\r\n<ion-item lines="inset">\r\n  <ion-label>Item Lines Inset</ion-label>\r\n</ion-item>\r\n\r\n<!-- Item Full Lines -->\r\n<ion-item lines="full">\r\n  <ion-label>Item Lines Full</ion-label>\r\n</ion-item>\r\n\r\n<!-- Item None Lines -->\r\n<ion-item lines="none">\r\n  <ion-label>Item Lines None</ion-label>\r\n</ion-item>\r\n\r\n<!-- List Full Lines -->\r\n<ion-list lines="full">\r\n  <ion-item>\r\n    <ion-label>Full Lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Full Lines Item 2</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List Inset Lines -->\r\n<ion-list lines="inset">\r\n  <ion-item>\r\n    <ion-label>Inset Lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Inset Lines Item 2</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List No Lines -->\r\n<ion-list lines="none">\r\n  <ion-item>\r\n    <ion-label>No lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>No lines Item 2</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>No lines Item 3</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n\r\nMedia Items\r\n\r\n```html\r\n<ion-item (click)="testClick()">\r\n  <ion-avatar slot="start">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-avatar>\r\n  <ion-label>\r\n    Avatar Start, Button Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item href="#">\r\n  <ion-label>\r\n    Thumbnail End, Anchor Item\r\n  </ion-label>\r\n  <ion-thumbnail slot="end">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-thumbnail>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-thumbnail slot="start">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h2>H2 Title Text</h2>\r\n    <p>Button on right</p>\r\n  </ion-label>\r\n  <ion-button fill="outline" slot="end">View</ion-button>\r\n</ion-item>\r\n\r\n<ion-item (click)="testClick()">\r\n  <ion-thumbnail slot="start">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h3>H3 Title Text</h3>\r\n    <p>Icon on right</p>\r\n  </ion-label>\r\n  <ion-icon name="close-circle" slot="end"></ion-icon>\r\n</ion-item>\r\n```\r\n\r\nButtons in Items\r\n\r\n```html\r\n<ion-item>\r\n  <ion-button slot="start">\r\n    Start\r\n  </ion-button>\r\n  <ion-label>Button Start/End</ion-label>\r\n  <ion-button slot="end">\r\n    End\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button slot="start">\r\n    Start Icon\r\n    <ion-icon name="home" slot="end"></ion-icon>\r\n  </ion-button>\r\n  <ion-label>Buttons with Icons</ion-label>\r\n  <ion-button slot="end">\r\n    <ion-icon name="star" slot="end"></ion-icon>\r\n    End Icon\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button slot="start">\r\n    <ion-icon slot="icon-only" name="navigate"></ion-icon>\r\n  </ion-button>\r\n  <ion-label>Icon only Buttons</ion-label>\r\n  <ion-button slot="end">\r\n    <ion-icon slot="icon-only" name="star"></ion-icon>\r\n  </ion-button>\r\n</ion-item>\r\n```\r\n\r\nIcons in Items\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>\r\n    Icon End\r\n  </ion-label>\r\n  <ion-icon name="information-circle" slot="end"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Large Icon End\r\n  </ion-label>\r\n  <ion-icon name="information-circle" size="large" slot="end"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Small Icon End\r\n  </ion-label>\r\n  <ion-icon name="information-circle" size="small" slot="end"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-icon name="star" slot="start"></ion-icon>\r\n  <ion-label>\r\n    Icon Start\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Two Icons End\r\n  </ion-label>\r\n  <ion-icon name="checkmark-circle" slot="end"></ion-icon>\r\n  <ion-icon name="shuffle" slot="end"></ion-icon>\r\n</ion-item>\r\n```\r\n\r\nItem Inputs\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label position="floating">Datetime</ion-label>\r\n  <ion-datetime></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Select</ion-label>\r\n  <ion-select>\r\n    <ion-select-option value="">No Game Console</ion-select-option>\r\n    <ion-select-option value="nes">NES</ion-select-option>\r\n    <ion-select-option value="n64" selected>Nintendo64</ion-select-option>\r\n    <ion-select-option value="ps">PlayStation</ion-select-option>\r\n    <ion-select-option value="genesis">Sega Genesis</ion-select-option>\r\n    <ion-select-option value="saturn">Sega Saturn</ion-select-option>\r\n    <ion-select-option value="snes">SNES</ion-select-option>\r\n  </ion-select>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Toggle</ion-label>\r\n  <ion-toggle slot="end"></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Floating Input</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Input (placeholder)</ion-label>\r\n  <ion-input placeholder="Placeholder"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Checkbox</ion-label>\r\n  <ion-checkbox slot="start"></ion-checkbox>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Range</ion-label>\r\n  <ion-range></ion-range>\r\n</ion-item>\r\n```\r\n',
        javascript:
          'Basic Usage\r\n\r\n```html\r\n<!-- Default Item -->\r\n<ion-item>\r\n  <ion-label>\r\n    Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Item as a Button -->\r\n<ion-item onclick="buttonClick()">\r\n  <ion-label>\r\n    Button Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Item as an Anchor -->\r\n<ion-item href="https://www.ionicframework.com">\r\n  <ion-label>\r\n    Anchor Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item color="secondary">\r\n  <ion-label>\r\n    Secondary Color Item\r\n  </ion-label>\r\n</ion-item>\r\n```\r\n\r\nDetail Arrows\r\n\r\n```html\r\n<ion-item detail>\r\n  <ion-label>\r\n    Standard Item with Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item onclick="buttonClick()" detail>\r\n  <ion-label>\r\n    Button Item with Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item detail="false" href="https://www.ionicframework.com">\r\n  <ion-label>\r\n    Anchor Item with no Detail Arrow\r\n  </ion-label>\r\n</ion-item>\r\n```\r\n\r\nList Items\r\n\r\n```html\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>\r\n      Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines="none">\r\n    <ion-label>\r\n      No Lines Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n    Multiline text that should wrap when it is too long\r\n    to fit on one line in the item.\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      <ion-text color="primary">\r\n        <h3>H3 Primary Title</h3>\r\n      </ion-text>\r\n      <p>Paragraph line 1</p>\r\n      <ion-text color="secondary">\r\n        <p>Paragraph line 2 secondary</p>\r\n      </ion-text>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item lines="full">\r\n    <ion-label>\r\n      Item with Full Lines\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n```\r\n\r\nItem Lines\r\n\r\n```html\r\n<!-- Item Inset Lines -->\r\n<ion-item lines="inset">\r\n  <ion-label>Item Lines Inset</ion-label>\r\n</ion-item>\r\n\r\n<!-- Item Full Lines -->\r\n<ion-item lines="full">\r\n  <ion-label>Item Lines Full</ion-label>\r\n</ion-item>\r\n\r\n<!-- Item None Lines -->\r\n<ion-item lines="none">\r\n  <ion-label>Item Lines None</ion-label>\r\n</ion-item>\r\n\r\n<!-- List Full Lines -->\r\n<ion-list lines="full">\r\n  <ion-item>\r\n    <ion-label>Full Lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Full Lines Item 2</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List Inset Lines -->\r\n<ion-list lines="inset">\r\n  <ion-item>\r\n    <ion-label>Inset Lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Inset Lines Item 2</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List No Lines -->\r\n<ion-list lines="none">\r\n  <ion-item>\r\n    <ion-label>No lines Item 1</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>No lines Item 2</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>No lines Item 3</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n\r\nMedia Items\r\n\r\n```html\r\n<ion-item onclick="testClick()">\r\n  <ion-avatar slot="start">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-avatar>\r\n  <ion-label>\r\n    Avatar Start, Button Item\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item href="#">\r\n  <ion-label>\r\n    Thumbnail End, Anchor Item\r\n  </ion-label>\r\n  <ion-thumbnail slot="end">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-thumbnail>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-thumbnail slot="start">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h2>H2 Title Text</h2>\r\n    <p>Button on right</p>\r\n  </ion-label>\r\n  <ion-button fill="outline" slot="end">View</ion-button>\r\n</ion-item>\r\n\r\n<ion-item onclick="testClick()">\r\n  <ion-thumbnail slot="start">\r\n    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h3>H3 Title Text</h3>\r\n    <p>Icon on right</p>\r\n  </ion-label>\r\n  <ion-icon name="close-circle" slot="end"></ion-icon>\r\n</ion-item>\r\n```\r\n\r\nButtons in Items\r\n\r\n```html\r\n<ion-item>\r\n  <ion-button slot="start">\r\n    Start\r\n  </ion-button>\r\n  <ion-label>Button Start/End</ion-label>\r\n  <ion-button slot="end">\r\n    End\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button slot="start">\r\n    Start Icon\r\n    <ion-icon name="home" slot="end"></ion-icon>\r\n  </ion-button>\r\n  <ion-label>Buttons with Icons</ion-label>\r\n  <ion-button slot="end">\r\n    <ion-icon name="star" slot="end"></ion-icon>\r\n    End Icon\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-button slot="start">\r\n    <ion-icon slot="icon-only" name="navigate"></ion-icon>\r\n  </ion-button>\r\n  <ion-label>Icon only Buttons</ion-label>\r\n  <ion-button slot="end">\r\n    <ion-icon slot="icon-only" name="star"></ion-icon>\r\n  </ion-button>\r\n</ion-item>\r\n```\r\n\r\nIcons in Items\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>\r\n    Icon End\r\n  </ion-label>\r\n  <ion-icon name="information-circle" slot="end"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Large Icon End\r\n  </ion-label>\r\n  <ion-icon name="information-circle" size="large" slot="end"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Small Icon End\r\n  </ion-label>\r\n  <ion-icon name="information-circle" size="small" slot="end"></ion-icon>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-icon name="star" slot="start"></ion-icon>\r\n  <ion-label>\r\n    Icon Start\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>\r\n    Two Icons End\r\n  </ion-label>\r\n  <ion-icon name="checkmark-circle" slot="end"></ion-icon>\r\n  <ion-icon name="shuffle" slot="end"></ion-icon>\r\n</ion-item>\r\n```\r\n\r\nItem Inputs\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label position="floating">Datetime</ion-label>\r\n  <ion-datetime></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Select</ion-label>\r\n  <ion-select>\r\n    <ion-select-option value="">No Game Console</ion-select-option>\r\n    <ion-select-option value="nes">NES</ion-select-option>\r\n    <ion-select-option value="n64" selected>Nintendo64</ion-select-option>\r\n    <ion-select-option value="ps">PlayStation</ion-select-option>\r\n    <ion-select-option value="genesis">Sega Genesis</ion-select-option>\r\n    <ion-select-option value="saturn">Sega Saturn</ion-select-option>\r\n    <ion-select-option value="snes">SNES</ion-select-option>\r\n  </ion-select>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Toggle</ion-label>\r\n  <ion-toggle slot="end"></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Floating Input</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Input (placeholder)</ion-label>\r\n  <ion-input placeholder="Placeholder"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Checkbox</ion-label>\r\n  <ion-checkbox slot="start"></ion-checkbox>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Range</ion-label>\r\n  <ion-range></ion-range>\r\n</ion-item>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonSelect, IonSelectOption, IonDatetime, IonToggle, IonInput, IonCheckbox, IonRange } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Item --*/}\r\n    <IonItem>\r\n      <IonLabel>\r\n        Item\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- Item as a Button --*/}\r\n    <IonItem onClick={() => {}}>\r\n      <IonLabel>\r\n        Button Item\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- Item as an Anchor --*/}\r\n    <IonItem href="https://www.ionicframework.com">\r\n      <IonLabel>\r\n        Anchor Item\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItem color="secondary">\r\n      <IonLabel>\r\n        Secondary Color Item\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- Detail Arrows --*/}\r\n\r\n    <IonItem detail>\r\n      <IonLabel>\r\n        Standard Item with Detail Arrow\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItem onClick={() => {}} detail>\r\n      <IonLabel>\r\n        Button Item with Detail Arrow\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItem detail={false} href="https://www.ionicframework.com">\r\n      <IonLabel>\r\n        Anchor Item with no Detail Arrow\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n\r\n    <IonList>\r\n      <IonItem>\r\n        <IonLabel>\r\n          Item\r\n        </IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem lines="none">\r\n        <IonLabel>\r\n          No Lines Item\r\n        </IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel text-wrap>\r\n        Multiline text that should wrap when it is too long\r\n        to fit on one line in the item.\r\n        </IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel text-wrap>\r\n          <IonText color="primary">\r\n            <h3>H3 Primary Title</h3>\r\n          </IonText>\r\n          <p>Paragraph line 1</p>\r\n          <IonText color="secondary">\r\n            <p>Paragraph line 2 secondary</p>\r\n          </IonText>\r\n        </IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem lines="full">\r\n        <IonLabel>\r\n          Item with Full Lines\r\n        </IonLabel>\r\n      </IonItem>\r\n\r\n    </IonList>\r\n\r\n\r\n    {/*-- Item Inset Lines --*/}\r\n    <IonItem lines="inset">\r\n      <IonLabel>Item Lines Inset</IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- Item Full Lines --*/}\r\n    <IonItem lines="full">\r\n      <IonLabel>Item Lines Full</IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- Item None Lines --*/}\r\n    <IonItem lines="none">\r\n      <IonLabel>Item Lines None</IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- List Full Lines --*/}\r\n    <IonList lines="full">\r\n      <IonItem>\r\n        <IonLabel>Full Lines Item 1</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Full Lines Item 2</IonLabel>\r\n      </IonItem>\r\n    </IonList>\r\n\r\n    {/*-- List Inset Lines --*/}\r\n    <IonList lines="inset">\r\n      <IonItem>\r\n        <IonLabel>Inset Lines Item 1</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Inset Lines Item 2</IonLabel>\r\n      </IonItem>\r\n    </IonList>\r\n\r\n    {/*-- List No Lines --*/}\r\n    <IonList lines="none">\r\n      <IonItem>\r\n        <IonLabel>No lines Item 1</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>No lines Item 2</IonLabel>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>No lines Item 3</IonLabel>\r\n      </IonItem>\r\n    </IonList>\r\n\r\n\r\n\r\n    <IonItem onClick={() => {}}>\r\n      <IonAvatar slot="start">\r\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />\r\n      </IonAvatar>\r\n      <IonLabel>\r\n        Avatar Start, Button Item\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItem href="#">\r\n      <IonLabel>\r\n        Thumbnail End, Anchor Item\r\n      </IonLabel>\r\n      <IonThumbnail slot="end">\r\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />\r\n      </IonThumbnail>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonThumbnail slot="start">\r\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />\r\n      </IonThumbnail>\r\n      <IonLabel>\r\n        <h2>H2 Title Text</h2>\r\n        <p>Button on right</p>\r\n      </IonLabel>\r\n      <IonButton fill="outline" slot="end">View</IonButton>\r\n    </IonItem>\r\n\r\n    <IonItem onClick={() => {}}>\r\n      <IonThumbnail slot="start">\r\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />\r\n      </IonThumbnail>\r\n      <IonLabel>\r\n        <h3>H3 Title Text</h3>\r\n        <p>Icon on right</p>\r\n      </IonLabel>\r\n      <IonIcon name="close-circle" slot="end" />\r\n    </IonItem>\r\n\r\n\r\n    Buttons in Items\r\n\r\n\r\n    <IonItem>\r\n      <IonButton slot="start">\r\n        Start\r\n      </IonButton>\r\n      <IonLabel>Button Start/End</IonLabel>\r\n      <IonButton slot="end">\r\n        End\r\n      </IonButton>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonButton slot="start">\r\n        Start Icon\r\n        <IonIcon name="home" slot="end" />\r\n      </IonButton>\r\n      <IonLabel>Buttons with Icons</IonLabel>\r\n      <IonButton slot="end">\r\n        <IonIcon name="star" slot="end" />\r\n        End Icon\r\n      </IonButton>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonButton slot="start">\r\n        <IonIcon slot="icon-only" name="navigate" />\r\n      </IonButton>\r\n      <IonLabel>Icon only Buttons</IonLabel>\r\n      <IonButton slot="end">\r\n        <IonIcon slot="icon-only" name="star" />\r\n      </IonButton>\r\n    </IonItem>\r\n\r\n\r\n    <IonItem>\r\n      <IonLabel>\r\n        Icon End\r\n      </IonLabel>\r\n      <IonIcon name="information-circle" slot="end" />\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>\r\n        Large Icon End\r\n      </IonLabel>\r\n      <IonIcon name="information-circle" size="large" slot="end" />\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>\r\n        Small Icon End\r\n      </IonLabel>\r\n      <IonIcon name="information-circle" size="small" slot="end" />\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonIcon name="star" slot="start" />\r\n      <IonLabel>\r\n        Icon Start\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>\r\n        Two Icons End\r\n      </IonLabel>\r\n      <IonIcon name="checkmark-circle" slot="end" />\r\n      <IonIcon name="shuffle" slot="end" />\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">Datetime</IonLabel>\r\n      <IonDatetime></IonDatetime>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">Select</IonLabel>\r\n      <IonSelect>\r\n        <IonSelectOption value="">No Game Console</IonSelectOption>\r\n        <IonSelectOption value="nes">NES</IonSelectOption>\r\n        <IonSelectOption value="n64" selected>Nintendo64</IonSelectOption>\r\n        <IonSelectOption value="ps">PlayStation</IonSelectOption>\r\n        <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>\r\n        <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>\r\n        <IonSelectOption value="snes">SNES</IonSelectOption>\r\n      </IonSelect>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Toggle</IonLabel>\r\n      <IonToggle slot="end"></IonToggle>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">Floating Input</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Input (placeholder)</IonLabel>\r\n      <IonInput placeholder="Placeholder"></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Checkbox</IonLabel>\r\n      <IonCheckbox slot="start" />\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Range</IonLabel>\r\n      <IonRange></IonRange>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          'Basic Usage\r\n\r\n```html\r\n<template>\r\n  <!-- Default Item -->\r\n  <ion-item>\r\n    <ion-label>\r\n      Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <!-- Item as a Button -->\r\n  <ion-item @click="buttonClick()">\r\n    <ion-label>\r\n      Button Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <!-- Item as an Anchor -->\r\n  <ion-item href="https://www.ionicframework.com">\r\n    <ion-label>\r\n      Anchor Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item color="secondary">\r\n    <ion-label>\r\n      Secondary Color Item\r\n    </ion-label>\r\n  </ion-item>\r\n</template>\r\n```\r\n\r\nDetail Arrows\r\n\r\n```html\r\n<template>\r\n  <ion-item detail>\r\n    <ion-label>\r\n      Standard Item with Detail Arrow\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item @click="buttonClick()" detail>\r\n    <ion-label>\r\n      Button Item with Detail Arrow\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item detail="false" href="https://www.ionicframework.com">\r\n    <ion-label>\r\n      Anchor Item with no Detail Arrow\r\n    </ion-label>\r\n  </ion-item>\r\n</template>\r\n```\r\n\r\nList Items\r\n\r\n```html\r\n<template>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>\r\n        Item\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines="none">\r\n      <ion-label>\r\n        No Lines Item\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label text-wrap>\r\n      Multiline text that should wrap when it is too long\r\n      to fit on one line in the item.\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label text-wrap>\r\n        <ion-text color="primary">\r\n          <h3>H3 Primary Title</h3>\r\n        </ion-text>\r\n        <p>Paragraph line 1</p>\r\n        <ion-text color="secondary">\r\n          <p>Paragraph line 2 secondary</p>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines="full">\r\n      <ion-label>\r\n        Item with Full Lines\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</template>\r\n```\r\n\r\nItem Lines\r\n\r\n```html\r\n<template>\r\n  <!-- Item Inset Lines -->\r\n  <ion-item lines="inset">\r\n    <ion-label>Item Lines Inset</ion-label>\r\n  </ion-item>\r\n\r\n  <!-- Item Full Lines -->\r\n  <ion-item lines="full">\r\n    <ion-label>Item Lines Full</ion-label>\r\n  </ion-item>\r\n\r\n  <!-- Item None Lines -->\r\n  <ion-item lines="none">\r\n    <ion-label>Item Lines None</ion-label>\r\n  </ion-item>\r\n\r\n  <!-- List Full Lines -->\r\n  <ion-list lines="full">\r\n    <ion-item>\r\n      <ion-label>Full Lines Item 1</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Full Lines Item 2</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- List Inset Lines -->\r\n  <ion-list lines="inset">\r\n    <ion-item>\r\n      <ion-label>Inset Lines Item 1</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Inset Lines Item 2</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- List No Lines -->\r\n  <ion-list lines="none">\r\n    <ion-item>\r\n      <ion-label>No lines Item 1</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>No lines Item 2</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>No lines Item 3</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n\r\n\r\nMedia Items\r\n\r\n```html\r\n<template>\r\n  <ion-item @click="testClick()">\r\n    <ion-avatar slot="start">\r\n      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      Avatar Start, Button Item\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item href="#">\r\n    <ion-label>\r\n      Thumbnail End, Anchor Item\r\n    </ion-label>\r\n    <ion-thumbnail slot="end">\r\n      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n    </ion-thumbnail>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-thumbnail slot="start">\r\n      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2>H2 Title Text</h2>\r\n      <p>Button on right</p>\r\n    </ion-label>\r\n    <ion-button fill="outline" slot="end">View</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item @click="testClick()">\r\n    <ion-thumbnail slot="start">\r\n      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h3>H3 Title Text</h3>\r\n      <p>Icon on right</p>\r\n    </ion-label>\r\n    <ion-icon name="close-circle" slot="end"></ion-icon>\r\n  </ion-item>\r\n</template>\r\n```\r\n\r\nButtons in Items\r\n\r\n```html\r\n<template>\r\n  <ion-item>\r\n    <ion-button slot="start">\r\n      Start\r\n    </ion-button>\r\n    <ion-label>Button Start/End</ion-label>\r\n    <ion-button slot="end">\r\n      End\r\n    </ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-button slot="start">\r\n      Start Icon\r\n      <ion-icon name="home" slot="end"></ion-icon>\r\n    </ion-button>\r\n    <ion-label>Buttons with Icons</ion-label>\r\n    <ion-button slot="end">\r\n      <ion-icon name="star" slot="end"></ion-icon>\r\n      End Icon\r\n    </ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-button slot="start">\r\n      <ion-icon slot="icon-only" name="navigate"></ion-icon>\r\n    </ion-button>\r\n    <ion-label>Icon only Buttons</ion-label>\r\n    <ion-button slot="end">\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n</template>\r\n```\r\n\r\nIcons in Items\r\n\r\n```html\r\n<template>\r\n  <ion-item>\r\n    <ion-label>\r\n      Icon End\r\n    </ion-label>\r\n    <ion-icon name="information-circle" slot="end"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Large Icon End\r\n    </ion-label>\r\n    <ion-icon name="information-circle" size="large" slot="end"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Small Icon End\r\n    </ion-label>\r\n    <ion-icon name="information-circle" size="small" slot="end"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-icon name="star" slot="start"></ion-icon>\r\n    <ion-label>\r\n      Icon Start\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Two Icons End\r\n    </ion-label>\r\n    <ion-icon name="checkmark-circle" slot="end"></ion-icon>\r\n    <ion-icon name="shuffle" slot="end"></ion-icon>\r\n  </ion-item>\r\n</template>\r\n```\r\n\r\nItem Inputs\r\n\r\n```html\r\n<template>\r\n  <ion-item>\r\n    <ion-label position="floating">Datetime</ion-label>\r\n    <ion-datetime></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="floating">Select</ion-label>\r\n    <ion-select>\r\n      <ion-select-option value="">No Game Console</ion-select-option>\r\n      <ion-select-option value="nes">NES</ion-select-option>\r\n      <ion-select-option value="n64" selected>Nintendo64</ion-select-option>\r\n      <ion-select-option value="ps">PlayStation</ion-select-option>\r\n      <ion-select-option value="genesis">Sega Genesis</ion-select-option>\r\n      <ion-select-option value="saturn">Sega Saturn</ion-select-option>\r\n      <ion-select-option value="snes">SNES</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Toggle</ion-label>\r\n    <ion-toggle slot="end"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="floating">Floating Input</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Input (placeholder)</ion-label>\r\n    <ion-input placeholder="Placeholder"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Checkbox</ion-label>\r\n    <ion-checkbox slot="start"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Range</ion-label>\r\n    <ion-range></ion-range>\r\n  </ion-item>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "button",
          type: "boolean",
          mutable: false,
          attr: "button",
          reflectToAttr: false,
          docs:
            "If `true`, a button tag will be rendered and the item will be tappable.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "detail",
          type: "boolean | undefined",
          mutable: false,
          attr: "detail",
          reflectToAttr: false,
          docs:
            "If `true`, a detail arrow will appear on the item. Defaults to `false` unless the `mode`\r\nis `ios` and an `href` or `button` property is present.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "detailIcon",
          type: "string",
          mutable: false,
          attr: "detail-icon",
          reflectToAttr: false,
          docs: "The icon to use when `detail` is set to `true`.",
          docsTags: [],
          default: "'ios-arrow-forward'",
          optional: false,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the item.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "href",
          type: "string | undefined",
          mutable: false,
          attr: "href",
          reflectToAttr: false,
          docs:
            "Contains a URL or a URL fragment that the hyperlink points to.\r\nIf this property is set, an anchor tag will be rendered.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "lines",
          type: '"full" | "inset" | "none" | undefined',
          mutable: false,
          attr: "lines",
          reflectToAttr: false,
          docs: "How the bottom border should be displayed on the item.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "routerDirection",
          type: '"back" | "forward" | "root"',
          mutable: false,
          attr: "router-direction",
          reflectToAttr: false,
          docs:
            "When using a router, it specifies the transition direction when navigating to\r\nanother page using `href`.",
          docsTags: [],
          default: "'forward'",
          optional: false,
          required: false
        },
        {
          name: "type",
          type: '"button" | "reset" | "submit"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs:
            "The type of the button. Only used when an `onclick` or `button` property is present.",
          docsTags: [],
          default: "'button'",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the item"
        },
        {
          name: "--background-activated",
          annotation: "prop",
          docs: "Background of the activated item"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Color of the item border"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Radius of the item border"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Style of the item border"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Width of the item border"
        },
        {
          name: "--box-shadow",
          annotation: "prop",
          docs: "Box shadow of the item"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the item"
        },
        {
          name: "--detail-icon-color",
          annotation: "prop",
          docs: "Color of the item detail icon"
        },
        {
          name: "--detail-icon-font-size",
          annotation: "prop",
          docs: "Font size of the item detail icon"
        },
        {
          name: "--detail-icon-opacity",
          annotation: "prop",
          docs: "Opacity of the item detail icon"
        },
        {
          name: "--highlight-color-focused",
          annotation: "prop",
          docs: "The color of the highlight on the item when focused"
        },
        {
          name: "--highlight-color-invalid",
          annotation: "prop",
          docs: "The color of the highlight on the item when invalid"
        },
        {
          name: "--highlight-color-valid",
          annotation: "prop",
          docs: "The color of the highlight on the item when valid"
        },
        {
          name: "--highlight-height",
          annotation: "prop",
          docs: "The height of the highlight on the item"
        },
        {
          name: "--inner-border-width",
          annotation: "prop",
          docs: "Width of the item inner border"
        },
        {
          name: "--inner-box-shadow",
          annotation: "prop",
          docs: "Box shadow of the item inner"
        },
        {
          name: "--inner-padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the item inner"
        },
        {
          name: "--inner-padding-end",
          annotation: "prop",
          docs: "End padding of the item inner"
        },
        {
          name: "--inner-padding-start",
          annotation: "prop",
          docs: "Start padding of the item inner"
        },
        {
          name: "--inner-padding-top",
          annotation: "prop",
          docs: "Top padding of the item inner"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the item"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the item"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the item"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the item"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the item"
        },
        {
          name: "--ripple-color",
          annotation: "prop",
          docs: "Color of the item ripple effect"
        },
        {
          name: "--transition",
          annotation: "prop",
          docs: "Transition of the item"
        }
      ],
      slots: [
        {
          name: "",
          docs:
            "Content is placed between the named slots if provided without a slot."
        },
        {
          name: "end",
          docs:
            "Content is placed to the right of the item text in LTR, and to the left in RTL."
        },
        {
          name: "start",
          docs:
            "Content is placed to the left of the item text in LTR, and to the right in RTL."
        }
      ]
    },
    {
      tag: "ion-label",
      encapsulation: "scoped",
      readme:
        "# ion-label\r\n\r\nLabel is a wrapper element that can be used in combination with `ion-item`, `ion-input`, `ion-toggle`, and more. The position of the label inside of an item can be inline, fixed, stacked, or floating.\r\n\r\n\r",
      docs:
        "Label is a wrapper element that can be used in combination with `ion-item`, `ion-input`, `ion-toggle`, and more. The position of the label inside of an item can be inline, fixed, stacked, or floating.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Label -->\r\n<ion-label>Label</ion-label>\r\n\r\n<!-- Label Colors -->\r\n<ion-label color="primary">Primary Label</ion-label>\r\n<ion-label color="secondary">Secondary Label</ion-label>\r\n<ion-label color="danger">Danger Label</ion-label>\r\n<ion-label color="light">Light Label</ion-label>\r\n<ion-label color="dark">Dark Label</ion-label>\r\n\r\n<!-- Item Labels -->\r\n<ion-item>\r\n  <ion-label>Default Item</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label text-wrap>\r\n    Multi-line text that should wrap when it is too long\r\n    to fit on one line in the item.\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Input Labels -->\r\n<ion-item>\r\n  <ion-label>Default Input</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="fixed">Fixed</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Floating</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="stacked">Stacked</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Toggle</ion-label>\r\n  <ion-toggle slot="end" checked></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-checkbox slot="start" checked></ion-checkbox>\r\n  <ion-label>Checkbox</ion-label>\r\n</ion-item>\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Label -->\r\n<ion-label>Label</ion-label>\r\n\r\n<!-- Label Colors -->\r\n<ion-label color="primary">Primary Label</ion-label>\r\n<ion-label color="secondary">Secondary Label</ion-label>\r\n<ion-label color="danger">Danger Label</ion-label>\r\n<ion-label color="light">Light Label</ion-label>\r\n<ion-label color="dark">Dark Label</ion-label>\r\n\r\n<!-- Item Labels -->\r\n<ion-item>\r\n  <ion-label>Default Item</ion-label>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label text-wrap>\r\n    Multi-line text that should wrap when it is too long\r\n    to fit on one line in the item.\r\n  </ion-label>\r\n</ion-item>\r\n\r\n<!-- Input Labels -->\r\n<ion-item>\r\n  <ion-label>Default Input</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="fixed">Fixed</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="floating">Floating</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position="stacked">Stacked</ion-label>\r\n  <ion-input></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label>Toggle</ion-label>\r\n  <ion-toggle slot="end" checked></ion-toggle>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-checkbox slot="start" checked></ion-checkbox>\r\n  <ion-label>Checkbox</ion-label>\r\n</ion-item>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonLabel, IonItem, IonInput, IonToggle, IonCheckbox } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Label --*/}\r\n    <IonLabel>Label</IonLabel>\r\n\r\n    {/*-- Label Colors --*/}\r\n    <IonLabel color="primary">Primary Label</IonLabel>\r\n    <IonLabel color="secondary">Secondary Label</IonLabel>\r\n    <IonLabel color="danger">Danger Label</IonLabel>\r\n    <IonLabel color="light">Light Label</IonLabel>\r\n    <IonLabel color="dark">Dark Label</IonLabel>\r\n\r\n    {/*-- Item Labels --*/}\r\n    <IonItem>\r\n      <IonLabel>Default Item</IonLabel>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel text-wrap>\r\n        Multi-line text that should wrap when it is too long\r\n        to fit on one line in the item.\r\n      </IonLabel>\r\n    </IonItem>\r\n\r\n    {/*-- Input Labels --*/}\r\n    <IonItem>\r\n      <IonLabel>Default Input</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="fixed">Fixed</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="floating">Floating</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel position="stacked">Stacked</IonLabel>\r\n      <IonInput></IonInput>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonLabel>Toggle</IonLabel>\r\n      <IonToggle slot="end" checked></IonToggle>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonCheckbox slot="start" checked />\r\n      <IonLabel>Checkbox</IonLabel>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Label -->\r\n  <ion-label>Label</ion-label>\r\n\r\n  <!-- Label Colors -->\r\n  <ion-label color="primary">Primary Label</ion-label>\r\n  <ion-label color="secondary">Secondary Label</ion-label>\r\n  <ion-label color="danger">Danger Label</ion-label>\r\n  <ion-label color="light">Light Label</ion-label>\r\n  <ion-label color="dark">Dark Label</ion-label>\r\n\r\n  <!-- Item Labels -->\r\n  <ion-item>\r\n    <ion-label>Default Item</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      Multi-line text that should wrap when it is too long\r\n      to fit on one line in the item.\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <!-- Input Labels -->\r\n  <ion-item>\r\n    <ion-label>Default Input</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="fixed">Fixed</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="floating">Floating</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position="stacked">Stacked</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Toggle</ion-label>\r\n    <ion-toggle slot="end" checked></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-checkbox slot="start" checked></ion-checkbox>\r\n    <ion-label>Checkbox</ion-label>\r\n  </ion-item>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "position",
          type: '"fixed" | "floating" | "stacked" | undefined',
          mutable: false,
          attr: "position",
          reflectToAttr: false,
          docs:
            "The position determines where and how the label behaves inside an item.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the label"
        }
      ],
      slots: []
    },
    {
      tag: "ion-list-header",
      encapsulation: "shadow",
      readme:
        "# ion-list-header\r\n\r\nListHeader a header component for a list.\r\nUnlike ItemDivider, ListHeaders are styled to be stand-out from the rest of the list items.\r\n\r\n\r",
      docs:
        "ListHeader a header component for a list.\r\nUnlike ItemDivider, ListHeaders are styled to be stand-out from the rest of the list items.",
      docsTags: [],
      usage: {
        javascript:
          "```html\r\n<ion-list>\r\n  <ion-list-header>\r\n    <ion-label>Items</ion-label>\r\n  </ion-list-header>\r\n  <ion-item>Item 1</ion-item>\r\n  <ion-item>Item 2</ion-item>\r\n  <ion-item>Item 3</ion-item>\r\n  <ion-item>Item 4</ion-item>\r\n  <ion-item>Item 5</ion-item>\r\n</ion-list>\r\n```\r\n"
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the list header"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the list header text"
        }
      ],
      slots: []
    },
    {
      tag: "ion-list",
      encapsulation: "none",
      readme:
        "# ion-list\r\n\r\nLists are made up of multiple rows of items which can contain text, buttons, toggles,\r\nicons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.\r\n\r\nLists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items.\r\n\r\n\r",
      docs:
        "Lists are made up of multiple rows of items which can contain text, buttons, toggles,\r\nicons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.\r\n\r\nLists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- List of Text Items -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pokémon Yellow</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Mega Man X</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>The Legend of Zelda</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Pac-Man</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Super Mario World</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List of Input Items -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Input</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Toggle</ion-label>\r\n    <ion-toggle slot="end"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Radio</ion-label>\r\n    <ion-radio slot="end"></ion-radio>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Checkbox</ion-label>\r\n    <ion-checkbox slot="start"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List of Sliding Items -->\r\n<ion-list>\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>Item</ion-label>\r\n    </ion-item>\r\n    <ion-item-options side="end">\r\n      <ion-item-option (click)="unread(item)">Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>Item</ion-label>\r\n    </ion-item>\r\n    <ion-item-options side="end">\r\n      <ion-item-option (click)="unread(item)">Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n```',
        javascript:
          '```html\r\n<!-- List of Text Items -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pokémon Yellow</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Mega Man X</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>The Legend of Zelda</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Pac-Man</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Super Mario World</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List of Input Items -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Input</ion-label>\r\n    <ion-input></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Toggle</ion-label>\r\n    <ion-toggle slot="end"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Radio</ion-label>\r\n    <ion-radio slot="end"></ion-radio>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Checkbox</ion-label>\r\n    <ion-checkbox slot="start"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n<!-- List of Sliding Items -->\r\n<ion-list>\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>Item</ion-label>\r\n    </ion-item>\r\n    <ion-item-options side="end">\r\n      <ion-item-option onClick="unread(item)">Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>Item</ion-label>\r\n    </ion-item>\r\n    <ion-item-options side="end">\r\n      <ion-item-option onClick="unread(item)">Unread</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n</ion-list>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- List of Text Items --*/}\r\n    <IonList>\r\n      <IonItem>\r\n        <IonLabel>Pokémon Yellow</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Mega Man X</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>The Legend of Zelda</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Pac-Man</IonLabel>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Super Mario World</IonLabel>\r\n      </IonItem>\r\n    </IonList>\r\n\r\n    {/*-- List of Input Items --*/}\r\n    <IonList>\r\n      <IonItem>\r\n        <IonLabel>Input</IonLabel>\r\n        <IonInput></IonInput>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Toggle</IonLabel>\r\n        <IonToggle slot="end"></IonToggle>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Radio</IonLabel>\r\n        <IonRadio slot="end"></IonRadio>\r\n      </IonItem>\r\n      <IonItem>\r\n        <IonLabel>Checkbox</IonLabel>\r\n        <IonCheckbox slot="start" />\r\n      </IonItem>\r\n    </IonList>\r\n\r\n    {/*-- List of Sliding Items --*/}\r\n    <IonList>\r\n      <IonItemSliding>\r\n        <IonItem>\r\n          <IonLabel>Item</IonLabel>\r\n        </IonItem>\r\n        <IonItemOptions side="end">\r\n          <IonItemOption onClick={() => {}}>Unread</IonItemOption>\r\n        </IonItemOptions>\r\n      </IonItemSliding>\r\n\r\n      <IonItemSliding>\r\n        <IonItem>\r\n          <IonLabel>Item</IonLabel>\r\n        </IonItem>\r\n        <IonItemOptions side="end">\r\n          <IonItemOption onClick={() => {}}>Unread</IonItemOption>\r\n        </IonItemOptions>\r\n      </IonItemSliding>\r\n    </IonList>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- List of Text Items -->\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Pokémon Yellow</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Mega Man X</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>The Legend of Zelda</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Pac-Man</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Super Mario World</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- List of Input Items -->\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Input</ion-label>\r\n      <ion-input></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Toggle</ion-label>\r\n      <ion-toggle slot="end"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Radio</ion-label>\r\n      <ion-radio slot="end"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Checkbox</ion-label>\r\n      <ion-checkbox slot="start"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- List of Sliding Items -->\r\n  <ion-list>\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>Item</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side="end">\r\n        <ion-item-option @click="unread(item)">Unread</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-label>Item</ion-label>\r\n      </ion-item>\r\n      <ion-item-options side="end">\r\n        <ion-item-option @click="unread(item)">Unread</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "inset",
          type: "boolean",
          mutable: false,
          attr: "inset",
          reflectToAttr: false,
          docs:
            "If `true`, the list will have margin around it and rounded corners.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "lines",
          type: '"full" | "inset" | "none" | undefined',
          mutable: false,
          attr: "lines",
          reflectToAttr: false,
          docs: "How the bottom border should be displayed on all items.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "closeSlidingItems",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "closeSlidingItems() => Promise<boolean>",
          parameters: [],
          docs:
            "If `ion-item-sliding` are used inside the list, this method closes\r\nany open sliding item.\r\n\r\nReturns `true` if an actual `ion-item-sliding` is closed.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-loading-controller",
      encapsulation: "none",
      readme:
        "# ion-loading-controller\r\n\r\nLoading controllers programmatically control the loading component. Loadings can be created and dismissed from the loading controller. View the [Loading](../loading) documentation for a full list of options to pass upon creation.\r\n\r\n\r\n\r\n\r",
      docs:
        "Loading controllers programmatically control the loading component. Loadings can be created and dismissed from the loading controller. View the [Loading](../loading) documentation for a full list of options to pass upon creation.",
      docsTags: [],
      usage: {
        javascript:
          "```javascript\r\nasync function presentLoading() {\r\n  const loadingController = document.querySelector('ion-loading-controller');\r\n  await loadingController.componentOnReady();\r\n\r\n  const loadingElement = await loadingController.create({\r\n    message: 'Please wait...',\r\n    spinner: 'crescent',\r\n    duration: 2000\r\n  });\r\n  return await loadingElement.present();\r\n}\r\n```\r\n"
      },
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonLoadingElement>",
            docs: ""
          },
          signature:
            "create(opts?: LoadingOptions | undefined) => Promise<HTMLIonLoadingElement>",
          parameters: [
            {
              name: "opts",
              type: "LoadingOptions | undefined",
              docs: ""
            }
          ],
          docs: "Create a loading overlay with loading options.",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open loading overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonLoadingElement | undefined>",
            docs: ""
          },
          signature: "getTop() => Promise<HTMLIonLoadingElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened loading overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-loading",
      encapsulation: "scoped",
      readme:
        "# ion-loading\r\n\r\nAn overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.\r\n\r\n\r\n### Creating\r\n\r\nLoading indicators can be created using a [Loading Controller](../loading-controller). They can be customized by passing loading options in the loading controller's create method. The spinner name should be passed in the `spinner` property, and any optional HTML can be passed in the `content` property. If a value is not passed to `spinner` the loading indicator will use the spinner specified by the platform.\r\n\r\n\r\n### Dismissing\r\n\r\nThe loading indicator can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options. To dismiss the loading indicator after creation, call the `dismiss()` method on the loading instance. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.\r\n\r\n\r",
      docs:
        "An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\nimport { LoadingController } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'loading-example',\r\n  templateUrl: 'loading-example.html',\r\n  styleUrls: ['./loading-example.css']\r\n})\r\nexport class LoadingExample {\r\n  constructor(public loadingController: LoadingController) {}\r\n\r\n  async presentLoading() {\r\n    const loading = await this.loadingController.create({\r\n      message: 'Hellooo',\r\n      duration: 2000\r\n    });\r\n    await loading.present();\r\n    \r\n    const { role, data } = await loading.onDidDismiss();\r\n    \r\n    console.log('Loading dismissed!');\r\n  }\r\n\r\n  async presentLoadingWithOptions() {\r\n    const loading = await this.loadingController.create({\r\n      spinner: null,\r\n      duration: 5000,\r\n      message: 'Please wait...',\r\n      translucent: true,\r\n      cssClass: 'custom-class custom-loading'\r\n    });\r\n    return await loading.present();\r\n  }\r\n}\r\n```\r\n",
        javascript:
          "```javascript\r\nasync function presentLoading() {\r\n  const loadingController = document.querySelector('ion-loading-controller');\r\n  await loadingController.componentOnReady();\r\n\r\n  const loading = await loadingController.create({\r\n    message: 'Hellooo',\r\n    duration: 2000\r\n  });\r\n  \r\n  await loading.present();\r\n    \r\n  const { role, data } = await loading.onDidDismiss();\r\n  \r\n  console.log('Loading dismissed!');\r\n}\r\n\r\nasync function presentLoadingWithOptions() {\r\n  const loadingController = document.querySelector('ion-loading-controller');\r\n  await loadingController.componentOnReady();\r\n\r\n  const loading = await loadingController.create({\r\n    spinner: null,\r\n    duration: 5000,\r\n    message: 'Please wait...',\r\n    translucent: true,\r\n    cssClass: 'custom-class custom-loading'\r\n  });\r\n  return await loading.present();\r\n}\r\n```\r\n",
        react:
          "```tsx\r\nimport React, { Component } from 'react'\r\nimport { IonLoading } from '@ionic/react';\r\n\r\ntype Props = {}\r\ntype State = {\r\n  showLoading1: boolean\r\n  showLoading2: boolean\r\n}\r\n\r\nexport class LoadingExample extends Component<Props, State> {\r\n\r\n  constructor(props: Props) {\r\n    super(props);\r\n    this.state = {\r\n      showLoading1: false\r\n      showLoading2: false\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IonLoading\r\n        isOpen={this.state.showLoading1}\r\n        onDidDismiss={() => this.setState(() => ({ showLoading1: false }))}\r\n        message={'Hellooo'}\r\n        duration={200}\r\n      >\r\n      </IonLoading>\r\n\r\n      <IonLoading\r\n        isOpen={this.state.showLoading2}\r\n        onDidDismiss={() => this.setState(() => ({ showLoading2: false }))}\r\n        spinner={null}\r\n        duration={5000}\r\n        message='Please wait...'}\r\n        translucent={true}\r\n        cssClass='custom-class custom-loading'\r\n      >\r\n      </IonLoading>\r\n    );\r\n  }\r\n}\r\n\r\n```\r\n",
        vue:
          "```html\r\n<template>\r\n  <IonVuePage :title=\"'Loading'\">\r\n    <ion-button @click=\"presentLoading\">Show Loading</ion-button>\r\n    <br />\r\n    <ion-button @click=\"presentLoadingWithOptions\">Show Loading</ion-button>\r\n  </IonVuePage>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    timeout: { type: Number, default: 1000 },\r\n  },\r\n  methods: {\r\n    presentLoading() {\r\n      return this.$ionic.loadingController\r\n        .create({\r\n          message: 'Loading',\r\n          duration: this.timeout,\r\n        })\r\n        .then(l => {\r\n          setTimeout(function() {\r\n            l.dismiss()\r\n          }, this.timeout)\r\n          return l.present()\r\n        })\r\n    },\r\n    presentLoadingWithOptions() {\r\n      return this.$ionic.loadingController\r\n        .create({\r\n          spinner: null,\r\n          duration: this.timeout,\r\n          message: 'Please wait...',\r\n          translucent: true,\r\n          cssClass: 'custom-class custom-loading',\r\n        })\r\n        .then(l => {\r\n          setTimeout(function() {\r\n            l.dismiss()\r\n          }, this.timeout)\r\n          return l.present()\r\n        })\r\n    },\r\n  },\r\n}\r\n</script>\r\n```\r\n"
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the loading indicator will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "backdropDismiss",
          type: "boolean",
          mutable: false,
          attr: "backdrop-dismiss",
          reflectToAttr: false,
          docs:
            "If `true`, the loading indicator will be dismissed when the backdrop is clicked.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "duration",
          type: "number",
          mutable: false,
          attr: "duration",
          reflectToAttr: false,
          docs:
            "Number of milliseconds to wait before dismissing the loading indicator.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the loading indicator is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the loading indicator is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "message",
          type: "string | undefined",
          mutable: false,
          attr: "message",
          reflectToAttr: false,
          docs: "Optional text content to display in the loading indicator.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "showBackdrop",
          type: "boolean",
          mutable: false,
          attr: "show-backdrop",
          reflectToAttr: false,
          docs:
            "If `true`, a backdrop will be displayed behind the loading indicator.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "spinner",
          type:
            '"bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined',
          mutable: true,
          attr: "spinner",
          reflectToAttr: false,
          docs: "The name of the spinner to display.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the loading indicator will be translucent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the loading overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the loading did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs:
            "Returns a promise that resolves when the loading will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the loading overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionLoadingDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the loading has dismissed.",
          docsTags: []
        },
        {
          event: "ionLoadingDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the loading has presented.",
          docsTags: []
        },
        {
          event: "ionLoadingWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the loading has dismissed.",
          docsTags: []
        },
        {
          event: "ionLoadingWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the loading has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the loading dialog"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the loading dialog"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the loading dialog"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the loading dialog"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the loading dialog"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the loading dialog"
        },
        {
          name: "--spinner-color",
          annotation: "prop",
          docs: "Color of the loading spinner"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the loading dialog"
        }
      ],
      slots: []
    },
    {
      tag: "ion-menu-button",
      encapsulation: "shadow",
      readme:
        "# ion-menu-button\r\n\r\nMenu Button is component that automatically creates the icon and functionality to open a menu on a page.\r\n\r\n\r",
      docs:
        "Menu Button is component that automatically creates the icon and functionality to open a menu on a page.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "autoHide",
          type: "boolean",
          mutable: false,
          attr: "auto-hide",
          reflectToAttr: false,
          docs:
            "Automatically hides the menu button when the corresponding menu is not active",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "menu",
          type: "string | undefined",
          mutable: false,
          attr: "menu",
          reflectToAttr: false,
          docs:
            "Optional property that maps to a Menu's `menuId` prop. Can also be `start` or `end` for the menu side. This is used to find the correct menu to toggle",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the menu button"
        }
      ],
      slots: []
    },
    {
      tag: "ion-menu-controller",
      encapsulation: "none",
      readme:
        "# ion-menu-controller\r\n\r\nThe Menu Controller makes it easy to control a Menu. The methods provided can be used to display the menu, enable the menu, toggle the menu, and more. The controller will grab a reference to the menu by the side, or id. if neither of these are passed to it, it will grab the first menu it finds.\r\n\r\n\r",
      docs:
        "The Menu Controller makes it easy to control a Menu. The methods provided can be used to display the menu, enable the menu, toggle the menu, and more. The controller will grab a reference to the menu by the side, or id. if neither of these are passed to it, it will grab the first menu it finds.",
      docsTags: [],
      usage: {},
      props: [],
      methods: [
        {
          name: "close",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "close(menuId?: string | null | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs:
            "Close the menu. If no menu is specified, then it will close any menu\r\nthat is open. If a menu is specified, it will close that menu.",
          docsTags: []
        },
        {
          name: "enable",
          returns: {
            type: "Promise<HTMLIonMenuElement | undefined>",
            docs: ""
          },
          signature:
            "enable(shouldEnable: boolean, menuId?: string | null | undefined) => Promise<HTMLIonMenuElement | undefined>",
          parameters: [
            {
              name: "shouldEnable",
              type: "boolean",
              docs: ""
            },
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs:
            "Used to enable or disable a menu. For example, there could be multiple\r\nleft menus, but only one of them should be able to be opened at the same\r\ntime. If there are multiple menus on the same side, then enabling one menu\r\nwill also automatically disable all the others that are on the same side.",
          docsTags: []
        },
        {
          name: "get",
          returns: {
            type: "Promise<HTMLIonMenuElement | undefined>",
            docs: ""
          },
          signature:
            "get(menuId?: string | null | undefined) => Promise<HTMLIonMenuElement | undefined>",
          parameters: [
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs:
            "Used to get a menu instance. If a menu is not provided then it will\r\nreturn the first menu found. If the specified menu is `start` or `end`, then\r\nit will return the enabled menu on that side. Otherwise, it will try to find\r\nthe menu using the menu's `id` property. If a menu is not found then it will\r\nreturn `null`.",
          docsTags: []
        },
        {
          name: "getMenus",
          returns: {
            type: "Promise<HTMLIonMenuElement[]>",
            docs: ""
          },
          signature: "getMenus() => Promise<HTMLIonMenuElement[]>",
          parameters: [],
          docs: "Returns an array of all menu instances.",
          docsTags: []
        },
        {
          name: "getOpen",
          returns: {
            type: "Promise<HTMLIonMenuElement | undefined>",
            docs: ""
          },
          signature: "getOpen() => Promise<HTMLIonMenuElement | undefined>",
          parameters: [],
          docs:
            "Returns the instance of the menu already opened, otherwise `null`.",
          docsTags: []
        },
        {
          name: "isAnimating",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "isAnimating() => Promise<boolean>",
          parameters: [],
          docs: "Returns `true` if any menu is currently animating.",
          docsTags: []
        },
        {
          name: "isEnabled",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "isEnabled(menuId?: string | null | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs: "Returns `true` if the specified menu is enabled.",
          docsTags: []
        },
        {
          name: "isOpen",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "isOpen(menuId?: string | null | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs:
            "Returns `true` if the specified menu is open. If the menu is not specified, it\r\nwill return `true` if any menu is currently open.",
          docsTags: []
        },
        {
          name: "open",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "open(menuId?: string | null | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs: "Open the menu.",
          docsTags: []
        },
        {
          name: "registerAnimation",
          returns: {
            type: "void",
            docs: ""
          },
          signature:
            "registerAnimation(name: string, animation: AnimationBuilder) => void",
          parameters: [
            {
              name: "name",
              type: "string",
              docs: ""
            },
            {
              name: "animation",
              type:
                "(Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>",
              docs: ""
            }
          ],
          docs:
            'Registers a new animation that can be used in any `ion-menu`.\r\n\r\n```\r\n   * <ion-menu type="my-animation">\r\n   * ```',
          docsTags: []
        },
        {
          name: "swipeGesture",
          returns: {
            type: "Promise<HTMLIonMenuElement | undefined>",
            docs: ""
          },
          signature:
            "swipeGesture(shouldEnable: boolean, menuId?: string | null | undefined) => Promise<HTMLIonMenuElement | undefined>",
          parameters: [
            {
              name: "shouldEnable",
              type: "boolean",
              docs: ""
            },
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs: "Used to enable or disable the ability to swipe open the menu.",
          docsTags: []
        },
        {
          name: "toggle",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "toggle(menuId?: string | null | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "menuId",
              type: "null | string | undefined",
              docs: ""
            }
          ],
          docs:
            "Toggle the menu. If it's closed, it will open, and if opened, it\r\nwill close.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-menu-toggle",
      encapsulation: "shadow",
      readme:
        "# ion-menu-toggle\r\n\r\nThe MenuToggle component can be used to toggle a menu open or closed.\r\n\r\nBy default, it's only visible when the selected menu is active. A menu is active when it can be opened/closed. If the menu is disabled or it's being presented as a split-pane, the menu is marked as non-active and ion-menu-toggle hides itself.\r\n\r\nIn case it's desired to keep `ion-menu-toggle` always visible, the `autoHide` property can be set to `false`.\r\n\r",
      docs:
        "The MenuToggle component can be used to toggle a menu open or closed.\r\n\r\nBy default, it's only visible when the selected menu is active. A menu is active when it can be opened/closed. If the menu is disabled or it's being presented as a split-pane, the menu is marked as non-active and ion-menu-toggle hides itself.\r\n\r\nIn case it's desired to keep `ion-menu-toggle` always visible, the `autoHide` property can be set to `false`.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "autoHide",
          type: "boolean",
          mutable: false,
          attr: "auto-hide",
          reflectToAttr: false,
          docs:
            "Automatically hides the content when the corresponding menu is not active.\r\n\r\nBy default, it's `true`. Change it to `false` in order to\r\nkeep `ion-menu-toggle` always visible regardless the state of the menu.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "menu",
          type: "string | undefined",
          mutable: false,
          attr: "menu",
          reflectToAttr: false,
          docs:
            "Optional property that maps to a Menu's `menuId` prop.\r\nCan also be `start` or `end` for the menu side.\r\nThis is used to find the correct menu to toggle.\r\n\r\nIf this property is not used, `ion-menu-toggle` will toggle the\r\nfirst menu that is active.",
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
      tag: "ion-menu",
      encapsulation: "shadow",
      readme:
        "# ion-menu\r\n\r\nThe Menu component is a navigation drawer that slides in from the side of the current view.\r\nBy default, it slides in from the left, but the side can be overridden.\r\nThe menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.\r\nThe menu element should be a sibling to the root content element.\r\nThere can be any number of menus attached to the content.\r\nThese can be controlled from the templates, or programmatically using the MenuController.\r\n\r\n\r",
      docs:
        "The Menu component is a navigation drawer that slides in from the side of the current view.\r\nBy default, it slides in from the left, but the side can be overridden.\r\nThe menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.\r\nThe menu element should be a sibling to the root content element.\r\nThere can be any number of menus attached to the content.\r\nThese can be controlled from the templates, or programmatically using the MenuController.",
      docsTags: [],
      usage: {
        angular:
          "```html\r\n<ion-menu side=\"start\" menuId=\"first\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Start Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-menu side=\"start\" menuId=\"custom\" class=\"my-custom-menu\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n      <ion-title>Custom Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-menu side=\"end\" type=\"push\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"danger\">\r\n      <ion-title>End Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n      <ion-item>Menu Item</ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet main></ion-router-outlet>\r\n```\r\n\r\n```typescript\r\nimport { Component } from '@angular/core';\r\nimport { MenuController } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'menu-example',\r\n  templateUrl: 'menu-example.html',\r\n  styleUrls: ['./menu-example.css'],\r\n})\r\nexport class MenuExample {\r\n\r\nconstructor(private menu: MenuController) { }\r\n\r\n  openFirst() {\r\n    this.menu.enable(true, 'first');\r\n    this.menu.open('first');\r\n  }\r\n\r\n  openEnd() {\r\n    this.menu.open('end');\r\n  }\r\n\r\n  openCustom() {\r\n    this.menu.enable(true, 'custom');\r\n    this.menu.open('custom');\r\n  }\r\n}\r\n```\r\n\r\n```css\r\n.my-custom-menu {\r\n  --width: 500px;\r\n}\r\n```",
        javascript:
          '```html\r\n<ion-app>\r\n  <ion-menu side="start" menu-id="first">\r\n    <ion-header>\r\n      <ion-toolbar color="primary">\r\n        <ion-title>Start Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-menu side="start" menu-id="custom" class="my-custom-menu">\r\n    <ion-header>\r\n      <ion-toolbar color="tertiary">\r\n        <ion-title>Custom Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-menu side="end" type="push">\r\n    <ion-header>\r\n      <ion-toolbar color="danger">\r\n        <ion-title>End Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <div class="ion-page" main>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu - Basic</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content padding>\r\n      <ion-button expand="block" onclick="openFirst()">Open Start Menu</ion-button>\r\n      <ion-button expand="block" onclick="openEnd()">Open End Menu</ion-button>\r\n      <ion-button expand="block" onclick="openCustom()">Open Custom Menu</ion-button>\r\n    </ion-content>\r\n  </div>\r\n\r\n</ion-app>\r\n<ion-menu-controller></ion-menu-controller>\r\n```\r\n\r\n```javascript\r\nconst menuCtrl = document.querySelector(\'ion-menu-controller\');\r\n\r\nfunction openFirst() {\r\n  menuCtrl.enable(true, \'first\');\r\n  menuCtrl.open(\'first\');\r\n}\r\n\r\nfunction openEnd() {\r\n  menuCtrl.open(\'end\');\r\n}\r\n\r\nfunction openCustom() {\r\n  menuCtrl.enable(true, \'custom\');\r\n  menuCtrl.open(\'custom\');\r\n}\r\n```\r\n\r\n```css\r\n.my-custom-menu {\r\n  --width: 500px;\r\n}\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonMenu side="start" menuId="first">\r\n      <IonHeader>\r\n        <IonToolbar color="primary">\r\n          <IonTitle>Start Menu</IonTitle>\r\n        </IonToolbar>\r\n      </IonHeader>\r\n      <IonContent>\r\n        <IonList>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n        </IonList>\r\n      </IonContent>\r\n    </IonMenu>\r\n\r\n    <IonMenu side="start" menuId="custom" class="my-custom-menu">\r\n      <IonHeader>\r\n        <IonToolbar color="tertiary">\r\n          <IonTitle>Custom Menu</IonTitle>\r\n        </IonToolbar>\r\n      </IonHeader>\r\n      <IonContent>\r\n        <IonList>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n        </IonList>\r\n      </IonContent>\r\n    </IonMenu>\r\n\r\n    <IonMenu side="end" type="push">\r\n      <IonHeader>\r\n        <IonToolbar color="danger">\r\n          <IonTitle>End Menu</IonTitle>\r\n        </IonToolbar>\r\n      </IonHeader>\r\n      <IonContent>\r\n        <IonList>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n          <IonItem>Menu Item</IonItem>\r\n        </IonList>\r\n      </IonContent>\r\n    </IonMenu>\r\n    <IonRouterOutlet></IonRouterOutlet>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-menu side="start" menuId="first">\r\n    <ion-header>\r\n      <ion-toolbar color="primary">\r\n        <ion-title>Start Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-menu side="start" menuId="custom" class="my-custom-menu">\r\n    <ion-header>\r\n      <ion-toolbar color="tertiary">\r\n        <ion-title>Custom Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-menu side="end" type="push">\r\n    <ion-header>\r\n      <ion-toolbar color="danger">\r\n        <ion-title>End Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n        <ion-item>Menu Item</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet main></ion-router-outlet>\r\n</template>\r\n<style>\r\n.my-custom-menu {\r\n  --width: 500px;\r\n}\r\n</style>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class MenuExample extends Vue {\r\n\r\n    openFirst() {\r\n      this.menu.enable(true, \'first\');\r\n      this.menu.open(\'first\');\r\n    }\r\n\r\n    openEnd() {\r\n      this.menu.open(\'end\');\r\n    }\r\n\r\n    openCustom() {\r\n      this.menu.enable(true, \'custom\');\r\n      this.menu.open(\'custom\');\r\n    }\r\n  }\r\n</script>\r\n```'
      },
      props: [
        {
          name: "contentId",
          type: "string | undefined",
          mutable: false,
          attr: "content-id",
          reflectToAttr: false,
          docs: "The content's id the menu should use.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: true,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the menu is disabled.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "maxEdgeStart",
          type: "number",
          mutable: false,
          attr: "max-edge-start",
          reflectToAttr: false,
          docs:
            "The edge threshold for dragging the menu open.\r\nIf a drag/swipe happens over this value, the menu is not triggered.",
          docsTags: [],
          default: "50",
          optional: false,
          required: false
        },
        {
          name: "menuId",
          type: "string | undefined",
          mutable: false,
          attr: "menu-id",
          reflectToAttr: false,
          docs: "An id for the menu.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "side",
          type: '"end" | "start"',
          mutable: false,
          attr: "side",
          reflectToAttr: true,
          docs: "Which side of the view the menu should be placed.",
          docsTags: [],
          default: "'start'",
          optional: false,
          required: false
        },
        {
          name: "swipeGesture",
          type: "boolean",
          mutable: false,
          attr: "swipe-gesture",
          reflectToAttr: false,
          docs: "If `true`, swiping the menu is enabled.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "type",
          type: "string | undefined",
          mutable: true,
          attr: "type",
          reflectToAttr: false,
          docs:
            'The display type of the menu.\r\nAvailable options: `"overlay"`, `"reveal"`, `"push"`.',
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "close",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "close(animated?: boolean) => Promise<boolean>",
          parameters: [
            {
              name: "animated",
              type: "boolean",
              docs: ""
            }
          ],
          docs:
            "Closes the menu. If the menu is already closed or it can't be closed,\r\nit returns `false`.",
          docsTags: []
        },
        {
          name: "isActive",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "isActive() => Promise<boolean>",
          parameters: [],
          docs:
            "Returns `true` is the menu is active.\r\n\r\nA menu is active when it can be opened or closed, meaning it's enabled\r\nand it's not part of a `ion-split-pane`.",
          docsTags: []
        },
        {
          name: "isOpen",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "isOpen() => Promise<boolean>",
          parameters: [],
          docs: "Returns `true` is the menu is open.",
          docsTags: []
        },
        {
          name: "open",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "open(animated?: boolean) => Promise<boolean>",
          parameters: [
            {
              name: "animated",
              type: "boolean",
              docs: ""
            }
          ],
          docs:
            "Opens the menu. If the menu is already open or it can't be opened,\r\nit returns `false`.",
          docsTags: []
        },
        {
          name: "setOpen",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>",
          parameters: [
            {
              name: "shouldOpen",
              type: "boolean",
              docs: ""
            },
            {
              name: "animated",
              type: "boolean",
              docs: ""
            }
          ],
          docs:
            "Opens or closes the button.\r\nIf the operation can't be completed successfully, it returns `false`.",
          docsTags: []
        },
        {
          name: "toggle",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "toggle(animated?: boolean) => Promise<boolean>",
          parameters: [
            {
              name: "animated",
              type: "boolean",
              docs: ""
            }
          ],
          docs:
            "Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.\r\nIf the operation can't be completed successfully, it returns `false`.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionDidClose",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the menu is closed.",
          docsTags: []
        },
        {
          event: "ionDidOpen",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the menu is open.",
          docsTags: []
        },
        {
          event: "ionWillClose",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the menu is about to be closed.",
          docsTags: []
        },
        {
          event: "ionWillOpen",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the menu is about to be opened.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the menu"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the menu"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the menu"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the menu"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the menu"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the menu"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the menu"
        }
      ],
      slots: []
    },
    {
      tag: "ion-modal-controller",
      encapsulation: "none",
      readme:
        "# ion-modal-controller\r\n\r\nModal controllers programmatically control the modal component. Modals can be created and dismissed from the modal controller. View the [Modal](../modal) documentation for a full list of options to pass upon creation.\r\n\r\n\r",
      docs:
        "Modal controllers programmatically control the modal component. Modals can be created and dismissed from the modal controller. View the [Modal](../modal) documentation for a full list of options to pass upon creation.",
      docsTags: [],
      usage: {},
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonModalElement>",
            docs: ""
          },
          signature:
            "create<T extends ComponentRef>(opts: ModalOptions<T>) => Promise<HTMLIonModalElement>",
          parameters: [
            {
              name: "opts",
              type: "ModalOptions<T>",
              docs: ""
            }
          ],
          docs: "Create a modal overlay with modal options.",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open modal overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonModalElement | undefined>",
            docs: ""
          },
          signature: "getTop() => Promise<HTMLIonModalElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened modal overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-modal",
      encapsulation: "scoped",
      readme:
        "# ion-modal\r\n\r\nA Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.\r\n\r\n\r\n### Creating\r\n\r\nModals can be created using a [Modal Controller](../modal-controller). They can be customized by passing modal options in the modal controller's create method.\r\n\r\n\r\n### Passing paramaters\r\n\r\nWhen a modal is created, paramaters might be passed to the newly created modal:\r\n\r\n```ts\r\n// Create a modal using MyModalComponent with some initial data\r\nconst modal = await modalController.create({\r\n  component: MyModalComponent,\r\n  componentProps: {\r\n    'prop1': value,\r\n    'prop2': value2\r\n  }\r\n});\r\n```\r\n\r\nUnder the hood, the controller creates a new `ion-modal` and attaches the specified component to it.\r\nIt also assigns the specified `componentProps` to the component's instance:\r\n\r\n```js\r\n// pseudo-code\r\nconst instance = create(MyModalComponent);\r\ninstance.prop1 = value;\r\ninstance.prop2 = value2;\r\n```\r\n\r\nThis way, your component can access the passed params, check the \"Usage\" section for further code example for each frameworks.\r\n\r\n\r\n### Returning data\r\n\r\nModals can also return data back to the controller when they are dismissed.\r\n\r\n```js\r\nconst modal = await modalController.create({...});\r\nconst { data } = await modal.onDidDismiss();\r\nconsole.log(data);\r\n```\r\n\r\n```js\r\n// Dismiss the top modal returning some data object\r\nmodalController.dismiss({\r\n  'result': value\r\n})\r\n```\r\n\r\n\r",
      docs:
        "A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\nimport { ModalController } from '@ionic/angular';\r\nimport { ModalPage } from '../modal/modal.page';\r\n@Component({\r\n  selector: 'modal-example',\r\n  templateUrl: 'modal-example.html',\r\n  styleUrls: ['./modal-example.css']\r\n})\r\nexport class ModalExample {\r\n  constructor(public modalController: ModalController) {}\r\n\r\n  async presentModal() {\r\n    const modal = await this.modalController.create({\r\n      component: ModalPage,\r\n      componentProps: { value: 123 }\r\n    });\r\n    return await modal.present();\r\n  }\r\n}\r\n```\r\n\r\n```typescript\r\nimport { Component } from '@angular/core';\r\nimport { NavParams } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'modal-page',\r\n})\r\nexport class ModalExample {\r\n\r\n  // \"value\" passed in componentProps\r\n  @Input() value: number;\r\n\r\n  constructor(navParams: NavParams) {\r\n    // componentProps can also be accessed at construction time using NavParams\r\n  }\r\n\r\n}\r\n```\r\n",
        javascript:
          "```html\r\n<body>\r\n  <ion-modal-controller></ion-modal-controller>\r\n</body>\r\n```\r\n\r\n```javascript\r\ncustomElements.define('modal-page', class extends HTMLElement {\r\n  connectedCallback() {\r\n    this.innerHTML = `\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Super Modal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  Content\r\n</ion-content>`;\r\n  }\r\n});\r\n\r\nasync function presentModal() {\r\n  // initialize controller\r\n  const modalController = document.querySelector('ion-modal-controller');\r\n  await modalController.componentOnReady();\r\n\r\n  // present the modal\r\n  const modalElement = await modalController.create({\r\n    component: 'modal-page'\r\n  });\r\n  await modalElement.present();\r\n}\r\n```\r\n",
        react:
          "```tsx\r\nimport React, { Component } from 'react'\r\nimport { IonModal } from '@ionic/react';\r\n\r\ntype Props = {}\r\ntype State = {\r\n  showModal: boolean\r\n}\r\n\r\nexport class ModalExample extends Component<Props, State> {\r\n\r\n  constructor(props: Props) {\r\n    super(props);\r\n    this.state = {\r\n      showModal: false\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IonModal\r\n        isOpen={this.state.showModal}\r\n        onDidDismiss={() => this.setState(() => ({ showModal: false }))}\r\n      >\r\n        <p>This is modal content</p>\r\n        <IonButton onClick={() => this.setState(() => ({ showModal: false }))}>\r\n          Close Modal\r\n        </IonButton>\r\n      </IonModal>\r\n    );\r\n  }\r\n}\r\n\r\n```\r\n",
        vue:
          "```html\r\n<template>\r\n  <div>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>{{ title }}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content padding>\r\n      {{ content }}\r\n    </ion-content>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'Modal',\r\n  props: {\r\n    title: { type: String, default: 'Super Modal' },\r\n  },\r\n  data() {\r\n    return {\r\n      content: 'Content',\r\n    }\r\n  },\r\n}\r\n</script>\r\n```\r\n\r\n```html\r\n<template>\r\n  <ion-page class=\"ion-page\" main>\r\n    <ion-content class=\"ion-content\" padding>\r\n      <ion-button @click=\"openModal\">Open Modal</ion-button>\r\n    </ion-content>\r\n  </ion-page>\r\n</template>\r\n\r\n<script>\r\nimport Modal from './modal.vue'\r\n\r\nexport default {\r\n  methods: {\r\n    openModal() {\r\n      return this.$ionic.modalController\r\n        .create({\r\n          component: Modal,\r\n          componentProps: {\r\n            data: {\r\n              content: 'New Content',\r\n            },\r\n            propsData: {\r\n              title: 'New title',\r\n            },\r\n          },\r\n        })\r\n        .then(m => m.present())\r\n    },\r\n  },\r\n}\r\n</script>\r\n```\r\n"
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the modal will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "backdropDismiss",
          type: "boolean",
          mutable: false,
          attr: "backdrop-dismiss",
          reflectToAttr: false,
          docs:
            "If `true`, the modal will be dismissed when the backdrop is clicked.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "component",
          type: "Function | HTMLElement | null | string",
          mutable: false,
          attr: "component",
          reflectToAttr: false,
          docs: "The component to display inside of the modal.",
          docsTags: [],
          optional: false,
          required: true
        },
        {
          name: "componentProps",
          type: "undefined | { [key: string]: any; }",
          mutable: false,
          reflectToAttr: false,
          docs: "The data to pass to the modal component.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the modal is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the modal is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "showBackdrop",
          type: "boolean",
          mutable: false,
          attr: "show-backdrop",
          reflectToAttr: false,
          docs: "If `true`, a backdrop will be displayed behind the modal.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the modal overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the modal did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the modal will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the modal overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionModalDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the modal has dismissed.",
          docsTags: []
        },
        {
          event: "ionModalDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the modal has presented.",
          docsTags: []
        },
        {
          event: "ionModalWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the modal has dismissed.",
          docsTags: []
        },
        {
          event: "ionModalWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the modal has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the modal content"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Border color of the modal content"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the modal content"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Border style of the modal content"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Border width of the modal content"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the modal"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the modal"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the modal"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the modal"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the modal"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the modal"
        }
      ],
      slots: []
    },
    {
      tag: "ion-nav-pop",
      encapsulation: "none",
      readme:
        "# ion-nav-pop\r\n\r\n`NavPop` is a component used the automatically go back in navigation. It is the element from of `NavController.pop()`\r\n\r\n\r",
      docs:
        "`NavPop` is a component used the automatically go back in navigation. It is the element from of `NavController.pop()`",
      docsTags: [],
      usage: {},
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-nav-push",
      encapsulation: "none",
      readme:
        "# ion-nav-push\r\n\r\n`NavPush` is a component used to navigate to the specified component.\r\nIt is the element form of `NavController.push()`\r\n\r\n\r",
      docs:
        "`NavPush` is a component used to navigate to the specified component.\r\nIt is the element form of `NavController.push()`",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "component",
          type:
            "Function | HTMLElement | ViewController | null | string | undefined",
          mutable: false,
          attr: "component",
          reflectToAttr: false,
          docs: "Component to navigate to",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "componentProps",
          type: "undefined | { [key: string]: any; }",
          mutable: false,
          reflectToAttr: false,
          docs: "Data you want to pass to the component as props",
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
      tag: "ion-nav-set-root",
      encapsulation: "none",
      readme:
        "# ion-nav-set-root\r\n\r\n`NavSetRoot` is an element that allows you to set the root of the current navigation stack.\r\nIt is the element form a calling `NavController.setRoot()`\r\n\r\n\r",
      docs:
        "`NavSetRoot` is an element that allows you to set the root of the current navigation stack.\r\nIt is the element form a calling `NavController.setRoot()`",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "component",
          type:
            "Function | HTMLElement | ViewController | null | string | undefined",
          mutable: false,
          attr: "component",
          reflectToAttr: false,
          docs: "Component you want to make root for the navigation stack",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "componentProps",
          type: "undefined | { [key: string]: any; }",
          mutable: false,
          reflectToAttr: false,
          docs: "Data you want to pass to the component as props",
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
      tag: "ion-nav",
      encapsulation: "shadow",
      readme:
        "# ion-nav\r\n\r\nNav is a standalone component for loading arbitrary components and pushing to new components on to the stack.\r\nUnlike RouterOutlet, Nav is not tied to a particular router. Meaning that if we load a Nav component, and push other components to the stack, they will not affect the apps overall router. This fits use cases where you could have a modal, which needs it's own sub-navigation, but not make it tied to the apps URL.\r\n\r\n\r",
      docs:
        "Nav is a standalone component for loading arbitrary components and pushing to new components on to the stack.\r\nUnlike RouterOutlet, Nav is not tied to a particular router. Meaning that if we load a Nav component, and push other components to the stack, they will not affect the apps overall router. This fits use cases where you could have a modal, which needs it's own sub-navigation, but not make it tied to the apps URL.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs:
            "If `true`, the nav should animate the transition of components.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "animation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "By default `ion-nav` animates transition between pages based in the mode (ios or material design).\r\nHowever, this property allows to create custom transition using `AnimateBuilder` functions.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "root",
          type:
            "Function | HTMLElement | ViewController | null | string | undefined",
          mutable: false,
          attr: "root",
          reflectToAttr: false,
          docs: "Root NavComponent to load",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "rootParams",
          type: "undefined | { [key: string]: any; }",
          mutable: false,
          reflectToAttr: false,
          docs: "Any parameters for the root component",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "swipeGesture",
          type: "boolean | undefined",
          mutable: true,
          attr: "swipe-gesture",
          reflectToAttr: false,
          docs: "If the nav component should allow for swipe-to-go-back.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "canGoBack",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "canGoBack(view?: ViewController | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "view",
              type: "ViewController | undefined",
              docs: ""
            }
          ],
          docs: "Returns `true` or false if the current view can go back",
          docsTags: []
        },
        {
          name: "getActive",
          returns: {
            type: "Promise<ViewController | undefined>",
            docs: ""
          },
          signature: "getActive() => Promise<ViewController | undefined>",
          parameters: [],
          docs: "Gets the active view",
          docsTags: []
        },
        {
          name: "getByIndex",
          returns: {
            type: "Promise<ViewController | undefined>",
            docs: ""
          },
          signature:
            "getByIndex(index: number) => Promise<ViewController | undefined>",
          parameters: [
            {
              name: "index",
              type: "number",
              docs: ""
            }
          ],
          docs: "Returns the view at the index",
          docsTags: []
        },
        {
          name: "getPrevious",
          returns: {
            type: "Promise<ViewController | undefined>",
            docs: ""
          },
          signature:
            "getPrevious(view?: ViewController | undefined) => Promise<ViewController | undefined>",
          parameters: [
            {
              name: "view",
              type: "ViewController | undefined",
              docs: ""
            }
          ],
          docs: "Gets the previous view",
          docsTags: []
        },
        {
          name: "insert",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "insert<T extends NavComponent>(insertIndex: number, component: T, componentProps?: ComponentProps<T> | null | undefined, opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "insertIndex",
              type: "number",
              docs: ""
            },
            {
              name: "component",
              type: "T",
              docs: ""
            },
            {
              name: "componentProps",
              type:
                'T extends "object" | "button" | "small" | "time" | "ion-loading" | "ion-modal" | "ion-icon" | "ion-action-sheet-controller" | "ion-action-sheet" | "ion-alert-controller" | "ion-alert" | "ion-anchor" | "ion-app" | "ion-avatar" | "ion-back-button" | "ion-backdrop" | "ion-badge" | "ion-button" | "ion-buttons" | "ion-card-content" | "ion-card-header" | "ion-card-subtitle" | "ion-card-title" | "ion-card" | "ion-checkbox" | "ion-chip" | "ion-col" | "ion-content" | "ion-datetime" | "ion-fab-button" | "ion-fab-list" | "ion-fab" | "ion-footer" | "ion-grid" | "ion-header" | "ion-img" | "ion-infinite-scroll-content" | "ion-infinite-scroll" | "ion-input" | "ion-item-divider" | "ion-item-group" | "ion-item-option" | "ion-item-options" | "ion-item-sliding" | "ion-item" | "ion-label" | "ion-list-header" | "ion-list" | "ion-loading-controller" | "ion-menu-button" | "ion-menu-controller" | "ion-menu-toggle" | "ion-menu" | "ion-modal-controller" | "ion-nav-pop" | "ion-nav-push" | "ion-nav-set-root" | "ion-nav" | "ion-note" | "ion-picker-column" | "ion-picker-controller" | "ion-picker" | "ion-popover-controller" | "ion-popover" | "ion-progress-bar" | "ion-radio-group" | "ion-radio" | "ion-range" | "ion-refresher-content" | "ion-refresher" | "ion-reorder-group" | "ion-reorder" | "ion-ripple-effect" | "ion-route-redirect" | "ion-route" | "ion-router-outlet" | "ion-router" | "ion-row" | "ion-searchbar" | "ion-segment-button" | "ion-segment" | "ion-select-option" | "ion-select-popover" | "ion-select" | "ion-skeleton-text" | "ion-slide" | "ion-slides" | "ion-spinner" | "ion-split-pane" | "ion-tab-bar" | "ion-tab-button" | "ion-tab" | "ion-tabs" | "ion-text" | "ion-textarea" | "ion-thumbnail" | "ion-title" | "ion-toast-controller" | "ion-toast" | "ion-toggle" | "ion-toolbar" | "ion-virtual-scroll" | "slot" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" ? StencilIntrinsicElements[T] : { [key: string]: any; } | null | undefined',
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs:
            "Inserts a component into the nav stack at the specified index. This is useful if you need to add a component at any point in your navigation stack.",
          docsTags: []
        },
        {
          name: "insertPages",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "insertPages(insertIndex: number, insertComponents: NavComponent[], opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "insertIndex",
              type: "number",
              docs: ""
            },
            {
              name: "insertComponents",
              type: "NavComponent[]",
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs:
            "Inserts an array of components into the nav stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view.",
          docsTags: []
        },
        {
          name: "pop",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "pop(opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs:
            "Call to navigate back from a current component. Similar to push(), you can also pass navigation options.",
          docsTags: []
        },
        {
          name: "popTo",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "popTo(indexOrViewCtrl: number | ViewController, opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "indexOrViewCtrl",
              type: "ViewController | number",
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs: "Pop to a specific index in the navigation stack",
          docsTags: []
        },
        {
          name: "popToRoot",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "popToRoot(opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs:
            "Navigate back to the root of the stack, no matter how far back that is.",
          docsTags: []
        },
        {
          name: "push",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "push<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> | null | undefined, opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "component",
              type: "T",
              docs: ""
            },
            {
              name: "componentProps",
              type:
                'T extends "object" | "button" | "small" | "time" | "ion-loading" | "ion-modal" | "ion-icon" | "ion-action-sheet-controller" | "ion-action-sheet" | "ion-alert-controller" | "ion-alert" | "ion-anchor" | "ion-app" | "ion-avatar" | "ion-back-button" | "ion-backdrop" | "ion-badge" | "ion-button" | "ion-buttons" | "ion-card-content" | "ion-card-header" | "ion-card-subtitle" | "ion-card-title" | "ion-card" | "ion-checkbox" | "ion-chip" | "ion-col" | "ion-content" | "ion-datetime" | "ion-fab-button" | "ion-fab-list" | "ion-fab" | "ion-footer" | "ion-grid" | "ion-header" | "ion-img" | "ion-infinite-scroll-content" | "ion-infinite-scroll" | "ion-input" | "ion-item-divider" | "ion-item-group" | "ion-item-option" | "ion-item-options" | "ion-item-sliding" | "ion-item" | "ion-label" | "ion-list-header" | "ion-list" | "ion-loading-controller" | "ion-menu-button" | "ion-menu-controller" | "ion-menu-toggle" | "ion-menu" | "ion-modal-controller" | "ion-nav-pop" | "ion-nav-push" | "ion-nav-set-root" | "ion-nav" | "ion-note" | "ion-picker-column" | "ion-picker-controller" | "ion-picker" | "ion-popover-controller" | "ion-popover" | "ion-progress-bar" | "ion-radio-group" | "ion-radio" | "ion-range" | "ion-refresher-content" | "ion-refresher" | "ion-reorder-group" | "ion-reorder" | "ion-ripple-effect" | "ion-route-redirect" | "ion-route" | "ion-router-outlet" | "ion-router" | "ion-row" | "ion-searchbar" | "ion-segment-button" | "ion-segment" | "ion-select-option" | "ion-select-popover" | "ion-select" | "ion-skeleton-text" | "ion-slide" | "ion-slides" | "ion-spinner" | "ion-split-pane" | "ion-tab-bar" | "ion-tab-button" | "ion-tab" | "ion-tabs" | "ion-text" | "ion-textarea" | "ion-thumbnail" | "ion-title" | "ion-toast-controller" | "ion-toast" | "ion-toggle" | "ion-toolbar" | "ion-virtual-scroll" | "slot" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" ? StencilIntrinsicElements[T] : { [key: string]: any; } | null | undefined',
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs:
            "Push a new component onto the current navigation stack. Pass any additional information along as an object. This additional information is accessible through NavParams",
          docsTags: []
        },
        {
          name: "removeIndex",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "startIndex",
              type: "number",
              docs: ""
            },
            {
              name: "removeCount",
              type: "number",
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs: "Removes a page from the nav stack at the specified index.",
          docsTags: []
        },
        {
          name: "setPages",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "setPages(views: any[], opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "views",
              type: "any[]",
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs:
            "Set the views of the current navigation stack and navigate to the last view. By default animations are disabled, but they can be enabled by passing options to the navigation controller.You can also pass any navigation params to the individual pages in the array.",
          docsTags: []
        },
        {
          name: "setRoot",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "setRoot<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> | null | undefined, opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "component",
              type: "T",
              docs: ""
            },
            {
              name: "componentProps",
              type:
                'T extends "object" | "button" | "small" | "time" | "ion-loading" | "ion-modal" | "ion-icon" | "ion-action-sheet-controller" | "ion-action-sheet" | "ion-alert-controller" | "ion-alert" | "ion-anchor" | "ion-app" | "ion-avatar" | "ion-back-button" | "ion-backdrop" | "ion-badge" | "ion-button" | "ion-buttons" | "ion-card-content" | "ion-card-header" | "ion-card-subtitle" | "ion-card-title" | "ion-card" | "ion-checkbox" | "ion-chip" | "ion-col" | "ion-content" | "ion-datetime" | "ion-fab-button" | "ion-fab-list" | "ion-fab" | "ion-footer" | "ion-grid" | "ion-header" | "ion-img" | "ion-infinite-scroll-content" | "ion-infinite-scroll" | "ion-input" | "ion-item-divider" | "ion-item-group" | "ion-item-option" | "ion-item-options" | "ion-item-sliding" | "ion-item" | "ion-label" | "ion-list-header" | "ion-list" | "ion-loading-controller" | "ion-menu-button" | "ion-menu-controller" | "ion-menu-toggle" | "ion-menu" | "ion-modal-controller" | "ion-nav-pop" | "ion-nav-push" | "ion-nav-set-root" | "ion-nav" | "ion-note" | "ion-picker-column" | "ion-picker-controller" | "ion-picker" | "ion-popover-controller" | "ion-popover" | "ion-progress-bar" | "ion-radio-group" | "ion-radio" | "ion-range" | "ion-refresher-content" | "ion-refresher" | "ion-reorder-group" | "ion-reorder" | "ion-ripple-effect" | "ion-route-redirect" | "ion-route" | "ion-router-outlet" | "ion-router" | "ion-row" | "ion-searchbar" | "ion-segment-button" | "ion-segment" | "ion-select-option" | "ion-select-popover" | "ion-select" | "ion-skeleton-text" | "ion-slide" | "ion-slides" | "ion-spinner" | "ion-split-pane" | "ion-tab-bar" | "ion-tab-button" | "ion-tab" | "ion-tabs" | "ion-text" | "ion-textarea" | "ion-thumbnail" | "ion-title" | "ion-toast-controller" | "ion-toast" | "ion-toggle" | "ion-toolbar" | "ion-virtual-scroll" | "slot" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" ? StencilIntrinsicElements[T] : { [key: string]: any; } | null | undefined',
              docs: ""
            },
            {
              name: "opts",
              type: "NavOptions | null | undefined",
              docs: ""
            },
            {
              name: "done",
              type:
                "((hasCompleted: boolean, requiresTransition: boolean, enteringView?: ViewController | undefined, leavingView?: ViewController | undefined, direction?: string | undefined) => void) | undefined",
              docs: ""
            }
          ],
          docs: "Set the root for the current navigation stack.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionNavDidChange",
          detail: "void",
          bubbles: false,
          cancelable: true,
          composed: true,
          docs: "Event fired when the nav has changed components",
          docsTags: []
        },
        {
          event: "ionNavWillChange",
          detail: "void",
          bubbles: false,
          cancelable: true,
          composed: true,
          docs: "Event fired when the nav will change components",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-note",
      encapsulation: "shadow",
      readme:
        "# ion-note\r\n\r\nNotes are text elements generally used as subtitles that provide more information. Notes are styled to appear grey by default. Notes can be used in an item as metadata text.\r\n\r\n\r",
      docs:
        "Notes are text elements generally used as subtitles that provide more information. Notes are styled to appear grey by default. Notes can be used in an item as metadata text.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Note -->\r\n<ion-note>Default Note</ion-note>\r\n\r\n<!-- Note Colors -->\r\n<ion-note color="primary">Primary Note</ion-note>\r\n<ion-note color="secondary">Secondary Note</ion-note>\r\n<ion-note color="danger">Danger Note</ion-note>\r\n<ion-note color="light">Light Note</ion-note>\r\n<ion-note color="dark">Dark Note</ion-note>\r\n\r\n<!-- Notes in a List -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Note (End)</ion-label>\r\n    <ion-note slot="end">On</ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-note slot="start">Off</ion-note>\r\n    <ion-label>Note (Start)</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Note -->\r\n<ion-note>Default Note</ion-note>\r\n\r\n<!-- Note Colors -->\r\n<ion-note color="primary">Primary Note</ion-note>\r\n<ion-note color="secondary">Secondary Note</ion-note>\r\n<ion-note color="danger">Danger Note</ion-note>\r\n<ion-note color="light">Light Note</ion-note>\r\n<ion-note color="dark">Dark Note</ion-note>\r\n\r\n<!-- Notes in a List -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Note (End)</ion-label>\r\n    <ion-note slot="end">On</ion-note>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-note slot="start">Off</ion-note>\r\n    <ion-label>Note (Start)</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonNote, IonList, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Note --*/}\r\n    <IonNote>Default Note</IonNote>\r\n\r\n    {/*-- Note Colors --*/}\r\n    <IonNote color="primary">Primary Note</IonNote>\r\n    <IonNote color="secondary">Secondary Note</IonNote>\r\n    <IonNote color="danger">Danger Note</IonNote>\r\n    <IonNote color="light">Light Note</IonNote>\r\n    <IonNote color="dark">Dark Note</IonNote>\r\n\r\n    {/*-- Notes in a List --*/}\r\n    <IonList>\r\n      <IonItem>\r\n        <IonLabel>Note (End)</IonLabel>\r\n        <IonNote slot="end">On</IonNote>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonNote slot="start">Off</IonNote>\r\n        <IonLabel>Note (Start)</IonLabel>\r\n      </IonItem>\r\n    </IonList>\r\n  </>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Note -->\r\n  <ion-note>Default Note</ion-note>\r\n\r\n  <!-- Note Colors -->\r\n  <ion-note color="primary">Primary Note</ion-note>\r\n  <ion-note color="secondary">Secondary Note</ion-note>\r\n  <ion-note color="danger">Danger Note</ion-note>\r\n  <ion-note color="light">Light Note</ion-note>\r\n  <ion-note color="dark">Dark Note</ion-note>\r\n\r\n  <!-- Notes in a List -->\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Note (End)</ion-label>\r\n      <ion-note slot="end">On</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-note slot="start">Off</ion-note>\r\n      <ion-label>Note (Start)</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the note"
        }
      ],
      slots: []
    },
    {
      tag: "ion-picker-controller",
      encapsulation: "none",
      readme: "# ion-picker-controller\r\n\r\n\r\n\r",
      docs: "",
      docsTags: [],
      usage: {},
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonPickerElement>",
            docs: ""
          },
          signature:
            "create(opts: PickerOptions) => Promise<HTMLIonPickerElement>",
          parameters: [
            {
              name: "opts",
              type: "PickerOptions",
              docs: ""
            }
          ],
          docs: "Create a picker overlay with picker options.",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open picker overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonPickerElement | undefined>",
            docs: ""
          },
          signature: "getTop() => Promise<HTMLIonPickerElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened picker overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-picker",
      encapsulation: "scoped",
      readme:
        "# ion-picker\r\n\r\nA Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.\r\n\r\n\r\n\r",
      docs:
        "A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the picker will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "backdropDismiss",
          type: "boolean",
          mutable: false,
          attr: "backdrop-dismiss",
          reflectToAttr: false,
          docs:
            "If `true`, the picker will be dismissed when the backdrop is clicked.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "buttons",
          type: "PickerButton[]",
          mutable: false,
          reflectToAttr: false,
          docs: "Array of buttons to be displayed at the top of the picker.",
          docsTags: [],
          default: "[]",
          optional: false,
          required: false
        },
        {
          name: "columns",
          type: "PickerColumn[]",
          mutable: false,
          reflectToAttr: false,
          docs: "Array of columns to be displayed in the picker.",
          docsTags: [],
          default: "[]",
          optional: false,
          required: false
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "duration",
          type: "number",
          mutable: false,
          attr: "duration",
          reflectToAttr: false,
          docs: "Number of milliseconds to wait before dismissing the picker.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the picker is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the picker is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "showBackdrop",
          type: "boolean",
          mutable: false,
          attr: "show-backdrop",
          reflectToAttr: false,
          docs: "If `true`, a backdrop will be displayed behind the picker.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the picker overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "getColumn",
          returns: {
            type: "Promise<PickerColumn | undefined>",
            docs: ""
          },
          signature:
            "getColumn(name: string) => Promise<PickerColumn | undefined>",
          parameters: [
            {
              name: "name",
              type: "string",
              docs: ""
            }
          ],
          docs: "Returns the column the matches the specified name",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the picker did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the picker will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the picker overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionPickerDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the picker has dismissed.",
          docsTags: []
        },
        {
          event: "ionPickerDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the picker has presented.",
          docsTags: []
        },
        {
          event: "ionPickerWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the picker has dismissed.",
          docsTags: []
        },
        {
          event: "ionPickerWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the picker has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the picker"
        },
        {
          name: "--background-rgb",
          annotation: "prop",
          docs: "Background of the picker in rgb format"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Border color of the picker"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the picker"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Border style of the picker"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Border width of the picker"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the picker"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the picker"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the picker"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the picker"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the picker"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the picker"
        }
      ],
      slots: []
    },
    {
      tag: "ion-popover-controller",
      encapsulation: "none",
      readme:
        "# ion-popover-controller\r\n\r\nPopover controllers programmatically control the popover component. Popovers can be created and dismissed from the popover controller. View the [Popover](../popover) documentation for a full list of options to pass upon creation.\r\n\r\n\r",
      docs:
        "Popover controllers programmatically control the popover component. Popovers can be created and dismissed from the popover controller. View the [Popover](../popover) documentation for a full list of options to pass upon creation.",
      docsTags: [],
      usage: {
        javascript:
          "```javascript\r\nasync function presentPopover() {\r\n  const popoverController = document.querySelector('ion-popover-controller');\r\n  await popoverController.componentOnReady();\r\n\r\n  const popoverElement = await popoverController.create({\r\n    component: 'profile-page',\r\n    event: event\r\n  });\r\n  return await popoverElement.present();\r\n}\r\n```\r\n"
      },
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonPopoverElement>",
            docs: ""
          },
          signature:
            "create<T extends ComponentRef>(opts: PopoverOptions<T>) => Promise<HTMLIonPopoverElement>",
          parameters: [
            {
              name: "opts",
              type: "PopoverOptions<T>",
              docs: ""
            }
          ],
          docs: "Create a popover overlay with popover options.",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open popover overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonPopoverElement | undefined>",
            docs: ""
          },
          signature: "getTop() => Promise<HTMLIonPopoverElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened popover overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-popover",
      encapsulation: "scoped",
      readme:
        "# ion-popover\r\n\r\nA Popover is a dialog that appears on top of the current page. It can be used for anything, but generally it is used for overflow actions that don't fit in the navigation bar.\r\n\r\n### Creating\r\n\r\nPopovers can be created using a [Popover Controller](../popover-controller). They can be customized by passing popover options in the popover controller's create method.\r\n\r\n### Presenting\r\n\r\nTo present a popover, call the `present` method on a popover instance. In order to position the popover relative to the element clicked, a click event needs to be passed into the options of the the `present` method. If the event is not passed, the popover will be positioned in the center of the viewport.\r\n\r\n\r",
      docs:
        "A Popover is a dialog that appears on top of the current page. It can be used for anything, but generally it is used for overflow actions that don't fit in the navigation bar.",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\nimport { PopoverController } from '@ionic/angular';\r\nimport { PopoverComponent } from '../../component/popover/popover.component';\r\n\r\n@Component({\r\n  selector: 'popover-example',\r\n  templateUrl: 'popover-example.html',\r\n  styleUrls: ['./popover-example.css']\r\n})\r\nexport class PopoverExample {\r\n  constructor(public popoverController: PopoverController) {}\r\n\r\n  async presentPopover(ev: any) {\r\n    const popover = await this.popoverController.create({\r\n      component: PopoverComponent,\r\n      event: ev,\r\n      translucent: true\r\n    });\r\n    return await popover.present();\r\n  }\r\n}\r\n```\r\n",
        javascript:
          "```javascript\r\nasync function presentPopover(ev) {\r\n  const popoverController = document.querySelector('ion-popover-controller');\r\n  await popoverController.componentOnReady();\r\n\r\n  const popover = await popoverController.create({\r\n    component: 'popover-example-page',\r\n    event: ev,\r\n    translucent: true\r\n  });\r\n  return await popover.present();\r\n}\r\n```\r\n",
        react:
          "```tsx\r\nimport React, { Component } from 'react'\r\nimport { IonPopover } from '@ionic/react';\r\n\r\ntype Props = {}\r\ntype State = {\r\n  showPopover: boolean\r\n}\r\n\r\nexport class PopoverExample extends Component<Props, State> {\r\n\r\n  constructor(props: Props) {\r\n    super(props);\r\n    this.state = {\r\n      showPopover: false\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IonPopover\r\n        isOpen={this.state.showPopover}\r\n        onDidDismiss={() => this.setState(() => ({ showPopover: false }))}\r\n      >\r\n        <p>This is popover content</p>\r\n      </IonPopover>\r\n    );\r\n  }\r\n}\r\n\r\n```\r\n"
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the popover will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "backdropDismiss",
          type: "boolean",
          mutable: false,
          attr: "backdrop-dismiss",
          reflectToAttr: false,
          docs:
            "If `true`, the popover will be dismissed when the backdrop is clicked.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "component",
          type: "Function | HTMLElement | null | string",
          mutable: false,
          attr: "component",
          reflectToAttr: false,
          docs: "The component to display inside of the popover.",
          docsTags: [],
          optional: false,
          required: true
        },
        {
          name: "componentProps",
          type: "undefined | { [key: string]: any; }",
          mutable: false,
          reflectToAttr: false,
          docs: "The data to pass to the popover component.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the popover is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "event",
          type: "any",
          mutable: false,
          attr: "event",
          reflectToAttr: false,
          docs: "The event to pass to the popover animation.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the popover is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "showBackdrop",
          type: "boolean",
          mutable: false,
          attr: "show-backdrop",
          reflectToAttr: false,
          docs: "If `true`, a backdrop will be displayed behind the popover.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the popover will be translucent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the popover overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the popover did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs:
            "Returns a promise that resolves when the popover will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the popover overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionPopoverDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the popover has dismissed.",
          docsTags: []
        },
        {
          event: "ionPopoverDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the popover has presented.",
          docsTags: []
        },
        {
          event: "ionPopoverWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the popover has dismissed.",
          docsTags: []
        },
        {
          event: "ionPopoverWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the popover has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the popover"
        },
        {
          name: "--box-shadow",
          annotation: "prop",
          docs: "Box shadow of the popover"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the popover"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the popover"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the popover"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the popover"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the popover"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the popover"
        }
      ],
      slots: []
    },
    {
      tag: "ion-progress-bar",
      encapsulation: "shadow",
      readme:
        '# ion-progress-bar\r\n\r\nion-progress-bar is a horizontal progress bar to visualize the progression of an operation and activity. You can choose between two types: `determinate` and `indeterminate`.\r\n\r\n## Progress Type\r\n\r\n### Determinate\r\n\r\nIf the percentage of an operation is known, you should use the determinate type. This is the default type and the progress is represented by the `value` property.\r\n\r\nA buffer shows circles as animation to indicate some activity. If the `buffer` property is smaller than 1 you can show the addditional buffering progress. \r\n\r\n### Indeterminate\r\n\r\nIf an operation is in progress and it\'s not necessary to indicate how long it will take.\r\n\r\nIf you add `reversed="true"`, you receive a query which is used to indicate pre-loading.\r\n\r',
      docs:
        "ion-progress-bar is a horizontal progress bar to visualize the progression of an operation and activity. You can choose between two types: `determinate` and `indeterminate`.",
      docsTags: [],
      usage: {
        javascript:
          '```html\r\n<!-- Default Progressbar -->\r\n<ion-progress-bar></ion-progress-bar>\r\n\r\n<!-- Default Progressbar with 50 percent -->\r\n<ion-progress-bar value="0.5"></ion-progress-bar>\r\n\r\n<!-- Colorize Progressbar -->\r\n<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>\r\n<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>\r\n\r\n<!-- Other types -->\r\n<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>\r\n<ion-progress-bar type="indeterminate"></ion-progress-bar>\r\n<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonProgressBar } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Progressbar --*/}\r\n    <IonProgressBar></IonProgressBar>\r\n\r\n    {/*-- Default Progressbar with 50 percent --*/}\r\n    <IonProgressBar value={0.5}></IonProgressBar>\r\n\r\n    {/*-- Colorize Progressbar --*/}\r\n    <IonProgressBar color="primary" value={0.5}></IonProgressBar>\r\n    <IonProgressBar color="secondary" value={0.5}></IonProgressBar>\r\n\r\n    {/*-- Other types --*/}\r\n    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>\r\n    <IonProgressBar type="indeterminate"></IonProgressBar>\r\n    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n'
      },
      props: [
        {
          name: "buffer",
          type: "number",
          mutable: false,
          attr: "buffer",
          reflectToAttr: false,
          docs:
            "If the buffer and value are smaller than 1, the buffer circles will show.\r\nThe buffer should be between [0, 1].",
          docsTags: [],
          default: "1",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "reversed",
          type: "boolean",
          mutable: false,
          attr: "reversed",
          reflectToAttr: false,
          docs: "If true, reverse the progress bar direction.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "type",
          type: '"determinate" | "indeterminate"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs:
            'The state of the progress bar, based on if the time the process takes is known or not.\r\nDefault options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).',
          docsTags: [],
          default: "'determinate'",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "number",
          mutable: false,
          attr: "value",
          reflectToAttr: false,
          docs:
            'The value determines how much of the active bar should display when the\r\n`type` is `"determinate"`.\r\nThe value should be between [0, 1].',
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs:
            "Same as --buffer-background when using a determinate progress bar, otherwise it styles the background of the ion-progress-bar itself."
        },
        {
          name: "--buffer-background",
          annotation: "prop",
          docs: "Color of the buffer bar"
        },
        {
          name: "--progress-background",
          annotation: "prop",
          docs: "Color of the progress bar"
        }
      ],
      slots: []
    },
    {
      tag: "ion-radio-group",
      encapsulation: "none",
      readme:
        "# ion-radio-group\r\n\r\nA radio group is a group of [radio buttons](../radio). It allows\r\na user to select at most one radio button from a set. Checking one radio\r\nbutton that belongs to a radio group unchecks any previous checked\r\nradio button within the same group.\r\n\r\n\r\n\r\n\r",
      docs:
        "A radio group is a group of [radio buttons](../radio). It allows\r\na user to select at most one radio button from a set. Checking one radio\r\nbutton that belongs to a radio group unchecks any previous checked\r\nradio button within the same group.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-list>\r\n  <ion-radio-group>\r\n    <ion-list-header>\r\n      Auto Manufacturers\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Cord</ion-label>\r\n      <ion-radio value="cord"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Duesenberg</ion-label>\r\n      <ion-radio value="duesenberg"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Hudson</ion-label>\r\n      <ion-radio value="hudson"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Packard</ion-label>\r\n      <ion-radio value="packard"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Studebaker</ion-label>\r\n      <ion-radio value="studebaker"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-list>\r\n  <ion-radio-group>\r\n    <ion-list-header>\r\n      Auto Manufacturers\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Cord</ion-label>\r\n      <ion-radio value="cord"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Duesenberg</ion-label>\r\n      <ion-radio value="duesenberg"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Hudson</ion-label>\r\n      <ion-radio value="hudson"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Packard</ion-label>\r\n      <ion-radio value="packard"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Studebaker</ion-label>\r\n      <ion-radio value="studebaker"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonList, IonRadioGroup, IonListHeader, IonLabel, IonRadio, IonItem } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonList>\r\n    <IonRadioGroup>\r\n      <IonListHeader>\r\n        Auto Manufacturers\r\n      </IonListHeader>\r\n\r\n      <IonItem>\r\n        <IonLabel>Cord</IonLabel>\r\n        <IonRadio value="cord"></IonRadio>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Duesenberg</IonLabel>\r\n        <IonRadio value="duesenberg"></IonRadio>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Hudson</IonLabel>\r\n        <IonRadio value="hudson"></IonRadio>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Packard</IonLabel>\r\n        <IonRadio value="packard"></IonRadio>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Studebaker</IonLabel>\r\n        <IonRadio value="studebaker"></IonRadio>\r\n      </IonItem>\r\n    </IonRadioGroup>\r\n  </IonList>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-list>\r\n    <ion-radio-group>\r\n      <ion-list-header>\r\n        Auto Manufacturers\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-label>Cord</ion-label>\r\n        <ion-radio value="cord"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Duesenberg</ion-label>\r\n        <ion-radio value="duesenberg"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Hudson</ion-label>\r\n        <ion-radio value="hudson"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Packard</ion-label>\r\n        <ion-radio value="packard"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Studebaker</ion-label>\r\n        <ion-radio value="studebaker"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "allowEmptySelection",
          type: "boolean",
          mutable: false,
          attr: "allow-empty-selection",
          reflectToAttr: false,
          docs: "If `true`, the radios can be deselected.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "any",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "the value of the radio group.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionChange",
          detail: "RadioGroupChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value has changed.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-radio",
      encapsulation: "shadow",
      readme:
        "# ion-radio\r\n\r\nRadios are generally used as a set of related options inside of a group, but they can also be used alone. Pressing on a radio will check it. They can also be checked programmatically by setting the `checked` property.\r\n\r\nAn `ion-radio-group` can be used to group a set of radios. When radios are inside of a [radio group](../radio-group), only one radio in the group will be checked at any time. Pressing a radio will check it and uncheck the previously selected radio, if there is one. If a radio is not in a group with another radio, then both radios will have the ability to be checked at the same time.\r\n\r\n\r\n\r\n\r",
      docs:
        "Radios are generally used as a set of related options inside of a group, but they can also be used alone. Pressing on a radio will check it. They can also be checked programmatically by setting the `checked` property.\r\n\r\nAn `ion-radio-group` can be used to group a set of radios. When radios are inside of a [radio group](../radio-group), only one radio in the group will be checked at any time. Pressing a radio will check it and uncheck the previously selected radio, if there is one. If a radio is not in a group with another radio, then both radios will have the ability to be checked at the same time.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-list>\r\n  <ion-radio-group>\r\n    <ion-list-header>\r\n      <ion-label>Name</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Biff</ion-label>\r\n      <ion-radio slot="start" value="biff" checked></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Griff</ion-label>\r\n      <ion-radio slot="start" value="griff"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Buford</ion-label>\r\n      <ion-radio slot="start" value="buford"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-list>\r\n  <ion-radio-group>\r\n    <ion-list-header>\r\n      <ion-label>Name</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Biff</ion-label>\r\n      <ion-radio slot="start" value="biff" checked></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Griff</ion-label>\r\n      <ion-radio slot="start" value="griff"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Buford</ion-label>\r\n      <ion-radio slot="start" value="buford"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonList>\r\n    <IonRadioGroup>\r\n      <IonListHeader>\r\n        <IonLabel>Name</IonLabel>\r\n      </IonListHeader>\r\n\r\n      <IonItem>\r\n        <IonLabel>Biff</IonLabel>\r\n        <IonRadio slot="start" value="biff" checked></IonRadio>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Griff</IonLabel>\r\n        <IonRadio slot="start" value="griff"></IonRadio>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Buford</IonLabel>\r\n        <IonRadio slot="start" value="buford"></IonRadio>\r\n      </IonItem>\r\n    </IonRadioGroup>\r\n  </IonList>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-list>\r\n    <ion-radio-group>\r\n      <ion-list-header>\r\n        <ion-label>Name</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item>\r\n        <ion-label>Biff</ion-label>\r\n        <ion-radio slot="start" value="biff" checked></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Griff</ion-label>\r\n        <ion-radio slot="start" value="griff"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Buford</ion-label>\r\n        <ion-radio slot="start" value="buford"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "checked",
          type: "boolean",
          mutable: true,
          attr: "checked",
          reflectToAttr: false,
          docs: "If `true`, the radio is selected.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
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
          docs: "If `true`, the user cannot interact with the radio.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "any",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "the value of the radio.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the radio button loses focus.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the radio button has focus.",
          docsTags: []
        },
        {
          event: "ionSelect",
          detail: "RadioChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the radio button is selected.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the radio"
        },
        {
          name: "--color-checked",
          annotation: "prop",
          docs: "Color of the checked radio"
        }
      ],
      slots: []
    },
    {
      tag: "ion-range",
      encapsulation: "shadow",
      readme:
        '# ion-range\r\n\r\nThe Range slider lets users select from a range of values by moving\r\nthe slider knob. It can accept dual knobs, but by default one knob\r\ncontrols the value of the range.\r\n\r\n### Range Labels\r\n\r\nLabels can be placed on either side of the range by adding the\r\n`slot="start"` or `slot="end"` to the element. The element doesn\'t have to\r\nbe an `ion-label`, it can be added to any element to place it to the\r\nleft or right of the range.\r\n\r\n\r',
      docs:
        "The Range slider lets users select from a range of values by moving\r\nthe slider knob. It can accept dual knobs, but by default one knob\r\ncontrols the value of the range.",
      docsTags: [
        {
          name: "slot",
          text:
            "start - Content is placed to the left of the range slider in LTR, and to the right in RTL."
        },
        {
          name: "slot",
          text:
            "end - Content is placed to the right of the range slider in LTR, and to the left in RTL."
        }
      ],
      usage: {
        angular:
          '```html\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-range color="danger" pin="true"></ion-range>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range min="-200" max="200" color="secondary">\r\n      <ion-label slot="start">-200</ion-label>\r\n      <ion-label slot="end">200</ion-label>\r\n    </ion-range>\r\n  </ion-item>\r\n\r\n <ion-item>\r\n   <ion-range min="20" max="80" step="2">\r\n     <ion-icon size="small" slot="start" name="sunny"></ion-icon>\r\n     <ion-icon slot="end" name="sunny"></ion-icon>\r\n   </ion-range>\r\n </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n\r\n',
        javascript:
          '```html\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-range color="danger" pin="true"></ion-range>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range min="-200" max="200" color="secondary">\r\n      <ion-label slot="start">-200</ion-label>\r\n      <ion-label slot="end">200</ion-label>\r\n    </ion-range>\r\n  </ion-item>\r\n\r\n <ion-item>\r\n   <ion-range min="20" max="80" step="2">\r\n     <ion-icon size="small" slot="start" name="sunny"></ion-icon>\r\n     <ion-icon slot="end" name="sunny"></ion-icon>\r\n   </ion-range>\r\n </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonList, IonItem, IonRange, IonLabel, IonIcon } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonList>\r\n    <IonItem>\r\n      <IonRange color="danger" pin={true}></IonRange>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonRange min={-200} max={200} color="secondary">\r\n        <IonLabel slot="start">-200</IonLabel>\r\n        <IonLabel slot="end">200</IonLabel>\r\n      </IonRange>\r\n    </IonItem>\r\n\r\n   <IonItem>\r\n     <IonRange min={20} max={80} step={2}>\r\n       <IonIcon size="small" slot="start" name="sunny" />\r\n       <IonIcon slot="end" name="sunny" />\r\n     </IonRange>\r\n   </IonItem>\r\n\r\n    <IonItem>\r\n      <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary"></IonRange>\r\n    </IonItem>\r\n\r\n    <IonItem>\r\n      <IonRange dualKnobs={true} min={21} max={72} step={3} snaps={true}></IonRange>\r\n    </IonItem>\r\n  </IonList>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-range color="danger" pin="true"></ion-range>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-range min="-200" max="200" color="secondary">\r\n        <ion-label slot="start">-200</ion-label>\r\n        <ion-label slot="end">200</ion-label>\r\n      </ion-range>\r\n    </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-range min="20" max="80" step="2">\r\n      <ion-icon size="small" slot="start" name="sunny"></ion-icon>\r\n      <ion-icon slot="end" name="sunny"></ion-icon>\r\n    </ion-range>\r\n  </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n\r\n\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "debounce",
          type: "number",
          mutable: false,
          attr: "debounce",
          reflectToAttr: false,
          docs:
            "How long, in milliseconds, to wait to trigger the\r\n`ionChange` event after each change in the range value.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the range.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "dualKnobs",
          type: "boolean",
          mutable: false,
          attr: "dual-knobs",
          reflectToAttr: false,
          docs: "Show two knobs.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "max",
          type: "number",
          mutable: false,
          attr: "max",
          reflectToAttr: false,
          docs: "Maximum integer value of the range.",
          docsTags: [],
          default: "100",
          optional: false,
          required: false
        },
        {
          name: "min",
          type: "number",
          mutable: false,
          attr: "min",
          reflectToAttr: false,
          docs: "Minimum integer value of the range.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "''",
          optional: false,
          required: false
        },
        {
          name: "pin",
          type: "boolean",
          mutable: false,
          attr: "pin",
          reflectToAttr: false,
          docs:
            "If `true`, a pin with integer value is shown when the knob\r\nis pressed.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "snaps",
          type: "boolean",
          mutable: false,
          attr: "snaps",
          reflectToAttr: false,
          docs:
            "If `true`, the knob snaps to tick marks evenly spaced based\r\non the step property value.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "step",
          type: "number",
          mutable: false,
          attr: "step",
          reflectToAttr: false,
          docs: "Specifies the value granularity.",
          docsTags: [],
          default: "1",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "number | { lower: number; upper: number; }",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "the value of the range.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the range loses focus.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "RangeChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value property has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the range has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--bar-background",
          annotation: "prop",
          docs: "Background of the range bar"
        },
        {
          name: "--bar-background-active",
          annotation: "prop",
          docs: "Background of the active range bar"
        },
        {
          name: "--bar-border-radius",
          annotation: "prop",
          docs: "Border radius of the range bar"
        },
        {
          name: "--bar-height",
          annotation: "prop",
          docs: "Height of the range bar"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the range"
        },
        {
          name: "--knob-background",
          annotation: "prop",
          docs: "Background of the range knob"
        },
        {
          name: "--knob-border-radius",
          annotation: "prop",
          docs: "Border radius of the range knob"
        },
        {
          name: "--knob-box-shadow",
          annotation: "prop",
          docs: "Box shadow of the range knob"
        },
        {
          name: "--knob-size",
          annotation: "prop",
          docs: "Size of the range knob"
        }
      ],
      slots: [
        {
          name: "end",
          docs:
            "Content is placed to the right of the range slider in LTR, and to the left in RTL."
        },
        {
          name: "start",
          docs:
            "Content is placed to the left of the range slider in LTR, and to the right in RTL."
        }
      ]
    },
    {
      tag: "ion-refresher-content",
      encapsulation: "none",
      readme:
        "# ion-refresher-content\r\n\r\nThe refresher content contains the text, icon and spinner to display during a pull-to-refresh. Ionic provides the pulling icon and refreshing spinner based on the platform. However, the default icon, spinner, and text can be customized based on the state of the refresher.\r\n\r\n\r\n\r",
      docs:
        "The refresher content contains the text, icon and spinner to display during a pull-to-refresh. Ionic provides the pulling icon and refreshing spinner based on the platform. However, the default icon, spinner, and text can be customized based on the state of the refresher.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "pullingIcon",
          type: "null | string | undefined",
          mutable: true,
          attr: "pulling-icon",
          reflectToAttr: false,
          docs: "A static icon to display when you begin to pull down",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "pullingText",
          type: "string | undefined",
          mutable: false,
          attr: "pulling-text",
          reflectToAttr: false,
          docs: "The text you want to display when you begin to pull down",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "refreshingSpinner",
          type:
            '"bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined',
          mutable: true,
          attr: "refreshing-spinner",
          reflectToAttr: false,
          docs: "An animated SVG spinner that shows when refreshing begins",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "refreshingText",
          type: "string | undefined",
          mutable: false,
          attr: "refreshing-text",
          reflectToAttr: false,
          docs: "The text you want to display when performing a refresh",
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
      tag: "ion-refresher",
      encapsulation: "none",
      readme:
        "# ion-refresher\r\n\r\nThe refresher provides pull-to-refresh functionality on a content component.\r\nThe pull-to-refresh pattern lets a user pull down on a list of data using touch\r\nin order to retrieve more data.\r\n\r\nData should be modified during the refresher's output events. Once the async\r\noperation has completed and the refreshing should end, call `complete()` on the\r\nrefresher.\r\n\r\n\r\n\r",
      docs:
        "The refresher provides pull-to-refresh functionality on a content component.\r\nThe pull-to-refresh pattern lets a user pull down on a list of data using touch\r\nin order to retrieve more data.\r\n\r\nData should be modified during the refresher's output events. Once the async\r\noperation has completed and the refreshing should end, call `complete()` on the\r\nrefresher.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Refresher -->\r\n<ion-content>\r\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n\r\n<!-- Custom Refresher Content -->\r\n<ion-content>\r\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\r\n    <ion-refresher-content\r\n      pullingIcon="arrow-dropdown"\r\n      pullingText="Pull to refresh"\r\n      refreshingSpinner="circles"\r\n      refreshingText="Refreshing...">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'refresher-example\',\r\n  templateUrl: \'refresher-example.html\',\r\n  styleUrls: [\'./refresher-example.css\'],\r\n})\r\nexport class RefresherExample {\r\n  constructor() {}\r\n\r\n  doRefresh(event) {\r\n    console.log(\'Begin async operation\');\r\n\r\n    setTimeout(() => {\r\n      console.log(\'Async operation has ended\');\r\n      event.target.complete();\r\n    }, 2000);\r\n  }\r\n}\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Refresher -->\r\n<ion-content>\r\n  <ion-refresher slot="fixed">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n\r\n<!-- Custom Refresher Content -->\r\n<ion-content>\r\n  <ion-refresher slot="fixed">\r\n    <ion-refresher-content\r\n      pulling-icon="arrow-dropdown"\r\n      pulling-text="Pull to refresh"\r\n      refreshing-spinner="circles"\r\n      refreshing-text="Refreshing...">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonContent, IonRefresher, IonRefresherContent } from \'@ionic/react\';\r\n\r\nfunction doRefresh(event: CustomEvent) {\r\n  console.log(\'Begin async operation\');\r\n\r\n  setTimeout(() => {\r\n    console.log(\'Async operation has ended\');\r\n    event.target.complete();\r\n  }, 2000);\r\n}\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Refresher --*/}\r\n    <IonContent>\r\n      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>\r\n        <IonRefresherContent></IonRefresherContent>\r\n      </IonRefresher>\r\n    </IonContent>\r\n\r\n    {/*-- Custom Refresher Content --*/}\r\n    <IonContent>\r\n      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>\r\n        <IonRefresherContent\r\n          pullingIcon="arrow-dropdown"\r\n          pullingText="Pull to refresh"\r\n          refreshingSpinner="circles"\r\n          refreshingText="Refreshing...">\r\n        </IonRefresherContent>\r\n      </IonRefresher>\r\n    </IonContent>\r\n  </>\r\n\r\n  }\r\n\r\n\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Refresher -->\r\n  <ion-content>\r\n    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  </ion-content>\r\n\r\n  <!-- Custom Refresher Content -->\r\n  <ion-content>\r\n    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">\r\n      <ion-refresher-content\r\n        pullingIcon="arrow-dropdown"\r\n        pullingText="Pull to refresh"\r\n        refreshingSpinner="circles"\r\n        refreshingText="Refreshing...">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n  </ion-content>\r\n</template>\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class Menu extends Vue {\r\n\r\n    doRefresh(event) {\r\n      console.log(\'Begin async operation\');\r\n\r\n      setTimeout(() => {\r\n        console.log(\'Async operation has ended\');\r\n        event.target.complete();\r\n      }, 2000);\r\n    }\r\n  }\r\n</script>\r\n```\r\n'
      },
      props: [
        {
          name: "closeDuration",
          type: "string",
          mutable: false,
          attr: "close-duration",
          reflectToAttr: false,
          docs: "Time it takes to close the refresher.",
          docsTags: [],
          default: "'280ms'",
          optional: false,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the refresher will be hidden.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "pullMax",
          type: "number",
          mutable: false,
          attr: "pull-max",
          reflectToAttr: false,
          docs:
            "The maximum distance of the pull until the refresher\r\nwill automatically go into the `refreshing` state.\r\nDefaults to the result of `pullMin + 60`.",
          docsTags: [],
          default: "this.pullMin + 60",
          optional: false,
          required: false
        },
        {
          name: "pullMin",
          type: "number",
          mutable: false,
          attr: "pull-min",
          reflectToAttr: false,
          docs:
            "The minimum distance the user must pull down until the\r\nrefresher will go into the `refreshing` state.",
          docsTags: [],
          default: "60",
          optional: false,
          required: false
        },
        {
          name: "snapbackDuration",
          type: "string",
          mutable: false,
          attr: "snapback-duration",
          reflectToAttr: false,
          docs:
            "Time it takes the refresher to to snap back to the `refreshing` state.",
          docsTags: [],
          default: "'280ms'",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "cancel",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "cancel() => void",
          parameters: [],
          docs:
            "Changes the refresher's state from `refreshing` to `cancelling`.",
          docsTags: []
        },
        {
          name: "complete",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "complete() => void",
          parameters: [],
          docs:
            "Call `complete()` when your async operation has completed.\r\nFor example, the `refreshing` state is while the app is performing\r\nan asynchronous operation, such as receiving more data from an\r\nAJAX request. Once the data has been received, you then call this\r\nmethod to signify that the refreshing has completed and to close\r\nthe refresher. This method also changes the refresher's state from\r\n`refreshing` to `completing`.",
          docsTags: []
        },
        {
          name: "getProgress",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "getProgress() => Promise<number>",
          parameters: [],
          docs:
            "A number representing how far down the user has pulled.\r\nThe number `0` represents the user hasn't pulled down at all. The\r\nnumber `1`, and anything greater than `1`, represents that the user\r\nhas pulled far enough down that when they let go then the refresh will\r\nhappen. If they let go and the number is less than `1`, then the\r\nrefresh will not happen, and the content will return to it's original\r\nposition.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionPull",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Emitted while the user is pulling down the content and exposing the refresher.",
          docsTags: []
        },
        {
          event: "ionRefresh",
          detail: "RefresherEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Emitted when the user lets go of the content and has pulled down\r\nfurther than the `pullMin` or pulls the content down and exceeds the pullMax.\r\nUpdates the refresher state to `refreshing`. The `complete()` method should be\r\ncalled when the async operation has completed.",
          docsTags: []
        },
        {
          event: "ionStart",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the user begins to start pulling down.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-reorder-group",
      encapsulation: "none",
      readme:
        "# ion-reorder-group\r\n\r\nThe reorder group is a wrapper component for items with the `ion-reorder` component, Check [Reorder documentation](../reorder/) for further information about the anchor component that is used to drag items within the `ion-reorder-group` list.\r\n\r\nOnce the user drags an item and drops it in a new position, the `ionItemReorder` event is dispatched. A handler for it must be implemented by the developer to commit changes.\r\n\r\n```js\r\nreorderGroup.addEventListener('ionItemReorder', (ev) => {\r\n  console.log(`Moving item from ${ev.detail.from} to ${ev.detail.to}`);\r\n\r\n  this.dataList = reorderArray(this.dataList, ev.detail.from, ev.detail.to);\r\n  ev.detail.complete();\r\n});\r\n```\r\n\r\nThe event's detail includes all the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` index X `to` index Y.\r\n\r\nFor example, in this list we move the item at index `0` to the index `3`:\r\n\r\n```\r\nBEFORE | AFTER\r\n  0    |   1\r\n  1    |   2\r\n  2    |   3\r\n  3    |   0\r\n  4    |   4\r\n```\r\n\r\n```\r\ndetail: {\r\n  from: 0\r\n  to: 3\r\n}\r\n```\r\n\r\nOnce the data structure has been updated to reflect the reorder change, the `complete()` method must be called.\r\nThis method finishes the reorder operation and resets all the CSS transforms applied by the `ion-reorder-group` component.\r\n\r\nFortunately this `complete()` method can optionally accept an array as input and it will return a reordered copy, based in `detail.from` and `detail.to`.\r\n\r\n```ts\r\nthis.dataList = reorderGroup.complete(this.dataList);\r\n```\r\n\r",
      docs:
        "The reorder group is a wrapper component for items with the `ion-reorder` component, Check [Reorder documentation](../reorder/) for further information about the anchor component that is used to drag items within the `ion-reorder-group` list.\r\n\r\nOnce the user drags an item and drops it in a new position, the `ionItemReorder` event is dispatched. A handler for it must be implemented by the developer to commit changes.\r\n\r\n```js\r\nreorderGroup.addEventListener('ionItemReorder', (ev) => {\r\n  console.log(`Moving item from ${ev.detail.from} to ${ev.detail.to}`);\r\n\r\n  this.dataList = reorderArray(this.dataList, ev.detail.from, ev.detail.to);\r\n  ev.detail.complete();\r\n});\r\n```\r\n\r\nThe event's detail includes all the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` index X `to` index Y.\r\n\r\nFor example, in this list we move the item at index `0` to the index `3`:\r\n\r\n```\r\nBEFORE | AFTER\r\n  0    |   1\r\n  1    |   2\r\n  2    |   3\r\n  3    |   0\r\n  4    |   4\r\n```\r\n\r\n```\r\ndetail: {\r\n  from: 0\r\n  to: 3\r\n}\r\n```\r\n\r\nOnce the data structure has been updated to reflect the reorder change, the `complete()` method must be called.\r\nThis method finishes the reorder operation and resets all the CSS transforms applied by the `ion-reorder-group` component.\r\n\r\nFortunately this `complete()` method can optionally accept an array as input and it will return a reordered copy, based in `detail.from` and `detail.to`.\r\n\r\n```ts\r\nthis.dataList = reorderGroup.complete(this.dataList);\r\n```",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-reorder-group>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 1\r\n        </ion-label>\r\n        <ion-reorder slot="end"></ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 2 (default ion-reorder slot="start")\r\n        </ion-label>\r\n        <ion-reorder slot="start"></ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 3 (custom ion-reorder)\r\n        </ion-label>\r\n        <ion-reorder slot="end">\r\n          <ion-icon name="pizza"></ion-icon>\r\n        </ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 4 (custom ion-reorder slot="start")\r\n        </ion-label>\r\n        <ion-reorder slot="start">\r\n          <ion-icon name="pizza"></ion-icon>\r\n        </ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-reorder>\r\n        <ion-item>\r\n          <ion-label>\r\n            Item 5 (the whole item can be dragged)\r\n          </ion-label>\r\n          </ion-item>\r\n      </ion-reorder>\r\n\r\n    </ion-reorder-group>\r\n  </ion-list>\r\n</ion-content>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-reorder-group disabled="false">\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 1\r\n        </ion-label>\r\n        <ion-reorder slot="end"></ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 2 (default ion-reorder slot="start")\r\n        </ion-label>\r\n        <ion-reorder slot="start"></ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 3 (custom ion-reorder)\r\n        </ion-label>\r\n        <ion-reorder slot="end">\r\n          <ion-icon name="pizza"></ion-icon>\r\n        </ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Item 4 (custom ion-reorder slot="start")\r\n        </ion-label>\r\n        <ion-reorder slot="start">\r\n          <ion-icon name="pizza"></ion-icon>\r\n        </ion-reorder>\r\n      </ion-item>\r\n\r\n      <ion-reorder>\r\n        <ion-item>\r\n          <ion-label>\r\n            Item 5 (the whole item can be dragged)\r\n          </ion-label>\r\n          </ion-item>\r\n      </ion-reorder>\r\n\r\n    </ion-reorder-group>\r\n  </ion-list>\r\n</ion-content>\r\n```\r\n\r\n```javascript\r\nconst reorderGroup = document.querySelector(\'ion-reorder-group\');\r\nreorderGroup.addEventListener(\'ionItemReorder\', ({detail}) => {\r\n  // finishing the reorder, true means ion-reorder-group with reorder the DOM\r\n  detail.complete(true);\r\n\r\n  // or:\r\n  // reorderGroup.complete(true)\r\n});\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonContent, IonList, IonItem, IonLabel, IonReorder, IonReorderGroup, IonIcon } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonContent>\r\n    <IonList>\r\n      <IonReorderGroup>\r\n\r\n        <IonItem>\r\n          <IonLabel>\r\n            Item 1\r\n          </IonLabel>\r\n          <IonReorder slot="end"></IonReorder>\r\n        </IonItem>\r\n\r\n        <IonItem>\r\n          <IonLabel>\r\n            Item 2 (default ion-reorder slot="start")\r\n          </IonLabel>\r\n          <IonReorder slot="start"></IonReorder>\r\n        </IonItem>\r\n\r\n        <IonItem>\r\n          <IonLabel>\r\n            Item 3 (custom ion-reorder)\r\n          </IonLabel>\r\n          <IonReorder slot="end">\r\n            <IonIcon name="pizza" />\r\n          </IonReorder>\r\n        </IonItem>\r\n\r\n        <IonItem>\r\n          <IonLabel>\r\n            Item 4 (custom ion-reorder slot="start")\r\n          </IonLabel>\r\n          <IonReorder slot="start">\r\n            <IonIcon name="pizza" />\r\n          </IonReorder>\r\n        </IonItem>\r\n\r\n        <IonReorder>\r\n          <IonItem>\r\n            <IonLabel>\r\n              Item 5 (the whole item can be dragged)\r\n            </IonLabel>\r\n            </IonItem>\r\n        </IonReorder>\r\n\r\n      </IonReorderGroup>\r\n    </IonList>\r\n  </IonContent>\r\n);\r\n\r\nexport default Example\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-reorder-group>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            Item 1\r\n          </ion-label>\r\n          <ion-reorder slot="end"></ion-reorder>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            Item 2 (default ion-reorder slot="start")\r\n          </ion-label>\r\n          <ion-reorder slot="start"></ion-reorder>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            Item 3 (custom ion-reorder)\r\n          </ion-label>\r\n          <ion-reorder slot="end">\r\n            <ion-icon name="pizza"></ion-icon>\r\n          </ion-reorder>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            Item 4 (custom ion-reorder slot="start")\r\n          </ion-label>\r\n          <ion-reorder slot="start">\r\n            <ion-icon name="pizza"></ion-icon>\r\n          </ion-reorder>\r\n        </ion-item>\r\n\r\n        <ion-reorder>\r\n          <ion-item>\r\n            <ion-label>\r\n              Item 5 (the whole item can be dragged)\r\n            </ion-label>\r\n            </ion-item>\r\n        </ion-reorder>\r\n\r\n      </ion-reorder-group>\r\n    </ion-list>\r\n  </ion-content>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the reorder will be hidden.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "complete",
          returns: {
            type: "Promise<any>",
            docs: ""
          },
          signature:
            "complete(listOrReorder?: boolean | any[] | undefined) => Promise<any>",
          parameters: [
            {
              name: "listOrReorder",
              type: "any[] | boolean | undefined",
              docs: ""
            }
          ],
          docs:
            "This method must be called once the `ionItemReorder` event is handled in order\r\nto complete the reorder operation.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionItemReorder",
          detail: "ItemReorderEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Event that needs to be listened to in order to complete the reorder action.\r\nOnce the event has been emitted, the `complete()` method then needs\r\nto be called in order to finalize the reorder action.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-reorder",
      encapsulation: "shadow",
      readme:
        '# ion-reorder\r\n\r\nReorder is a component that allows an item to be dragged to change its order. It must be used within an `ion-reorder-group` to provide a visual drag and drop interface.\r\n\r\n`ion-reorder` is the anchor users will use to drag and drop items inside the `ion-reorder-group`.\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>\r\n    Item\r\n  </ion-label>\r\n  <ion-reorder slot="end"></ion-reorder>\r\n</ion-item>\r\n```\r\n\r',
      docs:
        'Reorder is a component that allows an item to be dragged to change its order. It must be used within an `ion-reorder-group` to provide a visual drag and drop interface.\r\n\r\n`ion-reorder` is the anchor users will use to drag and drop items inside the `ion-reorder-group`.\r\n\r\n```html\r\n<ion-item>\r\n  <ion-label>\r\n    Item\r\n  </ion-label>\r\n  <ion-reorder slot="end"></ion-reorder>\r\n</ion-item>\r\n```',
      docsTags: [],
      usage: {},
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-ripple-effect",
      encapsulation: "shadow",
      readme:
        "# ion-ripple-effect\r\n\r\nThe ripple effect component adds the [Material Design ink ripple interaction effect](https://material.io/develop/web/components/ripples/). This component can be used without a button and can be added to any component.\r\n\r\n\r",
      docs:
        "The ripple effect component adds the [Material Design ink ripple interaction effect](https://material.io/develop/web/components/ripples/). This component can be used without a button and can be added to any component.",
      docsTags: [],
      usage: {
        javascript:
          "```html\r\n<div>\r\n  <ion-ripple-effect></ion-ripple-effect>\r\n  A plain div with a ripple effect\r\n</div>\r\n\r\n<button>\r\n  <ion-ripple-effect></ion-ripple-effect>\r\n  Button\r\n</button>\r\n```"
      },
      props: [
        {
          name: "type",
          type: '"bounded" | "unbounded"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs:
            "Sets the type of ripple-effect:\r\n\r\n- `bounded`: the ripple effect expands from the user's click position\r\n- `unbounded`: the ripple effect expands from the center of the button and overflows the container.\r\n\r\nNOTE: Surfaces for bounded ripples should have the overflow property set to hidden,\r\nwhile surfaces for unbounded ripples should have it set to visible.",
          docsTags: [],
          default: "'bounded'",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "addRipple",
          returns: {
            type: "Promise<() => void>",
            docs: ""
          },
          signature:
            "addRipple(pageX: number, pageY: number) => Promise<() => void>",
          parameters: [
            {
              name: "pageX",
              type: "number",
              docs: ""
            },
            {
              name: "pageY",
              type: "number",
              docs: ""
            }
          ],
          docs: "Adds the ripple effect to the parent element",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-route-redirect",
      encapsulation: "none",
      readme:
        '# ion-route-redirect\r\n\r\nA redirect router can only be used in the scope of `ion-router` as a direct children of it.\r\n\r\n> Note: this is only meant for vanilla JavaScript project. For Angular projects, use `ion-router-outlet` and the Angular router.\r\n\r\nThis route has only two configurable values:\r\n - `from`\r\n - `to`\r\n\r\nTheir meaning is obvious under the context of a redirection, that occurs `from` a given URL `to` another given URL.\r\n\r\nIn other for a redirection to occurs the `from` path needs to be an exact match of the navigated URL.\r\n\r\n## Redirection evaluation\r\n\r\nAn arbitrary number of redirect routes can be defined inside an `ion-router`, but only one can match.\r\n\r\nAlso, a redirection route WILL never redirect to another redirection router, since this could lead to infinity loops.\r\n\r\nLet\'s say we have this two redirection rules:\r\n\r\n```html\r\n<ion-router>\r\n  <ion-route-redirect from="/admin" to="/login"/>\r\n  <ion-route-redirect from="/login" to="/admin"/>\r\n</ion-router>\r\n```\r\n\r\nAnd the user navigates to `/admin`. The router will then redirect to `/login` and stop there.\r\n\r\nIt WILL NOT never evaluate more than one redirection rule in a roll.\r\n\r\n\r\n## Examples\r\n\r\n### Simple path\r\n\r\n```html\r\n<ion-route-redirect from="/admin" to="/login">\r\n```\r\n\r\nThis route will apply (redirect) when the user navigates to: `/admin` but it will NOT apply if the user navigates to `/admin/posts`.\r\n\r\nIn order to match any subpath of admin, the wildcard character (`*`) needs to be used.\r\n\r\n```html\r\n<ion-route-redirect from="/admin/*" to="/login">\r\n```\r\n\r\n### Redirect all routes to login\r\n\r\nRedirection routes can work as guards, since that can prevent user to navigate to areas to your application based in a given condition, for example, if the user is authenticated or not.\r\n\r\n\r\n```tsx\r\n{!this.isLoggedIn &&\r\n  <ion-route-redirect from="*" to="/login"/> }\r\n```\r\n\r\nA router can be added and removed dynamically to redirect (or guard) some routes from being accessed.\r\n\r\nAnother approach is to modify the value of `to`, since given `to` the value of `null` or `undefined` makes disables the redirection.\r\n\r\n```tsx\r\n <ion-route-redirect from="*" to={this.isLoggedin ? undefined : \'/login\'}/>\r\n```\r\n\r',
      docs:
        "A redirect router can only be used in the scope of `ion-router` as a direct children of it.\r\n\r\n> Note: this is only meant for vanilla JavaScript project. For Angular projects, use `ion-router-outlet` and the Angular router.\r\n\r\nThis route has only two configurable values:\r\n - `from`\r\n - `to`\r\n\r\nTheir meaning is obvious under the context of a redirection, that occurs `from` a given URL `to` another given URL.\r\n\r\nIn other for a redirection to occurs the `from` path needs to be an exact match of the navigated URL.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "from",
          type: "string",
          mutable: false,
          attr: "from",
          reflectToAttr: false,
          docs:
            'A redirect route, redirects "from" a URL "to" another URL. This property is that "from" URL.\r\nIt needs to be an exact match of the navigated URL in order to apply.\r\n\r\nThe path specified in this value is always an absolute path, even if the initial `/` slash\r\nis not specified.',
          docsTags: [],
          optional: false,
          required: true
        },
        {
          name: "to",
          type: "null | string | undefined",
          mutable: false,
          attr: "to",
          reflectToAttr: false,
          docs:
            'A redirect route, redirects "from" a URL "to" another URL. This property is that "to" URL.\r\nWhen the defined `ion-route-redirect` rule matches, the router will redirect to the path\r\nspecified in this property.\r\n\r\nThe value of this property is always an absolute path inside the scope of routes defined in\r\n`ion-router` it can\'t be used with another router or to perform a redirection to a different domain.\r\n\r\nNote that this is a virtual redirect, it will not cause a real browser refresh, again, it\'s\r\na redirect inside the context of ion-router.\r\n\r\nWhen this property is not specified or his value is `undefined` the whole redirect route is noop,\r\neven if the "from" value matches.',
          docsTags: [],
          optional: false,
          required: true
        }
      ],
      methods: [],
      events: [
        {
          event: "ionRouteRedirectChanged",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Internal event that fires when any value of this rule is added/removed from the DOM,\r\nor any of his public properties changes.\r\n\r\n`ion-router` captures this event in order to update his internal registry of router rules.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-route",
      encapsulation: "none",
      readme:
        "# ion-route\r\n\r\nRouter is a component that can take a component, and render it when the Browser URl matches the url prop\r\n\r\n> Note: this is only meant for vanilla JavaScript project. For Angular projects, use `ion-router-outlet` and the Angular router.\r\n\r",
      docs:
        "Router is a component that can take a component, and render it when the Browser URl matches the url prop\r\n\r\n> Note: this is only meant for vanilla JavaScript project. For Angular projects, use `ion-router-outlet` and the Angular router.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "component",
          type: "string",
          mutable: false,
          attr: "component",
          reflectToAttr: false,
          docs:
            "Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`)\r\nwhen the route matches.\r\n\r\nThe value of this property is not always the tagname of the component to load,\r\nin `ion-tabs` it actually refers to the name of the `ion-tab` to select.",
          docsTags: [],
          optional: false,
          required: true
        },
        {
          name: "componentProps",
          type: "undefined | { [key: string]: any; }",
          mutable: false,
          reflectToAttr: false,
          docs:
            "A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed\r\nto the defined component when rendered.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "url",
          type: "string",
          mutable: false,
          attr: "url",
          reflectToAttr: false,
          docs:
            "Relative path that needs to match in order for this route to apply.\r\n\r\nAccepts paths similar to expressjs so that you can define parameters\r\nin the url /foo/:bar where bar would be available in incoming props.",
          docsTags: [],
          default: "''",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionRouteDataChanged",
          detail: "any",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Used internally by `ion-router` to know when this route did change.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-router-outlet",
      encapsulation: "shadow",
      readme:
        "# ion-router-outlet\r\n\r\nRouter Outlet is a component used in routing within an Angular app.\r\nRouter Outlet behaves in a similar way as Angular's built-in Router Outlet component, but contains the logic for providing a stacked navigation, and animating views in and out.\r\n\r\n\r\n> Note: this is only meant for Angular projects. For vanilla JavaScript, use `ion-router` and `ion-route` instead.\r\n\r\nWhile Router Outlet has methods for navigating around, it's recommended to use the navigation methods in Angular's router.\r\n\r\n\r\n### Life Cycle Hooks\r\n\r\nRoutes rendered in a Router Outlet have access to specific Ionic events that are wired up to animations\r\n\r\n\r\n| Event Name         | Trigger                                                          |\r\n|--------------------|------------------------------------------------------------------|\r\n| `ionViewWillEnter` | Fired when the component being routed to is about to animate in. |\r\n| `ionViewDidEnter`  | Fired when the component being routed to has animated in.        |\r\n| `ionViewWillLeave` | Fired when the component being routed from is about to animate.  |\r\n| `ionViewDidLeave`  | Fired when the component being routed from has animated.         |\r\n\r\n\r\nThese event tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with it's animation. These events are not a replacement for Angular's own event system, but an addition.\r\n\r\nFor handling Router Guards, the older `ionViewCanEnter` and `ionViewCanLeave` have been replaced with their framework specific equivalent. For Angular, there are [Router Guards](https://angular.io/guide/router#milestone-5-route-guards).\r\n\r\n\r",
      docs:
        "Router Outlet is a component used in routing within an Angular app.\r\nRouter Outlet behaves in a similar way as Angular's built-in Router Outlet component, but contains the logic for providing a stacked navigation, and animating views in and out.\r\n\r\n\r\n> Note: this is only meant for Angular projects. For vanilla JavaScript, use `ion-router` and `ion-route` instead.\r\n\r\nWhile Router Outlet has methods for navigating around, it's recommended to use the navigation methods in Angular's router.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs:
            "If `true`, the router-outlet should animate the transition of components.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "animation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "By default `ion-nav` animates transition between pages based in the mode (ios or material design).\r\nHowever, this property allows to create custom transition using `AnimateBuilder` functions.",
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
      tag: "ion-router",
      encapsulation: "none",
      readme:
        "# ion-router\r\n\r\nRouter is a component for handling routing inside vanilla JavaScript projects. For Angular projects, use `ion-router-outlet` and the Angular router.\r\n\r\nApps should have a single `ion-router` component in the codebase.\r\nThis component controls all interactions with the browser history and it aggregates updates through an event system.\r\n\r\n`ion-router` is just a URL coordinator for the navigation outlets of ionic: `ion-nav` and `ion-tabs`.\r\n\r\nThat means the `ion-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `ion-nav` and `ion-tabs` what and when to \"show\" based on the browser's URL.\r\n\r\nIn order to configure this relationship between components (to load/select) and URLs, `ion-router` uses a declarative syntax using JSX/HTML to define a tree of routes.\r\n\r\nIf you're using Angular, please see [ion-router-outlet](../router-outlet) instead.\r\n\r\n\r\n\r",
      docs:
        "Router is a component for handling routing inside vanilla JavaScript projects. For Angular projects, use `ion-router-outlet` and the Angular router.\r\n\r\nApps should have a single `ion-router` component in the codebase.\r\nThis component controls all interactions with the browser history and it aggregates updates through an event system.\r\n\r\n`ion-router` is just a URL coordinator for the navigation outlets of ionic: `ion-nav` and `ion-tabs`.\r\n\r\nThat means the `ion-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `ion-nav` and `ion-tabs` what and when to \"show\" based on the browser's URL.\r\n\r\nIn order to configure this relationship between components (to load/select) and URLs, `ion-router` uses a declarative syntax using JSX/HTML to define a tree of routes.\r\n\r\nIf you're using Angular, please see [ion-router-outlet](../router-outlet) instead.",
      docsTags: [],
      usage: {
        javascript:
          '```html\r\n<ion-router>\r\n  <ion-route component="page-tabs">\r\n    <ion-route url="/schedule" component="tab-schedule">\r\n      <ion-route component="page-schedule"></ion-route>\r\n      <ion-route url="/session/:sessionId" component="page-session"></ion-route>\r\n    </ion-route>\r\n\r\n    <ion-route url="/speakers" component="tab-speaker">\r\n      <ion-route component="page-speaker-list"></ion-route>\r\n      <ion-route url="/session/:sessionId" component="page-session"></ion-route>\r\n      <ion-route url="/:speakerId" component="page-speaker-detail"></ion-route>\r\n    </ion-route>\r\n\r\n    <ion-route url="/map" component="page-map"></ion-route>\r\n    <ion-route url="/about" component="page-about"></ion-route>\r\n  </ion-route>\r\n\r\n  <ion-route url="/tutorial" component="page-tutorial"></ion-route>\r\n  <ion-route url="/login" component="page-login"></ion-route>\r\n  <ion-route url="/account" component="page-account"></ion-route>\r\n  <ion-route url="/signup" component="page-signup"></ion-route>\r\n  <ion-route url="/support" component="page-support"></ion-route>\r\n</ion-router>\r\n\r\n```\r\n'
      },
      props: [
        {
          name: "root",
          type: "string",
          mutable: false,
          attr: "root",
          reflectToAttr: false,
          docs:
            'By default `ion-router` will match the routes at the root path ("/").\r\nThat can be changed when',
          docsTags: [],
          default: "'/'",
          optional: false,
          required: false
        },
        {
          name: "useHash",
          type: "boolean",
          mutable: false,
          attr: "use-hash",
          reflectToAttr: false,
          docs:
            'The router can work in two "modes":\r\n- With hash: `/index.html#/path/to/page`\r\n- Without hash: `/path/to/page`\r\n\r\nUsing one or another might depend in the requirements of your app and/or where it\'s deployed.\r\n\r\nUsually "hash-less" navigation works better for SEO and it\'s more user friendly too, but it might\r\nrequires additional server-side configuration in order to properly work.\r\n\r\nOn the otherside hash-navigation is much easier to deploy, it even works over the file protocol.\r\n\r\nBy default, this property is `true`, change to `false` to allow hash-less URLs.',
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "back",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "back() => Promise<void>",
          parameters: [],
          docs: "Go back to previous page in the window.history.",
          docsTags: []
        },
        {
          name: "push",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "push(url: string, direction?: RouterDirection) => Promise<boolean>",
          parameters: [
            {
              name: "url",
              type: "string",
              docs: ""
            },
            {
              name: "direction",
              type: '"back" | "forward" | "root"',
              docs: ""
            }
          ],
          docs: "Navigate to the specified URL.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionRouteDidChange",
          detail: "RouterEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the route had changed",
          docsTags: []
        },
        {
          event: "ionRouteWillChange",
          detail: "RouterEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Event emitted when the route is about to change",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-row",
      encapsulation: "shadow",
      readme:
        "# ion-row\r\n\r\nRows are horizontal components of the [grid](../grid) system and contain varying numbers of\r\n[columns](../col). They ensure the columns are positioned properly.\r\n\r\nSee [Grid Layout](/docs/layout/grid) for more information.\r\n\r\n\r\n## Row attributes\r\n\r\nBy default, columns will stretch to fill the entire height of the row and wrap when necessary.\r\nThere are several attributes that can be added to a row to customize this behavior.\r\n\r\n| Property                    | Description                                                                                                                                      |\r\n|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|\r\n| nowrap                      | Adds `flex-wrap: nowrap`. Forces the columns to a single row.                                                                                    |\r\n| wrap-reverse                | Adds `flex-wrap: wrap-reverse`. The columns will wrap in reverse.                                                                                |\r\n| align-items-start           | Adds `align-items: flex-start`. All columns will be vertically aligned at the top, unless they specify their own alignment.                      |\r\n| align-items-center          | Adds `align-items: center`. All columns will be vertically aligned in the center, unless they specify their own alignment.                       |\r\n| align-items-end             | Adds `align-items: flex-end`. All columns will be vertically aligned at the bottom, unless they specify their own alignment.                     |\r\n| align-items-stretch         | Adds `align-items: stretch`. All columns will be stretched to take up the entire height of the row, unless they specify their own alignment.     |\r\n| align-items-baseline        | Adds `align-items: baseline`. All columns will be vertically aligned at their baselines, unless they specify their own alignment.                |\r\n| justify-content-start       | Adds `justify-content: start`. All columns will be horizontally aligned at the start.                                                            |\r\n| justify-content-center      | Adds `justify-content: center`. All columns will be horizontally aligned at the center.                                                          |\r\n| justify-content-end         | Adds `justify-content: end`. All columns will be horizontally aligned at the end.                                                                |\r\n| justify-content-around      | Adds `justify-content: space-around`. All columns will be horizontally aligned with equal space around them.                                     |\r\n| justify-content-between     | Adds `justify-content: space-between`. All columns will be horizontally aligned with a half-size space on either end.                            |\r\n\r\n\r",
      docs:
        "Rows are horizontal components of the [grid](../grid) system and contain varying numbers of\r\n[columns](../col). They ensure the columns are positioned properly.\r\n\r\nSee [Grid Layout](/docs/layout/grid) for more information.",
      docsTags: [],
      usage: {},
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-searchbar",
      encapsulation: "scoped",
      readme:
        "# ion-searchbar\r\n\r\nSearchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.\r\n\r\nA Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.\r\n\r\n\r\n\r",
      docs:
        "Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.\r\n\r\nA Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Searchbar -->\r\n<ion-searchbar></ion-searchbar>\r\n\r\n<!-- Searchbar with danger color -->\r\n<ion-searchbar color="danger"></ion-searchbar>\r\n\r\n<!-- Searchbar with value -->\r\n<ion-searchbar value="Ionic"></ion-searchbar>\r\n\r\n<!-- Searchbar with telephone type -->\r\n<ion-searchbar type="tel"></ion-searchbar>\r\n\r\n<!-- Searchbar with a cancel button and custom cancel button text -->\r\n<ion-searchbar showCancelButton cancelButtonText="Custom Cancel"></ion-searchbar>\r\n\r\n<!-- Searchbar with a custom debounce -->\r\n<ion-searchbar debounce="500"></ion-searchbar>\r\n\r\n<!-- Animated Searchbar -->\r\n<ion-searchbar animated></ion-searchbar>\r\n\r\n<!-- Searchbar with a placeholder -->\r\n<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>\r\n\r\n<!-- Searchbar in a Toolbar -->\r\n<ion-toolbar>\r\n  <ion-searchbar></ion-searchbar>\r\n</ion-toolbar>\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Searchbar -->\r\n<ion-searchbar></ion-searchbar>\r\n\r\n<!-- Searchbar with danger color -->\r\n<ion-searchbar color="danger"></ion-searchbar>\r\n\r\n<!-- Searchbar with value -->\r\n<ion-searchbar value="Ionic"></ion-searchbar>\r\n\r\n<!-- Searchbar with telephone type -->\r\n<ion-searchbar type="tel"></ion-searchbar>\r\n\r\n<!-- Searchbar with a cancel button and custom cancel button text -->\r\n<ion-searchbar show-cancel-button cancel-button-text="Custom Cancel"></ion-searchbar>\r\n\r\n<!-- Searchbar with a custom debounce -->\r\n<ion-searchbar debounce="500"></ion-searchbar>\r\n\r\n<!-- Animated Searchbar -->\r\n<ion-searchbar animated></ion-searchbar>\r\n\r\n<!-- Searchbar with a placeholder -->\r\n<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>\r\n\r\n<!-- Searchbar in a Toolbar -->\r\n<ion-toolbar>\r\n  <ion-searchbar></ion-searchbar>\r\n</ion-toolbar>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonSearchbar, IonToolbar } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Searchbar --*/}\r\n    <IonSearchbar></IonSearchbar>\r\n\r\n    {/*-- Searchbar with danger color --*/}\r\n    <IonSearchbar color="danger"></IonSearchbar>\r\n\r\n    {/*-- Searchbar with value --*/}\r\n    <IonSearchbar value="Ionic"></IonSearchbar>\r\n\r\n    {/*-- Searchbar with telephone type --*/}\r\n    <IonSearchbar type="tel"></IonSearchbar>\r\n\r\n    {/*-- Searchbar with a cancel button and custom cancel button text --*/}\r\n    <IonSearchbar showCancelButton cancelButtonText="Custom Cancel"></IonSearchbar>\r\n\r\n    {/*-- Searchbar with a custom debounce --*/}\r\n    <IonSearchbar debounce={500}></IonSearchbar>\r\n\r\n    {/*-- Animated Searchbar --*/}\r\n    <IonSearchbar animated></IonSearchbar>\r\n\r\n    {/*-- Searchbar with a placeholder --*/}\r\n    <IonSearchbar placeholder="Filter Schedules"></IonSearchbar>\r\n\r\n    {/*-- Searchbar in a Toolbar --*/}\r\n    <IonToolbar>\r\n      <IonSearchbar></IonSearchbar>\r\n    </IonToolbar>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Searchbar -->\r\n  <ion-searchbar></ion-searchbar>\r\n\r\n  <!-- Searchbar with danger color -->\r\n  <ion-searchbar color="danger"></ion-searchbar>\r\n\r\n  <!-- Searchbar with value -->\r\n  <ion-searchbar value="Ionic"></ion-searchbar>\r\n\r\n  <!-- Searchbar with telephone type -->\r\n  <ion-searchbar type="tel"></ion-searchbar>\r\n\r\n  <!-- Searchbar with a cancel button and custom cancel button text -->\r\n  <ion-searchbar showCancelButton cancelButtonText="Custom Cancel"></ion-searchbar>\r\n\r\n  <!-- Searchbar with a custom debounce -->\r\n  <ion-searchbar debounce="500"></ion-searchbar>\r\n\r\n  <!-- Animated Searchbar -->\r\n  <ion-searchbar animated></ion-searchbar>\r\n\r\n  <!-- Searchbar with a placeholder -->\r\n  <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>\r\n\r\n  <!-- Searchbar in a Toolbar -->\r\n  <ion-toolbar>\r\n    <ion-searchbar></ion-searchbar>\r\n  </ion-toolbar>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, enable searchbar animation.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "autocomplete",
          type: '"off" | "on"',
          mutable: false,
          attr: "autocomplete",
          reflectToAttr: false,
          docs: "Set the input's autocomplete property.",
          docsTags: [],
          default: "'off'",
          optional: false,
          required: false
        },
        {
          name: "autocorrect",
          type: '"off" | "on"',
          mutable: false,
          attr: "autocorrect",
          reflectToAttr: false,
          docs: "Set the input's autocorrect property.",
          docsTags: [],
          default: "'off'",
          optional: false,
          required: false
        },
        {
          name: "cancelButtonIcon",
          type: "string",
          mutable: false,
          attr: "cancel-button-icon",
          reflectToAttr: false,
          docs: "Set the cancel button icon. Only applies to `md` mode.",
          docsTags: [],
          default: "'md-arrow-back'",
          optional: false,
          required: false
        },
        {
          name: "cancelButtonText",
          type: "string",
          mutable: false,
          attr: "cancel-button-text",
          reflectToAttr: false,
          docs: "Set the the cancel button text. Only applies to `ios` mode.",
          docsTags: [],
          default: "'Cancel'",
          optional: false,
          required: false
        },
        {
          name: "clearIcon",
          type: "string | undefined",
          mutable: false,
          attr: "clear-icon",
          reflectToAttr: false,
          docs:
            'Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close"` for `md`.',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "debounce",
          type: "number",
          mutable: false,
          attr: "debounce",
          reflectToAttr: false,
          docs:
            "Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.",
          docsTags: [],
          default: "250",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "placeholder",
          type: "string",
          mutable: false,
          attr: "placeholder",
          reflectToAttr: false,
          docs: "Set the input's placeholder.",
          docsTags: [],
          default: "'Search'",
          optional: false,
          required: false
        },
        {
          name: "searchIcon",
          type: "string",
          mutable: false,
          attr: "search-icon",
          reflectToAttr: false,
          docs: "The icon to use as the search icon.",
          docsTags: [],
          default: "'search'",
          optional: false,
          required: false
        },
        {
          name: "showCancelButton",
          type: "boolean",
          mutable: false,
          attr: "show-cancel-button",
          reflectToAttr: false,
          docs: "If `true`, show the cancel button.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "spellcheck",
          type: "boolean",
          mutable: false,
          attr: "spellcheck",
          reflectToAttr: false,
          docs: "If `true`, enable spellcheck on the input.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "type",
          type:
            '"email" | "number" | "password" | "search" | "tel" | "text" | "url"',
          mutable: false,
          attr: "type",
          reflectToAttr: false,
          docs: "Set the type of the input.",
          docsTags: [],
          default: "'search'",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "null | string | undefined",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "the value of the searchbar.",
          docsTags: [],
          default: "''",
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "getInputElement",
          returns: {
            type: "Promise<HTMLInputElement>",
            docs: ""
          },
          signature: "getInputElement() => Promise<HTMLInputElement>",
          parameters: [],
          docs: "Returns the native `<input>` element used under the hood.",
          docsTags: []
        },
        {
          name: "setFocus",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "setFocus() => void",
          parameters: [],
          docs:
            "Sets focus on the specified `ion-searchbar`. Use this method instead of the global\r\n`input.focus()`.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input loses focus.",
          docsTags: []
        },
        {
          event: "ionCancel",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the cancel button is clicked.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "SearchbarChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value has changed.",
          docsTags: []
        },
        {
          event: "ionClear",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the clear input button is clicked.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input has focus.",
          docsTags: []
        },
        {
          event: "ionInput",
          detail: "KeyboardEvent",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when a keyboard input ocurred.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the searchbar"
        },
        {
          name: "--cancel-button-color",
          annotation: "prop",
          docs: "Color of the searchbar cancel button"
        },
        {
          name: "--clear-button-color",
          annotation: "prop",
          docs: "Color of the searchbar clear button"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the searchbar text"
        },
        {
          name: "--icon-color",
          annotation: "prop",
          docs: "Color of the searchbar icon"
        },
        {
          name: "--placeholder-color",
          annotation: "prop",
          docs: "Color of the searchbar placeholder"
        },
        {
          name: "--placeholder-font-style",
          annotation: "prop",
          docs: "Font style of the searchbar placeholder"
        },
        {
          name: "--placeholder-font-weight",
          annotation: "prop",
          docs: "Font weight of the searchbar placeholder"
        },
        {
          name: "--placeholder-opacity",
          annotation: "prop",
          docs: "Opacity of the searchbar placeholder"
        }
      ],
      slots: []
    },
    {
      tag: "ion-segment-button",
      encapsulation: "shadow",
      readme:
        "# ion-segment-button\r\n\r\nSegment buttons are groups of related buttons inside of a [Segment](../segment). They are displayed in a horizontal row. A segment button can be checked by default by adding the `checked` attribute or by setting the `value` of the segment to the `value` of the segment button. Only one segment button should be selected at a time.\r\n\r\n\r",
      docs:
        "Segment buttons are groups of related buttons inside of a [Segment](../segment). They are displayed in a horizontal row. A segment button can be checked by default by adding the `checked` attribute or by setting the `value` of the segment to the `value` of the segment button. Only one segment button should be selected at a time.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Segment buttons with text and click listeners -->\r\n<ion-segment>\r\n  <ion-segment-button (ionSelect)="segmentButtonClicked($event)">\r\n    <ion-label>Friends</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button (ionSelect)="segmentButtonClicked($event)">\r\n    <ion-label>Enemies</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment buttons with the first checked and the last disabled -->\r\n<ion-segment>\r\n  <ion-segment-button checked>\r\n    <ion-label>Paid</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Free</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button disabled>\r\n    <ion-label>Top</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment buttons with values and icons -->\r\n<ion-segment>\r\n  <ion-segment-button value="camera">\r\n    <ion-icon name="camera"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="bookmark">\r\n    <ion-icon name="bookmark"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment with a value that checks the last button -->\r\n<ion-segment value="shared">\r\n  <ion-segment-button value="bookmarks">\r\n    <ion-label>Bookmarks</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="reading">\r\n    <ion-label>Reading List</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="shared">\r\n    <ion-label>Shared Links</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Label only -->\r\n<ion-segment>\r\n  <ion-segment-button checked>\r\n    <ion-label>Item One</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Item Two</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Item Three</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon only -->\r\n<ion-segment>\r\n  <ion-segment-button>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button checked>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon top -->\r\n<ion-segment>\r\n  <ion-segment-button>\r\n    <ion-label>Item One</ion-label>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button checked>\r\n    <ion-label>Item Two</ion-label>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Item Three</ion-label>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon bottom -->\r\n<ion-segment>\r\n  <ion-segment-button checked layout="icon-bottom">\r\n    <ion-icon name="call"></ion-icon>\r\n    <ion-label>Item One</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-bottom">\r\n    <ion-icon name="heart"></ion-icon>\r\n    <ion-label>Item Two</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-bottom">\r\n    <ion-icon name="pin"></ion-icon>\r\n    <ion-label>Item Three</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon start -->\r\n<ion-segment>\r\n  <ion-segment-button checked layout="icon-start">\r\n    <ion-label>Item One</ion-label>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-start">\r\n    <ion-label>Item Two</ion-label>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-start">\r\n    <ion-label>Item Three</ion-label>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon end -->\r\n<ion-segment>\r\n  <ion-segment-button checked layout="icon-end">\r\n    <ion-icon name="call"></ion-icon>\r\n    <ion-label>Item One</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button disabled layout="icon-end">\r\n    <ion-icon name="heart"></ion-icon>\r\n    <ion-label>Item Two</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-end">\r\n    <ion-icon name="pin"></ion-icon>\r\n    <ion-label>Item Three</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'segment-button-example\',\r\n  templateUrl: \'segment-button-example.html\',\r\n  styleUrls: [\'./segment-button-example.css\'],\r\n})\r\nexport class SegmentButtonExample {\r\n  segmentButtonClicked(ev: any) {\r\n    console.log(\'Segment button clicked\', ev);\r\n  }\r\n}\r\n```',
        javascript:
          '```html\r\n<!-- Segment buttons with text -->\r\n<ion-segment>\r\n  <ion-segment-button>\r\n    <ion-label>Friends</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Enemies</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment buttons with the first checked and the last disabled -->\r\n<ion-segment>\r\n  <ion-segment-button checked>\r\n    <ion-label>Paid</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Free</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button disabled>\r\n    <ion-label>Top</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment buttons with values and icons -->\r\n<ion-segment>\r\n  <ion-segment-button value="camera">\r\n    <ion-icon name="camera"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="bookmark">\r\n    <ion-icon name="bookmark"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment with a value that checks the last button -->\r\n<ion-segment value="shared">\r\n  <ion-segment-button value="bookmarks">\r\n    <ion-label>Bookmarks</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="reading">\r\n    <ion-label>Reading List</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="shared">\r\n    <ion-label>Shared Links</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Label only -->\r\n<ion-segment>\r\n  <ion-segment-button checked>\r\n    <ion-label>Item One</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Item Two</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Item Three</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon only -->\r\n<ion-segment>\r\n  <ion-segment-button>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button checked>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon top -->\r\n<ion-segment>\r\n  <ion-segment-button>\r\n    <ion-label>Item One</ion-label>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button checked>\r\n    <ion-label>Item Two</ion-label>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-label>Item Three</ion-label>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon bottom -->\r\n<ion-segment>\r\n  <ion-segment-button checked layout="icon-bottom">\r\n    <ion-icon name="call"></ion-icon>\r\n    <ion-label>Item One</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-bottom">\r\n    <ion-icon name="heart"></ion-icon>\r\n    <ion-label>Item Two</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-bottom">\r\n    <ion-icon name="pin"></ion-icon>\r\n    <ion-label>Item Three</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon start -->\r\n<ion-segment>\r\n  <ion-segment-button checked layout="icon-start">\r\n    <ion-label>Item One</ion-label>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-start">\r\n    <ion-label>Item Two</ion-label>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-start">\r\n    <ion-label>Item Three</ion-label>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Icon end -->\r\n<ion-segment>\r\n  <ion-segment-button checked layout="icon-end">\r\n    <ion-icon name="call"></ion-icon>\r\n    <ion-label>Item One</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button disabled layout="icon-end">\r\n    <ion-icon name="heart"></ion-icon>\r\n    <ion-label>Item Two</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button layout="icon-end">\r\n    <ion-icon name="pin"></ion-icon>\r\n    <ion-label>Item Three</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n```\r\n\r\n```javascript\r\n// Listen for ionClick on all segment buttons\r\nconst segmentButtons = document.querySelectorAll(\'ion-segment-button\')\r\nfor (let i = 0; i < segmentButtons.length; i++) {\r\n  segmentButtons[i].addEventListener(\'ionSelect\', (ev) => {\r\n    console.log(\'Segment button clicked\', ev);\r\n  })\r\n}\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonSegment, IonSegmentButton, IonLabel, IonIcon } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Segment buttons with text and click listeners --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton onIonSelect={() => console.log(\'Friends segment selected\')}>\r\n        <IonLabel>Friends</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton onIonSelect={() => console.log(\'Enemies segment selected\')}>\r\n        <IonLabel>Enemies</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Segment buttons with the first checked and the last disabled --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton checked>\r\n        <IonLabel>Paid</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonLabel>Free</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton disabled>\r\n        <IonLabel>Top</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Segment buttons with values and icons --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton value="camera">\r\n        <IonIcon name="camera" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="bookmark">\r\n        <IonIcon name="bookmark" />\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Segment with a value that checks the last button --*/}\r\n    <IonSegment value="shared">\r\n      <IonSegmentButton value="bookmarks">\r\n        <IonLabel>Bookmarks</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="reading">\r\n        <IonLabel>Reading List</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="shared">\r\n        <IonLabel>Shared Links</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Label only --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton checked>\r\n        <IonLabel>Item One</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonLabel>Item Two</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonLabel>Item Three</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Icon only --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton>\r\n        <IonIcon name="call" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton checked>\r\n        <IonIcon name="heart" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonIcon name="pin" />\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Icon top --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton>\r\n        <IonLabel>Item One</IonLabel>\r\n        <IonIcon name="call" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton checked>\r\n        <IonLabel>Item Two</IonLabel>\r\n        <IonIcon name="heart" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonLabel>Item Three</IonLabel>\r\n        <IonIcon name="pin" />\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Icon bottom --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton checked layout="icon-bottom">\r\n        <IonIcon name="call" />\r\n        <IonLabel>Item One</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton layout="icon-bottom">\r\n        <IonIcon name="heart" />\r\n        <IonLabel>Item Two</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton layout="icon-bottom">\r\n        <IonIcon name="pin" />\r\n        <IonLabel>Item Three</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Icon start --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton checked layout="icon-start">\r\n        <IonLabel>Item One</IonLabel>\r\n        <IonIcon name="call" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton layout="icon-start">\r\n        <IonLabel>Item Two</IonLabel>\r\n        <IonIcon name="heart" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton layout="icon-start">\r\n        <IonLabel>Item Three</IonLabel>\r\n        <IonIcon name="pin" />\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Icon end --*/}\r\n    <IonSegment>\r\n      <IonSegmentButton checked layout="icon-end">\r\n        <IonIcon name="call" />\r\n        <IonLabel>Item One</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton disabled layout="icon-end">\r\n        <IonIcon name="heart" />\r\n        <IonLabel>Item Two</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton layout="icon-end">\r\n        <IonIcon name="pin" />\r\n        <IonLabel>Item Three</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Segment buttons with text and click listeners -->\r\n  <ion-segment>\r\n    <ion-segment-button @ionSelect="segmentButtonClicked($event)">\r\n      <ion-label>Friends</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button @ionSelect="segmentButtonClicked($event)">\r\n      <ion-label>Enemies</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Segment buttons with the first checked and the last disabled -->\r\n  <ion-segment>\r\n    <ion-segment-button checked>\r\n      <ion-label>Paid</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-label>Free</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button disabled>\r\n      <ion-label>Top</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Segment buttons with values and icons -->\r\n  <ion-segment>\r\n    <ion-segment-button value="camera">\r\n      <ion-icon name="camera"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="bookmark">\r\n      <ion-icon name="bookmark"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Segment with a value that checks the last button -->\r\n  <ion-segment value="shared">\r\n    <ion-segment-button value="bookmarks">\r\n      <ion-label>Bookmarks</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="reading">\r\n      <ion-label>Reading List</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="shared">\r\n      <ion-label>Shared Links</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Label only -->\r\n  <ion-segment>\r\n    <ion-segment-button checked>\r\n      <ion-label>Item One</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-label>Item Two</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-label>Item Three</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Icon only -->\r\n  <ion-segment>\r\n    <ion-segment-button>\r\n      <ion-icon name="call"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button checked>\r\n      <ion-icon name="heart"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-icon name="pin"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Icon top -->\r\n  <ion-segment>\r\n    <ion-segment-button>\r\n      <ion-label>Item One</ion-label>\r\n      <ion-icon name="call"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button checked>\r\n      <ion-label>Item Two</ion-label>\r\n      <ion-icon name="heart"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-label>Item Three</ion-label>\r\n      <ion-icon name="pin"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Icon bottom -->\r\n  <ion-segment>\r\n    <ion-segment-button checked layout="icon-bottom">\r\n      <ion-icon name="call"></ion-icon>\r\n      <ion-label>Item One</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout="icon-bottom">\r\n      <ion-icon name="heart"></ion-icon>\r\n      <ion-label>Item Two</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout="icon-bottom">\r\n      <ion-icon name="pin"></ion-icon>\r\n      <ion-label>Item Three</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Icon start -->\r\n  <ion-segment>\r\n    <ion-segment-button checked layout="icon-start">\r\n      <ion-label>Item One</ion-label>\r\n      <ion-icon name="call"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout="icon-start">\r\n      <ion-label>Item Two</ion-label>\r\n      <ion-icon name="heart"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout="icon-start">\r\n      <ion-label>Item Three</ion-label>\r\n      <ion-icon name="pin"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Icon end -->\r\n  <ion-segment>\r\n    <ion-segment-button checked layout="icon-end">\r\n      <ion-icon name="call"></ion-icon>\r\n      <ion-label>Item One</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button disabled layout="icon-end">\r\n      <ion-icon name="heart"></ion-icon>\r\n      <ion-label>Item Two</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout="icon-end">\r\n      <ion-icon name="pin"></ion-icon>\r\n      <ion-label>Item Three</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</template>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class MenuExample extends Vue {\r\n    segmentButtonClicked(ev: any) {\r\n      console.log(\'Segment button clicked\', ev);\r\n    }\r\n  }\r\n</script>\r\n```\r\n'
      },
      props: [
        {
          name: "checked",
          type: "boolean",
          mutable: true,
          attr: "checked",
          reflectToAttr: false,
          docs: "If `true`, the segment button is selected.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the segment button.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "layout",
          type:
            '"icon-bottom" | "icon-end" | "icon-hide" | "icon-start" | "icon-top" | "label-hide" | undefined',
          mutable: false,
          attr: "layout",
          reflectToAttr: false,
          docs: "Set the layout of the text and icon in the segment.",
          docsTags: [],
          default: "'icon-top'",
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "string",
          mutable: false,
          attr: "value",
          reflectToAttr: false,
          docs: "The value of the segment button.",
          docsTags: [],
          default: "'ion-sb-' + (ids++)",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionSelect",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the segment button is clicked.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the segment button"
        },
        {
          name: "--background-activated",
          annotation: "prop",
          docs: "Background of the activated (pressed) segment button"
        },
        {
          name: "--background-checked",
          annotation: "prop",
          docs: "Background of the checked segment button"
        },
        {
          name: "--background-hover",
          annotation: "prop",
          docs: "Background of the segment button on hover"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Color of the segment button border"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Radius of the segment button border"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Style of the segment button border"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Width of the segment button border"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the segment button"
        },
        {
          name: "--color-activated",
          annotation: "prop",
          docs: "Color of the activated segment button"
        },
        {
          name: "--color-checked",
          annotation: "prop",
          docs: "Color of the checked segment button"
        },
        {
          name: "--color-checked-disabled",
          annotation: "prop",
          docs: "Color of the checked & disabled segment button"
        },
        {
          name: "--color-disabled",
          annotation: "prop",
          docs: "Color of the disabled segment button"
        },
        {
          name: "--indicator-color",
          annotation: "prop",
          docs: "Color of the indicator (highlight) under the segment button"
        },
        {
          name: "--indicator-color-checked",
          annotation: "prop",
          docs:
            "Color of the indicator (highlight) under the checked segment button"
        },
        {
          name: "--margin-bottom",
          annotation: "prop",
          docs: "Bottom margin of the segment button"
        },
        {
          name: "--margin-end",
          annotation: "prop",
          docs: "End margin of the segment button"
        },
        {
          name: "--margin-start",
          annotation: "prop",
          docs: "Start margin of the segment button"
        },
        {
          name: "--margin-top",
          annotation: "prop",
          docs: "Top margin of the segment button"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the segment button"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the segment button"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the segment button"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the segment button"
        },
        {
          name: "--transition",
          annotation: "prop",
          docs: "Transition of the segment button"
        }
      ],
      slots: []
    },
    {
      tag: "ion-segment",
      encapsulation: "scoped",
      readme:
        "# ion-segment\r\n\r\nSegments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.\r\n\r\nTheir functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.\r\n\r\n\r",
      docs:
        "Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.\r\n\r\nTheir functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Segment -->\r\n<ion-segment (ionChange)="segmentChanged($event)">\r\n  <ion-segment-button value="friends">\r\n    <ion-label>Friends</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="enemies">\r\n    <ion-label>Enemies</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Disabled Segment -->\r\n<ion-segment (ionChange)="segmentChanged($event)" disabled>\r\n  <ion-segment-button value="sunny" checked>\r\n    <ion-label>Sunny</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="rainy">\r\n    <ion-label>Rainy</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment with anchors -->\r\n<ion-segment (ionChange)="segmentChanged($event)">\r\n  <ion-segment-button href="#dogs" value="dogs">\r\n    <ion-label>Dogs</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button href="#cats" value="cats">\r\n    <ion-label>Cats</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Scrollable Segment -->\r\n<ion-segment scrollable>\r\n  <ion-segment-button>\r\n    <ion-icon name="home"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button checked>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="star"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="globe"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="basket"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment with secondary color -->\r\n<ion-segment (ionChange)="segmentChanged($event)" color="secondary">\r\n  <ion-segment-button value="standard">\r\n    <ion-label>Standard</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="hybrid">\r\n    <ion-label>Hybrid</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="sat">\r\n    <ion-label>Satellite</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment in a toolbar -->\r\n<ion-toolbar>\r\n  <ion-segment (ionChange)="segmentChanged($event)">\r\n    <ion-segment-button value="camera">\r\n      <ion-icon name="camera"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="bookmark">\r\n      <ion-icon name="bookmark"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<!-- Segment with default selection -->\r\n<ion-segment (ionChange)="segmentChanged($event)" value="javascript">\r\n  <ion-segment-button value="python">\r\n    <ion-label>Python</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="javascript">\r\n    <ion-label>Javascript</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'segment-example\',\r\n  templateUrl: \'segment-example.html\',\r\n  styleUrls: [\'./segment-example.css\'],\r\n})\r\nexport class SegmentExample {\r\n  segmentChanged(ev: any) {\r\n    console.log(\'Segment changed\', ev);\r\n  }\r\n}\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Segment -->\r\n<ion-segment>\r\n  <ion-segment-button value="friends">\r\n    <ion-label>Friends</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="enemies">\r\n    <ion-label>Enemies</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Disabled Segment -->\r\n<ion-segment disabled>\r\n  <ion-segment-button value="sunny" checked>\r\n    <ion-label>Sunny</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="rainy">\r\n    <ion-label>Rainy</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment with anchors -->\r\n<ion-segment>\r\n  <ion-segment-button href="#dogs" value="dogs">\r\n    <ion-label>Dogs</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button href="#cats" value="cats">\r\n    <ion-label>Cats</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Scrollable Segment -->\r\n<ion-segment scrollable>\r\n  <ion-segment-button>\r\n    <ion-icon name="home"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button checked>\r\n    <ion-icon name="heart"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="pin"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="star"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="call"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="globe"></ion-icon>\r\n  </ion-segment-button>\r\n  <ion-segment-button>\r\n    <ion-icon name="basket"></ion-icon>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment with secondary color -->\r\n<ion-segment color="secondary">\r\n  <ion-segment-button value="standard">\r\n    <ion-label>Standard</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="hybrid">\r\n    <ion-label>Hybrid</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="sat">\r\n    <ion-label>Satellite</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- Segment in a toolbar -->\r\n<ion-toolbar>\r\n  <ion-segment>\r\n    <ion-segment-button value="camera">\r\n      <ion-icon name="camera"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="bookmark">\r\n      <ion-icon name="bookmark"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<!-- Segment with default selection -->\r\n<ion-segment value="javascript">\r\n  <ion-segment-button value="python">\r\n    <ion-label>Python</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value="javascript">\r\n    <ion-label>Javascript</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n```\r\n\r\n```javascript\r\n// Listen for ionChange on all segments\r\nconst segments = document.querySelectorAll(\'ion-segment\')\r\nfor (let i = 0; i < segments.length; i++) {\r\n  segments[i].addEventListener(\'ionChange\', (ev) => {\r\n    console.log(\'Segment changed\', ev);\r\n  })\r\n}\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonSegment, IonSegmentButton, IonLabel, IonIcon, IonToolbar } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Segment --*/}\r\n    <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)}>\r\n      <IonSegmentButton value="friends">\r\n        <IonLabel>Friends</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="enemies">\r\n        <IonLabel>Enemies</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Disabled Segment --*/}\r\n    <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)} disabled>\r\n      <IonSegmentButton value="sunny" checked>\r\n        <IonLabel>Sunny</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="rainy">\r\n        <IonLabel>Rainy</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Segment with anchors --*/}\r\n    <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)}>\r\n      <IonSegmentButton value="dogs">\r\n        <IonLabel>Dogs</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="cats">\r\n        <IonLabel>Cats</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Scrollable Segment --*/}\r\n    <IonSegment scrollable>\r\n      <IonSegmentButton>\r\n        <IonIcon name="home" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton checked>\r\n        <IonIcon name="heart" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonIcon name="pin" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonIcon name="star" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonIcon name="call" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonIcon name="globe" />\r\n      </IonSegmentButton>\r\n      <IonSegmentButton>\r\n        <IonIcon name="basket" />\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Segment with secondary color --*/}\r\n    <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)} color="secondary">\r\n      <IonSegmentButton value="standard">\r\n        <IonLabel>Standard</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="hybrid">\r\n        <IonLabel>Hybrid</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="sat">\r\n        <IonLabel>Satellite</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n\r\n    {/*-- Segment in a toolbar --*/}\r\n    <IonToolbar>\r\n      <IonSegment  onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)}>\r\n        <IonSegmentButton value="camera">\r\n          <IonIcon name="camera" />\r\n        </IonSegmentButton>\r\n        <IonSegmentButton value="bookmark">\r\n          <IonIcon name="bookmark" />\r\n        </IonSegmentButton>\r\n      </IonSegment>\r\n    </IonToolbar>\r\n\r\n    {/*-- Segment with default selection --*/}\r\n    <IonSegment onIonChange={(e) => console.log(\'Segment selected\', e.detail.value)} value="javascript">\r\n      <IonSegmentButton value="python">\r\n        <IonLabel>Python</IonLabel>\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="javascript">\r\n        <IonLabel>Javascript</IonLabel>\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Segment -->\r\n  <ion-segment @ionChange="segmentChanged($event)">\r\n    <ion-segment-button value="friends">\r\n      <ion-label>Friends</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="enemies">\r\n      <ion-label>Enemies</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Disabled Segment -->\r\n  <ion-segment @ionChange="segmentChanged($event)" disabled>\r\n    <ion-segment-button value="sunny" checked>\r\n      <ion-label>Sunny</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="rainy">\r\n      <ion-label>Rainy</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Segment with anchors -->\r\n  <ion-segment @ionChange="segmentChanged($event)">\r\n    <ion-segment-button href="#dogs" value="dogs">\r\n      <ion-label>Dogs</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button href="#cats" value="cats">\r\n      <ion-label>Cats</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Scrollable Segment -->\r\n  <ion-segment scrollable>\r\n    <ion-segment-button>\r\n      <ion-icon name="home"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button checked>\r\n      <ion-icon name="heart"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-icon name="pin"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-icon name="star"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-icon name="call"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-icon name="globe"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button>\r\n      <ion-icon name="basket"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Segment with secondary color -->\r\n  <ion-segment @ionChange="segmentChanged($event)" color="secondary">\r\n    <ion-segment-button value="standard">\r\n      <ion-label>Standard</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="hybrid">\r\n      <ion-label>Hybrid</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="sat">\r\n      <ion-label>Satellite</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <!-- Segment in a toolbar -->\r\n  <ion-toolbar>\r\n    <ion-segment @ionChange="segmentChanged($event)">\r\n      <ion-segment-button value="camera">\r\n        <ion-icon name="camera"></ion-icon>\r\n      </ion-segment-button>\r\n      <ion-segment-button value="bookmark">\r\n        <ion-icon name="bookmark"></ion-icon>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n\r\n  <!-- Segment with default selection -->\r\n  <ion-segment @ionChange="segmentChanged($event)" value="javascript">\r\n    <ion-segment-button value="python">\r\n      <ion-label>Python</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value="javascript">\r\n      <ion-label>Javascript</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</template>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class MenuExample extends Vue {\r\n    segmentChanged(ev: any) {\r\n      console.log(\'Segment changed\', ev);\r\n    }\r\n  }\r\n</script>\r\n```\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
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
          docs: "If `true`, the user cannot interact with the segment.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "scrollable",
          type: "boolean",
          mutable: false,
          attr: "scrollable",
          reflectToAttr: false,
          docs:
            "If `true`, the segment buttons will overflow and the user can swipe to see them.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "null | string | undefined",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "the value of the segment.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionChange",
          detail: "SegmentChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value property has changed.",
          docsTags: []
        },
        {
          event: "ionStyle",
          detail: "StyleEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the styles change.",
          docsTags: []
        }
      ],
      styles: [],
      slots: []
    },
    {
      tag: "ion-select-option",
      encapsulation: "shadow",
      readme:
        "# ion-select-option\r\n\r\nSelectOption is a component that is a child element of Select. For more information, see the [Select docs](../select).\r\n\r\n\r",
      docs:
        "SelectOption is a component that is a child element of Select. For more information, see the [Select docs](../select).",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the select option.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "selected",
          type: "boolean",
          mutable: false,
          attr: "selected",
          reflectToAttr: false,
          docs: "If `true`, the element is selected.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "any",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "The text value of the option.",
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
      tag: "ion-select",
      encapsulation: "shadow",
      readme:
        "# ion-select\r\n\r\nSelects are form controls to select an option, or options, from a set of options, similar to a native `<select>` element. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.\r\n\r\nA select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.\r\n\r\nIf `value` is set on the `<ion-select>`, the selected option will be chosen based on that value. Otherwise, the `selected` attribute can be used on the `<ion-select-option>`.\r\n\r\n\r\n## Interfaces\r\n\r\nBy default, select uses the [AlertController API](../alert-controller) to open up the overlay of options in an alert. The interface can be changed to use the [ActionSheetController API](../action-sheet-controller) or [PopoverController API](../popover-controller) by passing `action-sheet` or `popover`, respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.\r\n\r\n\r\n## Single Selection\r\n\r\nBy default, the select allows the user to select only one option. The alert interface presents users with a radio button styled list of options. The action sheet interface can only be used with a single value select. The select component's value receives the value of the selected option's value.\r\n\r\n\r\n### Multiple Selection\r\n\r\nBy adding the `multiple` attribute to select, users are able to select multiple options. When multiple options can be selected, the alert overlay presents users with a checkbox styled list of options. The select component's value receives an array of all of the selected option values.\r\n\r\nNote: the `action-sheet` and `popover` interfaces will not work with multiple selection.\r\n\r\n## Object Value References\r\n\r\nWhen using objects for select values, it is possible for the identities of these objects to change if they are coming from a server or database, while the selected value's identity remains the same. For example, this can occur when an existing record with the desired object value is loaded into the select, but the newly retrieved select options now have different identities. This will result in the select appearing to have no value at all, even though the original selection in still intact.\r\n\r\nBy default, the select uses object equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.\r\n\r\n## Select Buttons\r\n\r\nBy default, the alert has two buttons: `Cancel` and `OK`. Each button's text can be customized using the `cancelText` and `okText` properties.\r\n\r\nThe `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.\r\n\r\n\r\n## Interface Options\r\n\r\nSince select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more. See the [AlertController API docs](../alert-controller), [ActionSheetController API docs](../action-sheet-controller), and [PopoverController API docs](../popover-controller) for the properties that each interface accepts.\r\n\r\n\r",
      docs:
        "Selects are form controls to select an option, or options, from a set of options, similar to a native `<select>` element. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.\r\n\r\nA select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.\r\n\r\nIf `value` is set on the `<ion-select>`, the selected option will be chosen based on that value. Otherwise, the `selected` attribute can be used on the `<ion-select-option>`.",
      docsTags: [],
      usage: {
        angular:
          '## Single Selection\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Single Selection</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Gender</ion-label>\r\n    <ion-select placeholder="Select One">\r\n      <ion-select-option value="f">Female</ion-select-option>\r\n      <ion-select-option value="m">Male</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Hair Color</ion-label>\r\n    <ion-select value="brown" okText="Okay" cancelText="Dismiss">\r\n      <ion-select-option value="brown">Brown</ion-select-option>\r\n      <ion-select-option value="blonde">Blonde</ion-select-option>\r\n      <ion-select-option value="black">Black</ion-select-option>\r\n      <ion-select-option value="red">Red</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n```\r\n\r\n## Multiple Selection\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Multiple Selection</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Toppings</ion-label>\r\n    <ion-select multiple="true" cancelText="Nah" okText="Okay!">\r\n      <ion-select-option value="bacon">Bacon</ion-select-option>\r\n      <ion-select-option value="olives">Black Olives</ion-select-option>\r\n      <ion-select-option value="xcheese">Extra Cheese</ion-select-option>\r\n      <ion-select-option value="peppers">Green Peppers</ion-select-option>\r\n      <ion-select-option value="mushrooms">Mushrooms</ion-select-option>\r\n      <ion-select-option value="onions">Onions</ion-select-option>\r\n      <ion-select-option value="pepperoni">Pepperoni</ion-select-option>\r\n      <ion-select-option value="pineapple">Pineapple</ion-select-option>\r\n      <ion-select-option value="sausage">Sausage</ion-select-option>\r\n      <ion-select-option value="Spinach">Spinach</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Pets</ion-label>\r\n    <ion-select multiple="true">\r\n      <ion-select-option value="bird" selected>Bird</ion-select-option>\r\n      <ion-select-option value="cat">Cat</ion-select-option>\r\n      <ion-select-option value="dog" selected>Dog</ion-select-option>\r\n      <ion-select-option value="honeybadger">Honey Badger</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n## Objects as Values\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Objects as Values (compareWith)</ion-list-header>\r\n  \r\n  <ion-item>\r\n    <ion-label>Users</ion-label>\r\n    <ion-select [compareWith]="compareWith">\r\n      <ion-select-option *ngFor="let user of users">{{user.first + \' \' + user.last}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'select-example\',\r\n  templateUrl: \'select-example.html\',\r\n  styleUrls: [\'./select-example.css\'],\r\n})\r\nexport class SelectExample {\r\n  users: any[] = [\r\n    {\r\n      id: 1,\r\n      first: \'Alice\',\r\n      last: \'Smith\',\r\n    },\r\n    {\r\n      id: 2,\r\n      first: \'Bob\',\r\n      last: \'Davis\',\r\n    },\r\n    {\r\n      id: 3,\r\n      first: \'Charlie\',\r\n      last: \'Rosenburg\',\r\n    }\r\n  ];\r\n\r\n  compareWithFn = (o1, o2) => {\r\n    return o1 && o2 ? o1.id === o2.id : o1 === o2;\r\n  };\r\n\r\n  compareWith = compareWithFn;\r\n}\r\n```\r\n\r\n## Interface Options\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Interface Options</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Alert</ion-label>\r\n    <ion-select [interfaceOptions]="customAlertOptions" interface="alert" multiple="true" placeholder="Select One">\r\n      <ion-select-option value="bacon">Bacon</ion-select-option>\r\n      <ion-select-option value="olives">Black Olives</ion-select-option>\r\n      <ion-select-option value="xcheese">Extra Cheese</ion-select-option>\r\n      <ion-select-option value="peppers">Green Peppers</ion-select-option>\r\n      <ion-select-option value="mushrooms">Mushrooms</ion-select-option>\r\n      <ion-select-option value="onions">Onions</ion-select-option>\r\n      <ion-select-option value="pepperoni">Pepperoni</ion-select-option>\r\n      <ion-select-option value="pineapple">Pineapple</ion-select-option>\r\n      <ion-select-option value="sausage">Sausage</ion-select-option>\r\n      <ion-select-option value="Spinach">Spinach</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Popover</ion-label>\r\n    <ion-select [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="Select One">\r\n      <ion-select-option value="brown">Brown</ion-select-option>\r\n      <ion-select-option value="blonde">Blonde</ion-select-option>\r\n      <ion-select-option value="black">Black</ion-select-option>\r\n      <ion-select-option value="red">Red</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Action Sheet</ion-label>\r\n    <ion-select [interfaceOptions]="customActionSheetOptions" interface="action-sheet" placeholder="Select One">\r\n      <ion-select-option value="red">Red</ion-select-option>\r\n      <ion-select-option value="purple">Purple</ion-select-option>\r\n      <ion-select-option value="yellow">Yellow</ion-select-option>\r\n      <ion-select-option value="orange">Orange</ion-select-option>\r\n      <ion-select-option value="green">Green</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'select-example\',\r\n  templateUrl: \'select-example.html\',\r\n  styleUrls: [\'./select-example.css\'],\r\n})\r\nexport class SelectExample {\r\n  customAlertOptions: any = {\r\n    header: \'Pizza Toppings\',\r\n    subHeader: \'Select your toppings\',\r\n    message: \'$1.00 per topping\',\r\n    translucent: true\r\n  };\r\n\r\n  customPopoverOptions: any = {\r\n    header: \'Hair Color\',\r\n    subHeader: \'Select your hair color\',\r\n    message: \'Only select your dominant hair color\'\r\n  };\r\n\r\n  customActionSheetOptions: any = {\r\n    header: \'Colors\',\r\n    subHeader: \'Select your favorite color\'\r\n  };\r\n}\r\n```',
        javascript:
          '## Single Selection\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Single Selection</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Gender</ion-label>\r\n    <ion-select placeholder="Select One">\r\n      <ion-select-option value="f">Female</ion-select-option>\r\n      <ion-select-option value="m">Male</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Hair Color</ion-label>\r\n    <ion-select value="brown" ok-text="Okay" cancel-text="Dismiss">\r\n      <ion-select-option value="brown">Brown</ion-select-option>\r\n      <ion-select-option value="blonde">Blonde</ion-select-option>\r\n      <ion-select-option value="black">Black</ion-select-option>\r\n      <ion-select-option value="red">Red</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n```\r\n\r\n## Multiple Selection\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Multiple Selection</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Toppings</ion-label>\r\n    <ion-select multiple="true" cancel-text="Nah" ok-text="Okay!">\r\n      <ion-select-option value="bacon">Bacon</ion-select-option>\r\n      <ion-select-option value="olives">Black Olives</ion-select-option>\r\n      <ion-select-option value="xcheese">Extra Cheese</ion-select-option>\r\n      <ion-select-option value="peppers">Green Peppers</ion-select-option>\r\n      <ion-select-option value="mushrooms">Mushrooms</ion-select-option>\r\n      <ion-select-option value="onions">Onions</ion-select-option>\r\n      <ion-select-option value="pepperoni">Pepperoni</ion-select-option>\r\n      <ion-select-option value="pineapple">Pineapple</ion-select-option>\r\n      <ion-select-option value="sausage">Sausage</ion-select-option>\r\n      <ion-select-option value="Spinach">Spinach</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Pets</ion-label>\r\n    <ion-select multiple="true">\r\n      <ion-select-option value="bird" selected>Bird</ion-select-option>\r\n      <ion-select-option value="cat">Cat</ion-select-option>\r\n      <ion-select-option value="dog" selected>Dog</ion-select-option>\r\n      <ion-select-option value="honeybadger">Honey Badger</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n## Objects as Values\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Objects as Values (compareWith)</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Users</ion-label>\r\n    <ion-select id="objectSelectCompareWith"></ion-select>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n\r\n```javascript\r\n  let objectOptions = [\r\n    {\r\n      id: 1,\r\n      first: \'Alice\',\r\n      last: \'Smith\',\r\n    },\r\n    {\r\n      id: 2,\r\n      first: \'Bob\',\r\n      last: \'Davis\',\r\n    },\r\n    {\r\n      id: 3,\r\n      first: \'Charlie\',\r\n      last: \'Rosenburg\',\r\n    }\r\n  ];\r\n\r\n  let compareWithFn = (o1, o2) => {\r\n    return o1 && o2 ? o1.id === o2.id : o1 === o2;\r\n  };\r\n\r\n  let objectSelectElement = document.getElementById(\'objectSelectCompareWith\');\r\n  objectSelectElement.compareWith = compareWithFn;\r\n  \r\n  objectOptions.forEach((option, i) => {\r\n    let selectOption = document.createElement(\'ion-select-option\');\r\n    selectOption.value = option;\r\n    selectOption.textContent = option.first + \' \' + option.last;\r\n    selectOption.selected = (i === 0);\r\n    \r\n    objectSelectElement.appendChild(selectOption)\r\n  });\r\n}\r\n```\r\n\r\n## Interface Options\r\n\r\n```html\r\n<ion-list>\r\n  <ion-list-header>Interface Options</ion-list-header>\r\n\r\n  <ion-item>\r\n    <ion-label>Alert</ion-label>\r\n    <ion-select id="customAlertSelect" interface="alert" multiple="true" placeholder="Select One">\r\n      <ion-select-option value="bacon">Bacon</ion-select-option>\r\n      <ion-select-option value="olives">Black Olives</ion-select-option>\r\n      <ion-select-option value="xcheese">Extra Cheese</ion-select-option>\r\n      <ion-select-option value="peppers">Green Peppers</ion-select-option>\r\n      <ion-select-option value="mushrooms">Mushrooms</ion-select-option>\r\n      <ion-select-option value="onions">Onions</ion-select-option>\r\n      <ion-select-option value="pepperoni">Pepperoni</ion-select-option>\r\n      <ion-select-option value="pineapple">Pineapple</ion-select-option>\r\n      <ion-select-option value="sausage">Sausage</ion-select-option>\r\n      <ion-select-option value="Spinach">Spinach</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Popover</ion-label>\r\n    <ion-select id="customPopoverSelect" interface="popover" placeholder="Select One">\r\n      <ion-select-option value="brown">Brown</ion-select-option>\r\n      <ion-select-option value="blonde">Blonde</ion-select-option>\r\n      <ion-select-option value="black">Black</ion-select-option>\r\n      <ion-select-option value="red">Red</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Action Sheet</ion-label>\r\n    <ion-select id="customActionSheetSelect" interface="action-sheet" placeholder="Select One">\r\n      <ion-select-option value="red">Red</ion-select-option>\r\n      <ion-select-option value="purple">Purple</ion-select-option>\r\n      <ion-select-option value="yellow">Yellow</ion-select-option>\r\n      <ion-select-option value="orange">Orange</ion-select-option>\r\n      <ion-select-option value="green">Green</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n</ion-list>\r\n```\r\n\r\n```javascript\r\nvar customAlertSelect = document.getElementById(\'customAlertSelect\');\r\nvar customAlertOptions = {\r\n  header: \'Pizza Toppings\',\r\n  subHeader: \'Select your toppings\',\r\n  message: \'$1.00 per topping\',\r\n  translucent: true\r\n};\r\ncustomAlertSelect.interfaceOptions = customAlertOptions;\r\n\r\nvar customPopoverSelect = document.getElementById(\'customPopoverSelect\');\r\nvar customPopoverOptions = {\r\n  header: \'Hair Color\',\r\n  subHeader: \'Select your hair color\',\r\n  message: \'Only select your dominant hair color\'\r\n};\r\ncustomPopoverSelect.interfaceOptions = customPopoverOptions;\r\n\r\nvar customActionSheetSelect = document.getElementById(\'customActionSheetSelect\');\r\nvar customActionSheetOptions = {\r\n  header: \'Colors\',\r\n  subHeader: \'Select your favorite color\'\r\n};\r\ncustomActionSheetSelect.interfaceOptions = customActionSheetOptions;\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonList, IonListHeader, IonItem, IonLabel, IonSelect, IonSelectOption } from \'@ionic/react\';\r\n\r\nconst customAlertOptions = {\r\n  header: \'Pizza Toppings\',\r\n  subHeader: \'Select your toppings\',\r\n  message: \'$1.00 per topping\',\r\n  translucent: true\r\n};\r\n\r\nconst customPopoverOptions = {\r\n  header: \'Hair Color\',\r\n  subHeader: \'Select your hair color\',\r\n  message: \'Only select your dominant hair color\'\r\n};\r\n\r\nconst customActionSheetOptions = {\r\n  header: \'Colors\',\r\n  subHeader: \'Select your favorite color\'\r\n};\r\n\r\nconst objectOptions = [\r\n  {\r\n    id: 1,\r\n    first: \'Alice\',\r\n    last: \'Smith\'\r\n  },\r\n  {\r\n    id: 2,\r\n    first: \'Bob\',\r\n    last: \'Davis\'\r\n  },\r\n  {\r\n    id: 3,\r\n    first: \'Charlie\',\r\n    last: \'Rosenburg\'\r\n  }\r\n];\r\n\r\nconst compareWith = (o1: any, o2: any) => {\r\n  return o1 && o2 ? o1.id === o2.id : o1 === o2;\r\n};\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    ## Single Selection\r\n\r\n\r\n    <IonList>\r\n      <IonListHeader>Single Selection</IonListHeader>\r\n\r\n      <IonItem>\r\n        <IonLabel>Gender</IonLabel>\r\n        <IonSelect placeholder="Select One">\r\n          <IonSelectOption value="f">Female</IonSelectOption>\r\n          <IonSelectOption value="m">Male</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Hair Color</IonLabel>\r\n        <IonSelect value="brown" okText="Okay" cancelText="Dismiss">\r\n          <IonSelectOption value="brown">Brown</IonSelectOption>\r\n          <IonSelectOption value="blonde">Blonde</IonSelectOption>\r\n          <IonSelectOption value="black">Black</IonSelectOption>\r\n          <IonSelectOption value="red">Red</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n    </IonList>\r\n\r\n\r\n    ## Multiple Selection\r\n\r\n\r\n    <IonList>\r\n      <IonListHeader>Multiple Selection</IonListHeader>\r\n\r\n      <IonItem>\r\n        <IonLabel>Toppings</IonLabel>\r\n        <IonSelect multiple={true} cancelText="Nah" okText="Okay!">\r\n          <IonSelectOption value="bacon">Bacon</IonSelectOption>\r\n          <IonSelectOption value="olives">Black Olives</IonSelectOption>\r\n          <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>\r\n          <IonSelectOption value="peppers">Green Peppers</IonSelectOption>\r\n          <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>\r\n          <IonSelectOption value="onions">Onions</IonSelectOption>\r\n          <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>\r\n          <IonSelectOption value="pineapple">Pineapple</IonSelectOption>\r\n          <IonSelectOption value="sausage">Sausage</IonSelectOption>\r\n          <IonSelectOption value="Spinach">Spinach</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Pets</IonLabel>\r\n        <IonSelect multiple={true}>\r\n          <IonSelectOption value="bird" selected>Bird</IonSelectOption>\r\n          <IonSelectOption value="cat">Cat</IonSelectOption>\r\n          <IonSelectOption value="dog" selected>Dog</IonSelectOption>\r\n          <IonSelectOption value="honeybadger">Honey Badger</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n    </IonList>\r\n    \r\n    ## Objects as Values\r\n    \r\n    <IonList>\r\n      <IonListHeader>Objects as Values (compareWith)</IonListHeader>\r\n      <IonItem>\r\n        <IonLabel>Users</IonLabel>\r\n        <IonSelect compareWith={compareWith}>\r\n          {objectOptions.map((object, i) => {\r\n            return <IonSelectOption key={object.id} value={object.id}>{object.first} {object.last}</IonSelectOption>\r\n          })}\r\n        </IonSelect>\r\n      </IonItem>\r\n    </IonList>\r\n\r\n\r\n    ## Interface Options\r\n\r\n\r\n    <IonList>\r\n      <IonListHeader>Interface Options</IonListHeader>\r\n\r\n      <IonItem>\r\n        <IonLabel>Alert</IonLabel>\r\n        <IonSelect interfaceOptions={customAlertOptions} interface="alert" multiple={true} placeholder="Select One">\r\n          <IonSelectOption value="bacon">Bacon</IonSelectOption>\r\n          <IonSelectOption value="olives">Black Olives</IonSelectOption>\r\n          <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>\r\n          <IonSelectOption value="peppers">Green Peppers</IonSelectOption>\r\n          <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>\r\n          <IonSelectOption value="onions">Onions</IonSelectOption>\r\n          <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>\r\n          <IonSelectOption value="pineapple">Pineapple</IonSelectOption>\r\n          <IonSelectOption value="sausage">Sausage</IonSelectOption>\r\n          <IonSelectOption value="Spinach">Spinach</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Popover</IonLabel>\r\n        <IonSelect interfaceOptions={customPopoverOptions} interface="popover" placeholder="Select One">\r\n          <IonSelectOption value="brown">Brown</IonSelectOption>\r\n          <IonSelectOption value="blonde">Blonde</IonSelectOption>\r\n          <IonSelectOption value="black">Black</IonSelectOption>\r\n          <IonSelectOption value="red">Red</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Action Sheet</IonLabel>\r\n        <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Select One">\r\n          <IonSelectOption value="red">Red</IonSelectOption>\r\n          <IonSelectOption value="purple">Purple</IonSelectOption>\r\n          <IonSelectOption value="yellow">Yellow</IonSelectOption>\r\n          <IonSelectOption value="orange">Orange</IonSelectOption>\r\n          <IonSelectOption value="green">Green</IonSelectOption>\r\n        </IonSelect>\r\n      </IonItem>\r\n    </IonList>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '## Single Selection\r\n\r\n```html\r\n<template>\r\n  <ion-list>\r\n    <ion-list-header>Single Selection</ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Gender</ion-label>\r\n      <ion-select placeholder="Select One">\r\n        <ion-select-option value="f">Female</ion-select-option>\r\n        <ion-select-option value="m">Male</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Hair Color</ion-label>\r\n      <ion-select value="brown" okText="Okay" cancelText="Dismiss">\r\n        <ion-select-option value="brown">Brown</ion-select-option>\r\n        <ion-select-option value="blonde">Blonde</ion-select-option>\r\n        <ion-select-option value="black">Black</ion-select-option>\r\n        <ion-select-option value="red">Red</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</template>\r\n```\r\n\r\n## Multiple Selection\r\n\r\n```html\r\n<template>\r\n  <ion-list>\r\n    <ion-list-header>Multiple Selection</ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Toppings</ion-label>\r\n      <ion-select multiple="true" cancelText="Nah" okText="Okay!">\r\n        <ion-select-option value="bacon">Bacon</ion-select-option>\r\n        <ion-select-option value="olives">Black Olives</ion-select-option>\r\n        <ion-select-option value="xcheese">Extra Cheese</ion-select-option>\r\n        <ion-select-option value="peppers">Green Peppers</ion-select-option>\r\n        <ion-select-option value="mushrooms">Mushrooms</ion-select-option>\r\n        <ion-select-option value="onions">Onions</ion-select-option>\r\n        <ion-select-option value="pepperoni">Pepperoni</ion-select-option>\r\n        <ion-select-option value="pineapple">Pineapple</ion-select-option>\r\n        <ion-select-option value="sausage">Sausage</ion-select-option>\r\n        <ion-select-option value="Spinach">Spinach</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Pets</ion-label>\r\n      <ion-select multiple="true">\r\n        <ion-select-option value="bird" selected>Bird</ion-select-option>\r\n        <ion-select-option value="cat">Cat</ion-select-option>\r\n        <ion-select-option value="dog" selected>Dog</ion-select-option>\r\n        <ion-select-option value="honeybadger">Honey Badger</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n\r\n## Interface Options\r\n\r\n```html\r\n<template>\r\n  <ion-list>\r\n    <ion-list-header>Interface Options</ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Alert</ion-label>\r\n      <ion-select :interfaceOptions="customAlertOptions" interface="alert" multiple="true" placeholder="Select One">\r\n        <ion-select-option value="bacon">Bacon</ion-select-option>\r\n        <ion-select-option value="olives">Black Olives</ion-select-option>\r\n        <ion-select-option value="xcheese">Extra Cheese</ion-select-option>\r\n        <ion-select-option value="peppers">Green Peppers</ion-select-option>\r\n        <ion-select-option value="mushrooms">Mushrooms</ion-select-option>\r\n        <ion-select-option value="onions">Onions</ion-select-option>\r\n        <ion-select-option value="pepperoni">Pepperoni</ion-select-option>\r\n        <ion-select-option value="pineapple">Pineapple</ion-select-option>\r\n        <ion-select-option value="sausage">Sausage</ion-select-option>\r\n        <ion-select-option value="Spinach">Spinach</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Popover</ion-label>\r\n      <ion-select :interfaceOptions="customPopoverOptions" interface="popover" placeholder="Select One">\r\n        <ion-select-option value="brown">Brown</ion-select-option>\r\n        <ion-select-option value="blonde">Blonde</ion-select-option>\r\n        <ion-select-option value="black">Black</ion-select-option>\r\n        <ion-select-option value="red">Red</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Action Sheet</ion-label>\r\n      <ion-select :interfaceOptions]="customActionSheetOptions" interface="action-sheet" placeholder="Select One">\r\n        <ion-select-option value="red">Red</ion-select-option>\r\n        <ion-select-option value="purple">Purple</ion-select-option>\r\n        <ion-select-option value="yellow">Yellow</ion-select-option>\r\n        <ion-select-option value="orange">Orange</ion-select-option>\r\n        <ion-select-option value="green">Green</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</template>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class SelectExample extends Vue {\r\n    customAlertOptions: any = {\r\n      header: \'Pizza Toppings\',\r\n      subHeader: \'Select your toppings\',\r\n      message: \'$1.00 per topping\',\r\n      translucent: true\r\n    };\r\n\r\n    customPopoverOptions: any = {\r\n      header: \'Hair Color\',\r\n      subHeader: \'Select your hair color\',\r\n      message: \'Only select your dominant hair color\'\r\n    };\r\n\r\n    customActionSheetOptions: any = {\r\n      header: \'Colors\',\r\n      subHeader: \'Select your favorite color\'\r\n    };\r\n  }\r\n</script>\r\n```\r\n'
      },
      props: [
        {
          name: "cancelText",
          type: "string",
          mutable: false,
          attr: "cancel-text",
          reflectToAttr: false,
          docs: "The text to display on the cancel button.",
          docsTags: [],
          default: "'Cancel'",
          optional: false,
          required: false
        },
        {
          name: "compareWith",
          type:
            "((currentValue: any, compareValue: any) => boolean) | null | string | undefined",
          mutable: false,
          attr: "compare-with",
          reflectToAttr: false,
          docs: "A property name or function used to compare object values",
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
          docs: "If `true`, the user cannot interact with the select.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "interface",
          type: '"action-sheet" | "alert" | "popover"',
          mutable: false,
          attr: "interface",
          reflectToAttr: false,
          docs:
            "The interface the select should use: `action-sheet`, `popover` or `alert`.",
          docsTags: [],
          default: "'alert'",
          optional: false,
          required: false
        },
        {
          name: "interfaceOptions",
          type: "any",
          mutable: false,
          attr: "interface-options",
          reflectToAttr: false,
          docs:
            "Any additional options that the `alert`, `action-sheet` or `popover` interface\r\ncan take. See the [AlertController API docs](../../alert/AlertController/#create), the\r\n[ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the\r\n[PopoverController API docs](../../popover/PopoverController/#create) for the\r\ncreate options for each interface.",
          docsTags: [],
          default: "{}",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "multiple",
          type: "boolean",
          mutable: false,
          attr: "multiple",
          reflectToAttr: false,
          docs: "If `true`, the select can accept multiple values.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "okText",
          type: "string",
          mutable: false,
          attr: "ok-text",
          reflectToAttr: false,
          docs: "The text to display on the ok button.",
          docsTags: [],
          default: "'OK'",
          optional: false,
          required: false
        },
        {
          name: "placeholder",
          type: "null | string | undefined",
          mutable: false,
          attr: "placeholder",
          reflectToAttr: false,
          docs: "The text to display when the select is empty.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "selectedText",
          type: "null | string | undefined",
          mutable: false,
          attr: "selected-text",
          reflectToAttr: false,
          docs: "The text to display instead of the selected option's value.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "value",
          type: "any",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "the value of the select.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "open",
          returns: {
            type:
              "Promise<HTMLIonPopoverElement | HTMLIonActionSheetElement | HTMLIonAlertElement | undefined>",
            docs: ""
          },
          signature:
            "open(ev?: UIEvent | undefined) => Promise<HTMLIonPopoverElement | HTMLIonActionSheetElement | HTMLIonAlertElement | undefined>",
          parameters: [
            {
              name: "ev",
              type: "UIEvent | undefined",
              docs: ""
            }
          ],
          docs:
            "Opens the select overlay, it could be an alert, action-sheet or popover,\r\nbased in `ion-select` settings.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the select loses focus.",
          docsTags: []
        },
        {
          event: "ionCancel",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the selection is cancelled.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "SelectChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the select has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the select"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the select"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the select"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the select"
        }
      ],
      slots: []
    },
    {
      tag: "ion-skeleton-text",
      encapsulation: "shadow",
      readme:
        "# ion-skeleton-text\r\n\r\nSkeleton Text is a component for rendering placeholder content. The element will render a gray block at the specified width.\r\n\r\n\r",
      docs:
        "Skeleton Text is a component for rendering placeholder content. The element will render a gray block at the specified width.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Data to display after skeleton screen -->\r\n<div *ngIf="data">\r\n  <div class="ion-padding">\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-list-header>Data</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot="start">\r\n        <img src="./avatar.svg">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          {{ data.heading }}\r\n        </h3>\r\n        <p>\r\n          {{ data.para1 }}\r\n        </p>\r\n        <p>\r\n          {{ data.para2 }}\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot="start">\r\n        <img src="./thumbnail.svg">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          {{ data.heading }}\r\n        </h3>\r\n        <p>\r\n          {{ data.para1 }}\r\n        </p>\r\n        <p>\r\n          {{ data.para2 }}\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name="call" slot="start"></ion-icon>\r\n      <ion-label>\r\n        <h3>\r\n          {{ data.heading }}\r\n        </h3>\r\n        <p>\r\n          {{ data.para1 }}\r\n        </p>\r\n        <p>\r\n          {{ data.para2 }}\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n\r\n<!-- Skeleton screen -->\r\n<div *ngIf="!data">\r\n  <div class="ion-padding custom-skeleton">\r\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot="start">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot="start">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n```\r\n\r\n```css\r\n/* Custom Skeleton Line Height and Margin */\r\n.custom-skeleton ion-skeleton-text {\r\n  line-height: 13px;\r\n}\r\n\r\n.custom-skeleton ion-skeleton-text:last-child {\r\n  margin-bottom: 5px;\r\n}\r\n```\r\n\r\n```typescript\r\nimport { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'skeleton-text-example\',\r\n  templateUrl: \'skeleton-text-example.html\',\r\n  styleUrls: [\'./skeleton-text-example.css\']\r\n})\r\nexport class SkeletonTextExample {\r\n  data: any;\r\n\r\n  constructor() {}\r\n\r\n  ionViewWillEnter() {\r\n    setTimeout(() => {\r\n      this.data = {\r\n        \'heading\': \'Normal text\',\r\n        \'para1\': \'Lorem ipsum dolor sit amet, consectetur\',\r\n        \'para2\': \'adipiscing elit.\'\r\n      };\r\n    }, 5000);\r\n  }\r\n}\r\n```',
        javascript:
          '```html\r\n<!-- Data to display after skeleton screen -->\r\n<div id="data">\r\n  <div class="ion-padding">\r\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-list-header>Data</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot="start">\r\n        <img src="./avatar.svg">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          Normal text\r\n        </h3>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur\r\n        </p>\r\n        <p>\r\n          adipiscing elit.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot="start">\r\n        <img src="./thumbnail.svg">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          Normal text\r\n        </h3>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur\r\n        </p>\r\n        <p>\r\n          adipiscing elit.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name="call" slot="start"></ion-icon>\r\n      <ion-label>\r\n        <h3>\r\n          Normal text\r\n        </h3>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur\r\n        </p>\r\n        <p>\r\n          adipiscing elit.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n\r\n<!-- Skeleton screen -->\r\n<div id="skeleton">\r\n  <div class="ion-padding custom-skeleton">\r\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n    <ion-skeleton-text animated></ion-skeleton-text>\r\n    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\r\n    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot="start">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot="start">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n```\r\n\r\n```css\r\n#data {\r\n  display: none;\r\n}\r\n\r\n/* Custom Skeleton Line Height and Margin */\r\n.custom-skeleton ion-skeleton-text {\r\n  line-height: 13px;\r\n}\r\n\r\n.custom-skeleton ion-skeleton-text:last-child {\r\n  margin-bottom: 5px;\r\n}\r\n```\r\n\r\n```javascript\r\nfunction onLoad() {\r\n  const skeletonEl = document.getElementById(\'skeleton\');\r\n  const dataEl = document.getElementById(\'data\');\r\n\r\n  setTimeout(() => {\r\n    skeletonEl.style.display = \'none\';\r\n    dataEl.style.display = \'block\';\r\n  }, 5000);\r\n}\r\n```',
        vue:
          '```html\r\n<template>\r\n  <!-- Data to display after skeleton screen -->\r\n  <div v-if="data">\r\n    <div class="ion-padding">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\r\n    </div>\r\n\r\n    <ion-list>\r\n      <ion-list-header>Data</ion-list-header>\r\n      <ion-item>\r\n        <ion-avatar slot="start">\r\n          <img src="./avatar.svg">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>\r\n            {{ data.heading }}\r\n          </h3>\r\n          <p>\r\n            {{ data.para1 }}\r\n          </p>\r\n          <p>\r\n            {{ data.para2 }}\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-thumbnail slot="start">\r\n          <img src="./thumbnail.svg">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h3>\r\n            {{ data.heading }}\r\n          </h3>\r\n          <p>\r\n            {{ data.para1 }}\r\n          </p>\r\n          <p>\r\n            {{ data.para2 }}\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name="call" slot="start"></ion-icon>\r\n        <ion-label>\r\n          <h3>\r\n            {{ data.heading }}\r\n          </h3>\r\n          <p>\r\n            {{ data.para1 }}\r\n          </p>\r\n          <p>\r\n            {{ data.para2 }}\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <!-- Skeleton screen -->\r\n  <div *ngIf="!data">\r\n    <div class="ion-padding custom-skeleton">\r\n      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n      <ion-skeleton-text animated></ion-skeleton-text>\r\n      <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>\r\n      <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>\r\n      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n    </div>\r\n\r\n    <ion-list>\r\n      <ion-list-header>\r\n        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>\r\n      </ion-list-header>\r\n      <ion-item>\r\n        <ion-avatar slot="start">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n          </p>\r\n          <p>\r\n            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-thumbnail slot="start">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n          </p>\r\n          <p>\r\n            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>\r\n          </p>\r\n          <p>\r\n            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</template>\r\n\r\n<style>\r\n  /* Custom Skeleton Line Height and Margin */\r\n  .custom-skeleton ion-skeleton-text {\r\n    line-height: 13px;\r\n  }\r\n\r\n  .custom-skeleton ion-skeleton-text:last-child {\r\n    margin-bottom: 5px;\r\n  }\r\n</style>\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class SkeletonTextExample extends Vue {\r\n    data: any;\r\n\r\n    mounted() {\r\n      setTimeout(() => {\r\n        this.data = {\r\n          \'heading\': \'Normal text\',\r\n          \'para1\': \'Lorem ipsum dolor sit amet, consectetur\',\r\n          \'para2\': \'adipiscing elit.\'\r\n        };\r\n      }, 5000);\r\n    }\r\n  }\r\n</script>\r\n```'
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the skeleton text will animate.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "width",
          type: "string | undefined",
          mutable: false,
          attr: "width",
          reflectToAttr: false,
          docs: "",
          docsTags: [
            {
              name: "deprecated",
              text:
                "- Use CSS instead. The width of the skeleton text. If supplied, it will override the CSS style."
            }
          ],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the skeleton text"
        },
        {
          name: "--background-rgb",
          annotation: "prop",
          docs: "Background of the skeleton text in rgb format"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the skeleton text"
        }
      ],
      slots: []
    },
    {
      tag: "ion-slide",
      encapsulation: "none",
      readme:
        "# ion-slide\r\n\r\nThe Slide component is a child component of [Slides](../slides). The template\r\nshould be written as `ion-slide`. Any slide content should be written\r\nin this component and it should be used in conjunction with [Slides](../slides).\r\n\r\nSee the [Slides API Docs](../slides) for more usage information.\r\n\r\n\r",
      docs:
        "The Slide component is a child component of [Slides](../slides). The template\r\nshould be written as `ion-slide`. Any slide content should be written\r\nin this component and it should be used in conjunction with [Slides](../slides).\r\n\r\nSee the [Slides API Docs](../slides) for more usage information.",
      docsTags: [],
      usage: {},
      props: [],
      methods: [],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-slides",
      encapsulation: "none",
      readme:
        "# ion-slides\r\n\r\nThe Slides component is a multi-section container. Each section can be swiped\r\nor dragged between. It contains any number of [Slide](../slide) components.\r\n\r\n\r\nAdopted from Swiper.js:\r\nThe most modern mobile touch slider and framework with hardware accelerated transitions.\r\n\r\nhttp://www.idangero.us/swiper/\r\n\r\nCopyright 2016, Vladimir Kharlampidi\r\nThe iDangero.us\r\nhttp://www.idangero.us/\r\n\r\nLicensed under MIT\r\n\r\n\r",
      docs:
        "The Slides component is a multi-section container. Each section can be swiped\r\nor dragged between. It contains any number of [Slide](../slide) components.\r\n\r\n\r\nAdopted from Swiper.js:\r\nThe most modern mobile touch slider and framework with hardware accelerated transitions.\r\n\r\nhttp://www.idangero.us/swiper/\r\n\r\nCopyright 2016, Vladimir Kharlampidi\r\nThe iDangero.us\r\nhttp://www.idangero.us/\r\n\r\nLicensed under MIT",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'slides-example',\r\n  template: `\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n      <ion-slide>\r\n        <h1>Slide 1</h1>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <h1>Slide 2</h1>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <h1>Slide 3</h1>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  `\r\n})\r\nexport class SlideExample {\r\n  slideOpts = {\r\n    effect: 'flip'\r\n  };\r\n  constructor() {}\r\n}\r\n```\r\n",
        javascript:
          "```html\r\n  <ion-slides pager=\"true\">\r\n\r\n    <ion-slide>\r\n      <h1>Slide 1</h1>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <h1>Slide 2</h1>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <h1>Slide 3</h1>\r\n    </ion-slide>\r\n  </ion-slides>\r\n```\r\n\r\n```javascript\r\nvar slides = document.querySelector('ion-slides');\r\nslides.options = {\r\n  effect: 'flip'\r\n}\r\n```\r\n",
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonSlides, IonSlide } from '@ionic/react';\r\n\r\nconst slideOpts = {\r\n  effect: 'flip'\r\n};\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <IonSlides pager={true} options={slideOpts}>\r\n    <IonSlide>\r\n      <h1>Slide 1</h1>\r\n    </IonSlide>\r\n    <IonSlide>\r\n      <h1>Slide 2</h1>\r\n    </IonSlide>\r\n    <IonSlide>\r\n      <h1>Slide 3</h1>\r\n    </IonSlide>\r\n  </IonSlides>\r\n);\r\n\r\nexport default Example;\r\n```\r\n",
        vue:
          '```html\r\n<template>\r\n  <ion-slides pager="true" :options="slideOpts">\r\n    <ion-slide>\r\n      <h1>Slide 1</h1>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <h1>Slide 2</h1>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <h1>Slide 3</h1>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</template>\r\n\r\n\r\n<script lang="ts">\r\n  import { Component, Vue } from \'vue-property-decorator\';\r\n\r\n  @Component()\r\n  export default class SelectExample extends Vue {\r\n    slideOpts = {\r\n      effect: \'flip\'\r\n    };\r\n  }\r\n</script>\r\n```\r\n'
      },
      props: [
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "options",
          type: "any",
          mutable: false,
          attr: "options",
          reflectToAttr: false,
          docs:
            "Options to pass to the swiper instance.\r\nSee http://idangero.us/swiper/api/ for valid options",
          docsTags: [],
          default: "{}",
          optional: false,
          required: false
        },
        {
          name: "pager",
          type: "boolean",
          mutable: false,
          attr: "pager",
          reflectToAttr: false,
          docs: "If `true`, show the pagination.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "scrollbar",
          type: "boolean",
          mutable: false,
          attr: "scrollbar",
          reflectToAttr: false,
          docs: "If `true`, show the scrollbar.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "getActiveIndex",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "getActiveIndex() => Promise<number>",
          parameters: [],
          docs: "Get the index of the active slide.",
          docsTags: []
        },
        {
          name: "getPreviousIndex",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "getPreviousIndex() => Promise<number>",
          parameters: [],
          docs: "Get the index of the previous slide.",
          docsTags: []
        },
        {
          name: "isBeginning",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "isBeginning() => Promise<boolean>",
          parameters: [],
          docs: "Get whether or not the current slide is the first slide.",
          docsTags: []
        },
        {
          name: "isEnd",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature: "isEnd() => Promise<boolean>",
          parameters: [],
          docs: "Get whether or not the current slide is the last slide.",
          docsTags: []
        },
        {
          name: "length",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "length() => Promise<number>",
          parameters: [],
          docs: "Get the total number of slides.",
          docsTags: []
        },
        {
          name: "lockSwipeToNext",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "lockSwipeToNext(shouldLockSwipeToNext: boolean) => Promise<void>",
          parameters: [
            {
              name: "shouldLockSwipeToNext",
              type: "boolean",
              docs: ""
            }
          ],
          docs: "Lock or unlock the ability to slide to the next slides.",
          docsTags: []
        },
        {
          name: "lockSwipeToPrev",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "lockSwipeToPrev(shouldLockSwipeToPrev: boolean) => Promise<void>",
          parameters: [
            {
              name: "shouldLockSwipeToPrev",
              type: "boolean",
              docs: ""
            }
          ],
          docs: "Lock or unlock the ability to slide to the previous slides.",
          docsTags: []
        },
        {
          name: "lockSwipes",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "lockSwipes(shouldLockSwipes: boolean) => Promise<void>",
          parameters: [
            {
              name: "shouldLockSwipes",
              type: "boolean",
              docs: ""
            }
          ],
          docs: "Lock or unlock the ability to slide to change slides.",
          docsTags: []
        },
        {
          name: "slideNext",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "slideNext(speed?: number | undefined, runCallbacks?: boolean | undefined) => Promise<void>",
          parameters: [
            {
              name: "speed",
              type: "number | undefined",
              docs: ""
            },
            {
              name: "runCallbacks",
              type: "boolean | undefined",
              docs: ""
            }
          ],
          docs: "Transition to the next slide.",
          docsTags: []
        },
        {
          name: "slidePrev",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "slidePrev(speed?: number | undefined, runCallbacks?: boolean | undefined) => Promise<void>",
          parameters: [
            {
              name: "speed",
              type: "number | undefined",
              docs: ""
            },
            {
              name: "runCallbacks",
              type: "boolean | undefined",
              docs: ""
            }
          ],
          docs: "Transition to the previous slide.",
          docsTags: []
        },
        {
          name: "slideTo",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "slideTo(index: number, speed?: number | undefined, runCallbacks?: boolean | undefined) => Promise<void>",
          parameters: [
            {
              name: "index",
              type: "number",
              docs: ""
            },
            {
              name: "speed",
              type: "number | undefined",
              docs: ""
            },
            {
              name: "runCallbacks",
              type: "boolean | undefined",
              docs: ""
            }
          ],
          docs: "Transition to the specified slide.",
          docsTags: []
        },
        {
          name: "startAutoplay",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "startAutoplay() => Promise<void>",
          parameters: [],
          docs: "Start auto play.",
          docsTags: []
        },
        {
          name: "stopAutoplay",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "stopAutoplay() => Promise<void>",
          parameters: [],
          docs: "Stop auto play.",
          docsTags: []
        },
        {
          name: "update",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "update() => Promise<void>",
          parameters: [],
          docs:
            "Update the underlying slider implementation. Call this if you've added or removed\r\nchild slides.",
          docsTags: []
        },
        {
          name: "updateAutoHeight",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature:
            "updateAutoHeight(speed?: number | undefined) => Promise<void>",
          parameters: [
            {
              name: "speed",
              type: "number | undefined",
              docs: ""
            }
          ],
          docs:
            "Force swiper to update its height (when autoHeight enabled) for the duration equal to 'speed' parameter",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionSlideDidChange",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the active slide has changed.",
          docsTags: []
        },
        {
          event: "ionSlideDoubleTap",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the user double taps on the slide's container.",
          docsTags: []
        },
        {
          event: "ionSlideDrag",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the slider is actively being moved.",
          docsTags: []
        },
        {
          event: "ionSlideNextEnd",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the next slide has ended.",
          docsTags: []
        },
        {
          event: "ionSlideNextStart",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the next slide has started.",
          docsTags: []
        },
        {
          event: "ionSlidePrevEnd",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the previous slide has ended.",
          docsTags: []
        },
        {
          event: "ionSlidePrevStart",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the previous slide has started.",
          docsTags: []
        },
        {
          event: "ionSlideReachEnd",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the slider is at the last slide.",
          docsTags: []
        },
        {
          event: "ionSlideReachStart",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the slider is at its initial position.",
          docsTags: []
        },
        {
          event: "ionSlidesDidLoad",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after Swiper initialization",
          docsTags: []
        },
        {
          event: "ionSlideTap",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the user taps/clicks on the slide's container.",
          docsTags: []
        },
        {
          event: "ionSlideTouchEnd",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the user releases the touch.",
          docsTags: []
        },
        {
          event: "ionSlideTouchStart",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the user first touches the slider.",
          docsTags: []
        },
        {
          event: "ionSlideTransitionEnd",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the slide transition has ended.",
          docsTags: []
        },
        {
          event: "ionSlideTransitionStart",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the slide transition has started.",
          docsTags: []
        },
        {
          event: "ionSlideWillChange",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the active slide has changed.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--bullet-background",
          annotation: "prop",
          docs: "Background of the pagination bullets"
        },
        {
          name: "--bullet-background-active",
          annotation: "prop",
          docs: "Background of the active pagination bullet"
        }
      ],
      slots: []
    },
    {
      tag: "ion-spinner",
      encapsulation: "shadow",
      readme:
        '# ion-spinner\r\n\r\nThe Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.\r\n\r\nThe default spinner to use is based on the platform. The default spinner for `ios` is `"lines"`, and the default for `android` is `"crescent"`. If the platform is not `ios` or `android`, the spinner will default to `crescent`. If the `name` property is set, then that spinner will be used instead of the platform specific spinner.\r\n\r\n\r\n\r',
      docs:
        'The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.\r\n\r\nThe default spinner to use is based on the platform. The default spinner for `ios` is `"lines"`, and the default for `android` is `"crescent"`. If the platform is not `ios` or `android`, the spinner will default to `crescent`. If the `name` property is set, then that spinner will be used instead of the platform specific spinner.',
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Spinner -->\r\n<ion-spinner></ion-spinner>\r\n\r\n<!-- Lines -->\r\n<ion-spinner name="lines"></ion-spinner>\r\n\r\n<!-- Lines Small -->\r\n<ion-spinner name="lines-small"></ion-spinner>\r\n\r\n<!-- Dots -->\r\n<ion-spinner name="dots"></ion-spinner>\r\n\r\n<!-- Bubbles -->\r\n<ion-spinner name="bubbles"></ion-spinner>\r\n\r\n<!-- Circles -->\r\n<ion-spinner name="circles"></ion-spinner>\r\n\r\n<!-- Crescent -->\r\n<ion-spinner name="crescent"></ion-spinner>\r\n\r\n<!-- Paused Default Spinner -->\r\n<ion-spinner paused></ion-spinner>\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Spinner -->\r\n<ion-spinner></ion-spinner>\r\n\r\n<!-- Lines -->\r\n<ion-spinner name="lines"></ion-spinner>\r\n\r\n<!-- Lines Small -->\r\n<ion-spinner name="lines-small"></ion-spinner>\r\n\r\n<!-- Dots -->\r\n<ion-spinner name="dots"></ion-spinner>\r\n\r\n<!-- Bubbles -->\r\n<ion-spinner name="bubbles"></ion-spinner>\r\n\r\n<!-- Circles -->\r\n<ion-spinner name="circles"></ion-spinner>\r\n\r\n<!-- Crescent -->\r\n<ion-spinner name="crescent"></ion-spinner>\r\n\r\n<!-- Paused Default Spinner -->\r\n<ion-spinner paused></ion-spinner>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonSpinner } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Spinner --*/}\r\n    <IonSpinner></IonSpinner>\r\n\r\n    {/*-- Lines --*/}\r\n    <IonSpinner name="lines"></IonSpinner>\r\n\r\n    {/*-- Lines Small --*/}\r\n    <IonSpinner name="lines-small"></IonSpinner>\r\n\r\n    {/*-- Dots --*/}\r\n    <IonSpinner name="dots"></IonSpinner>\r\n\r\n    {/*-- Bubbles --*/}\r\n    <IonSpinner name="bubbles"></IonSpinner>\r\n\r\n    {/*-- Circles --*/}\r\n    <IonSpinner name="circles"></IonSpinner>\r\n\r\n    {/*-- Crescent --*/}\r\n    <IonSpinner name="crescent"></IonSpinner>\r\n\r\n    {/*-- Paused Default Spinner --*/}\r\n    <IonSpinner paused></IonSpinner>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Spinner -->\r\n  <ion-spinner></ion-spinner>\r\n\r\n  <!-- Lines -->\r\n  <ion-spinner name="lines"></ion-spinner>\r\n\r\n  <!-- Lines Small -->\r\n  <ion-spinner name="lines-small"></ion-spinner>\r\n\r\n  <!-- Dots -->\r\n  <ion-spinner name="dots"></ion-spinner>\r\n\r\n  <!-- Bubbles -->\r\n  <ion-spinner name="bubbles"></ion-spinner>\r\n\r\n  <!-- Circles -->\r\n  <ion-spinner name="circles"></ion-spinner>\r\n\r\n  <!-- Crescent -->\r\n  <ion-spinner name="crescent"></ion-spinner>\r\n\r\n  <!-- Paused Default Spinner -->\r\n  <ion-spinner paused></ion-spinner>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "duration",
          type: "number | undefined",
          mutable: false,
          attr: "duration",
          reflectToAttr: false,
          docs:
            "Duration of the spinner animation in milliseconds. The default varies based on the spinner.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "name",
          type:
            '"bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | undefined',
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the SVG spinner to use. If a name is not provided, the platform's default\r\nspinner will be used.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "paused",
          type: "boolean",
          mutable: false,
          attr: "paused",
          reflectToAttr: false,
          docs: "If `true`, the spinner's animation will be paused.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the spinner"
        }
      ],
      slots: []
    },
    {
      tag: "ion-split-pane",
      encapsulation: "none",
      readme:
        '# ion-split-pane\r\n\r\nSplitPane is a component that makes it possible to create multi-view layout.\r\nSimilar to iPad apps, SplitPane allows UI elements, like Menus, to be\r\ndisplayed as the viewport increases.\r\n\r\nIf the devices screen size is below a certain size, the SplitPane will\r\ncollapse and the menu will become hidden again. This is especially useful when\r\ncreating an app that will be served over a browser or deployed through the app\r\nstore to phones and tablets.\r\n\r\n\r\n### Setting breakpoints\r\n\r\nBy default, SplitPane will expand when the screen is larger than 992px.\r\nIf you want to customize this, use the `when` input. The `when` input can\r\naccept any valid media query, as it uses `matchMedia()` underneath.\r\n\r\n\r\nSplitPane also provides some predefined media queries that can be used.\r\n\r\n```html\r\n<!-- could be "xs", "sm", "md", "lg", or "xl" -->\r\n<ion-split-pane when="md"></ion-split-pane>\r\n```\r\n\r\n\r\n | Size | Value                 | Description                                                           |\r\n |------|-----------------------|-----------------------------------------------------------------------|\r\n | `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |\r\n | `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |\r\n | `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |\r\n | `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |\r\n | `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |\r\n\r\n You can also pass in boolean values that will trigger SplitPane when the value\r\n or expression evaluates to true.\r\n\r\n\r',
      docs:
        "SplitPane is a component that makes it possible to create multi-view layout.\r\nSimilar to iPad apps, SplitPane allows UI elements, like Menus, to be\r\ndisplayed as the viewport increases.\r\n\r\nIf the devices screen size is below a certain size, the SplitPane will\r\ncollapse and the menu will become hidden again. This is especially useful when\r\ncreating an app that will be served over a browser or deployed through the app\r\nstore to phones and tablets.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-split-pane contentId="menu-content">\r\n  <!--  our side menu  -->\r\n  <ion-menu contentId="menu-content">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  </ion-menu>\r\n\r\n  <!-- the main content -->\r\n  <ion-router-outlet id="menu-content"></ion-router-outlet>\r\n</ion-split-pane>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-split-pane content-id="menu-content">\r\n  <!--  our side menu  -->\r\n  <ion-menu content-id="menu-content">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  </ion-menu>\r\n\r\n  <!-- the main content -->\r\n  <ion-content id="menu-content">\r\n    <h1>Hello</h1>\r\n  </ion-content>\r\n</ion-split-pane>\r\n```\r\n',
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonRouterOutlet } from '@ionic/react';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonSplitPane contentId=\"menuContent\">\r\n    {/*--  our side menu  --*/}\r\n    <IonMenu contentId=\"menuContent\">\r\n      <IonHeader>\r\n        <IonToolbar>\r\n          <IonTitle>Menu</IonTitle>\r\n        </IonToolbar>\r\n      </IonHeader>\r\n    </IonMenu>\r\n\r\n    {/*-- the main content --*/}\r\n    <IonRouterOutlet></IonRouterOutlet>\r\n  </IonSplitPane>\r\n);\r\n\r\nexport default Example;\r\n```\r\n",
        vue:
          '```html\r\n<template>\r\n  <ion-split-pane contentId="menu-content">\r\n    <!--  our side menu  -->\r\n    <ion-menu contentId="menu-content">\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n    </ion-menu>\r\n\r\n    <!-- the main content -->\r\n    <ion-router-outlet id="menu-content"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "contentId",
          type: "string | undefined",
          mutable: false,
          attr: "content-id",
          reflectToAttr: false,
          docs:
            'The content `id` of the split-pane\'s main content.\r\nThis property can be used instead of the `[main]` attribute to select the `main`\r\ncontent of the split-pane.\r\n\r\n```html\r\n   * <ion-split-pane content-id="my-content">\r\n   *   <ion-menu></ion-menu>\r\n   *   <div id="my-content">\r\n   * </ion-split-pane>\r\n   * ```',
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
          docs: "If `true`, the split pane will be hidden.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "when",
          type: "boolean | string",
          mutable: false,
          attr: "when",
          reflectToAttr: false,
          docs:
            "When the split-pane should be shown.\r\nCan be a CSS media query expression, or a shortcut expression.\r\nCan also be a boolean expression.",
          docsTags: [],
          default: "QUERY['lg']",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionSplitPaneVisible",
          detail: "{visible: boolean}",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs:
            "Expression to be called when the split-pane visibility has changed",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--border",
          annotation: "prop",
          docs: "Border between panes"
        }
      ],
      slots: []
    },
    {
      tag: "ion-tab-bar",
      encapsulation: "shadow",
      readme:
        "# ion-tab-bar\r\n\r\nThe tab bar is a UI component that contains a set of [tab buttons](../tab-button). A tab bar must be provided inside of [tabs](../tabs) to communicate with each [tab](../tab).\r\n\r\n\r",
      docs:
        "The tab bar is a UI component that contains a set of [tab buttons](../tab-button). A tab bar must be provided inside of [tabs](../tabs) to communicate with each [tab](../tab).",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-tabs>\r\n  <!-- Tab bar -->\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="account">\r\n      <ion-icon name="person"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab="contact">\r\n      <ion-icon name="call"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab="settings">\r\n      <ion-icon name="settings"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n```',
        javascript:
          '```html\r\n<ion-tabs>\r\n  <!-- Tab views -->\r\n  <ion-tab tab="account"></ion-tab>\r\n  <ion-tab tab="contact"></ion-tab>\r\n  <ion-tab tab="settings"></ion-tab>\r\n\r\n  <!-- Tab bar -->\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="account">\r\n      <ion-icon name="person"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab="contact">\r\n      <ion-icon name="call"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab="settings">\r\n      <ion-icon name="settings"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonTabs>\r\n    {/*-- Tab bar --*/}\r\n    <IonTabBar slot="bottom">\r\n      <IonTabButton tab="account">\r\n        <IonIcon name="person" />\r\n      </IonTabButton>\r\n      <IonTabButton tab="contact">\r\n        <IonIcon name="call" />\r\n      </IonTabButton>\r\n      <IonTabButton tab="settings">\r\n        <IonIcon name="settings" />\r\n      </IonTabButton>\r\n    </IonTabBar>\r\n  </IonTabs>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-tabs>\r\n    <!-- Tab bar -->\r\n    <ion-tab-bar slot="bottom">\r\n      <ion-tab-button tab="account">\r\n        <ion-icon name="person"></ion-icon>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab="contact">\r\n        <ion-icon name="call"></ion-icon>\r\n      </ion-tab-button>\r\n      <ion-tab-button tab="settings">\r\n        <ion-icon name="settings"></ion-icon>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "selectedTab",
          type: "string | undefined",
          mutable: false,
          attr: "selected-tab",
          reflectToAttr: false,
          docs: "The selected tab component",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the tab bar will be translucent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the tab bar"
        },
        {
          name: "--border",
          annotation: "prop",
          docs: "Border of the tab bar"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the tab bar"
        }
      ],
      slots: []
    },
    {
      tag: "ion-tab-button",
      encapsulation: "shadow",
      readme:
        "# ion-tab-button\r\n\r\nA tab button is a UI component that is placed inside of a [tab bar](../tab-bar). The tab button can specify the layout of the icon and label and connect to a [tab view](../tab).\r\n\r\nSee the [tabs documentation](../tabs) for more details on configuring tabs.\r\n\r\n\r",
      docs:
        "A tab button is a UI component that is placed inside of a [tab bar](../tab-bar). The tab button can specify the layout of the icon and label and connect to a [tab view](../tab).\r\n\r\nSee the [tabs documentation](../tabs) for more details on configuring tabs.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="schedule">\r\n      <ion-icon name="calendar"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="speakers">\r\n      <ion-icon name="contacts"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="map">\r\n      <ion-icon name="map"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="about">\r\n      <ion-icon name="information-circle"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">\r\n      <ion-icon name="calendar"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">\r\n      <ion-icon name="contacts"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="map" href="/app/tabs/(map:map)">\r\n      <ion-icon name="map"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="about" href="/app/tabs/(about:about)">\r\n      <ion-icon name="information-circle"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n  <ion-tab tab="schedule">\r\n    <ion-router-outlet name="schedule"></ion-router-outlet>\r\n  </ion-tab>\r\n\r\n  <ion-tab tab="speakers">\r\n    <ion-router-outlet name="speakers"></ion-router-outlet>\r\n  </ion-tab>\r\n\r\n  <ion-tab tab="map">\r\n    <ion-router-outlet name="map"></ion-router-outlet>\r\n  </ion-tab>\r\n\r\n  <ion-tab tab="about">\r\n    <ion-router-outlet name="about"></ion-router-outlet>\r\n  </ion-tab>\r\n\r\n</ion-tabs>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonTabs>\r\n\r\n    <IonTabBar slot="bottom">\r\n      <IonTabButton tab="schedule">\r\n        <IonIcon name="calendar" />\r\n        <IonLabel>Schedule</IonLabel>\r\n      </IonTabButton>\r\n\r\n      <IonTabButton tab="speakers">\r\n        <IonIcon name="contacts" />\r\n        <IonLabel>Speakers</IonLabel>\r\n      </IonTabButton>\r\n\r\n      <IonTabButton tab="map">\r\n        <IonIcon name="map" />\r\n        <IonLabel>Map</IonLabel>\r\n      </IonTabButton>\r\n\r\n      <IonTabButton tab="about">\r\n        <IonIcon name="information-circle" />\r\n        <IonLabel>About</IonLabel>\r\n      </IonTabButton>\r\n    </IonTabBar>\r\n\r\n  </IonTabs>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-tabs>\r\n\r\n    <ion-tab-bar slot="bottom">\r\n      <ion-tab-button tab="schedule">\r\n        <ion-icon name="calendar"></ion-icon>\r\n        <ion-label>Schedule</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab="speakers">\r\n        <ion-icon name="contacts"></ion-icon>\r\n        <ion-label>Speakers</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab="map">\r\n        <ion-icon name="map"></ion-icon>\r\n        <ion-label>Map</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab="about">\r\n        <ion-icon name="information-circle"></ion-icon>\r\n        <ion-label>About</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "The selected tab component",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "href",
          type: "string | undefined",
          mutable: false,
          attr: "href",
          reflectToAttr: false,
          docs:
            "The URL which will be used as the `href` within this tab's button anchor.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "layout",
          type:
            '"icon-bottom" | "icon-end" | "icon-hide" | "icon-start" | "icon-top" | "label-hide" | undefined',
          mutable: true,
          attr: "layout",
          reflectToAttr: false,
          docs:
            "Set the layout of the text and icon in the tab bar.\r\nIt defaults to `'icon-top'`.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "selected",
          type: "boolean",
          mutable: true,
          attr: "selected",
          reflectToAttr: false,
          docs: "The selected tab component",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "tab",
          type: "string | undefined",
          mutable: false,
          attr: "tab",
          reflectToAttr: false,
          docs:
            "A tab id must be provided for each `ion-tab`. It's used internally to reference\r\nthe selected tab or by the router to switch between them.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the tab button"
        },
        {
          name: "--background-focused",
          annotation: "prop",
          docs: "Background of the focused tab button"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the tab button"
        },
        {
          name: "--color-selected",
          annotation: "prop",
          docs: "Color of the selected tab button"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the tab button"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the tab button"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the tab button"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the tab button"
        },
        {
          name: "--ripple-color",
          annotation: "prop",
          docs: "Color of the button ripple effect"
        }
      ],
      slots: []
    },
    {
      tag: "ion-tab",
      encapsulation: "shadow",
      readme:
        "# ion-tab\r\n\r\nThe tab component is a child component of [tabs](../tabs). Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.\r\n\r\nSee the [tabs documentation](../tabs/) for more details on configuring tabs.\r\n\r\n\r",
      docs:
        "The tab component is a child component of [tabs](../tabs). Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.\r\n\r\nSee the [tabs documentation](../tabs/) for more details on configuring tabs.",
      docsTags: [],
      usage: {},
      props: [
        {
          name: "component",
          type: "Function | HTMLElement | null | string | undefined",
          mutable: false,
          attr: "component",
          reflectToAttr: false,
          docs: "The component to display inside of the tab.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "tab",
          type: "string",
          mutable: false,
          attr: "tab",
          reflectToAttr: false,
          docs:
            "A tab id must be provided for each `ion-tab`. It's used internally to reference\r\nthe selected tab or by the router to switch between them.",
          docsTags: [],
          optional: false,
          required: true
        }
      ],
      methods: [
        {
          name: "setActive",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "setActive() => Promise<void>",
          parameters: [],
          docs: "Set the active component for the tab",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-tabs",
      encapsulation: "shadow",
      readme:
        '# ion-tabs\r\n\r\nTabs are a top level navigation component to implement a tab-based navigation.\r\nThe component is a container of individual [Tab](../tab/) components.\r\n\r\n`ion-tabs` is a styleless component that works as a router outlet in order to handle navigation.\r\nThis component does not provide any UI feedback or mechanism to switch between tabs.\r\nIn order to do so, an `ion-tab-bar` should be provided as a direct child of `ion-tabs`:\r\n\r\n```html\r\n<ion-tabs>\r\n  <ion-tab tab="home">Home Content</ion-tab>\r\n  <ion-tab tab="settings">Settings Content</ion-tab>\r\n\r\n  <ion-tab-bar slot="bottom">\r\n\r\n    <ion-tab-button tab="home">\r\n      <ion-label>Home</ion-label>\r\n      <ion-icon name="home"></ion-icon>\r\n      <ion-badge>6</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="settings">\r\n      <ion-label>Settings</ion-label>\r\n      <ion-icon name="settings"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n```\r\n\r\nNote that both `ion-tabs` and `ion-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that feels like a native app.\r\n\r\n`ion-tab-bar` always needs `slot="bottom"` in order to be projected into `ion-tabs` at the right place.\r\n\r\n## The "tab" property\r\n\r\nEach `ion-tab-button` will activate one of the tabs when tapped.\r\nIn order to link the button to the `ion-tab` container, a matching `tab` property must be used.\r\n\r\n```html\r\n<ion-tab tab="settings">\r\n[...]\r\n<ion-tab-button tab="settings">\r\n```\r\n\r\nThis `ion-tab-button` and `ion-tab` are now linked by the common `tab` property.\r\n\r\nThe `tab` property identifies each tab, and it has to be unique within the scope of the same `ion-tabs`. It\'s important to set the same property to `ion-tab` and `ion-tab-button`, even if you are only using one. e.g. You could use the `ion-tab-bar` without using `ion-tabs`. In this case you should still give each `ion-tab` the property of `tab="something"`.\r\n\r\n### Router integration\r\n\r\nWhen the ionic\'s router (`ion-router`) is used, the `tab` property matches the "component" of `ion-route`:\r\n\r\nThe following route within the scope of a `ion-tabs` outlet:\r\n\r\n```html\r\n<ion-route url="/settings-page" component="settings"></ion-route>\r\n```\r\n\r\nWould match the following tab:\r\n\r\n```html\r\n<ion-tab tab="settings" component="settings-component"></ion-tab>\r\n```\r\n\r\n### Angular Router integration\r\n\r\nUsing tabs with Angular\'s router is fairly straight forward. Here you only need to define tab which is the reference to the route.\r\n\r\n```html\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="schedule">\r\n      <ion-icon name="calendar"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n```\r\n\r',
      docs:
        'Tabs are a top level navigation component to implement a tab-based navigation.\r\nThe component is a container of individual [Tab](../tab/) components.\r\n\r\n`ion-tabs` is a styleless component that works as a router outlet in order to handle navigation.\r\nThis component does not provide any UI feedback or mechanism to switch between tabs.\r\nIn order to do so, an `ion-tab-bar` should be provided as a direct child of `ion-tabs`:\r\n\r\n```html\r\n<ion-tabs>\r\n  <ion-tab tab="home">Home Content</ion-tab>\r\n  <ion-tab tab="settings">Settings Content</ion-tab>\r\n\r\n  <ion-tab-bar slot="bottom">\r\n\r\n    <ion-tab-button tab="home">\r\n      <ion-label>Home</ion-label>\r\n      <ion-icon name="home"></ion-icon>\r\n      <ion-badge>6</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="settings">\r\n      <ion-label>Settings</ion-label>\r\n      <ion-icon name="settings"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n```\r\n\r\nNote that both `ion-tabs` and `ion-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that feels like a native app.\r\n\r\n`ion-tab-bar` always needs `slot="bottom"` in order to be projected into `ion-tabs` at the right place.',
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed between the named slots if provided without a slot."
        },
        {
          name: "slot",
          text: "top - Content is placed at the top of the screen."
        },
        {
          name: "slot",
          text: "bottom - Content is placed at the bottom of the screen."
        }
      ],
      usage: {
        angular:
          '```html\r\n<ion-tabs>\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="schedule">\r\n      <ion-icon name="calendar"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n      <ion-badge>6</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="speakers">\r\n      <ion-icon name="contacts"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="map">\r\n      <ion-icon name="map"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="about">\r\n      <ion-icon name="information-circle"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n```\r\n',
        javascript:
          '```html\r\n<ion-tabs>\r\n\r\n  <ion-tab tab="tab-schedule">\r\n    <ion-nav></ion-nav>\r\n  </ion-tab>\r\n\r\n  <ion-tab tab="tab-speaker">\r\n    <ion-nav></ion-nav>\r\n  </ion-tab>\r\n\r\n  <ion-tab tab="tab-map" component="page-map">\r\n    <ion-nav></ion-nav>\r\n  </ion-tab>\r\n\r\n  <ion-tab tab="tab-about" component="page-about">\r\n    <ion-nav></ion-nav>\r\n  </ion-tab>\r\n\r\n  <ion-tab-bar slot="bottom">\r\n    <ion-tab-button tab="tab-schedule">\r\n      <ion-icon name="calendar"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n      <ion-badge>6</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="tab-speaker">\r\n      <ion-icon name="contacts"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="tab-map">\r\n      <ion-icon name="map"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="tab-about">\r\n      <ion-icon name="information-circle"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonTabs>\r\n    <IonTabBar slot="bottom">\r\n      <IonTabButton tab="schedule">\r\n        <IonIcon name="calendar" />\r\n        <IonLabel>Schedule</IonLabel>\r\n        <IonBadge>6</IonBadge>\r\n      </IonTabButton>\r\n\r\n      <IonTabButton tab="speakers">\r\n        <IonIcon name="contacts" />\r\n        <IonLabel>Speakers</IonLabel>\r\n      </IonTabButton>\r\n\r\n      <IonTabButton tab="map">\r\n        <IonIcon name="map" />\r\n        <IonLabel>Map</IonLabel>\r\n      </IonTabButton>\r\n\r\n      <IonTabButton tab="about">\r\n        <IonIcon name="information-circle" />\r\n        <IonLabel>About</IonLabel>\r\n      </IonTabButton>\r\n    </IonTabBar>\r\n  </IonTabs>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Listen to before and after tab change events -->\r\n  <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange">\r\n    <ion-tab tab="schedule">\r\n      <Schedule />\r\n    </ion-tab>\r\n\r\n    <!-- Match by "app.speakers" route name -->\r\n    <ion-tab tab="speakers" :routes="\'app.speakers\'">\r\n      <Speakers />\r\n    </ion-tab>\r\n\r\n    <!-- Match by an array of route names -->\r\n    <ion-tab tab="map" :routes="[\'app.map\', \'app.other.route\']">\r\n      <Map />\r\n    </ion-tab>\r\n\r\n    <!-- Get matched routes with a helper method -->\r\n    <ion-tab tab="about" :routes="getMatchedRoutes">\r\n      <About />\r\n    </ion-tab>\r\n\r\n    <!-- Use v-slot:bottom with Vue ^2.6.0 -->\r\n    <template slot="bottom">\r\n      <ion-tab-bar>\r\n        <ion-tab-button tab="schedule">\r\n          <ion-icon name="calendar"></ion-icon>\r\n          <ion-label>Schedule</ion-label>\r\n          <ion-badge>6</ion-badge>\r\n        </ion-tab-button>\r\n\r\n        <!-- Provide a custom route to navigate to -->\r\n        <ion-tab-button tab="speakers" :to="{ name: \'app.speakers\' }">\r\n          <ion-icon name="contacts"></ion-icon>\r\n          <ion-label>Speakers</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- Provide extra data to route -->\r\n        <ion-tab-button tab="map" :to="{ name: \'app.map\', params: { mode: \'dark\' } }">\r\n          <ion-icon name="map"></ion-icon>\r\n          <ion-label>Map</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- Provide custom click handler -->\r\n        <ion-tab-button tab="about" @click="goToAboutTab">\r\n          <ion-icon name="information-circle"></ion-icon>\r\n          <ion-label>About</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </template>\r\n  </ion-tabs>\r\n</template>\r\n```\r\n'
      },
      props: [],
      methods: [
        {
          name: "getSelected",
          returns: {
            type: "Promise<string | undefined>",
            docs: ""
          },
          signature: "getSelected() => Promise<string | undefined>",
          parameters: [],
          docs: "Get the currently selected tab",
          docsTags: []
        },
        {
          name: "getTab",
          returns: {
            type: "Promise<HTMLIonTabElement | undefined>",
            docs: ""
          },
          signature:
            "getTab(tab: string | HTMLIonTabElement) => Promise<HTMLIonTabElement | undefined>",
          parameters: [
            {
              name: "tab",
              type: "HTMLIonTabElement | string",
              docs: ""
            }
          ],
          docs: "Get the tab element given the tab name",
          docsTags: []
        },
        {
          name: "select",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "select(tab: string | HTMLIonTabElement) => Promise<boolean>",
          parameters: [
            {
              name: "tab",
              type: "HTMLIonTabElement | string",
              docs: ""
            }
          ],
          docs: "Index or the Tab instance, of the tab to select.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionTabsDidChange",
          detail: "{tab: string}",
          bubbles: false,
          cancelable: true,
          composed: true,
          docs:
            "Emitted when the navigation has finished transitioning to a new component.",
          docsTags: []
        },
        {
          event: "ionTabsWillChange",
          detail: "{tab: string}",
          bubbles: false,
          cancelable: true,
          composed: true,
          docs:
            "Emitted when the navigation is about to transition to a new component.",
          docsTags: []
        }
      ],
      styles: [],
      slots: [
        {
          name: "",
          docs:
            "Content is placed between the named slots if provided without a slot."
        },
        {
          name: "bottom",
          docs: "Content is placed at the bottom of the screen."
        },
        {
          name: "top",
          docs: "Content is placed at the top of the screen."
        }
      ]
    },
    {
      tag: "ion-text",
      encapsulation: "shadow",
      readme:
        "# ion-text\r\n\r\nThe text component is a simple component that can be used to style the text color of any element. The `ion-text` element should wrap the element in order to change the text color of that element.\r\n\r\n\r",
      docs:
        "The text component is a simple component that can be used to style the text color of any element. The `ion-text` element should wrap the element in order to change the text color of that element.",
      docsTags: [],
      usage: {
        javascript:
          '```html\r\n<ion-text color="secondary">\r\n  <h1>H1: The quick brown fox jumps over the lazy dog</h1>\r\n</ion-text>\r\n\r\n<ion-text color="primary">\r\n  <h2>H2: The quick brown fox jumps over the lazy dog</h2>\r\n</ion-text>\r\n\r\n<ion-text color="light">\r\n  <h3>H3: The quick brown fox jumps over the lazy dog</h3>\r\n</ion-text>\r\n\r\n<ion-text color="danger">\r\n  <h4 >H4: The quick brown fox jumps over the lazy dog</h4>\r\n</ion-text>\r\n\r\n<ion-text color="dark">\r\n  <h5>H5: The quick brown fox jumps over the lazy dog</h5>\r\n</ion-text>\r\n\r\n<p>\r\n  I saw a werewolf with a Chinese menu in his hand.\r\n  Walking through the <ion-text color="danger"><sub>streets</sub></ion-text> of Soho in the rain.\r\n  He <ion-text color="primary"><i>was</i></ion-text> looking for a place called Lee Ho Fook\'s.\r\n  Gonna get a <ion-text color="secondary"><a>big dish of beef chow mein.</a></ion-text>\r\n  <ion-text color="danger"><ion-icon name="cut"></ion-icon></ion-text>\r\n</p>\r\n```'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
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
      tag: "ion-textarea",
      encapsulation: "scoped",
      readme:
        "# ion-textarea\r\n\r\nThe textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.\r\n\r\nUnlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.\r\n\r\nThe textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.\r\n\r\n\r\n\r",
      docs:
        "The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.\r\n\r\nUnlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.\r\n\r\nThe textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default textarea -->\r\n<ion-textarea></ion-textarea>\r\n\r\n<!-- Textarea in an item with a placeholder -->\r\n<ion-item>\r\n  <ion-textarea placeholder="Enter more information here..."></ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Textarea in an item with a floating label -->\r\n<ion-item>\r\n  <ion-label position="floating">Description</ion-label>\r\n  <ion-textarea></ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Disabled and readonly textarea in an item with a stacked label -->\r\n<ion-item>\r\n  <ion-label position="stacked">Summary</ion-label>\r\n  <ion-textarea\r\n    disabled\r\n    readonly\r\n    value="Ionic enables developers to build performant, high-quality mobile apps.">\r\n  </ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Textarea that clears the value on edit -->\r\n<ion-item>\r\n  <ion-label>Comment</ion-label>\r\n  <ion-textarea clearOnEdit="true"></ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Textarea with custom number of rows and cols -->\r\n<ion-item>\r\n  <ion-label>Notes</ion-label>\r\n  <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>\r\n</ion-item>\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default textarea -->\r\n<ion-textarea></ion-textarea>\r\n\r\n<!-- Textarea in an item with a placeholder -->\r\n<ion-item>\r\n  <ion-textarea placeholder="Enter more information here..."></ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Textarea in an item with a floating label -->\r\n<ion-item>\r\n  <ion-label position="floating">Description</ion-label>\r\n  <ion-textarea></ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Disabled and readonly textarea in an item with a stacked label -->\r\n<ion-item>\r\n  <ion-label position="stacked">Summary</ion-label>\r\n  <ion-textarea\r\n    disabled\r\n    readonly\r\n    value="Ionic enables developers to build performant, high-quality mobile apps.">\r\n  </ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Textarea that clears the value on edit -->\r\n<ion-item>\r\n  <ion-label>Comment</ion-label>\r\n  <ion-textarea clear-on-edit="true"></ion-textarea>\r\n</ion-item>\r\n\r\n<!-- Textarea with custom number of rows and cols -->\r\n<ion-item>\r\n  <ion-label>Notes</ion-label>\r\n  <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>\r\n</ion-item>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonTextarea, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default textarea --*/}\r\n    <IonTextarea></IonTextarea>\r\n\r\n    {/*-- Textarea in an item with a placeholder --*/}\r\n    <IonItem>\r\n      <IonTextarea placeholder="Enter more information here..."></IonTextarea>\r\n    </IonItem>\r\n\r\n    {/*-- Textarea in an item with a floating label --*/}\r\n    <IonItem>\r\n      <IonLabel position="floating">Description</IonLabel>\r\n      <IonTextarea></IonTextarea>\r\n    </IonItem>\r\n\r\n    {/*-- Disabled and readonly textarea in an item with a stacked label --*/}\r\n    <IonItem>\r\n      <IonLabel position="stacked">Summary</IonLabel>\r\n      <IonTextarea\r\n        disabled\r\n        readonly\r\n        value="Ionic enables developers to build performant, high-quality mobile apps.">\r\n      </IonTextarea>\r\n    </IonItem>\r\n\r\n    {/*-- Textarea that clears the value on edit --*/}\r\n    <IonItem>\r\n      <IonLabel>Comment</IonLabel>\r\n      <IonTextarea clearOnEdit={true}></IonTextarea>\r\n    </IonItem>\r\n\r\n    {/*-- Textarea with custom number of rows and cols --*/}\r\n    <IonItem>\r\n      <IonLabel>Notes</IonLabel>\r\n      <IonTextarea rows={6} cols={20} placeholder="Enter any notes here..."></IonTextarea>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default textarea -->\r\n  <ion-textarea></ion-textarea>\r\n\r\n  <!-- Textarea in an item with a placeholder -->\r\n  <ion-item>\r\n    <ion-textarea placeholder="Enter more information here..."></ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Textarea in an item with a floating label -->\r\n  <ion-item>\r\n    <ion-label position="floating">Description</ion-label>\r\n    <ion-textarea></ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Disabled and readonly textarea in an item with a stacked label -->\r\n  <ion-item>\r\n    <ion-label position="stacked">Summary</ion-label>\r\n    <ion-textarea\r\n      disabled\r\n      readonly\r\n      value="Ionic enables developers to build performant, high-quality mobile apps.">\r\n    </ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Textarea that clears the value on edit -->\r\n  <ion-item>\r\n    <ion-label>Comment</ion-label>\r\n    <ion-textarea clearOnEdit="true"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Textarea with custom number of rows and cols -->\r\n  <ion-item>\r\n    <ion-label>Notes</ion-label>\r\n    <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>\r\n  </ion-item>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "autocapitalize",
          type: "string",
          mutable: false,
          attr: "autocapitalize",
          reflectToAttr: false,
          docs:
            "Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.",
          docsTags: [],
          default: "'none'",
          optional: false,
          required: false
        },
        {
          name: "autofocus",
          type: "boolean",
          mutable: false,
          attr: "autofocus",
          reflectToAttr: false,
          docs:
            "This Boolean attribute lets you specify that a form control should have input focus when the page loads.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "clearOnEdit",
          type: "boolean",
          mutable: true,
          attr: "clear-on-edit",
          reflectToAttr: false,
          docs:
            'If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.',
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "cols",
          type: "number | undefined",
          mutable: false,
          attr: "cols",
          reflectToAttr: false,
          docs:
            "The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "debounce",
          type: "number",
          mutable: false,
          attr: "debounce",
          reflectToAttr: false,
          docs:
            "Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "disabled",
          type: "boolean",
          mutable: false,
          attr: "disabled",
          reflectToAttr: false,
          docs: "If `true`, the user cannot interact with the textarea.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "maxlength",
          type: "number | undefined",
          mutable: false,
          attr: "maxlength",
          reflectToAttr: false,
          docs:
            "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "minlength",
          type: "number | undefined",
          mutable: false,
          attr: "minlength",
          reflectToAttr: false,
          docs:
            "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "placeholder",
          type: "null | string | undefined",
          mutable: false,
          attr: "placeholder",
          reflectToAttr: false,
          docs: "Instructional text that shows before the input has a value.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "readonly",
          type: "boolean",
          mutable: false,
          attr: "readonly",
          reflectToAttr: false,
          docs: "If `true`, the user cannot modify the value.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "required",
          type: "boolean",
          mutable: false,
          attr: "required",
          reflectToAttr: false,
          docs:
            "If `true`, the user must fill in a value before submitting a form.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "rows",
          type: "number | undefined",
          mutable: false,
          attr: "rows",
          reflectToAttr: false,
          docs: "The number of visible text lines for the control.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "spellcheck",
          type: "boolean",
          mutable: false,
          attr: "spellcheck",
          reflectToAttr: false,
          docs:
            "If `true`, the element will have its spelling and grammar checked.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "null | string | undefined",
          mutable: true,
          attr: "value",
          reflectToAttr: false,
          docs: "The value of the textarea.",
          docsTags: [],
          default: "''",
          optional: true,
          required: false
        },
        {
          name: "wrap",
          type: '"hard" | "off" | "soft" | undefined',
          mutable: false,
          attr: "wrap",
          reflectToAttr: false,
          docs: "Indicates how the control wraps text.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "getInputElement",
          returns: {
            type: "Promise<HTMLTextAreaElement>",
            docs: ""
          },
          signature: "getInputElement() => Promise<HTMLTextAreaElement>",
          parameters: [],
          docs: "Returns the native `<textarea>` element used under the hood.",
          docsTags: []
        },
        {
          name: "setFocus",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "setFocus() => void",
          parameters: [],
          docs:
            "Sets focus on the specified `ion-textarea`. Use this method instead of the global\r\n`input.focus()`.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input loses focus.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "TextareaChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input value has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the input has focus.",
          docsTags: []
        },
        {
          event: "ionInput",
          detail: "KeyboardEvent",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when a keyboard input ocurred.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the textarea"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the textarea"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the text"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the textarea"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the textarea"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the textarea"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the textarea"
        },
        {
          name: "--placeholder-color",
          annotation: "prop",
          docs: "Color of the placeholder text"
        },
        {
          name: "--placeholder-font-style",
          annotation: "prop",
          docs: "Style of the placeholder text"
        },
        {
          name: "--placeholder-font-weight",
          annotation: "prop",
          docs: "Weight of the placeholder text"
        },
        {
          name: "--placeholder-opacity",
          annotation: "prop",
          docs: "Opacity of the placeholder text"
        }
      ],
      slots: []
    },
    {
      tag: "ion-thumbnail",
      encapsulation: "shadow",
      readme:
        "# ion-thumbnail\r\n\r\nThumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.\r\n\r\nThumbnails can be used by themselves or inside of any element. If placed inside of an `ion-item`, the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to `start` or `end`, respectively.\r\n\r\n\r",
      docs:
        "Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.\r\n\r\nThumbnails can be used by themselves or inside of any element. If placed inside of an `ion-item`, the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to `start` or `end`, respectively.",
      docsTags: [],
      usage: {
        javascript:
          '```html\r\n<ion-thumbnail>\r\n  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n</ion-thumbnail>\r\n\r\n<ion-item>\r\n  <ion-thumbnail slot="start">\r\n    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">\r\n  </ion-thumbnail>\r\n  <ion-label>Item Thumbnail</ion-label>\r\n</ion-item>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonThumbnail, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    <IonThumbnail>\r\n      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\r\n    </IonThumbnail>\r\n\r\n    <IonItem>\r\n      <IonThumbnail slot="start">\r\n        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />\r\n      </IonThumbnail>\r\n      <IonLabel>Item Thumbnail</IonLabel>\r\n    </IonItem>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n'
      },
      props: [],
      methods: [],
      events: [],
      styles: [
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the thumbnail"
        },
        {
          name: "--size",
          annotation: "prop",
          docs: "Size of the thumbnail"
        }
      ],
      slots: []
    },
    {
      tag: "ion-title",
      encapsulation: "shadow",
      readme:
        "# ion-title\r\n\r\n`ion-title` is a component that sets the title of the `Toolbar`.\r\n\r\n\r\n\r",
      docs: "`ion-title` is a component that sets the title of the `Toolbar`.",
      docsTags: [],
      usage: {
        javascript:
          "```html\r\n<ion-header>\r\n\r\n  <ion-toolbar>\r\n    <ion-title>Settings</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n```\r\n"
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--color",
          annotation: "prop",
          docs: "Text color of the title"
        }
      ],
      slots: []
    },
    {
      tag: "ion-toast-controller",
      encapsulation: "none",
      readme:
        "# ion-toast-controller\r\n\r\nToastController is a component use to create Toast components. Please see the docs for [Toast](../toast).\r\n\r\n\r",
      docs:
        "ToastController is a component use to create Toast components. Please see the docs for [Toast](../toast).",
      docsTags: [],
      usage: {},
      props: [],
      methods: [
        {
          name: "create",
          returns: {
            type: "Promise<HTMLIonToastElement>",
            docs: ""
          },
          signature:
            "create(opts?: ToastOptions | undefined) => Promise<HTMLIonToastElement>",
          parameters: [
            {
              name: "opts",
              type: "ToastOptions | undefined",
              docs: ""
            }
          ],
          docs: "Create a toast overlay with toast options.",
          docsTags: []
        },
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined, id?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            },
            {
              name: "id",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the open toast overlay.",
          docsTags: []
        },
        {
          name: "getTop",
          returns: {
            type: "Promise<HTMLIonToastElement | undefined>",
            docs: ""
          },
          signature: "getTop() => Promise<HTMLIonToastElement | undefined>",
          parameters: [],
          docs: "Get the most recently opened toast overlay.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    },
    {
      tag: "ion-toast",
      encapsulation: "shadow",
      readme:
        "# ion-toast\r\n\r\nA Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.\r\n\r\n### Creating\r\n\r\nAll of the toast options should be passed in the create method. The message to display should be passed in the `message` property. The `showCloseButton` option can be set to true in order to display a close button on the toast. See the properties below for all available options.\r\n\r\n### Positioning\r\n\r\nToasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.\r\n\r\n### Dismissing\r\n\r\nThe toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If `showCloseButton` is set to true, then the close button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.\r\n\r\n\r",
      docs:
        "A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.",
      docsTags: [],
      usage: {
        angular:
          "```typescript\r\nimport { Component } from '@angular/core';\r\nimport { ToastController } from '@ionic/angular';\r\n\r\n@Component({\r\n  selector: 'toast-example',\r\n  templateUrl: 'toast-example.html',\r\n  styleUrls: ['./toast-example.css'],\r\n})\r\nexport class ToastExample {\r\n\r\n  constructor(public toastController: ToastController) {}\r\n\r\n  async presentToast() {\r\n    const toast = await this.toastController.create({\r\n      message: 'Your settings have been saved.',\r\n      duration: 2000\r\n    });\r\n    toast.present();\r\n  }\r\n\r\n  async presentToastWithOptions() {\r\n    const toast = await this.toastController.create({\r\n      message: 'Click to Close',\r\n      showCloseButton: true,\r\n      position: 'top',\r\n      closeButtonText: 'Done'\r\n    });\r\n    toast.present();\r\n  }\r\n\r\n}\r\n```\r\n",
        javascript:
          "```javascript\r\nasync function presentToast() {\r\n  const toastController = document.querySelector('ion-toast-controller');\r\n  await toastController.componentOnReady();\r\n\r\n  const toast = await toastController.create({\r\n    message: 'Your settings have been saved.',\r\n    duration: 2000\r\n  });\r\n  return await toast.present();\r\n}\r\n\r\nasync function presentToastWithOptions() {\r\n  const toastController = document.querySelector('ion-toast-controller');\r\n  await toastController.componentOnReady();\r\n\r\n  const toast = await toastController.create({\r\n    message: 'Click to Close',\r\n    showCloseButton: true,\r\n    position: 'top',\r\n    closeButtonText: 'Done'\r\n  });\r\n  return await toast.present();\r\n}\r\n```\r\n",
        react:
          "```tsx\r\nimport React, { Component } from 'react'\r\nimport { IonToast } from '@ionic/react';\r\n\r\ntype Props = {}\r\ntype State = {\r\n  showToast1: boolean\r\n  showToast2: boolean\r\n}\r\n\r\nexport class Toast extends Component<Props, State> {\r\n\r\n  constructor(props: Props) {\r\n    super(props);\r\n    this.state = {\r\n      showToast1: false\r\n      showToast2: false\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IonToast\r\n        isOpen={this.state.showToast1}\r\n        onDidDismiss={() => this.setState(() => ({ showToast1: false }))}\r\n        message='Your settings have been saved.'\r\n        duration={200}\r\n      >\r\n      </IonToast>\r\n\r\n      <IonToast\r\n        isOpen={this.state.showToast2}\r\n        onDidDismiss={() => this.setState(() => ({ showToast2: false }))}\r\n        message='Click to Close'\r\n        showCloseButton={true}\r\n        position='top'\r\n        closeButtonText='Done'\r\n      >\r\n      </IonToast>\r\n    );\r\n  }\r\n}\r\n\r\n```\r\n"
      },
      props: [
        {
          name: "animated",
          type: "boolean",
          mutable: false,
          attr: "animated",
          reflectToAttr: false,
          docs: "If `true`, the toast will animate.",
          docsTags: [],
          default: "true",
          optional: false,
          required: false
        },
        {
          name: "closeButtonText",
          type: "string | undefined",
          mutable: false,
          attr: "close-button-text",
          reflectToAttr: false,
          docs: "Text to display in the close button.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "cssClass",
          type: "string | string[] | undefined",
          mutable: false,
          attr: "css-class",
          reflectToAttr: false,
          docs:
            "Additional classes to apply for custom CSS. If multiple classes are\r\nprovided they should be separated by spaces.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "duration",
          type: "number",
          mutable: false,
          attr: "duration",
          reflectToAttr: false,
          docs:
            "How many milliseconds to wait before hiding the toast. By default, it will show\r\nuntil `dismiss()` is called.",
          docsTags: [],
          default: "0",
          optional: false,
          required: false
        },
        {
          name: "enterAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the toast is presented.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "keyboardClose",
          type: "boolean",
          mutable: false,
          attr: "keyboard-close",
          reflectToAttr: false,
          docs:
            "If `true`, the keyboard will be automatically dismissed when the overlay is presented.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "leaveAnimation",
          type:
            "((Animation: Animation, baseEl: any, opts?: any) => Promise<Animation>) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "Animation to use when the toast is dismissed.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "message",
          type: "string | undefined",
          mutable: false,
          attr: "message",
          reflectToAttr: false,
          docs: "Message to be shown in the toast.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "position",
          type: '"bottom" | "middle" | "top"',
          mutable: false,
          attr: "position",
          reflectToAttr: false,
          docs: "The position of the toast on the screen.",
          docsTags: [],
          default: "'bottom'",
          optional: false,
          required: false
        },
        {
          name: "showCloseButton",
          type: "boolean",
          mutable: false,
          attr: "show-close-button",
          reflectToAttr: false,
          docs: "If `true`, the close button will be displayed.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "translucent",
          type: "boolean",
          mutable: false,
          attr: "translucent",
          reflectToAttr: false,
          docs: "If `true`, the toast will be translucent.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        }
      ],
      methods: [
        {
          name: "dismiss",
          returns: {
            type: "Promise<boolean>",
            docs: ""
          },
          signature:
            "dismiss(data?: any, role?: string | undefined) => Promise<boolean>",
          parameters: [
            {
              name: "data",
              type: "any",
              docs: ""
            },
            {
              name: "role",
              type: "string | undefined",
              docs: ""
            }
          ],
          docs: "Dismiss the toast overlay after it has been presented.",
          docsTags: []
        },
        {
          name: "onDidDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onDidDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the toast did dismiss.",
          docsTags: []
        },
        {
          name: "onWillDismiss",
          returns: {
            type: "Promise<OverlayEventDetail<any>>",
            docs: ""
          },
          signature: "onWillDismiss() => Promise<OverlayEventDetail<any>>",
          parameters: [],
          docs: "Returns a promise that resolves when the toast will dismiss.",
          docsTags: []
        },
        {
          name: "present",
          returns: {
            type: "Promise<void>",
            docs: ""
          },
          signature: "present() => Promise<void>",
          parameters: [],
          docs: "Present the toast overlay after it has been created.",
          docsTags: []
        }
      ],
      events: [
        {
          event: "ionToastDidDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the toast has dismissed.",
          docsTags: []
        },
        {
          event: "ionToastDidPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted after the toast has presented.",
          docsTags: []
        },
        {
          event: "ionToastWillDismiss",
          detail: "OverlayEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the toast has dismissed.",
          docsTags: []
        },
        {
          event: "ionToastWillPresent",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted before the toast has presented.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the toast"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Border color of the toast"
        },
        {
          name: "--border-radius",
          annotation: "prop",
          docs: "Border radius of the toast"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Border style of the toast"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Border width of the toast"
        },
        {
          name: "--box-shadow",
          annotation: "prop",
          docs: "Box shadow of the toast"
        },
        {
          name: "--button-color",
          annotation: "prop",
          docs: "Color of the button text"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the toast text"
        },
        {
          name: "--height",
          annotation: "prop",
          docs: "Height of the toast"
        },
        {
          name: "--max-height",
          annotation: "prop",
          docs: "Maximum height of the toast"
        },
        {
          name: "--max-width",
          annotation: "prop",
          docs: "Maximum width of the toast"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the toast"
        },
        {
          name: "--min-width",
          annotation: "prop",
          docs: "Minimum width of the toast"
        },
        {
          name: "--width",
          annotation: "prop",
          docs: "Width of the toast"
        }
      ],
      slots: []
    },
    {
      tag: "ion-toggle",
      encapsulation: "shadow",
      readme:
        "# ion-toggle\r\n\r\nToggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the `checked` property.\r\n\r\n\r\n\r",
      docs:
        "Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the `checked` property.",
      docsTags: [],
      usage: {
        angular:
          '```html\r\n<!-- Default Toggle -->\r\n<ion-toggle></ion-toggle>\r\n\r\n<!-- Disabled Toggle -->\r\n<ion-toggle disabled></ion-toggle>\r\n\r\n<!-- Checked Toggle -->\r\n<ion-toggle checked></ion-toggle>\r\n\r\n<!-- Toggle Colors -->\r\n<ion-toggle color="primary"></ion-toggle>\r\n<ion-toggle color="secondary"></ion-toggle>\r\n<ion-toggle color="danger"></ion-toggle>\r\n<ion-toggle color="light"></ion-toggle>\r\n<ion-toggle color="dark"></ion-toggle>\r\n\r\n<!-- Toggles in a List -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pepperoni</ion-label>\r\n    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Sausage</ion-label>\r\n    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Mushrooms</ion-label>\r\n    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        javascript:
          '```html\r\n<!-- Default Toggle -->\r\n<ion-toggle></ion-toggle>\r\n\r\n<!-- Disabled Toggle -->\r\n<ion-toggle disabled></ion-toggle>\r\n\r\n<!-- Checked Toggle -->\r\n<ion-toggle checked></ion-toggle>\r\n\r\n<!-- Toggle Colors -->\r\n<ion-toggle color="primary"></ion-toggle>\r\n<ion-toggle color="secondary"></ion-toggle>\r\n<ion-toggle color="danger"></ion-toggle>\r\n<ion-toggle color="light"></ion-toggle>\r\n<ion-toggle color="dark"></ion-toggle>\r\n\r\n<!-- Toggles in a List -->\r\n<ion-list>\r\n  <ion-item>\r\n    <ion-label>Pepperoni</ion-label>\r\n    <ion-toggle slot="end" value="pepperoni" checked></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Sausage</ion-label>\r\n    <ion-toggle slot="end" value="sausage" disabled></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Mushrooms</ion-label>\r\n    <ion-toggle slot="end" value="mushrooms"></ion-toggle>\r\n  </ion-item>\r\n</ion-list>\r\n```\r\n',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonToggle, IonList, IonItem, IonLabel } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n    {/*-- Default Toggle --*/}\r\n    <IonToggle></IonToggle>\r\n\r\n    {/*-- Disabled Toggle --*/}\r\n    <IonToggle disabled></IonToggle>\r\n\r\n    {/*-- Checked Toggle --*/}\r\n    <IonToggle checked></IonToggle>\r\n\r\n    {/*-- Toggle Colors --*/}\r\n    <IonToggle color="primary"></IonToggle>\r\n    <IonToggle color="secondary"></IonToggle>\r\n    <IonToggle color="danger"></IonToggle>\r\n    <IonToggle color="light"></IonToggle>\r\n    <IonToggle color="dark"></IonToggle>\r\n\r\n    {/*-- Toggles in a List --*/}\r\n    <IonList>\r\n      <IonItem>\r\n        <IonLabel>Pepperoni</IonLabel>\r\n        <IonToggle value="pepperoni" onChange={() => {}}></IonToggle>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Sausage</IonLabel>\r\n        <IonToggle value="sausage" onChange={() => {}} disabled={true}></IonToggle>\r\n      </IonItem>\r\n\r\n      <IonItem>\r\n        <IonLabel>Mushrooms</IonLabel>\r\n        <IonToggle value="mushrooms" onChange={() => {}}></IonToggle>\r\n      </IonItem>\r\n    </IonList>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <!-- Default Toggle -->\r\n  <ion-toggle></ion-toggle>\r\n\r\n  <!-- Disabled Toggle -->\r\n  <ion-toggle disabled></ion-toggle>\r\n\r\n  <!-- Checked Toggle -->\r\n  <ion-toggle checked></ion-toggle>\r\n\r\n  <!-- Toggle Colors -->\r\n  <ion-toggle color="primary"></ion-toggle>\r\n  <ion-toggle color="secondary"></ion-toggle>\r\n  <ion-toggle color="danger"></ion-toggle>\r\n  <ion-toggle color="light"></ion-toggle>\r\n  <ion-toggle color="dark"></ion-toggle>\r\n\r\n  <!-- Toggles in a List -->\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Pepperoni</ion-label>\r\n      <ion-toggle @ionChange="toppings.push($event.target.value)" value="pepperoni" v-bind:checked="toppings.indexOf(\'pepperoni\') !== -1"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Sausage</ion-label>\r\n      <ion-toggle @ionChange="toppings.push($event.target.value)" value="sausage" v-bind:checked="toppings.indexOf(\'pepperoni\') !== -1" disabled="true"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Mushrooms</ion-label>\r\n      <ion-toggle @ionChange="toppings.push($event.target.value)" value="mushrooms" v-bind:checked="toppings.indexOf(\'pepperoni\') !== -1"></ion-toggle>\r\n    </ion-item>\r\n  </ion-list>\r\n</template>\r\n```\r\n'
      },
      props: [
        {
          name: "checked",
          type: "boolean",
          mutable: true,
          attr: "checked",
          reflectToAttr: false,
          docs: "If `true`, the toggle is selected.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
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
          docs: "If `true`, the user cannot interact with the toggle.",
          docsTags: [],
          default: "false",
          optional: false,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        },
        {
          name: "name",
          type: "string",
          mutable: false,
          attr: "name",
          reflectToAttr: false,
          docs:
            "The name of the control, which is submitted with the form data.",
          docsTags: [],
          default: "this.inputId",
          optional: false,
          required: false
        },
        {
          name: "value",
          type: "null | string | undefined",
          mutable: false,
          attr: "value",
          reflectToAttr: false,
          docs:
            "The value of the toggle does not mean if it's checked or not, use the `checked`\r\nproperty for that.\r\n\r\nThe value of a toggle is analogous to the value of a `<input type=\"checkbox\">`,\r\nit's only used when the toggle participates in a native `<form>`.",
          docsTags: [],
          default: "'on'",
          optional: true,
          required: false
        }
      ],
      methods: [],
      events: [
        {
          event: "ionBlur",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the toggle loses focus.",
          docsTags: []
        },
        {
          event: "ionChange",
          detail: "ToggleChangeEventDetail",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the value property has changed.",
          docsTags: []
        },
        {
          event: "ionFocus",
          detail: "void",
          bubbles: true,
          cancelable: true,
          composed: true,
          docs: "Emitted when the toggle has focus.",
          docsTags: []
        }
      ],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the toggle"
        },
        {
          name: "--background-checked",
          annotation: "prop",
          docs: "Background of the toggle when checked"
        },
        {
          name: "--handle-background",
          annotation: "prop",
          docs: "Background of the toggle handle"
        },
        {
          name: "--handle-background-checked",
          annotation: "prop",
          docs: "Background of the toggle handle when checked"
        }
      ],
      slots: []
    },
    {
      tag: "ion-toolbar",
      encapsulation: "shadow",
      readme:
        "# ion-toolbar\r\n\r\nToolbars are positioned above or below content. When a toolbar is placed in an `<ion-header>` it will appear fixed at the top of the content, and when it is in an `<ion-footer>` it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. When placed within an `<ion-content>`, toolbars will scroll with the content.\r\n\r\n\r\n### Buttons\r\n\r\nButtons placed in a toolbar should be placed inside of the `<ion-buttons>` element. The `<ion-buttons>` element can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.\r\n\r\n| Slot         | Description                                                                                              |\r\n|--------------|----------------------------------------------------------------------------------------------------------|\r\n| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |\r\n| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |\r\n| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |\r\n| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |\r\n\r\n\r\n### Borders\r\n\r\nIn `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the `<ion-footer>` will receive a box-shadow on the top.  In `ios` mode, the `<ion-header>` will receive a border on the bottom, and the `<ion-footer>` will receive a border on the top. Both the `md` box-shadow and the `ios` border can be removed by adding the `no-border` attribute to the element.\r\n\r\n\r\n\r",
      docs:
        "Toolbars are positioned above or below content. When a toolbar is placed in an `<ion-header>` it will appear fixed at the top of the content, and when it is in an `<ion-footer>` it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. When placed within an `<ion-content>`, toolbars will scroll with the content.",
      docsTags: [
        {
          name: "slot",
          text:
            "- Content is placed between the named slots if provided without a slot."
        },
        {
          name: "slot",
          text:
            "start - Content is placed to the left of the toolbar text in LTR, and to the right in RTL."
        },
        {
          name: "slot",
          text:
            "secondary - Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode."
        },
        {
          name: "slot",
          text:
            "primary - Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode."
        },
        {
          name: "slot",
          text:
            "end - Content is placed to the left of the toolbar text in LTR, and to the right in RTL."
        }
      ],
      usage: {
        angular:
          '```html\r\n<ion-toolbar>\r\n  <ion-title>Title Only</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="start">\r\n    <ion-back-button></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>Back Button</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="secondary">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Default Buttons</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button fill="solid">\r\n      <ion-icon slot="start" name="contact"></ion-icon>\r\n      Contact\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Solid Buttons</ion-title>\r\n  <ion-buttons slot="primary">\r\n    <ion-button fill="solid" color="secondary">\r\n      Help\r\n      <ion-icon slot="end" name="help-circle"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button fill="outline">\r\n      <ion-icon slot="start" name="star"></ion-icon>\r\n      Star\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Outline Buttons</ion-title>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="danger" fill="outline">\r\n      Edit\r\n      <ion-icon slot="end" name="create"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      Account\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="danger">\r\n      Edit\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Text Only Buttons</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="start">\r\n    <ion-menu-button autoHide="false"></ion-menu-button>\r\n\r\n  </ion-buttons>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Left side menu toggle</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="primary">\r\n    <ion-button (click)="clickedStar()">\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Right side menu toggle</ion-title>\r\n  <ion-buttons slot="end">\r\n    <ion-menu-button autoHide="false"></ion-menu-button>\r\n\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="primary">\r\n    <ion-button (click)="clickedSearch()">\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-searchbar placeholder="Search Favorites"></ion-searchbar>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-segment>\r\n    <ion-segment-button value="all" checked>\r\n      All\r\n    </ion-segment-button>\r\n    <ion-segment-button value="favorites">\r\n      Favorites\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar color="secondary">\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="primary">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Secondary Toolbar</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar color="dark">\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="danger">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Dark Toolbar</ion-title>\r\n</ion-toolbar>\r\n```',
        javascript:
          '```html\r\n<ion-toolbar>\r\n  <ion-title>Title Only</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="start">\r\n    <ion-back-button></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title>Back Button</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="secondary">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Default Buttons</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button fill="solid">\r\n      <ion-icon slot="start" name="contact"></ion-icon>\r\n      Contact\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Solid Buttons</ion-title>\r\n  <ion-buttons slot="primary">\r\n    <ion-button fill="solid" color="secondary">\r\n      Help\r\n      <ion-icon slot="end" name="help-circle"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button fill="outline">\r\n      <ion-icon slot="start" name="star"></ion-icon>\r\n      Star\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Outline Buttons</ion-title>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="danger" fill="outline">\r\n      Edit\r\n      <ion-icon slot="end" name="create"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      Account\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="danger">\r\n      Edit\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Text Only Buttons</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="start">\r\n    <ion-menu-button auto-hide="false"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Left side menu toggle</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="primary">\r\n    <ion-button onclick="clickedStar()">\r\n      <ion-icon slot="icon-only" name="star"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Right side menu toggle</ion-title>\r\n  <ion-buttons slot="end">\r\n    <ion-menu-button auto-hide="false"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot="primary">\r\n    <ion-button onclick="clickedSearch()">\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-searchbar placeholder="Search Favorites"></ion-searchbar>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n  <ion-segment>\r\n    <ion-segment-button value="all" checked>\r\n      All\r\n    </ion-segment-button>\r\n    <ion-segment-button value="favorites">\r\n      Favorites\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar color="secondary">\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="primary">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Secondary Toolbar</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar color="dark">\r\n  <ion-buttons slot="secondary">\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot="icon-only" name="search"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot="primary">\r\n    <ion-button color="danger">\r\n      <ion-icon slot="icon-only" name="more"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title>Dark Toolbar</ion-title>\r\n</ion-toolbar>\r\n```',
        react:
          '```tsx\r\nimport React from \'react\';\r\n\r\nimport { IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from \'@ionic/react\';\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n  <>\r\n  <IonToolbar>\r\n    <IonTitle>Title Only</IonTitle>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="start">\r\n      <IonBackButton goBack={() => {}} />\r\n    </IonButtons>\r\n    <IonTitle>Back Button</IonTitle>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="secondary">\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="contact" />\r\n      </IonButton>\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="search" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonButtons slot="primary">\r\n      <IonButton color="secondary">\r\n        <IonIcon slot="icon-only" name="more" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Default Buttons</IonTitle>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="secondary">\r\n      <IonButton fill="solid">\r\n        <IonIcon slot="start" name="contact" />\r\n        Contact\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Solid Buttons</IonTitle>\r\n    <IonButtons slot="primary">\r\n      <IonButton fill="solid" color="secondary">\r\n        Help\r\n        <IonIcon slot="end" name="help-circle" />\r\n      </IonButton>\r\n    </IonButtons>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="secondary">\r\n      <IonButton fill="outline">\r\n        <IonIcon slot="start" name="star" />\r\n        Star\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Outline Buttons</IonTitle>\r\n    <IonButtons slot="primary">\r\n      <IonButton color="danger" fill="outline">\r\n        Edit\r\n        <IonIcon slot="end" name="create" />\r\n      </IonButton>\r\n    </IonButtons>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="secondary">\r\n      <IonButton>\r\n        Account\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonButtons slot="primary">\r\n      <IonButton color="danger">\r\n        Edit\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Text Only Buttons</IonTitle>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="start">\r\n      <IonMenuButton autoHide={false}></IonMenuButton>\r\n\r\n    </IonButtons>\r\n    <IonButtons slot="secondary">\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="star" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Left side menu toggle</IonTitle>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="primary">\r\n      <IonButton onClick={() => {}}>\r\n        <IonIcon slot="icon-only" name="star" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Right side menu toggle</IonTitle>\r\n    <IonButtons slot="end">\r\n      <IonMenuButton autoHide={false}></IonMenuButton>\r\n\r\n    </IonButtons>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonButtons slot="primary">\r\n      <IonButton onClick={() => {}}>\r\n        <IonIcon slot="icon-only" name="search" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonSearchbar placeholder="Search Favorites"></IonSearchbar>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar>\r\n    <IonSegment>\r\n      <IonSegmentButton value="all" checked>\r\n        All\r\n      </IonSegmentButton>\r\n      <IonSegmentButton value="favorites">\r\n        Favorites\r\n      </IonSegmentButton>\r\n    </IonSegment>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar color="secondary">\r\n    <IonButtons slot="secondary">\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="contact" />\r\n      </IonButton>\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="search" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonButtons slot="primary">\r\n      <IonButton color="primary">\r\n        <IonIcon slot="icon-only" name="more" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Secondary Toolbar</IonTitle>\r\n  </IonToolbar>\r\n\r\n  <IonToolbar color="dark">\r\n    <IonButtons slot="secondary">\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="contact" />\r\n      </IonButton>\r\n      <IonButton>\r\n        <IonIcon slot="icon-only" name="search" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonButtons slot="primary">\r\n      <IonButton color="danger">\r\n        <IonIcon slot="icon-only" name="more" />\r\n      </IonButton>\r\n    </IonButtons>\r\n    <IonTitle>Dark Toolbar</IonTitle>\r\n  </IonToolbar>\r\n  </>\r\n);\r\n\r\nexport default Example;\r\n```\r\n',
        vue:
          '```html\r\n<template>\r\n  <ion-toolbar>\r\n    <ion-title>Title Only</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Back Button</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="secondary">\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="search"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot="primary">\r\n      <ion-button color="secondary">\r\n        <ion-icon slot="icon-only" name="more"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Default Buttons</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="secondary">\r\n      <ion-button fill="solid">\r\n        <ion-icon slot="start" name="contact"></ion-icon>\r\n        Contact\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Solid Buttons</ion-title>\r\n    <ion-buttons slot="primary">\r\n      <ion-button fill="solid" color="secondary">\r\n        Help\r\n        <ion-icon slot="end" name="help-circle"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="secondary">\r\n      <ion-button fill="outline">\r\n        <ion-icon slot="start" name="star"></ion-icon>\r\n        Star\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Outline Buttons</ion-title>\r\n    <ion-buttons slot="primary">\r\n      <ion-button color="danger" fill="outline">\r\n        Edit\r\n        <ion-icon slot="end" name="create"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="secondary">\r\n      <ion-button>\r\n        Account\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot="primary">\r\n      <ion-button color="danger">\r\n        Edit\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Text Only Buttons</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="start">\r\n      <ion-menu-button autoHide="false"></ion-menu-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot="secondary">\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="star"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Left side menu toggle</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="primary">\r\n      <ion-button @click="clickedStar()">\r\n        <ion-icon slot="icon-only" name="star"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Right side menu toggle</ion-title>\r\n    <ion-buttons slot="end">\r\n      <ion-menu-button autoHide="false"></ion-menu-button>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot="primary">\r\n      <ion-button @click="clickedSearch()">\r\n        <ion-icon slot="icon-only" name="search"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar placeholder="Search Favorites"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-segment>\r\n      <ion-segment-button value="all" checked>\r\n        All\r\n      </ion-segment-button>\r\n      <ion-segment-button value="favorites">\r\n        Favorites\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar color="secondary">\r\n    <ion-buttons slot="secondary">\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="search"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot="primary">\r\n      <ion-button color="primary">\r\n        <ion-icon slot="icon-only" name="more"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Secondary Toolbar</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar color="dark">\r\n    <ion-buttons slot="secondary">\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="contact"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot="icon-only" name="search"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot="primary">\r\n      <ion-button color="danger">\r\n        <ion-icon slot="icon-only" name="more"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Dark Toolbar</ion-title>\r\n  </ion-toolbar>\r\n</template>\r\n```'
      },
      props: [
        {
          name: "color",
          type: "string | undefined",
          mutable: false,
          attr: "color",
          reflectToAttr: false,
          docs:
            'The color to use from your application\'s color palette.\r\nDefault options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.\r\nFor more information on colors, see [theming](/docs/theming/basics).',
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "mode",
          type: '"ios" | "md"',
          mutable: false,
          attr: "mode",
          reflectToAttr: false,
          docs: "The mode determines which platform styles to use.",
          docsTags: [],
          optional: false,
          required: false
        }
      ],
      methods: [],
      events: [],
      styles: [
        {
          name: "--background",
          annotation: "prop",
          docs: "Background of the toolbar"
        },
        {
          name: "--border-color",
          annotation: "prop",
          docs: "Color of the toolbar border"
        },
        {
          name: "--border-style",
          annotation: "prop",
          docs: "Style of the toolbar border"
        },
        {
          name: "--border-width",
          annotation: "prop",
          docs: "Width of the toolbar border"
        },
        {
          name: "--color",
          annotation: "prop",
          docs: "Color of the toolbar text"
        },
        {
          name: "--min-height",
          annotation: "prop",
          docs: "Minimum height of the toolbar"
        },
        {
          name: "--opacity",
          annotation: "prop",
          docs: "Opacity of the toolbar background"
        },
        {
          name: "--padding-bottom",
          annotation: "prop",
          docs: "Bottom padding of the toolbar"
        },
        {
          name: "--padding-end",
          annotation: "prop",
          docs: "End padding of the toolbar"
        },
        {
          name: "--padding-start",
          annotation: "prop",
          docs: "Start padding of the toolbar"
        },
        {
          name: "--padding-top",
          annotation: "prop",
          docs: "Top padding of the toolbar"
        }
      ],
      slots: [
        {
          name: "",
          docs:
            "Content is placed between the named slots if provided without a slot."
        },
        {
          name: "end",
          docs:
            "Content is placed to the left of the toolbar text in LTR, and to the right in RTL."
        },
        {
          name: "primary",
          docs:
            "Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode."
        },
        {
          name: "secondary",
          docs:
            "Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode."
        },
        {
          name: "start",
          docs:
            "Content is placed to the left of the toolbar text in LTR, and to the right in RTL."
        }
      ]
    },
    {
      tag: "ion-virtual-scroll",
      encapsulation: "none",
      readme:
        '# ion-virtual-scroll\r\n\r\nVirtual Scroll displays a virtual, "infinite" list. An array of records\r\nis passed to the virtual scroll containing the data to create templates\r\nfor. The template created for each record, referred to as a cell, can\r\nconsist of items, headers, and footers.\r\nFor performance reasons, not every record in the list is rendered at once;\r\ninstead a small subset of records (enough to fill the viewport) are rendered\r\nand reused as the user scrolls.\r\n\r\n### The Basics\r\nThe array of records should be passed to the `items` property on the `ion-virtual-scroll` element.\r\nThe data given to the `items` property must be an array. An item\r\ntemplate with the `*virtualItem` property is required in the `ion-virtual-scroll`.\r\nThe `*virtualItem` property can be added to any element.\r\n\r\n```html\r\n<ion-virtual-scroll [items]="items">\r\n  <ion-item *virtualItem="let item">\r\n    {{ item }}\r\n  </ion-item>\r\n</ion-virtual-scroll>\r\n```\r\n\r\n### Section Headers and Footers\r\n\r\nSection headers and footers are optional. They can be dynamically created\r\nfrom developer-defined functions. For example, a large list of contacts\r\nusually has a divider for each letter in the alphabet. Developers provide\r\ntheir own custom function to be called on each record. The logic in the\r\ncustom function should determine whether to create the section template\r\nand what data to provide to the template. The custom function should\r\nreturn `null` if a template shouldn\'t be created.\r\n\r\n```html\r\n<ion-virtual-scroll [items]="items" [headerFn]="myHeaderFn">\r\n  <ion-item-divider *virtualHeader="let header">\r\n    {{ header }}\r\n  </ion-item-divider>\r\n  <ion-item *virtualItem="let item">\r\n    Item: {{ item }}\r\n  </ion-item>\r\n</ion-virtual-scroll>\r\n```\r\n\r\nBelow is an example of a custom function called on every record. It\r\ngets passed the individual record, the record\'s index number,\r\nand the entire array of records. In this example, after every 20\r\nrecords a header will be inserted. So between the 19th and 20th records,\r\nbetween the 39th and 40th, and so on, a `<ion-item-divider>` will\r\nbe created and the template\'s data will come from the function\'s\r\nreturned data.\r\n\r\n```ts\r\nmyHeaderFn(record, recordIndex, records) {\r\n  if (recordIndex % 20 === 0) {\r\n    return \'Header \' + recordIndex;\r\n  }\r\n  return null;\r\n}\r\n```\r\n\r\n### Approximate Widths and Heights\r\n\r\nIf the height of items in the virtual scroll are not close to the\r\ndefault size of 40px, it is extremely important to provide a value for\r\napproxItemHeight height. An exact pixel-perfect size is not necessary,\r\nbut without an estimate the virtual scroll will not render correctly.\r\n\r\nThe approximate width and height of each template is used to help\r\ndetermine how many cells should be created, and to help calculate\r\nthe height of the scrollable area. Note that the actual rendered size\r\nof each cell comes from the app\'s CSS, whereas this approximation\r\nis only used to help calculate initial dimensions.\r\n\r\nIt\'s also important to know that Ionic\'s default item sizes have\r\nslightly different heights between platforms, which is perfectly fine.\r\n\r\n### Images Within Virtual Scroll\r\n\r\nHTTP requests, image decoding, and image rendering can cause jank while\r\nscrolling. In order to better control images, Ionic provides `<ion-img>`\r\nto manage HTTP requests and image rendering. While scrolling through items\r\nquickly, `<ion-img>` knows when and when not to make requests, when and\r\nwhen not to render images, and only loads the images that are viewable\r\nafter scrolling. [Read more about `ion-img`.](../img)\r\n\r\nIt\'s also important for app developers to ensure image sizes are locked in,\r\nand after images have fully loaded they do not change size and affect any\r\nother element sizes. Simply put, to ensure rendering bugs are not introduced,\r\nit\'s vital that elements within a virtual item does not dynamically change.\r\n\r\nFor virtual scrolling, the natural effects of the `<img>` are not desirable\r\nfeatures. We recommend using the `<ion-img>` component over the native\r\n`<img>` element because when an `<img>` element is added to the DOM, it\r\nimmediately makes a HTTP request for the image file. Additionally, `<img>`\r\nrenders whenever it wants which could be while the user is scrolling. However,\r\n`<ion-img>` is governed by the containing `ion-content` and does not render\r\nimages while scrolling quickly.\r\n\r\n```html\r\n<ion-virtual-scroll [items]="items">\r\n  <ion-item *virtualItem="let item">\r\n    <ion-avatar item-start>\r\n      <ion-img [src]="item.avatarUrl"></ion-img>\r\n    </ion-avatar>\r\n    {{ item.firstName }} {{ item.lastName }}\r\n  </ion-item>\r\n</ion-virtual-scroll>\r\n```\r\n\r\n### Custom Components\r\n\r\nIf a custom component is going to be used within Virtual Scroll, it\'s best\r\nto wrap it with a good old `<div>` to ensure the component is rendered\r\ncorrectly. Since each custom component\'s implementation and internals can be\r\nquite different, wrapping within a `<div>` is a safe way to make sure\r\ndimensions are measured correctly.\r\n\r\n```html\r\n<ion-virtual-scroll [items]="items">\r\n  <div *virtualItem="let item">\r\n    <my-custom-item [item]="item">\r\n      {{ item }}\r\n    </my-custom-item>\r\n  </div>\r\n</ion-virtual-scroll>\r\n```\r\n\r\n## Virtual Scroll Performance Tips\r\n\r\n#### iOS Cordova WKWebView\r\n\r\nWhen deploying to iOS with Cordova, it\'s highly recommended to use the\r\n[WKWebView plugin](https://blog.ionicframework.com/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/)\r\nin order to take advantage of iOS\'s higher performing webview. Additionally,\r\nWKWebView is superior at scrolling efficiently in comparison to the older\r\nUIWebView.\r\n\r\n#### Lock in element dimensions and locations\r\n\r\nIn order for virtual scroll to efficiently size and locate every item, it\'s\r\nvery important every element within each virtual item does not dynamically\r\nchange its dimensions or location. The best way to ensure size and location\r\ndoes not change, it\'s recommended each virtual item has locked in its size\r\nvia CSS.\r\n\r\n#### Use `ion-img` for images\r\n\r\nWhen including images within Virtual Scroll, be sure to use\r\n[`ion-img`](../img/Img/) rather than the standard `<img>` HTML element.\r\nWith `ion-img`, images are lazy loaded so only the viewable ones are\r\nrendered, and HTTP requests are efficiently controlled while scrolling.\r\n\r\n#### Set Approximate Widths and Heights\r\n\r\nAs mentioned above, all elements should lock in their dimensions. However,\r\nvirtual scroll isn\'t aware of the dimensions until after they have been\r\nrendered. For the initial render, virtual scroll still needs to set\r\nhow many items should be built. With "approx" property inputs, such as\r\n`approxItemHeight`, we\'re able to give virtual scroll an approximate size,\r\ntherefore allowing virtual scroll to decide how many items should be\r\ncreated.\r\n\r\n#### Changing dataset should use `virtualTrackBy`\r\n\r\nIt is possible for the identities of elements in the iterator to change\r\nwhile the data does not. This can happen, for example, if the iterator\r\nproduced from an RPC to the server, and that RPC is re-run. Even if the\r\n"data" hasn\'t changed, the second response will produce objects with\r\ndifferent identities, and Ionic will tear down the entire DOM and rebuild\r\nit. This is an expensive operation and should be avoided if possible.\r\n\r\n#### Efficient headers and footer functions\r\nEach virtual item must stay extremely efficient, but one way to really\r\nkill its performance is to perform any DOM operations within section header\r\nand footer functions. These functions are called for every record in the\r\ndataset, so please make sure they\'re performant.\r\n\r\n\r',
      docs:
        'Virtual Scroll displays a virtual, "infinite" list. An array of records\r\nis passed to the virtual scroll containing the data to create templates\r\nfor. The template created for each record, referred to as a cell, can\r\nconsist of items, headers, and footers.\r\nFor performance reasons, not every record in the list is rendered at once;\r\ninstead a small subset of records (enough to fill the viewport) are rendered\r\nand reused as the user scrolls.',
      docsTags: [],
      usage: {
        angular:
          "```html\r\n<ion-content>\r\n  <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"320px\">\r\n    <ion-card *virtualItem=\"let item; let itemBounds = bounds;\">\r\n      <div>\r\n        <img [src]=\"item.imgSrc\" [height]=\"item.imgHeight\" [alt]=\"item.name\">\r\n      </div>\r\n    <ion-card-header>\r\n      <ion-card-title>{{ item.name }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>{{ item.content }}</ion-card-content>\r\n    </ion-card>\r\n  </ion-virtual-scroll>\r\n</ion-content>\r\n```\r\n\r\n```typescript\r\nexport class VirtualScrollPageComponent {\r\n  items: any[] = [];\r\n\r\n  constructor() {\r\n    for (let i = 0; i < 1000; i++) {\r\n      this.items.push({\r\n        name: i + ' - ' + images[rotateImg],\r\n        imgSrc: getImgSrc(),\r\n        avatarSrc: getImgSrc(),\r\n        imgHeight: Math.floor(Math.random() * 50 + 150),\r\n        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)\r\n      });\r\n\r\n      rotateImg++;\r\n      if (rotateImg === images.length) {\r\n        rotateImg = 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nconst lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\r\n\r\nconst images = [\r\n  'bandit',\r\n  'batmobile',\r\n  'blues-brothers',\r\n  'bueller',\r\n  'delorean',\r\n  'eleanor',\r\n  'general-lee',\r\n  'ghostbusters',\r\n  'knight-rider',\r\n  'mirth-mobile'\r\n];\r\n\r\nfunction getImgSrc() {\r\n  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';\r\n  rotateImg++;\r\n  if (rotateImg === images.length) {\r\n    rotateImg = 0;\r\n  }\r\n  return src;\r\n}\r\n\r\nlet rotateImg = 0;\r\n```\r\n",
        react:
          "```tsx\r\nimport React from 'react';\r\n\r\nimport { IonContent, IonCard, IonCardHeader, IonCardTitle, IonVirtualScroll } from '@ionic/react';\r\n\r\nlet rotateImg = 0;\r\nconst lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\r\n\r\nconst images = [\r\n  'bandit',\r\n  'batmobile',\r\n  'blues-brothers',\r\n  'bueller',\r\n  'delorean',\r\n  'eleanor',\r\n  'general-lee',\r\n  'ghostbusters',\r\n  'knight-rider',\r\n  'mirth-mobile'\r\n];\r\n\r\nfunction getImgSrc() {\r\n  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';\r\n  rotateImg++;\r\n  if (rotateImg === images.length) {\r\n    rotateImg = 0;\r\n  }\r\n  return src;\r\n}\r\n\r\nconst items: any[] = [];\r\n\r\nfor (let i = 0; i < 1000; i++) {\r\n  items.push({\r\n    name: i + ' - ' + images[rotateImg],\r\n    imgSrc: getImgSrc(),\r\n    avatarSrc: getImgSrc(),\r\n    imgHeight: Math.floor(Math.random() * 50 + 150),\r\n    content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)\r\n  });\r\n\r\n  rotateImg++;\r\n  if (rotateImg === images.length) {\r\n    rotateImg = 0;\r\n  }\r\n}\r\n\r\nconst Example: React.SFC<{}> = () => (\r\n\r\n  <IonContent>\r\n    <IonVirtualScroll items=\"items\" approxItemHeight=\"320px\">\r\n      <IonCard virtualItem=\"let item; let itemBounds = bounds;\">\r\n        <div>\r\n          <img src=\"item.imgSrc\" height=\"item.imgHeight\" alt=\"item.name\" />\r\n        </div>\r\n        <IonCardHeader>\r\n          <IonCardTitle>{{ name }}</IonCardTitle>\r\n        </IonCardHeader>\r\n        <IonCardContent>{{ content }}</IonCardContent>\r\n      </IonCard>\r\n    </IonVirtualScroll>\r\n  </IonContent>\r\n);\r\n\r\nexport default Example;\r\n```\r\n"
      },
      props: [
        {
          name: "approxFooterHeight",
          type: "number",
          mutable: false,
          attr: "approx-footer-height",
          reflectToAttr: false,
          docs:
            "The approximate width of each footer template's cell.\r\nThis dimension is used to help determine how many cells should\r\nbe created when initialized, and to help calculate the height of\r\nthe scrollable area. This height value can only use `px` units.\r\nNote that the actual rendered size of each cell comes from the\r\napp's CSS, whereas this approximation is used to help calculate\r\ninitial dimensions before the item has been rendered.",
          docsTags: [],
          default: "30",
          optional: false,
          required: false
        },
        {
          name: "approxHeaderHeight",
          type: "number",
          mutable: false,
          attr: "approx-header-height",
          reflectToAttr: false,
          docs:
            "The approximate height of each header template's cell.\r\nThis dimension is used to help determine how many cells should\r\nbe created when initialized, and to help calculate the height of\r\nthe scrollable area. This height value can only use `px` units.\r\nNote that the actual rendered size of each cell comes from the\r\napp's CSS, whereas this approximation is used to help calculate\r\ninitial dimensions before the item has been rendered.",
          docsTags: [],
          default: "30",
          optional: false,
          required: false
        },
        {
          name: "approxItemHeight",
          type: "number",
          mutable: false,
          attr: "approx-item-height",
          reflectToAttr: false,
          docs:
            "It is important to provide this\r\nif virtual item height will be significantly larger than the default\r\nThe approximate height of each virtual item template's cell.\r\nThis dimension is used to help determine how many cells should\r\nbe created when initialized, and to help calculate the height of\r\nthe scrollable area. This height value can only use `px` units.\r\nNote that the actual rendered size of each cell comes from the\r\napp's CSS, whereas this approximation is used to help calculate\r\ninitial dimensions before the item has been rendered.",
          docsTags: [],
          default: "45",
          optional: false,
          required: false
        },
        {
          name: "footerFn",
          type:
            "((item: any, index: number, items: any[]) => string | null | undefined) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "Section footers and the data used within its given\r\ntemplate can be dynamically created by passing a function to `footerFn`.\r\nThe logic within the footer function can decide if the footer template\r\nshould be used, and what data to give to the footer template. The function\r\nmust return `null` if a footer cell shouldn't be created.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "headerFn",
          type:
            "((item: any, index: number, items: any[]) => string | null | undefined) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "Section headers and the data used within its given\r\ntemplate can be dynamically created by passing a function to `headerFn`.\r\nFor example, a large list of contacts usually has dividers between each\r\nletter in the alphabet. App's can provide their own custom `headerFn`\r\nwhich is called with each record within the dataset. The logic within\r\nthe header function can decide if the header template should be used,\r\nand what data to give to the header template. The function must return\r\n`null` if a header cell shouldn't be created.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "itemHeight",
          type: "((item: any, index: number) => number) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "An optional function that maps each item within their height.\r\nWhen this function is provides, heavy optimizations and fast path can be taked by\r\n`ion-virtual-scroll` leading to massive performance improvements.\r\n\r\nThis function allows to skip all DOM reads, which can be Doing so leads\r\nto massive performance",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "items",
          type: "any[] | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "The data that builds the templates within the virtual scroll.\r\nIt's important to note that when this data has changed, then the\r\nentire virtual scroll is reset, which is an expensive operation and\r\nshould be avoided if possible.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "nodeRender",
          type:
            "((el: HTMLElement | null, cell: Cell, domIndex: number) => HTMLElement) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs: "NOTE: only Vanilla JS API.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "renderFooter",
          type: "((item: any, index: number) => any) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "NOTE: only JSX API for stencil.\r\n\r\nProvide a render function for the footer to be rendered. Returns a JSX virtual-dom.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "renderHeader",
          type: "((item: any, index: number) => any) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "NOTE: only JSX API for stencil.\r\n\r\nProvide a render function for the header to be rendered. Returns a JSX virtual-dom.",
          docsTags: [],
          optional: true,
          required: false
        },
        {
          name: "renderItem",
          type: "((item: any, index: number) => any) | undefined",
          mutable: false,
          reflectToAttr: false,
          docs:
            "NOTE: only JSX API for stencil.\r\n\r\nProvide a render function for the items to be rendered. Returns a JSX virtual-dom.",
          docsTags: [],
          optional: true,
          required: false
        }
      ],
      methods: [
        {
          name: "checkEnd",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "checkEnd() => void",
          parameters: [],
          docs:
            "This method marks the tail the items array as dirty, so they can be re-rendered.\r\n\r\nIt's equivalent to calling:\r\n\r\n```js\r\n   * virtualScroll.checkRange(lastItemLen);\r\n   * ```",
          docsTags: []
        },
        {
          name: "checkRange",
          returns: {
            type: "void",
            docs: ""
          },
          signature: "checkRange(offset: number, len?: number) => void",
          parameters: [
            {
              name: "offset",
              type: "number",
              docs: ""
            },
            {
              name: "len",
              type: "number",
              docs: ""
            }
          ],
          docs:
            "This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as\r\ndirty any time the content or their style changes.\r\n\r\nThe subset of items to be updated can are specifing by an offset and a length.",
          docsTags: []
        },
        {
          name: "positionForItem",
          returns: {
            type: "Promise<number>",
            docs: ""
          },
          signature: "positionForItem(index: number) => Promise<number>",
          parameters: [
            {
              name: "index",
              type: "number",
              docs: ""
            }
          ],
          docs: "Returns the position of the virtual item at the given index.",
          docsTags: []
        }
      ],
      events: [],
      styles: [],
      slots: []
    }
  ]
};

export { docs };