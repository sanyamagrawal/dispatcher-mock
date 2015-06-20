"use strict";

Function.prototype.bind = function(context) {
    var functionToCallLater = this,
        argumentsPassed = Array.prototype.slice.call(arguments, 1),
        contextToCallTheFunctionWith = context;

    return function() {
        var currentArguments = Array.prototype.slice.call(arguments, 0),
            argsToSend;

        argsToSend = argumentsPassed.concat(currentArguments);

        functionToCallLater.apply(contextToCallTheFunctionWith, argsToSend);
    };
};
