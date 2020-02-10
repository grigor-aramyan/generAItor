import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import App from './components/App';
import AboutUsPage from './components/aboutUs/AboutUsPage';
/*import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import Pricing from './components/Pricing/Pricing';*/

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route exact path="/" component={AboutUsPage} />
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
