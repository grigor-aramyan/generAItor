import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Route path='/'>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/test' component={TestView} />
                <Route path='/*' render={ () => {
                    return(
                        <div>
                            Component not implemented yet!)
                        </div>
                    );
                }} />
            </Switch>
        </Route>
    </Router>,
    document.getElementById('root')
)