/// https://leetcode.com/problems/group-by

export let groupBy = Array.prototype.groupBy = (fn) => {

    let groupedArray = {};
    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        if (groupedArray[key] === undefined) {
            groupedArray[key] = [this[i]];
        } else {
            groupedArray[key].push(this[i]);
        }
    }

    return groupedArray;
};