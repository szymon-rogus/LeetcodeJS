/// https://leetcode.com/problems/timeout-cancellation

export var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => fn(...args), t);
    return function() {
        clearTimeout(timer);
    }
};

/// https://leetcode.com/problems/interval-cancellation

export var intervalCancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);
    return function() {
        clearTimeout(timer);
    }
};