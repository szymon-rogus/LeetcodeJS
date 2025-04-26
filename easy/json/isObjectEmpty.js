/// https://leetcode.com/problems/is-object-empty

export var isEmpty = (obj) => {
    if (obj instanceof Array) return obj.length === 0;
    if (obj instanceof Object) return JSON.stringify(obj) === '{}';
};