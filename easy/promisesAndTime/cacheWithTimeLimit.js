/// https://leetcode.com/problems/cache-with-time-limit

export var TimeLimitedCache = function() {
    this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if unexpired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let exists = this.cache.has(key);
    if (exists) clearTimeout(this.cache.get(key).timer);
    this.cache.set(key, {
        value: value,
        timer: setTimeout(() => this.cache.delete(key), duration)
    })

    return exists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};