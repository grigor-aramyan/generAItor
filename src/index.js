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
import UserProfile from './components/profiles/userProfile/UserProfile';
import OrgProfile from './components/profiles/orgProfile/OrgProfile';
import IdeasMain from './components/GetIdea/IdeasMain';
import GiveIdeas from './components/giveIdeas/GiveIdeas';
import GiveFeedbacksMain from './components/giveFeedbacks/GiveFeedbacksMain';
import GetIdeas from './components/GetIdea/GetIdea';
import ProfileClick from './components/profileClick/ProfileClick';
import SignInPage from './components/signInPage/signInPage';
import SignUp from './components/signup/SignUp';
import Followers from './components/followers/Followers';
import Feedbacks from './components/feedbacks/Feedbacks';
import Organizations from './components/organizations/Organizations';
import IdeaGenerators from './components/ideaGenerators/IdeaGenerators';
import Sittings from './components/sittings/Sittings';
import ReasonForLeaving from './components/reasonForLeaving/reasonForLeaving';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/">
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/profiles/me/i" component={UserProfile} />
          <Route path="/profiles/me/o" component={OrgProfile} />
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
