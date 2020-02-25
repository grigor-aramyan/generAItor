import React, { Component } from 'react';
import Header from '../../Header'
import UserProfileMain from './UserProfileMain'
import MainMenu from '../MainMenu'
import AboutProfiles from '../AboutProfiles'
import Footer from '../../Footer'

export default class UserProfile extends Component {
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Header/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center">
                            <MainMenu/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
                            <UserProfileMain name = "Ani" surname = "Karapetyan" recomendations = {3} isLogged = {true}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 col-lg-8 offset-lg-2  d-flex justify-content-center align-items-center">
                            <AboutProfiles/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 offset-1 col-lg-10 offset-lg-1  d-flex justify-content-center align-items-center">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}