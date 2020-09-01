import React, { useState, useEffect } from 'react';
// import './home.scss';
// import PropTypes from 'prop-types';
import { loadBookList } from '../../actions/listActions';
import listStore from '../../stores/listStore';
import BookListItem from './bookListItem';

function Home(props) {
    const [bookList, setBookList] = useState(listStore.getBookList());
    useEffect(() => {
        listStore.addChangeListener(onChange);
        if (bookList.length === 0) loadBookList();
        return () => listStore.removeChangeListener(onChange);
    }, [bookList.length]);

    function onChange() {
        setBookList(listStore.getBookList());
    }
    return (
        <>
            {bookList &&
                bookList.map((element) => (
                    <BookListItem
                        key={element.id}
                        id={element.id}
                        title={element.product.title}
                        cover={element.product.cover}
                    />
                ))}
        </>
    );
}

export default Home;
