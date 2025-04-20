/// https://leetcode.com/problems/counter

export var createCounter = function(n) {

    return function() {
        return n++;
    };
};

/// https://leetcode.com/problems/counter-ii
export var createCounter2 = function(init) {
    let currentCount = init;

    return {
        increment : () => { return ++currentCount },
        decrement : () => { return --currentCount },
        reset : () => { return currentCount = init }
    }
};