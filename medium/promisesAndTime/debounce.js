/// https://leetcode.com/problems/debounce

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
export var debounce = (fn, t) => {
    let scheduledCall;

    return (...args) => {
        clearTimeout(scheduledCall);
        scheduledCall = setTimeout(() => fn(...args), t);
    }
};