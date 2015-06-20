"use strict";

var Dispatcher = (function() {
    var registry = {};

    function registerEvent(eventName, callbackMethod) {
        if (!eventName) {
            return;
        }

        if (!registry[eventName]) {
            registry[eventName] = [];
        }
        registry[eventName].push(callbackMethod);
    }

    function callEvent(eventName, options) {
        var callBackForThisEvent,
            callbackLoop;

        if (!eventName) {
            return;
        }

        callBackForThisEvent = registry[eventName];

        if (!callBackForThisEvent) {
            return;
        }

        callBackForThisEvent.map(function(callbackFn) {
            callbackFn.call(this, options);
        });

    }

    return {
        registerEvent: registerEvent,
        callEvent: callEvent
    };

})();



Dispatcher.registerEvent("onButtonClicked", callThisMethod);
Dispatcher.callEvent("onButtonClicked", {
    "no": "no"
});

function callThisMethod() {
}
