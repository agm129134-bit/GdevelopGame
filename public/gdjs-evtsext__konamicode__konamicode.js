
gdjs.evtsExt__KonamiCode__KonamiCode = gdjs.evtsExt__KonamiCode__KonamiCode || {};

/**
 * Behavior generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode = class KonamiCode extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Konami Code
 */
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.SharedData = class KonamiCodeSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._KonamiCode_KonamiCodeSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._KonamiCode_KonamiCodeSharedData = new gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.SharedData(
      initialData
    );
  }
  return instanceContainer._KonamiCode_KonamiCodeSharedData;
}

// Methods:
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18909476);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18910444);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18913132);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18914108);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18918308);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18916788);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18917764);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18922884);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18921364);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18922340);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18927372);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18925852);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18926828);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18931860);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18930340);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18931316);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18936476);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18934956);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18935932);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18940964);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18939444);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18940420);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18945452);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "b";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18943932);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "b";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18944908);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18949972);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) == "a";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18948420);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_KeyPressed")) != "a";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18949428);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp")) == "False";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18908756);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18911316);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18912412);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18914996);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18916068);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18919460);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18920644);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18924036);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18925132);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18928524);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18929620);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 11;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18933140);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 12;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18934236);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 13;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18937628);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 14;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18938724);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18942116);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 16;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18943212);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 17;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18946604);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 18;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18947700);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 19;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18951124);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").add(1);
}
{runtimeScene.getScene().getVariables().get("KC_IsCompleted").setString("True");
}
}

}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18903012);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = false;}
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
{runtimeScene.getScene().getVariables().get("KC_IsCompleted").setString("False");
}
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("False");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("KC_KeyPressed").setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("KC")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18905068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KC_InputTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp")) == "True";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18906060);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC_KeyPressed").setString("NoDirection");
}
{runtimeScene.getScene().getVariables().get("KC_LastKeyIsUp").setString("False");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "KC_InputTimer");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18907004);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("KC").setNumber(0);
}
}

}


{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList19(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("KonamiCode"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("KonamiCode"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.eventsList20(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext = {};
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.idToCallbackMap = new Map();
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1= [];
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2= [];


gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("KC_IsCompleted")) == "True";
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = true;}
{for(var i = 0, len = gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}
}

}


};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_Inputted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("KonamiCode"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("KonamiCode"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode.prototype.KC_InputtedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("KonamiCode::KonamiCode", gdjs.evtsExt__KonamiCode__KonamiCode.KonamiCode);
