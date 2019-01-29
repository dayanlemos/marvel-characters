import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CardsContainer from './containers/CardsContainer/CardsContainer';
import CardDetailContainer from "./containers/CardDetailContainer/CardDetailContainer";

const AppRouter = () => (

    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={CardsContainer} />
        <Route exact path="/character/:id" component={CardDetailContainer} />
        <Route path="/*" component={() => <h1>Page not found</h1>} />
    </Switch>
    </BrowserRouter>

);

export default AppRouter;