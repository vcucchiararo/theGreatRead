function filterArray(favoriteBooks, book) {
    let newArray = [];

    const check = favoriteBooks.some((elem) => elem === book.id);

    if (check) {
        newArray = favoriteBooks.filter((elem) => elem !== book.id);
    } else {
        newArray = [...favoriteBooks, book];
    }
    return newArray;
}

module.exports = { filterArray };
