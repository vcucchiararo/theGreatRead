import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({ id, title, cover, rating, author }) => {
    return (
        <div className="container-slider">
            <div className="container-book">
                <img
                    className="logo"
                    src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
                />
                <h1 className="section-title">LOS MÁS VALORADOS</h1>
                <Link to={`/book/${id}`}>
                    <img
                        className="cover-image"
                        height="300"
                        width="200"
                        src={cover}
                    />
                </Link>
                <div className="info_container">
                    <div className="info-book">
                        <p className="book-title">{title}</p>
                        <p className="book-author">{author}</p>
                    </div>
                    <div className="info-rating">
                        <p className="book-rating">{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListItem;
