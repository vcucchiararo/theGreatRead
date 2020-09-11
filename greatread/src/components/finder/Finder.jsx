import React, { useState, useEffect } from 'react';
import { finderSearch } from '../../actions/finderActions';
import finderStore from '../../stores/finderStore';
import './finder.scss';

function Finder(query) {
    const [finder, setFinder] = useState(finderStore.getFinder());
    const [imageNotAvailable, setImageNotAvailable] = useState('');

    useEffect(() => {
        finderStore.addChangeListener(onChange);
        if (finder.length === 0) finderSearch();
        return () => finderStore.removeChangeListener(onChange);
    }, [finder]);

    function onChange() {
        // setImageNotAvailable(
        //     'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
        // );
        setFinder(finderStore.getFinder());
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
