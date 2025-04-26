/// https://leetcode.com/problems/memoize

export function memoize(fn) {
    let cachedParams = new Map();

    return (...args) => {
        let params = JSON.stringify(args);
        if (cachedParams.has(params)) {
            return cachedParams.get(params);
        } else {
            let output = fn(...args);
            cachedParams.set(params, output);
            return output;
        }
    }
}