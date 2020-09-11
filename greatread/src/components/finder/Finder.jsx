import React, { useState, useEffect } from 'react';
import { finderSearch } from '../../actions/finderActions';
import finderStore from '../../stores/finderStore';
import './finder.scss';
import { Link } from 'react-router-dom';

function Finder(query) {
    const [finder, setFinder] = useState(finderStore.getFinder());
    console.log('collection---', finder);
    const [imageNotAvailable, setImageNotAvailable] = useState('');

    useEffect(() => {
        console.log('paso---1---');
        finderStore.addChangeListener(onChange);
        //if (finder.length === 0) finderSearch();
        return () => finderStore.removeChangeListener(onChange);
        console.log('paso---2---');
    }, []);

    function onChange() {
        // setImageNotAvailable(
        //     'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
        // );
        console.log('paso---3---');
        setFinder(finderStore.getFinder());
        console.log('paso---4---');
    }

    return (
        <section className="finder-container">
            {finder.length > 0 ? (
                finder.map((element) => {
                    return (
                        <>
                            <h1>Búsqueda</h1>
                            <div>-------------</div>
                        </>
                    );
                })
            ) : (
                <div className="finder-no-results">
                    No se han encontrado resultados
                </div>
            )}
        </section>
    );
}

export default Finder;
