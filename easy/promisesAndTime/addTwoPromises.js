/// https://leetcode.com/problems/add-two-promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
export var addTwoPromises = async (promise1, promise2) => {
    return Promise.all([promise1, promise2])
        .then(values => values.reduce((acc, val) => acc + val, 0));
};