/// https://leetcode.com/problems/to-be-or-not-to-be

export var expect = (val) => {

    return {
        toBe : (other) => {
            if (val === other) return true;
            throw 'Not Equal';
        },
        notToBe: (other) => {
            if (val !== other) return true;
            throw 'Equal';
        }
    }
};