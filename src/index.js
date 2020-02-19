import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import App from './components/App';
import AboutUsPage from './components/aboutUs/AboutUsPage';
import Homepage from './components/homepage/Homepage';
import Pricing from './components/pricing/Pricing';
import OrgProfileMain from './components/profiles/orgProfile/OrgProfileMain';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <OrgProfileMain
                organization="Rostelecom"
                followers="600"
                feedbacks="120"
                isLogged={true}
               />
            )}
          />
          <Route
            path="/*"
            render={() => {
              return <div>Component not implemented yet!)</div>;
            }}
          />
        </Switch>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
