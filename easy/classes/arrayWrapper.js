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

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2)// 10
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"