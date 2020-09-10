import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({ id, title, cover, rating, author }) => {
    return (
        <div className="container-slider">
            <div className="container-book">
                <h1 className="section-title">LOS MÁS VALORADOS</h1>
                <Link to={`/book/${id}`}>
                    <img className="cover-image" src={cover} />
                </Link>
                <div className="info_container">
                    <div className="info-book">
                        <p className="book-title">{title}</p>
                        <p className="book-author">{author}</p>
                    </div>
                    <div className="vertical-small-separator"></div>
                    <div className="info-book-rating">
                        <p className="book-rating">{rating} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListItem;
