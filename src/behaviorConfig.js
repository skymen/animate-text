// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "behavior",
  id: "skymen_Skymen_SpritefontDX",
  name: "Animate Text",
  version: "1.1.0.3",
  category:
    // "attributes",
    // "movements",
    // "other",
    "general",
  author: "skymen",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description:
    "A behavior that extends the animation capabilities of Spritefont and text",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    Set: {
      IsOnlyOneAllowed: true,
      CanBeBundled: true,
      IsDeprecated: false,
    },
  },
  properties: [
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Property Description",
    }
    */
    {
      type: "longtext",
      id: "tw-params",
      options: {
        initialValue: "value offsety -10; duration type 0.1; duration fade 0.1",
        interpolatable: false,
      },
      name: "Typewriter Params",
      desc: "Separated by ';'. 'value [a/x/y/o] <number>' or 'duration [type/fade] <number>'",
    },
    {
      type: "combo",
      id: "tw-easing",
      options: {
        initialValue: "linear",
        interpolatable: false,
        items: [
          { linear: "linear" },
          { easeInQuad: "easeInQuad" },
          { easeOutQuad: "easeOutQuad" },
          { easeInOutQuad: "easeInOutQuad" },
          { easeInCubic: "easeInCubic" },
          { easeOutCubic: "easeOutCubic" },
          { easeInOutCubic: "easeInOutCubic" },
          { easeInQuart: "easeInQuart" },
          { easeOutQuart: "easeOutQuart" },
          { easeInOutQuart: "easeInOutQuart" },
          { easeInQuint: "easeInQuint" },
          { easeOutQuint: "easeOutQuint" },
          { easeInOutQuint: "easeInOutQuint" },
          { easeInSine: "easeInSine" },
          { easeOutSine: "easeOutSine" },
          { easeInOutSine: "easeInOutSine" },
          { easeInExpo: "easeInExpo" },
          { easeOutExpo: "easeOutExpo" },
          { easeInOutExpo: "easeInOutExpo" },
          { easeInCirc: "easeInCirc" },
          { easeOutCirc: "easeOutCirc" },
          { easeInOutCirc: "easeInOutCirc" },
          { easeOutBounce: "easeOutBounce" },
          { easeInBack: "easeInBack" },
          { easeOutBack: "easeOutBack" },
          { easeInOutBack: "easeInOutBack" },
          { elastic: "elastic" },
          { swingFromTo: "swingFromTo" },
          { swingFrom: "swingFrom" },
          { swingTo: "swingTo" },
          { bounce: "bounce" },
          { bouncePast: "bouncePast" },
          { easeFromTo: "easeFromTo" },
          { easeFrom: "easeFrom" },
          { easeTo: "easeTo" },
        ],
      },
      name: "Typewriter Easing",
      desc: "The interpolation method used to ease the fading",
    },
    {
      type: "text",
      id: "tw-custom-easing",
      options: {
        initialValue: "",
        interpolatable: false,
      },
      name: "Custom Easing",
      desc: "Set an easing by name, or use Easings created using C3's easings editor",
    },
    {
      type: "check",
      id: "enable-default-functions",
      options: {
        initialValue: true,
        interpolatable: false,
      },
      name: "Default Aliases",
      desc: "If checked, the behavior will automatically add default alias functions (wave, shake, swing)",
    },
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    general: "General",
    typewriter: "Typewriter",
  },
  Acts: {
    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the runtime function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample action [i]{0}[/i]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
    "set-alias": {
      category: "general",
      forward: "DefineAlias",
      highlight: false,
      autoScriptInterface: true,
      params: [
        {
          id: "name",
          name: "Name",
          desc: "The name of the alias",
          type: "string",
          value: "",
        },
        {
          id: "params",
          name: "Params",
          desc: "The params of the function (not accounting for t and i)",
          type: "string",
          value: "",
        },
        {
          id: "body",
          name: "Body",
          desc: "The body of the function",
          type: "string",
          value: "",
        },
      ],
      listName: "Set Function Animation alias",
      displayText: "{my}: function [b]{0}[/b] ([i]{1}[/i]) { return {2} }",
      description: "Set a function animation alias",
    },
    "set-text": {
      category: "general",
      forward: "_SetText",
      highlight: true,
      autoScriptInterface: true,
      params: [
        {
          id: "text",
          name: "Text",
          desc: "The text to set",
          type: "string",
          value: "",
        },
      ],
      listName: "Set Text",
      displayText: "{my}: Set text to [b]{0}[/b]",
      description: "Set the text, after parsing it",
    },
    "link-dictionary": {
      category: "general",
      forward: "_LinkDictionary",
      highlight: false,
      autoScriptInterface: false,
      params: [
        {
          id: "dictionary",
          name: "Dictionary",
          desc: "The dictionary to link for holding the vars",
          type: "object",
          value: "",
          allowedPluginIds: ["Dictionary"],
        },
      ],
      listName: "Link Dictionary",
      displayText: "{my}: Link dictionary {0}",
      description: "Link a dictionary for holding the vars",
    },
    "pause-tw": {
      category: "typewriter",
      forward: "_PauseTw",
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "Pause Typewriter",
      displayText: "{my}: Pause typewriter",
      description: "Pause the typewriter",
    },
    "resume-tw": {
      category: "typewriter",
      forward: "_ResumeTw",
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "Resume Typewriter",
      displayText: "{my}: Resume typewriter",
      description: "Resume the typewriter",
    },
    "set-tw-easing": {
      category: "typewriter",
      forward: "_SetTwEasing",
      highlight: false,
      autoScriptInterface: false,
      params: [
        {
          id: "easing",
          name: "Easing",
          desc: "The easing to use",
          type: "combo",
          value: "linear",
          items: [
            { linear: "linear" },
            { easeInQuad: "easeInQuad" },
            { easeOutQuad: "easeOutQuad" },
            { easeInOutQuad: "easeInOutQuad" },
            { easeInCubic: "easeInCubic" },
            { easeOutCubic: "easeOutCubic" },
            { easeInOutCubic: "easeInOutCubic" },
            { easeInQuart: "easeInQuart" },
            { easeOutQuart: "easeOutQuart" },
            { easeInOutQuart: "easeInOutQuart" },
            { easeInQuint: "easeInQuint" },
            { easeOutQuint: "easeOutQuint" },
            { easeInOutQuint: "easeInOutQuint" },
            { easeInSine: "easeInSine" },
            { easeOutSine: "easeOutSine" },
            { easeInOutSine: "easeInOutSine" },
            { easeInExpo: "easeInExpo" },
            { easeOutExpo: "easeOutExpo" },
            { easeInOutExpo: "easeInOutExpo" },
            { easeInCirc: "easeInCirc" },
            { easeOutCirc: "easeOutCirc" },
            { easeInOutCirc: "easeInOutCirc" },
            { easeOutBounce: "easeOutBounce" },
            { easeInBack: "easeInBack" },
            { easeOutBack: "easeOutBack" },
            { easeInOutBack: "easeInOutBack" },
            { elastic: "elastic" },
            { swingFromTo: "swingFromTo" },
            { swingFrom: "swingFrom" },
            { swingTo: "swingTo" },
            { bounce: "bounce" },
            { bouncePast: "bouncePast" },
            { easeFromTo: "easeFromTo" },
            { easeFrom: "easeFrom" },
            { easeTo: "easeTo" },
          ],
        },
      ],
      listName: "Set Typewriter Easing",
      displayText: "{my}: Set typewriter easing to [b]{0}[/b]",
      description: "Set the typewriter easing",
    },
    "set-tw-params": {
      category: "typewriter",
      forward: "_SetTwParams",
      highlight: false,
      autoScriptInterface: true,
      params: [
        {
          id: "params",
          name: "Params",
          desc: "Separated by ';'. 'value [a/x/y/o] <number>' or 'duration [type/fade] <number>'",
          type: "string",
          value: "",
        },
      ],
      listName: "Set Typewriter Params",
      displayText: "{my}: Set typewriter params to [b]{0}[/b]",
      description: "Set the typewriter params",
    },
    "skip-tw": {
      category: "typewriter",
      forward: "_SkipTw",
      highlight: false,
      autoScriptInterface: false,
      params: [
        {
          id: "mode",
          name: "Mode",
          desc: "The skip mode to use",
          type: "combo",
          value: "to-end",
          items: [{ "to-end": "to end" }, { "to-next": "to next pause" }],
        },
      ],
      listName: "Skip Typewriter",
      displayText: "{my}: Skip typewriter [b]{0}[/b]",
      description: "Skip the typewriter",
    },
    typewrite: {
      category: "typewriter",
      forward: "Typewriter",
      highlight: false,
      autoScriptInterface: true,
      params: [
        {
          id: "text",
          name: "Text",
          desc: "The text to typewrite",
          type: "string",
          value: "",
        },
      ],
      listName: "Typewrite",
      displayText: "{my}: Typewrite [b]{0}[/b]",
      description: "Typewrite the text",
    },
    "set-tw-easing-string": {
      category: "typewriter",
      forward: "_SetTwEasingString",
      highlight: false,
      autoScriptInterface: false,
      params: [
        {
          id: "easing",
          name: "Easing",
          desc: "The easing to use",
          type: "string",
          value: "",
        },
      ],
      listName: "Set Typewriter Easing (by name)",
      displayText: "{my}: Set typewriter easing (by name) to [b]{0}[/b]",
      description: "Set the typewriter easing (by name)",
    },
  },
  Cnds: {
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the runtime function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample condition [i]{0}[/i]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
    "is-typing": {
      category: "typewriter",
      handler: `function () {
        return this.typewriterActive && !this.typewriterPaused;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "Is Typing",
      displayText: "{my}: Is typing",
      description: "Check if the typewriter is typing",
    },
    "on-letter-typed": {
      category: "typewriter",
      handler: `function () {
        return true;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "On letter typed",
      displayText: "{my}: On letter typed",
      description: "Triggered when a letter is typed",
      isTrigger: true,
    },
    "on-tw-pause": {
      category: "typewriter",
      handler: `function () {
        return true;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "On typewriter pause",
      displayText: "{my}: On typewriter pause",
      description: "Triggered when the typewriter pauses",
      isTrigger: true,
    },
    "on-tw-resume": {
      category: "typewriter",
      handler: `function () {
        return true;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "On typewriter resume",
      displayText: "{my}: On typewriter resume",
      description: "Triggered when the typewriter resumes",
      isTrigger: true,
    },
    "on-tw-start": {
      category: "typewriter",
      handler: `function () {
        return true;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "On typewriter start",
      displayText: "{my}: On typewriter start",
      description: "Triggered when the typewriter starts",
      isTrigger: true,
    },
    "on-tw-stop": {
      category: "typewriter",
      handler: `function () {
        return true;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      listName: "On typewriter stop",
      displayText: "{my}: On typewriter stop",
      description: "Triggered when the typewriter stops",
      isTrigger: true,
    },
  },
  Exps: {
    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the runtime function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
    "last-letter-id": {
      category: "typewriter",
      handler: `function () {
        return this.LastLetterID;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      description: "Get the id of the last letter typed",
      returnType: "number",
    },
    "tw-easing": {
      category: "typewriter",
      handler: `function () {
        return this.TWEasing;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      description: "Get the easing used by the typewriter",
      returnType: "string",
    },
    "tw-params": {
      category: "typewriter",
      handler: `function () {
        return this.TWParams;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      description: "Get the parameters used by the typewriter",
      returnType: "string",
    },
    "typed-text-width": {
      category: "typewriter",
      forward: "_TypedTextWidth",
      highlight: false,
      autoScriptInterface: true,
      params: [],
      description: "Get the width of the typed text",
      returnType: "number",
    },
    "typed-text-height": {
      category: "typewriter",
      forward: "_TypedTextHeight",
      highlight: false,
      autoScriptInterface: true,
      params: [],
      description: "Get the height of the typed text",
      returnType: "number",
    },
    "last-letter": {
      category: "typewriter",
      handler: `function () {
        return this.LastLetter;
      }`,
      highlight: false,
      autoScriptInterface: true,
      params: [],
      description: "Get the last letter typed",
      returnType: "string",
    },
    "c2-str-to-c3-str": {
      category: "general",
      forward: "_C2StrToC3Str",
      highlight: false,
      autoScriptInterface: true,
      params: [
        {
          id: "text",
          name: "Text",
          desc: "The text to convert",
          type: "string",
        },
      ],
      description:
        "EXPERIMENTAL: Tries to rewrite a SFDX C2 text string into a C3 one",
      returnType: "string",
    },
  },
};
