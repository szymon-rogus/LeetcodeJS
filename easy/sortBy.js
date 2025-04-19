/// https://leetcode.com/problems/sort-by

/// TODO: replace .sort prototype

export var sortBy = function(arr, fn) {
    return arr.sort((a, b) => {
        return fn(a) - fn(b);
    });
};