import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Detail from './components/detail/detail';
import Home from './components/home/home';

function App() {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/detail" component={Detail} />
        </>
    );
}

export default App;
