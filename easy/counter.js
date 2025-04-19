/// https://leetcode.com/problems/counter

export var createCounter = function(n) {

    return function() {
        return n++;
    };
};