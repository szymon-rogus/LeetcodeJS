/// https://leetcode.com/problems/debounce

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
export var debounce = function(fn, t) {
    let scheduledCall;

    return function(...args) {
        clearTimeout(scheduledCall);
        scheduledCall = setTimeout(() => fn(...args), t);
    }
};