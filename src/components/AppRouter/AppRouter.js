import React, { Component } from 'react';

import Shop from '../Shop/Shop';
import Review from '../Review/Review';
import NotFound from '../NotFound/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Shop} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/review" component={Review} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default AppRouter;