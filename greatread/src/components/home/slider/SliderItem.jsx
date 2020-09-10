import React from 'react';
import './slider.scss';
import { Link } from 'react-router-dom';

const SliderItem = ({ id, title, cover, rating, author, url, text }) => {
    return (
        <>
            <div className="slider__content">
                <div className="slider__content-wrapper">
                    <div className="slider__item">
                        <Link to={`/book/${id}`}>
                            <img
                                alt={title}
                                className="slider__image"
                                src={cover}
                            />
                            <div className="slider__item-text">
                                <div className="book-rating">{rating}</div>
                                <div className="book-title">{title}</div>
                                <div className="book-author">{author}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderItem;
