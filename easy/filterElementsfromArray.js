/// https://leetcode.com/problems/filter-elements-from-array
/// Without using filter method

export var filter = function(arr, fn) {
    let filtered = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filtered.push(arr[i])
        }
    }

    return filtered
};