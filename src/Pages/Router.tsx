import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';

interface Props { }

const Router: React.FC<Props> = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/portfolio'>
                    <Portfolio />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;