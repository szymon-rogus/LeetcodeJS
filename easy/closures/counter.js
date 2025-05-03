/// https://leetcode.com/problems/counter

export var createCounter = (n) => {

    return () => n++;
};

/// https://leetcode.com/problems/counter-ii

export var createCounter2 = (init) => {
    let currentCount = init;

    return {
        increment : () => ++currentCount,
        decrement : () => --currentCount,
        reset : () => currentCount = init
    }
};