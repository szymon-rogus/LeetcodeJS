/// https://leetcode.com/problems/function-composition/description

export var compose = function(functions) {

    return function(x) {
        functions.reverse().forEach(fn => x = fn(x));
        return x;
    }
};