/// https://leetcode.com/problems/allow-one-function-call

export var once = function(fn) {
    let canExecute = true;

    return function(...args){
        if (canExecute !== true) return undefined;
        canExecute = false;
        return fn(...args);
    }
};