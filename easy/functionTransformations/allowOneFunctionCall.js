/// https://leetcode.com/problems/allow-one-function-call

export var once = (fn) => {
    let canExecute = true;

    return (...args) => {
        if (canExecute !== true) return undefined;
        canExecute = false;
        return fn(...args);
    }
};