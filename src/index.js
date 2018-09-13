module.exports = function longestConsecutiveLength(array) {
    if (array.length === 0) {
        return 0;
    } else if (array.length === 1) {
        return 1;
    }

    let result = 0;
    let tmp = 1;

    array.sort((x, y) => x - y);

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1] + 1) {
            tmp++;
        } else if (array[i] > array[i - 1] + 1) {
            result = tmp > result ? tmp : result;
            tmp = 1;
        }
    }
    return result;
};
