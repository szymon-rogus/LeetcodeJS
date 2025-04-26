/// https://leetcode.com/problems/array-wrapper

export var ArrayWrapper = (nums) => {
    this.arr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = () => {
    return this.arr.reduce((sum, value) => sum + value, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = () => {
    return '[' + this.arr + ']';
}