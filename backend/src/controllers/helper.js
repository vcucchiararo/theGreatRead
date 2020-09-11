function filterArray(array, id) {
    let newArray = [];

    const check = array.some((elem) => elem === id);

    if (check) {
        newArray = array.filter((elem) => elem !== id);
    } else {
        newArray = [...array, id];
    }
    return newArray;
}

module.exports = { filterArray };
