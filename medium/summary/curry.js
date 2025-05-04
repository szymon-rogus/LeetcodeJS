/// https://leetcode.com/problems/curry

/**
 * @param {Function} fn
 * @return {Function}
 */
export var curry = (fn) => {
    let finalArgs = [];

    return function curried(...args) {
        finalArgs.push(...args);
        if (finalArgs.length === fn.length) return fn(...finalArgs);
        return curried;
    }
};