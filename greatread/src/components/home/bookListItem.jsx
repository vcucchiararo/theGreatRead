import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({ id, title, cover, rating }) => {
    return (
        <div className="container-slider">
            <p className="book-title">{title}</p>
            <Link to={`/book/${id}`}>
                <img height="300" width="200" src={cover} />
            </Link>
            <p className="book-title">{rating}</p>
        </div>
    );
};

export default BookListItem;
