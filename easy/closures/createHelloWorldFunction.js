/// https://leetcode.com/problems/create-hello-world-function

export var createHelloWorld = function() {

    return function(...args) {
        return "Hello World";
    }
};