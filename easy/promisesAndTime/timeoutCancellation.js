/// https://leetcode.com/problems/timeout-cancellation

export var cancellable = (fn, args, t) => {
    let timer = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timer);
};

/// https://leetcode.com/problems/interval-cancellation

export var intervalCancellable = (fn, args, t) => {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);
    return () => clearTimeout(timer);
};