import React from 'react';

import { BrowserRouter, Route, Switch}  from 'react-router-dom';

import Main from './pages/Main';
import Planets from './pages/Planets';
import People from './pages/People';
import Starships from './pages/Starships';
import Stops from './pages/Starships/Stops';
import BestStarship from './pages/Starships/BestStarship';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/planets" component={Planets} />
                <Route path="/people" component={People} />
                <Route path="/starships" exact component={Starships} />
                <Route path="/starships/stops" component={Stops} />
                <Route path="/starships/best" component={BestStarship} />
            </Switch>
        </BrowserRouter>
    );
}