import React from 'react';
import './searchComponentCard.scss';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
}));

function SearchComponentCard({
    key,
    image,
    title,
    author,
    averageRating,
    description,
    isFavorite
}) {
    const classes = useStyles();
    return (
        <>
            <div className="card-container" key={key}>
                <div className="image">
                    <img width="100%" height="100%" src={image} />
                </div>
                <div className="title-rating">
                    <div className="title-author">
                        <p className="title">{title}</p>
                        <p>{author}</p>
                    </div>
                    <div className="rating">
                        <p>{averageRating}</p>
                    </div>
                </div>
                <div className="description">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                Sinopsis
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Box textAlign="left" m={1}>
                                    {description}
                                </Box>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default SearchComponentCard;
