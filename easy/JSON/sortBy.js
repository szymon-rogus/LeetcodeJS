/// https://leetcode.com/problems/sort-by

/// TODO: replace .sort prototype

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
export var sortBy = (arr, fn) => {
    return arr.sort((a, b) => fn(a) - fn(b));
};
