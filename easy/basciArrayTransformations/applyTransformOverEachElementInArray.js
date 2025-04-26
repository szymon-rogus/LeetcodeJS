/// https://leetcode.com/problems/apply-transform-over-each-element-in-array

export var map = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }

    return arr;
};