import React, { useState, useEffect } from 'react';
import './home.scss';
import { loadBookList } from '../../actions/listActions';
import listStore from '../../stores/listStore';
import BookListItem from './BookListItem';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

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
            <Carousel>
                {bookList &&
                    bookList.map((element) => (
                        <BookListItem
                            // key={element.id}
                            id={element.id}
                            title={element.title}
                            cover={element.image}
                            rating={element.averageRating}
                        />
                    ))}
            </Carousel>
        </>
    );

    function Item(props) {
        return (
            <Paper>
                <h2>{props.book.name}</h2>
            </Paper>
        );
    }
}

export default Home;
