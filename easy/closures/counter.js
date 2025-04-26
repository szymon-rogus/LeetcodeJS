/// https://leetcode.com/problems/counter

export var createCounter = (n) => {

    return () => {
        return n++;
    };
};

/// https://leetcode.com/problems/counter-ii

export var createCounter2 = (init) => {
    let currentCount = init;

    return {
        increment : () => { return ++currentCount },
        decrement : () => { return --currentCount },
        reset : () => { return currentCount = init }
    }
};