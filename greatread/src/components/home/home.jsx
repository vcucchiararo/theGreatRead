import React from 'react';
import './home.scss';
import Slider from './slider/Slider';

function Home(props) {
    return (
        <>
            <Slider title={'LOS MAS VALORADOS'} />
            {/* <Slider title={'ACCIÓN'} />
            <Slider title={'COMEDIA'} />
            <Slider title={'COCINA'} /> */}
        </>
    );
}

export default Home;
