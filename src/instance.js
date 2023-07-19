function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  const easingNames = [
    "linear",
    "easeInQuad",
    "easeOutQuad",
    "easeInOutQuad",
    "easeInCubic",
    "easeOutCubic",
    "easeInOutCubic",
    "easeInQuart",
    "easeOutQuart",
    "easeInOutQuart",
    "easeInQuint",
    "easeOutQuint",
    "easeInOutQuint",
    "easeInSine",
    "easeOutSine",
    "easeInOutSine",
    "easeInExpo",
    "easeOutExpo",
    "easeInOutExpo",
    "easeInCirc",
    "easeOutCirc",
    "easeInOutCirc",
    "easeOutBounce",
    "easeInBack",
    "easeOutBack",
    "easeInOutBack",
    "elastic",
    "swingFromTo",
    "swingFrom",
    "swingTo",
    "bounce",
    "bouncePast",
    "easeFromTo",
    "easeFrom",
    "easeTo",
  ];

  var EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) {
      return t;
    },
    // accelerating from zero velocity
    easeInQuad: function (t) {
      return t * t;
    },
    // decelerating to zero velocity
    easeOutQuad: function (t) {
      return t * (2 - t);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    // accelerating from zero velocity
    easeInCubic: function (t) {
      return t * t * t;
    },
    // decelerating to zero velocity
    easeOutCubic: function (t) {
      return --t * t * t + 1;
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function (t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    // accelerating from zero velocity
    easeInQuart: function (t) {
      return t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuart: function (t) {
      return 1 - --t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    // accelerating from zero velocity
    easeInQuint: function (t) {
      return t * t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuint: function (t) {
      return 1 + --t * t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function (t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    },

    easeInSine: function (pos) {
      return -Math.cos(pos * (Math.PI / 2)) + 1;
    },

    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },

    easeInOutSine: function (pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },

    easeInExpo: function (pos) {
      return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
    },

    easeOutExpo: function (pos) {
      return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
    },

    easeInOutExpo: function (pos) {
      if (pos === 0) return 0;
      if (pos === 1) return 1;
      if ((pos /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (pos - 1));
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    },

    easeInCirc: function (pos) {
      return -(Math.sqrt(1 - pos * pos) - 1);
    },

    easeOutCirc: function (pos) {
      return Math.sqrt(1 - Math.pow(pos - 1, 2));
    },

    easeInOutCirc: function (pos) {
      if ((pos /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    },

    easeOutBounce: function (pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
      }
    },

    easeInBack: function (pos) {
      var s = 1.70158;
      return pos * pos * ((s + 1) * pos - s);
    },

    easeOutBack: function (pos) {
      var s = 1.70158;
      return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
    },

    easeInOutBack: function (pos) {
      var s = 1.70158;
      if ((pos /= 0.5) < 1)
        return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
      return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    },

    elastic: function (pos) {
      return (
        -1 *
          Math.pow(4, -8 * pos) *
          Math.sin(((pos * 6 - 1) * (2 * Math.PI)) / 2) +
        1
      );
    },

    swingFromTo: function (pos) {
      var s = 1.70158;
      return (pos /= 0.5) < 1
        ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s))
        : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    },

    swingFrom: function (pos) {
      var s = 1.70158;
      return pos * pos * ((s + 1) * pos - s);
    },

    swingTo: function (pos) {
      var s = 1.70158;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    },

    bounce: function (pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
      }
    },

    bouncePast: function (pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
      } else if (pos < 2.5 / 2.75) {
        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
      }
    },

    easeFromTo: function (pos) {
      if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 4);
      return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
    },

    easeFrom: function (pos) {
      return Math.pow(pos, 4);
    },

    easeTo: function (pos) {
      return Math.pow(pos, 0.25);
    },
  };

  function cos(x) {
    return Math.cos((x * Math.PI) / 180);
  }

  function sin(x) {
    return Math.sin((x * Math.PI) / 180);
  }

  function random(x) {
    return Math.random() * x;
  }
  var sdk_runtime;
  function c3easing(time, name, magnitude = 1, duration = 1, pingpong = false) {
    time = ((time % (duration * 2)) + duration * 2) % (duration * 2);
    let transition = sdk_runtime._transitionManager._transitions.find(
      (x) => x._name.toLowerCase() === name.toLowerCase()
    );
    if (!transition) return 0;
    let progress =
      pingpong && time % (duration * 2) > duration
        ? duration - (time % duration)
        : time % duration;
    return transition.Interpolate(progress, 0, magnitude, duration);
  }

  function hslToRgb(hue, saturation, lightness) {
    // based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
    if (hue == undefined) {
      return [0, 0, 0];
    }

    var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    var huePrime = hue / 60;
    var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    huePrime = Math.floor(huePrime);
    var red;
    var green;
    var blue;

    if (huePrime === 0) {
      red = chroma;
      green = secondComponent;
      blue = 0;
    } else if (huePrime === 1) {
      red = secondComponent;
      green = chroma;
      blue = 0;
    } else if (huePrime === 2) {
      red = 0;
      green = chroma;
      blue = secondComponent;
    } else if (huePrime === 3) {
      red = 0;
      green = secondComponent;
      blue = chroma;
    } else if (huePrime === 4) {
      red = secondComponent;
      green = 0;
      blue = chroma;
    } else if (huePrime === 5) {
      red = chroma;
      green = 0;
      blue = secondComponent;
    }

    var lightnessAdjustment = lightness - chroma / 2;
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;

    return [
      Math.round(red * 255),
      Math.round(green * 255),
      Math.round(blue * 255),
    ];
  }
  var hsltorgb = hslToRgb;

  function colorToHex(color) {
    if (color.startsWith("#")) {
      return color;
    }
    if (color.startsWith("hsl")) {
      let [h, s, l] = color
        .split("(")[1]
        .split(")")[0]
        .split(",")
        .map((x) => {
          return x.trim();
        });
      color = "rgb(" + hslToRgb(h, s / 100, l / 100).join(",") + ")";
    }
    if (color.startsWith("rgb")) {
      let [r, g, b] = color
        .split("(")[1]
        .split(")")[0]
        .split(",")
        .map((x) => {
          x = parseInt(x.trim()).toString(16);
          return x.length == 1 ? "0" + x : x;
        });
      return "#" + r + g + b;
    }
  }
  var colortohex = colorToHex;

  function lerpColor(a, b, x) {
    return lerpHexColor(colorToHex(a), colorToHex(b), x);
  }
  var lerpcolor = lerpColor;

  function lerpHexColor(a, b, amount) {
    var ah = parseInt(a.replace(/#/g, ""), 16),
      ar = ah >> 16,
      ag = (ah >> 8) & 0xff,
      ab = ah & 0xff,
      bh = parseInt(b.replace(/#/g, ""), 16),
      br = bh >> 16,
      bg = (bh >> 8) & 0xff,
      bb = bh & 0xff,
      rr = ar + amount * (br - ar),
      rg = ag + amount * (bg - ag),
      rb = ab + amount * (bb - ab);

    return (
      "#" +
      (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)
    );
  }
  var lerphexcolor = lerpHexColor;

  function lerpUnlerp(
    minOutput,
    maxOutput,
    minInput,
    maxInput,
    x,
    clamp = false
  ) {
    if (clamp) {
      if (x > maxInput) x = maxInput;
      if (x < minInput) x = minInput;
    }
    return (
      minOutput +
      ((x - minInput) / (maxInput - minInput)) * (maxOutput - minOutput)
    );
  }
  var lerpunlerp = lerpUnlerp;

  function unlerp(min, max, x, clamp = false) {
    if (clamp) {
      if (x > max) x = max;
      if (x < min) x = min;
    }
    if (min === max && x >= max) return 1;
    return (x - min) / (max - min);
  }

  function lerp(min, max, x) {
    let a = typeof min;
    let b = typeof max;
    if (a === b) {
      if (a === "number") {
        return x * (max - min) + min;
      } else {
        return lerpColor(min, max, x);
      }
    } else {
      if (a === "number") {
        max = parseFloat(max);
      } else {
        min = parseFloat(min);
      }
      return x * (max - min) + min;
    }
  }

  self.globalThis.SFDXUtilsFunctions = self.globalThis.SFDXUtilsFunctions || {
    cos,
    sin,
    random,
    hslToRgb,
    hsltorgb,
    colorToHex,
    colortohex,
    lerpColor,
    lerpcolor,
    lerpHexColor,
    lerphexcolor,
    lerpUnlerp,
    lerpunlerp,
    unlerp,
    lerp,
    EasingFunctions,
    easingfunctions: EasingFunctions,
    c3easing,
  };

  return class extends parentClass {
    constructor(behInst, properties) {
      super(behInst);
      sdk_runtime = this.GetRuntime();
      this.TWData = {};
      this.TWTime = 0;

      if (properties) {
        this.TWParams = properties[0];
        this.TWParamsOBJ = this.parseTypewriterParams(this.TWParams);
        this.TWEasing =
          properties[2].trim() !== ""
            ? properties[2]
            : easingNames[properties[1]];
      }
      this.curTypedWidth = "";
      this.curTypedHeight = "";
      this.text = "";
      this.lastKnown = "";
      this.typewriterPaused = false;
      this.typewriterActive = false;
      this.LastLetterID = 0;
      this.typePauseTime = 0;
      this.typewriterTagData = [];
      this.nextLetterTime = 0;
      this.typewriterWait = false;
      this.firstFrame = true;
      this.animated = false;
      this.SetTextCall = false;
      this.scheduleMaxCharacterCount = null;

      this.linkedDictionnaryUID = -1;
      this.parsedText = [];
      this.AnimFunctions = {};
      if (!this._inst._objectType._SFDXAliasFunctions)
        this._inst._objectType._SFDXAliasFunctions = {};
      if (properties && properties[3]) {
        [
          {
            name: "wave",
            params: "magnitude, frequency, length",
            body: "magnitude * sin(t * frequency + i * length)",
          },
          {
            name: "swing",
            params: "magnitude, frequency, length",
            body: "magnitude * cos(t * frequency + i * length)",
          },
          {
            name: "shake",
            params: "magnitude",
            body: "random(magnitude)",
          },
          {
            name: "animatedIcon",
            params: "icons, speed",
            body: "icons[Math.floor(t*speed)%icons.length]",
          },
        ].forEach((defaultAlias) => {
          let { name, params, body } = defaultAlias;
          this.DefineAlias(name, params, body);
        });
      }

      this._StartTicking2();

      // Opt-in to getting calls to Tick()
      // this._StartTicking();
    }

    Release() {
      super.Release();
    }

    specialJSONstringify(obj) {
      var placeholder = "____PLACEHOLDER____";
      var fns = [];
      var json = JSON.stringify(
        obj,
        function (key, value) {
          if (typeof value === "function") {
            fns.push(value);
            return placeholder;
          }
          return value;
        },
        2
      );
      json = json.replace(new RegExp('"' + placeholder + '"', "g"), (_) => {
        const fn = fns.shift();
        if (fn.__targetFunction__ === this.getChar)
          return (
            "this.bindFn(this.getChar, ..." +
            JSON.stringify(fn.__boundArgs__) +
            ")"
          );
        return fn;
      });
      return json;
    }

    specialJSONparse(str) {
      let val;
      eval("val =" + str + ";");
      return val;
    }

    SaveToJson() {
      return {
        curTypedWidth: this.curTypedWidth,
        curTypedHeight: this.curTypedHeight,
        text: this.text,
        typewriterPaused: this.typewriterPaused,
        typewriterActive: this.typewriterActive,
        LastLetterID: this.LastLetterID,
        typePauseTime: this.typePauseTime,
        nextLetterTime: this.nextLetterTime,
        typewriterWait: this.typewriterWait,
        firstFrame: this.firstFrame,
        animated: this.animated,
        SetTextCall: this.SetTextCall,
        scheduleMaxCharacterCount: this.scheduleMaxCharacterCount,
        lastKnown: this.lastKnown,
        TWTime: this.TWTime,
        TWEasing: this.TWEasing,

        typewriterTagData: JSON.stringify(this.typewriterTagData),
        TWData: JSON.stringify(this.TWData),
        TWParamsOBJ: JSON.stringify(this.TWParamsOBJ),
        TWParams: JSON.stringify(this.TWParams),

        AnimFunctions: this.specialJSONstringify(this.AnimFunctions),
        parsedText: this.specialJSONstringify(this.parsedText),
        _SFDXAliasFunctions: this.specialJSONstringify(
          this._inst._objectType._SFDXAliasFunctions
        ),

        linkedDictionnaryUID: this.linkedDictionnaryUID,
      };
    }

    LoadFromJson(o) {
      this.curTypedHeight = o.curTypedHeight;
      this.curTypedWidth = o.curTypedWidth;
      this.text = o.text;
      this.typewriterPaused = o.typewriterPaused;
      this.typewriterActive = o.typewriterActive;
      this.LastLetterID = o.LastLetterID;
      this.typePauseTime = o.typePauseTime;
      this.nextLetterTime = o.nextLetterTime;
      this.typewriterWait = o.typewriterWait;
      this.firstFrame = o.firstFrame;
      this.animated = o.animated;
      this.SetTextCall = o.SetTextCall;
      this.lastKnown = o.lastKnown;
      this.TWTime = o.TWTime;
      this.TWEasing = o.TWEasing;
      this.scheduleMaxCharacterCount = o.scheduleMaxCharacterCount;

      this.typewriterTagData = JSON.parse(o.typewriterTagData);
      this.TWData = JSON.parse(o.TWData);
      this.TWParamsOBJ = JSON.parse(o.TWParamsOBJ);
      this.TWParams = JSON.parse(o.TWParams);

      this.AnimFunctions = this.specialJSONparse(o.AnimFunctions);
      this.parsedText = this.specialJSONparse(o.parsedText);
      this._SFDXAliasFunctions = this.specialJSONparse(o._SFDXAliasFunctions);

      this.linkedDictionnaryUID = o.linkedDictionnaryUID;
    }

    Trigger(method) {
      super.Trigger(method);
      const trigger = addonTriggers.find((x) => x.method === method);
      if (trigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(trigger.id));
      }
    }

    parseTypewriterParams(params) {
      var paramsA = params.trim().split(";");
      var defaultParams = {
        value: {},
        duration: {
          type: 5,
          fade: 10,
        },
      };

      paramsA.forEach((param) => {
        if (param.trim() === "") return;
        var paramA = param.trim().split(" ");
        let mode = paramA.shift().toLowerCase();
        if (mode.trim() === "" || paramA.length === 0) return;
        let tag = paramA.shift().toLowerCase();
        if (tag.trim() === "" || paramA.length === 0) return;
        let value = paramA.join();

        if (this.isANumber(value)) value = parseFloat(value);

        switch (mode) {
          case "value":
            defaultParams["value"][tag] = value;
            break;
          case "duration":
            switch (tag) {
              case "type":
                defaultParams["duration"]["type"] = value;
                break;
              case "fade":
                defaultParams["duration"]["fade"] = value;
                break;

              default:
                console.warn(
                  tag +
                    " is not a recognised typewriter parameter for " +
                    mode +
                    "."
                );
                break;
            }
            break;
          default:
            console.warn(mode + " is not a recognised typewriter parameter.");
            break;
        }
      });

      return defaultParams;
    }

    getDefault(tag) {
      switch (tag) {
        case "offsetx":
        case "offsety":
          return 0;
        case "opacity":
          return 100;
        case "scale":
        case "scalex":
        case "scaley":
          return 1;
        case "color":
          return (
            this._inst._sdkInst._color || this._inst._spriteFontText._color
          ).toHexString();
        case "background":
          return "#FFFFFF";
        case "size":
          if (
            self.C3.Plugins.Text &&
            this._inst._objectType._plugin instanceof self.C3.Plugins.Text
          ) {
            return this._inst._sdkInst._ptSize;
          }
        default:
          return 0;
      }
    }

    IsConditionalTag(tag) {
      return ["hide", "b", "i", "u", "s", "stroke"].includes(tag);
    }

    IsSoloTag(tag) {
      return ["icon"].includes(tag);
    }

    GetTwEasingFunction() {
      let transition = sdk_runtime._transitionManager._transitions.find(
        (x) => x._name.toLowerCase() === this.TWEasing.toLowerCase()
      );
      if (transition) {
        return (pos) => {
          //console.log(pos);
          return transition.Interpolate(pos, 0, 1, 1.01);
        };
      }
      if (EasingFunctions[this.TWEasing]) {
        return EasingFunctions[this.TWEasing];
      } else {
        return EasingFunctions["linear"];
      }
    }

    Tick2() {
      //Check if dictionnary is linked after load
      if (this.linkedDictionnaryUID != -1 && !this.linkedDictionnary) {
        this.linkedDictionnary = this._runtime.GetInstanceByUID(
          this.linkedDictionnaryUID
        );
      }

      //If instance action Set Text is called
      if (
        !this.SetTextCall &&
        this.animated &&
        this._inst._sdkInst._text != this.lastKnown
      ) {
        this.animated = false;
      }

      if (this.SetTextCall) this.SetTextCall = false;

      if (this.animated) {
        const time = this._runtime.GetGameTime();
        var str = "";
        var word = false;
        if (this.typewriterActive) {
          let id = 0;
          this.parsedText.forEach((el) => {
            for (let i = 0; i < el[1].length; i++) {
              let tags = {};

              el[0].forEach((tag) => {
                if (typeof tag[1] === "function")
                  tags[tag[0]] = tag[1](time, i);
                else tags[tag[0]] = tag[1];
              });

              if (
                this.TWTime >= this.TWData.start[id][0] &&
                this.TWData.data[id].hasOwnProperty("pause")
              ) {
                this.typewriterPaused = true;
                delete this.TWData.data[id].pause;
                this.Trigger(
                  C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwPause
                );
              }
              if (
                this.TWTime >= this.TWData.start[id][0] &&
                this.TWData.data[id].hasOwnProperty("fn")
              ) {
                let fnData = this.TWData.data[id].fn.split(" ");
                let fnName = fnData.shift();
                let fnParams = JSON.parse("[" + fnData.join(" ") + "]") || [];
                self.c3_callFunction(fnName, fnParams);
                delete this.TWData.data[id].fn;
              }

              Object.keys(this.TWData.data[id]).forEach((tag) => {
                if (!tags.hasOwnProperty(tag)) {
                  tags[tag] = this.getDefault(tag);
                }
                tags[tag] = lerp(
                  this.TWData.data[id][tag],
                  tags[tag],
                  this.GetTwEasingFunction()(
                    unlerp(
                      this.TWData.start[id][0],
                      this.TWData.start[id][1],
                      this.TWTime,
                      true
                    )
                  )
                );
              });

              let end = "";

              Object.keys(tags).forEach((tag) => {
                if (!["wait", "fade", "type", "pause"].includes(tag)) {
                  if (!this.IsConditionalTag(tag) || tags[tag]) {
                    str += "[" + tag + "=" + tags[tag] + "]";
                    end = "[/" + tag + "]" + end;
                  }
                }
              });

              let innerText = "";
              let tmp = el[1][i];
              if (typeof tmp != "string") {
                innerText += tmp();
              } else {
                innerText = tmp;
              }

              str += innerText + end;

              if (
                !this.typewriterPaused &&
                this.TWTime >= this.TWData.start[id][0] &&
                this.LastLetterID < id
              ) {
                this.LastLetterID = id;
                this.LastLetter = this.getTextWithNoTags(str)[id];
                this.Trigger(
                  C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnLetterTyped
                );
                word = true;
                this.curTypedWidth = str;
              }

              if (word) {
                this.curTypedHeight = str;
                if (el[1][i] === " ") word = false;
              }

              id++;
            }
          });
          this.SetDrawMaxCharacterCount(this.LastLetterID, str);

          if (
            this.TWTime >= this.TWData.start[this.TWData.start.length - 1][1]
          ) {
            //TW END
            this.SetDrawMaxCharacterCount(-1);
            this.Trigger(C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwStop);
            this.typewriterActive = false;
          }

          if (!this.typewriterPaused)
            this.TWTime += this._runtime.GetDt(this._inst);
        } else {
          this.parsedText.forEach((el) => {
            if (el[0].length == 0) {
              let innerText = "";
              let tmp = el[1];
              if (typeof tmp != "string") {
                tmp.forEach((f) => {
                  innerText += f();
                });
              } else {
                innerText = tmp;
              }
              //console.log(innerText)
              str += innerText;
            } else {
              for (let i = 0; i < el[1].length; i++) {
                let end = "";
                el[0].forEach((tag) => {
                  let val;
                  if (typeof tag[1] === "function") val = tag[1](time, i);
                  else val = tag[1];
                  if (!this.IsConditionalTag(tag[0]) || val) {
                    str += "[" + tag[0] + "=" + val + "]";
                    end = "[/" + tag[0] + "]" + end;
                  }
                });
                let innerText = "";
                let tmp = el[1][i];
                if (typeof tmp != "string") {
                  innerText += tmp();
                } else {
                  innerText = tmp;
                }
                str += innerText + end;
              }
            }
          });
        }
        this.lastKnown = str;
        //console.log(str)

        this.SetTextInst(str);
      }
    }

    GetNbNewlines(nb, text) {
      let tmp = this._inst._sdkInst._text;
      this.SetTextInst(text);
      text = this.getTextWithNoTags(text);
      text = text.slice(0, nb + 1);
      let renderer = this.GetRendererText();
      let tmp2 = renderer.GetDrawMaxCharacterCount();
      renderer.SetDrawMaxCharacterCount(-1);
      renderer._MaybeWrapText();
      let lines = C3.cloneArray(renderer._wrappedText.GetLines());
      renderer.SetDrawMaxCharacterCount(tmp2);

      let nbLines = 0;
      if (lines.length > 1) {
        let start = "";
        let prop = "text";
        let fragProp = "fragments";
        if (!lines[0].fragments) {
          prop = "_fragments";
        }
        let handler = (frag) => {
          if (prop === "text" && frag.hasOwnProperty("text")) {
            start += frag.text;
          } else {
            prop = "chArr";
            start += frag.chArr.join("");
          }
        };
        if (fragProp === "fragments") {
          lines[0].fragments.forEach(handler);
        } else {
          lines[0]._fragments.forEach(handler);
        }
        while (
          text.length > 0 &&
          (text.startsWith(start) || start.startsWith(text))
        ) {
          nbLines++;
          lines.shift();
          text = text.slice(start.length).trimStart();
          if (lines.length > 0) {
            start = "";
            let handler2 = (frag) => {
              if (prop === "text") {
                start += frag.text;
              } else {
                start += frag.chArr.join("");
              }
            };
            if (fragProp === "fragments") {
              lines[0].fragments.forEach(handler2);
            } else {
              lines[0]._fragments.forEach(handler2);
            }
          }
        }
      }

      nbLines -= text === "";
      this.SetTextInst(tmp);

      return nbLines;
    }

    SetDrawMaxCharacterCount(nb, text = null) {
      this.scheduleMaxCharacterCount = null;
      if (text) {
        nb += 1;
        nb -= this.GetNbNewlines(nb, text);
      }
      this.scheduleMaxCharacterCount = nb;
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }

    SetTextInst(str) {
      this._inst._sdkInst.CallAction(this.GetSetTexttAct(), str);
      if (
        this.scheduleMaxCharacterCount != null &&
        this.scheduleMaxCharacterCount !==
          this.GetRendererText().GetDrawMaxCharacterCount()
      ) {
        this.GetRendererText().SetDrawMaxCharacterCount(
          this.scheduleMaxCharacterCount
        );
        this._runtime.UpdateRender();
        this.scheduleMaxCharacterCount = null;
      }
    }

    GetRendererText() {
      if (
        self.C3.Plugins.Spritefont2 &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Spritefont2
      ) {
        return this._inst._sdkInst._spriteFontText;
      } else if (
        self.C3.Plugins.Text &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Text
      ) {
        return (
          this._inst._sdkInst._webglText || this._inst._sdkInst._rendererText
        );
      }
      return null;
    }

    GetSetTexttAct() {
      if (
        self.C3.Plugins.Spritefont2 &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Spritefont2
      ) {
        return self.C3.Plugins.Spritefont2.Acts.SetText;
      } else if (
        self.C3.Plugins.Text &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Text
      ) {
        return self.C3.Plugins.Text.Acts.SetText;
      }
      return null;
    }

    Typewriter(text) {
      if (text === "") {
        this.SetTextInst("");
        this.lastKnown = "";
        this.animated = false;
        this.typewriterActive = false;
        return;
      }

      this.SetTextCall = true;
      this.text = this.getTextWithNoTW(text);
      this.parseText();
      this.SetDrawMaxCharacterCount(0);
      text = this.text;
      this.LastLetterID = -1;
      this.typewriterActive = true;
      this.animated = true;
      this.typewriterPaused = false;
      this.TWTime = 0;
      this.curTypedWidth = "";
      this.curTypedHeight = "";
      let pureText = this.getTextWithNoTags(this.text);
      let start = 0;
      this.TWData = {
        start: [],
        data: [],
      };
      for (let i = 0; i < pureText.length; i++) {
        var curData = {};
        Object.assign(curData, this.TWParamsOBJ.value);
        Object.assign(curData, this.TWParamsOBJ.duration);
        for (let j = 0; j < this.typewriterTagData.length; j++) {
          let el = this.typewriterTagData[j];
          if (el.id > i) break;
          let data = el.data.split(" ");
          let tag = data[0].toLowerCase();
          if ((tag === "wait" || tag === "pause" || tag === "fn") && el.id != i)
            continue;

          if (tag === "fn") {
            data.shift();
            curData[tag] = data.join(" ");
          } else {
            // try to eval as function
            data.shift();
            let tagFn = data.join(" ");
            try {
              curData[tag] = this.getAnimFunction(tagFn)();
            } catch (e) {
              if (this.isANumber(data[0])) curData[tag] = parseFloat(data[0]);
              else curData[tag] = tagFn;
            }
          }
        }

        let special = false;

        if (curData.hasOwnProperty("wait")) {
          start += curData.wait;
        }
        if (curData.hasOwnProperty("pause")) {
          start += curData.fade;
        }
        this.TWData.start.push([start, start + curData.fade]);

        start += curData.type;
        this.TWData.data.push(curData);
      }
      this.Trigger(C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwStart);
    }

    isAString(text) {
      var regex = /(["'])(\\?.)*?\1/g; //"
      var match = regex.exec(text);
      return match != null && match[0] === text;
    }

    isANumber(text) {
      return parseFloat(text).toString() === text;
    }

    GetBody(body) {
      let utils =
        "let { " +
        Object.keys(self.globalThis.SFDXUtilsFunctions).join(",") +
        " } = globalThis.SFDXUtilsFunctions;";
      body = utils + "return " + body + ";";
      return body;
    }

    DefineAlias(name, params, body) {
      body = this.GetBody(body);
      var arr = [];
      if (params.trim() != "") {
        params = params.split(",").map(function (s) {
          return s.trim();
        });
        arr = arr.concat([Function], params, ["t", "i"], [body]);
      } else {
        arr = arr.concat([Function], ["t", "i"], [body]);
      }
      var fn = new (Function.bind.apply(Function, arr))();
      //console.log(fn)
      this._inst._objectType._SFDXAliasFunctions[name.toLowerCase().trim()] =
        fn;
    }

    SkipTypewriterToNextPause(toEnd) {
      if (!this.typewriterActive) return;

      let i = 0;
      while (
        i < this.TWData.start.length &&
        this.TWTime > this.TWData.start[i][0]
      ) {
        i++;
      }

      while (
        i < this.TWData.data.length &&
        (toEnd || !this.TWData.data[i].hasOwnProperty("pause"))
      ) {
        if (this.TWData.data[i].hasOwnProperty("fn")) {
          let fnData = this.TWData.data[i].fn.split(" ");
          let fnName = fnData.shift();
          let fnParams = JSON.parse("[" + fnData.join(" ") + "]") || [];
          self.c3_callFunction(fnName, fnParams);
        }
        i++;
      }

      if (i === this.TWData.data.length) {
        this.SetDrawMaxCharacterCount(-1);
        this.Trigger(C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwStop);
        this.typewriterActive = false;
      } else {
        this.TWTime = this.TWData.start[i][0];
      }
    }

    getTextWithNoTags(text) {
      let regex = /\[\/?((?!\/?tw|fn|text)[^\]]*)(=[^\]]*)?\]/gi;
      text = text.replace(regex, "");
      regex = /\[\/?((?!\/?tw)[^\]]*)(=[^\]]*)?\]/gi;
      var match;
      while ((match = regex.exec(text)) !== null) {
        let str = text;
        let a = match[1].split("=");
        let b = a[1] || "";
        let c = b.split(" ");
        let len = parseInt(c[1]) || 0;
        let str2 = "";
        for (let i = 0; i < len; i++) {
          str2 += "0";
        }
        text = text.replace(match[0], str2);
        regex.lastIndex = 0;
      }
      return text;
    }

    getTextWithNoTW(text) {
      let regex = /\[tw=([^\]]*)?\]/gi;

      var match;
      var offset = 0;
      this.typewriterTagData = [];
      text = this.getVars(text);

      var noTag = this.getTextWithNoTags(text);

      while ((match = regex.exec(noTag)) !== null) {
        this.typewriterTagData.push({
          data: match[1].trim(),
          id: match.index - offset,
        });
        offset += match[0].length;
      }
      return text.replace(regex, "");
    }

    getAnimFunction(tag) {
      if (!this.AnimFunctions.hasOwnProperty(tag)) {
        let regex = /^[\d\w]+(\([^()]*\))?$/g;
        tag = tag.trim();
        let found = regex.test(tag);
        if (found) {
          var arr = tag.split("(");
          var name = arr[0].trim().toLowerCase();
          found =
            this._inst._objectType._SFDXAliasFunctions.hasOwnProperty(name);
        }
        if (found) {
          var arr = tag.split("(");
          var name = arr[0].trim().toLowerCase();
          var fn = this._inst._objectType._SFDXAliasFunctions[name];

          if (arr.length > 1) {
            var params = arr[1]
              .slice(0, -1)
              .split(",")
              .map(function (s) {
                return s.trim();
              });
            for (let i = 0; i < params.length; i++) {
              if (!isNaN(Number(params[i]))) {
                params[i] = Number(params[i]);
              }
            }
            params.unshift(null);
            this.AnimFunctions[tag] = fn.bind.apply(fn, params);
          } else {
            this.AnimFunctions[tag] = fn;
          }
        } else {
          var arr = [];
          arr = arr.concat(
            [Function],
            ["t", "i"],
            [this.GetBody(tag.toLowerCase())]
          );
          this.AnimFunctions[tag] = new (Function.bind.apply(Function, arr))();
        }
      }
      return this.AnimFunctions[tag];
    }

    bindFn(fn, ...args) {
      const bound = fn.bind(this, ...args);
      bound.__targetFunction__ = fn;
      bound.__boundArgs__ = args;
      return bound;
    }

    parseText() {
      var res = [];
      var stack = 0;
      var currentTag = [];
      var currentText = "";
      var tagParam = false;
      var self = this;

      if (typeof this.linkedDictionnary !== "undefined") {
        this.replaceVars();
      }
      this.SetDrawMaxCharacterCount(-1);

      var text = this.text;

      var regex = /\[\/?((?!\/?sfdx|text|fn)[^\]]*)\]/gi; //Matches for tags that are neither sfdx nor text
      var match;
      let sfdxAliases = [
        "sfdx",
        "anim",
        "typejuice",
        "juice",
        "animate",
        "animtext",
      ]; //replace sfdx tag aliases with sfdx
      while ((match = regex.exec(text)) !== null) {
        let str = text;
        if (!match[0].startsWith("[/")) {
          let a = match[1].split("=");
          if (sfdxAliases.includes(a[0].toLowerCase())) {
            text = text.replace(match[0], "[sfdx=" + a[1] + "]");
          } else {
            text = text.replace(match[0], "[sfdx=" + a[0] + ' "' + a[1] + '"]');
          }
        } else {
          text = text.replace(match[0], "[/sfdx]");
        }
        regex.lastIndex = 0;
      }

      this.text = text;

      for (let i = 0; i < text.length; i++) {
        if (tagParam) {
          if (text[i] === "]") {
            tagParam = false;
            currentText = "";
          } else {
            currentTag[stack - 1] += text[i];
          }
        } else {
          if (text.substring(i).toLowerCase().startsWith("[sfdx=")) {
            push(JSON.parse(JSON.stringify(currentTag)), currentText);
            stack++;
            currentTag.push("");
            tagParam = true;
            i += 5;
          } else if (text.substring(i).toLowerCase().startsWith("[/sfdx]")) {
            //This is to prevent stack issues if people close sfdx tags that were never opened
            if (stack > 0) {
              stack--;
              push(JSON.parse(JSON.stringify(currentTag)), currentText);
              currentTag.pop();
              currentText = "";
            }
            i += 6;
          } else if (text.substring(i).toLowerCase().startsWith("[text=")) {
            push(JSON.parse(JSON.stringify(currentTag)), currentText);
            currentText = "";
            i += 6;
            while (text[i] !== "]") {
              currentText += text[i];
              i++;
            }
            let textParam = currentText.split(" ");
            let obj = [];
            let textName = textParam[0];
            let length = parseInt(textParam[1]) || 0;
            for (let i = 0; i < length; i++) {
              obj.push(this.bindFn(this.getChar, textName, i, false));
            }
            push(JSON.parse(JSON.stringify(currentTag)), obj);
            currentText = "";
          } else if (text.substring(i).toLowerCase().startsWith("[fn=")) {
            push(JSON.parse(JSON.stringify(currentTag)), currentText);
            currentText = "";
            i += 4;
            while (text[i] !== "]") {
              currentText += text[i];
              i++;
            }
            let textParam = currentText.split(" ");
            let obj = [];
            let textName = textParam[0];
            let length = parseInt(textParam[1]) || 0;
            for (let i = 0; i < length; i++) {
              obj.push(this.bindFn(this.getChar, textName, i, true));
            }
            push(JSON.parse(JSON.stringify(currentTag)), obj);
            currentText = "";
          } else {
            currentText += text[i];
          }
        }
      }

      push(JSON.parse(JSON.stringify(currentTag)), currentText);

      function push(tag, text) {
        if (text == "" && !self.IsSoloTag(tag)) return;

        var tagArray = [];

        tag.forEach((t) => {
          var arr = t.split(" ");
          var firstTag = arr.shift();
          var tagfn = arr.join(" ");
          var fn;
          if (self.isAString(tagfn)) {
            fn = tagfn.substring(1, tagfn.length - 1);
          } else {
            fn = self.getAnimFunction(tagfn);
          }

          tagArray.push([firstTag, fn]);
        });

        res.push([tagArray, text]);
      }
      //console.log(res)
      this.parsedText = res;
    }

    getChar(name, i, fn) {
      if (fn) {
        name = name.toLowerCase();
        let str = self.c3_callFunction(name) || "";
        if (i < str.length) {
          return str[i];
        } else {
          return " ";
        }
      } else {
        name = name.toLowerCase();
        if (this.linkedDictionnary.has(name)) {
          let val = this.linkedDictionnary.get(name);
          return i < val.length ? val[i] : " ";
        } else {
          return " ";
        }
      }
    }

    replaceVars() {
      this.text = this.getVars(this.text);
    }

    getVars(text) {
      var regex = /\[(var|varfn)=([\d\w]+)\]/gi;
      var match;
      while ((match = regex.exec(text)) !== null) {
        let isVar = match[1].trim().toLowerCase() === "var";
        let varName = match[2].toLowerCase();
        //console.log(match)
        if (isVar) {
          if (this.linkedDictionnary.has(varName)) {
            text = text.replace(match[0], this.linkedDictionnary.get(varName));
            regex.lastIndex = 0;
          }
        } else {
          let str = self.c3_callFunction(varName) || "";
          text = text.replace(match[0], str);
          regex.lastIndex = 0;
        }
      }
      return text;
    }

    _SetTwEasing(easing) {
      this.TWEasing = easingNames[easing];
    }

    // Actions
    _SetText(text) {
      this.text = text;
      this.SetTextCall = true;
      this.parseText();
      this.animated = true;
    }
    _LinkDictionary(dictionary) {
      this.linkedDictionnary = dictionary
        .GetInstanceByIID(0)
        ._sdkInst.GetDataMap();
      this.linkedDictionnaryUID = dictionary.GetInstanceByIID(0)._uid;
    }
    _PauseTw() {
      this.typewriterPaused = true;
      this.Trigger(self.C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwPause);
    }
    _ResumeTw() {
      this.typewriterPaused = false;
      this.Trigger(
        self.C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwResume
      );
    }
    _SetTwParams(params) {
      this.TWParams = params;
      this.TWParamsOBJ = this.parseTypewriterParams(this.TWParams);
    }
    _SkipTw(mode) {
      this.SkipTypewriterToNextPause(mode === 0);
    }
    _SetTwEasingString(easing) {
      this.TWEasing = easing;
    }

    // Expressions

    _C2StrToC3Str(text) {
      let getParsed = (text) => {
        var regex =
          /<([XYAO]) (-?\w+ ?-?\d* ?-?\d* ?-?\d*)>|<(C) (#?\w*)>|<(C) (\w+\(-?\d+\.?\d*%?, ?-?\d+\.?\d*%?, ?-?\d+\.?\d*%?,? ?-?\d*\.?\d*%?\))>/g;
        return text.replace(regex, "");
      };

      let parse = (text) => {
        var regex =
          /<([XYAO]) (-?\w+ ?-?\d* ?-?\d* ?-?\d*)>|<(C) (#?\w*)>|<(C) (\w+\(-?\d+\.?\d*%?, ?-?\d+\.?\d*%?, ?-?\d+\.?\d*%?,? ?-?\d*\.?\d*%?\))>/g;
        var str = text;
        var m;
        var offset = 0;
        var data = [];
        while ((m = regex.exec(str)) !== null) {
          var tempA = [];
          tempA.push(m.index + offset);
          var length = regex.lastIndex - m.index;
          offset -= length;

          m.forEach(function (match, groupIndex) {
            if (groupIndex != 0) {
              tempA.push(match);
            }
          });
          data.push(tempA);
        }

        var parsedText = getParsed(text);
        var curX = "None";
        var curY = "None";
        var curA = "None";
        var curO = "None";
        var curC = "None";
        var data2 = [];
        var arrCounter = 0;

        for (var i = 0; i < data.length; i++) {
          var cur = data[i];
          while (data2.length < cur[0]) {
            data2.push([curX, curY, curA, curO, curC]);
          }
          switch (cur[1]) {
            case "X":
              curX = cur[2];
              break;
            case "Y":
              curY = cur[2];
              break;
            case "A":
              curA = cur[2];
              break;
            case "O":
              curO = cur[2];
              break;
            default:
              if (cur[3] === "C") {
                curC = cur[4];
              } else if (cur[5] === "C") {
                curC = cur[6];
              }
          }
          data2[cur[0]] = [curX, curY, curA, curO, curC];
        }
        while (data2.length < parsedText.length) {
          data2.push([curX, curY, curA, curO, curC]);
        }
        var counter = 0;
        for (var i = 0; i < parsedText.length; i++) {
          var letter = parsedText[i];
          if (letter == "\n") {
            data2.splice(counter, 1);
            counter--;
          }
          counter++;
        }

        return data2;
      };

      let colourNameToHex = (color) => {
        var colors = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          "indianred ": "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgrey: "#d3d3d3",
          lightgreen: "#90ee90",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370d8",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#d87093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        };

        if (colors.hasOwnProperty(color.toLowerCase()))
          return colors[color.toLowerCase()];
        return color;
      };

      let arrEqual = (arr1, arr2) => {
        return (
          arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i])
        );
      };

      let parseState = (state, tag) => {
        let stateA = state.split(" ");
        let stateValue = stateA.shift();
        if (stateA[0] === undefined) stateA.push(4);
        if (stateA[1] === undefined) stateA.push(300);
        if (stateA[2] === undefined) stateA.push(90);
        switch (stateValue.toLowerCase()) {
          case "wave":
          case "angle":
            return "wave(" + stateA.join(",") + ")";
          case "swing":
          case "angle2":
            return "swing(" + stateA.join(",") + ")";
          case "shake":
            return "shake(" + stateA[0] + ")";
        }
        if (tag.toLowerCase() === "color") {
          let colorAsName = colourNameToHex(state);
          return "colorToHex('" + colorAsName + "')";
        }
        return state;
      };

      let c2ParsedToC3String = (text) => {
        let data = parse(text);
        let parsedText = getParsed(text);
        let tagEquivalents = [
          "offsetx",
          "offsety",
          "angle",
          "opacity",
          "color",
        ];
        let str = "";
        let currentState = ["None", "None", "None", "None", "None"];
        data.forEach((curData, i) => {
          if (!arrEqual(curData, currentState)) {
            currentState.forEach((state) => {
              if (state.toLowerCase() !== "none") str += "[/sfdx]";
            });
            curData.forEach((state, i) => {
              if (state.toLowerCase() !== "none")
                str +=
                  "[sfdx=" +
                  tagEquivalents[i] +
                  " " +
                  parseState(state, tagEquivalents[i]) +
                  "]";
            });
            currentState = curData;
          }
          str += parsedText[i];
        });
        currentState.forEach((state) => {
          if (state.toLowerCase() !== "none") str += "[/sfdx]";
        });
        console.log(str);
        return str;
      };

      return c2ParsedToC3String(text);
    }

    _TypedTextWidth() {
      let b;
      if (
        self.C3.Plugins.Spritefont2 &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Spritefont2
      ) {
        if (this.typewriterActive) {
          let a = this._inst._sdkInst._text;
          this._inst._sdkInst.CallAction(
            self.C3.Plugins.Spritefont2.Acts.SetText,
            this.curTypedWidth
          );
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Spritefont2.Exps.TextWidth
          );
          this._inst._sdkInst.CallAction(
            self.C3.Plugins.Spritefont2.Acts.SetText,
            a
          );
        } else {
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Spritefont2.Exps.TextWidth
          );
        }
      } else if (
        self.C3.Plugins.Text &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Text
      ) {
        if (this.typewriterActive) {
          let a = this._inst._sdkInst._text;
          this._inst._sdkInst.CallAction(
            self.C3.Plugins.Text.Acts.SetText,
            this.curTypedWidth
          );
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Text.Exps.TextWidth
          );
          this._inst._sdkInst.CallAction(self.C3.Plugins.Text.Acts.SetText, a);
        } else {
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Text.Exps.TextWidth
          );
        }
      }
      return b;
    }

    _TypedTextHeight() {
      let b;
      if (
        self.C3.Plugins.Spritefont2 &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Spritefont2
      ) {
        if (this.typewriterActive) {
          let a = this._inst._sdkInst._text;
          this._inst._sdkInst.CallAction(
            self.C3.Plugins.Spritefont2.Acts.SetText,
            this.curTypedHeight
          );
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Spritefont2.Exps.TextHeight
          );
          this._inst._sdkInst.CallAction(
            self.C3.Plugins.Spritefont2.Acts.SetText,
            a
          );
        } else {
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Spritefont2.Exps.TextHeight
          );
        }
      } else if (
        self.C3.Plugins.Text &&
        this._inst._objectType._plugin instanceof self.C3.Plugins.Text
      ) {
        if (this.typewriterActive) {
          let a = this._inst._sdkInst._text;
          this._inst._sdkInst.CallAction(
            self.C3.Plugins.Text.Acts.SetText,
            this.curTypedHeight
          );
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Text.Exps.TextHeight
          );
          this._inst._sdkInst.CallAction(self.C3.Plugins.Text.Acts.SetText, a);
        } else {
          b = this._inst._sdkInst.CallExpression(
            self.C3.Plugins.Text.Exps.TextHeight
          );
        }
      }
      return b;
    }
  };
}
