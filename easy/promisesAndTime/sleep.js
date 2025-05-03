/// https://leetcode.com/problems/sleep
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
/// https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout

/**
 * @param {number} millis
 * @return {Promise}
 */
export async var sleep = (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis));
}