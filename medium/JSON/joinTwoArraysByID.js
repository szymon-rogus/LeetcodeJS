/// https://leetcode.com/problems/join-two-arrays-by-id

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
export var join = (arr1, arr2) => {
    let joinedArr = [...arr1, ...arr2];
    let result = [];

    for (let obj of joinedArr) {
        if (result[obj.id]) {
            result[obj.id] = {...result[obj.id], ...obj};
        } else {
            result[obj.id] = obj;
        }
    }

    return result.filter(el => el !== null);
};