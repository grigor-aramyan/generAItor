import React, { Component } from 'react';

export default class AboutProfiles extends Component {
    render() {
        const {
            about
        } = this.props;

        return (
            <div className = 'profiles-about'>
                <div className = 'about-prof'>
                    <h2>ABOUT</h2>
                    { about ?
                        <p>
                            { about }
                        </p>
                    :   <p>
                            This organization has no description yet!    
                        </p>
                    }
                </div>
            </div>
        );
    }
}