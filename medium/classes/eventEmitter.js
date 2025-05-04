/// https://leetcode.com/problems/event-emitter

class EventEmitter {

    constructor() {
        this.events = [];
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        let exists = this.events.find(element => element.name === eventName);
        if (exists) {
            exists.func.push(callback);
        } else {
            let event = {name: eventName, func: [callback]};
            this.events.push(event);
        }

        return {
            unsubscribe: () => {
                let unsubscribed = this.events.find(element => element.name === eventName);
                if (unsubscribed) {
                    unsubscribed.func = unsubscribed.func.filter(fn => fn !== callback);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        let event = this.events.find(element => element.name === eventName);
        return event ? event.func.map(fn => fn(...args)) : [];
    }
}