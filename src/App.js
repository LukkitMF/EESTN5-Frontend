import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import Graduates from './pages/Graduates';
import Inscriptions from './pages/Inscriptions';
import Specialties from './pages/Specialties';

import Header from './components/layout/Header';

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/inicio" component={Home} />
                <Route exact path="/egresados" component={Graduates} />
                <Route exact path="/inscripciones" component={Inscriptions} />
                <Route exact path="/especialidades" component={Specialties} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
