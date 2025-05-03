/// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
export var promiseAll = (functions) => {
    let promises = functions.map(f => f());

    return new Promise((resolve, reject) => {
        let finished = [];
        let finishedCount = 0;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(value => {
                finished[i] = value;
                finishedCount++;
                if (finishedCount === promises.length) {
                    resolve(finished);
                }
            }).catch(error => reject(error));
        }
    });
};
