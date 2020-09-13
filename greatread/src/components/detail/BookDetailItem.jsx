import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';
import './detail.scss';
// import addFavoriteBook from './addFavoriteBook';
import { favoriteBook } from '../../actions/userActions';

const BookDetailItem = ({
    description,
    title,
    author,
    rating,
    image,
    year,
    isbn,
    editorial,
    genre,
    user,
    isAuthenticated,
    bookId,
    userSub,
    submit,
    toggleFavoriteButton,
    isFavorite
}) => {
    return (
        <div className="container-book">
            <div className="title">
                <h1>{title}</h1>
                <p>{author}</p>
            </div>
            <div className="container-info-book">
                <div className="container-top">
                    <div className="shadow-cover-image">
                        <div classname="cover-image">
                            <img width="200" height="300" src={image} />
                        </div>
                    </div>
                    <div className="container-ranking">
                        <p className="number-rating">{rating}</p>
                    </div>
                    <div className="container-button">
                        {isAuthenticated && (
                            <>
                                {toggleFavoriteButton && (
                                    <div
                                        onClick={(event) => {
                                            event.preventDefault();
                                            submit();
                                        }}
                                    >
                                        <img
                                            className="addFav_icon"
                                            src="https://trello-attachments.s3.amazonaws.com/5f4e04cfbeb95a4c21272eae/512x512/acf8c0e43f29a0a56ffc175fb33ed15e/corazon.png"
                                        />
                                    </div>
                                )}
                                {!toggleFavoriteButton && (
                                    <div
                                        onClick={(event) => {
                                            console.log('-----event', event);
                                            event.preventDefault();
                                            submit();
                                        }}
                                    >
                                        <img
                                            className="addFav_icon"
                                            src="https://trello-attachments.s3.amazonaws.com/5f4906a1d69abe739ecee02f/5f4e04cfbeb95a4c21272eae/1f9f8fc08c46d03b6b6fdf0b0acd00be/corazon_(1).png"
                                        />
                                    </div>
                                )}
                                {/* 
                        <Link>
                            <img
                                className="addBook_icon"
                                src="https://trello-attachments.s3.amazonaws.com/5f4e04cfbeb95a4c21272eae/512x512/ae5e99a44e7fab4d705c10894c4fd5d9/libro_%281%29.png"
                            />
                        </Link> */}
                            </>
                        )}
                    </div>
                </div>
                <div className="container-ranking-description">
                    <div className="description-book">
                        <p className="title-description">Resumen</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <AccordionComponent
                genre={genre}
                year={year}
                editorial={editorial}
                isbn={isbn}
            />
        </div>
    );
};

export default BookDetailItem;
