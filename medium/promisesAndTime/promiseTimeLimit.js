/// https://leetcode.com/problems/promise-time-limit

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
export var timeLimit = (fn, t) => {

    return async (...args) => {
        let resolved = new Promise(resolve => resolve(fn(...args)));
        let reject = new Promise((resolve, reject) =>
            setTimeout(() => reject('Time Limit Exceeded'), t));
        return Promise.race([resolved, reject]);
    }
};