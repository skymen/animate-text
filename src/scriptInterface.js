function getScriptInterface(parentClass, map) {
  return class extends parentClass {
    constructor() {
      super();
      map.set(this, parentClass._GetInitInst().GetSdkInstance());
    }

    linkDictionary(dictionary) {
      const inst = map.get(this);
      if (dictionary.getFirstInstance) {
        dictionary = dictionary.getFirstInstance();
      }
      inst.linkedDictionnaryUID = dictionary.uid;
      inst.linkedDictionnary = inst._runtime
        .GetInstanceByUID(dictionary.uid)
        ._sdkInst.GetDataMap();
    }

    setTwEasing(easing) {
      const inst = map.get(this);
      inst._SetTwEasingString(easing);
    }

    skipTwToNextPause(toEnd = false) {
      const inst = map.get(this);
      inst.SkipTypewriterToNextPause(toEnd);
    }
  };
}
