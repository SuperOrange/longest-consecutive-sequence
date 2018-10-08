module.exports = function longestConsecutiveLength(array) {
    if (array.length < 2) {
        return array.length;
    }

    let max = 0;
    let cnt = 1;

    array.sort((x, y) => x - y);

    for (let i = 1, l = array.length; i < l; i++) {
        if (array[i] === array[i - 1] + 1) {
            cnt++;
        } else if (array[i] > array[i - 1] + 1) {
            max = cnt > max ? cnt : max;
            cnt = 1;
        }
    }

    return max;
};
