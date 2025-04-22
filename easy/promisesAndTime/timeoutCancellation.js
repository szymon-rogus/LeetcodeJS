/// https://leetcode.com/problems/timeout-cancellation

export var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => fn(...args), t);
    return function() {
        clearTimeout(timer);
    }
};