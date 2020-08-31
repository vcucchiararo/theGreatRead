import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({ id, title, cover }) => {
    return (
        <div>
            <p>{title}</p>
            <Link to={`/book/${id}`}>
                <img src={cover} />
            </Link>
        </div>
    );
};

export default BookListItem;
