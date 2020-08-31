import React, { useState, useEffect } from 'react';
import './home.scss';
import PropTypes from 'prop-types';
import loadBookList from '../../actions/listActions';
import listStore from '../../stores/listStore';

function Home() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        listStore.addChangeListener(onChange);
        if (bookList.length === 0) {
            loadBookList();
        }
    });

    function onChange() {
        setBookList(listStore.getBookList());
    }
    return (
        bookList && (
            <div>
                <p>HELLO</p>
            </div>
        )
    );
}

export default Home;
