import React from 'react';
import { Link } from 'react-router-dom';
import AccordionComponent from './AccordionComponent';
// import Box from '@material-ui/core/Box';
const BookDetailItem = ({ description, title, author, rating, image }) => {
    return (
        <div className="container-book">
            <img
                width="100px"
                height="100px"
                src="https://trello-attachments.s3.amazonaws.com/5f4d74b3457c4e749f4bfea6/847x748/f0abc621274604fc9ce77e7079853efb/GreatRead.png"
            />
            <div className="title">
                <h1>{title}</h1>
                <p>{author}</p>
            </div>
            <div>
                <div className="button-container">
                    <Link>Agregar como favorito</Link>
                    <Link>Quiero leer</Link>
                </div>
                <div classname="cover-book">
                    {/* <Box boxShadow={3}> */}
                    <img src={image} />
                    {/* </Box> */}
                </div>
            </div>
            <p className="title-rating">{rating}</p>
            <button>Muy bueno</button>
            <button>2810 votos</button>
            <p>{description}</p>
            <AccordionComponent />
        </div>
    );
};

export default BookDetailItem;
