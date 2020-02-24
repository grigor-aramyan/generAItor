import React, { Component }  from 'react';

// components
import Header from '../../Header';
import OrgProfileMain from './OrgProfileMain';
import AboutProfiles from '../AboutProfiles';
import OrgProfileActions from './OrgProfileActions';
import Footer from '../../Footer';

export default class OrgProfile extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: true,
            organization: 'Rostelecom',
            followers: 10,
            feedbacks: 5
        }
    }
    render() {
        const { isLogged, organization, followers, feedbacks } = this.state;

        return(
            <div>
                <Header />
                <OrgProfileMain 
                organization={organization}
                followers={followers}
                feedbacks={feedbacks}
                isLogged={isLogged}/>
                <AboutProfiles />
                <OrgProfileActions 
                isLogged={isLogged}/>
                <Footer />
            </div>
        )
    }
}
