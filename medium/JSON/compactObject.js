/// https://leetcode.com/problems/compact-object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
export var compactObject = (obj) => {

    let dfs = (obj) => {
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) {
            const newArr = [];
            for (let i = 0; i < obj.length; i++) {
                const subObj = dfs(obj[i]);
                if (subObj) newArr.push(subObj);
            }
            return newArr;
        }

        const newObj = {};
        for (let key in obj) {
            const subObj = dfs(obj[key]);
            if (subObj) newObj[key] = subObj;
        }

        return newObj;
    };

    return dfs(obj);
};
