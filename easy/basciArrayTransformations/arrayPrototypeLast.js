/// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = () => {
    return this.length === 0
        ? -1
        : this[this.length - 1];
};

 export {}