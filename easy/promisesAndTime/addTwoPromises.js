/// https://leetcode.com/problems/add-two-promises

export var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(values => {
        return values.reduce((acc, val) => acc + val, 0);
    })
};