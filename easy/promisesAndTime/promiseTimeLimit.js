/// https://leetcode.com/problems/promise-time-limit

export var timeLimit = function(fn, t) {

    return async function(...args) {
        let resolved = new Promise(resolve => resolve(fn(...args)));
        let reject = new Promise((resolve, reject) => setTimeout(() => reject('Time Limit Exceeded'), t));
        return Promise.race([resolved, reject]);
    }
};