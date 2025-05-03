/// https://leetcode.com/problems/flatten-deeply-nested-array

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
export var flat = (arr, depth) => {

    let flatten = (arr, n) => {
        if (n === 0) return arr;
        let newArr = [];
        let nested = false;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                element.forEach(obj => newArr.push(obj));
                nested = true;
            } else {
                newArr.push(element);
            }
        });
        return nested ? flatten(newArr, --n) : newArr;
    };

    return flatten(arr, depth);
};