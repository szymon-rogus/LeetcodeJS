/// https://leetcode.com/problems/chunk-array
/// Generic solution

export var chunk = (arr, size) => {
    let chunkArr = [];
    let chunk = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % size === 0 && i !== 0) {
            chunkArr.push(chunk);
            chunk = [];
        }
        chunk.push(arr[i]);
    }
    if (chunk.length !== 0) chunkArr.push(chunk);

    return chunkArr;
};