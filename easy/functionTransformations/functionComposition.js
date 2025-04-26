/// https://leetcode.com/problems/function-composition/description

export var compose = (functions) => {

    return (x) => {
        functions.reverse().forEach(fn => x = fn(x));
        return x;
    }
};