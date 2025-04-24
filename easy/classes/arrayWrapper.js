/// /?envType=study-plan-v2&envId=30-days-of-javascript

export var ArrayWrapper = function(nums) {
    this.arr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.arr.reduce((sum, value) => sum + value, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return '[' + this.arr + ']';
}