import React from 'react';

// components
import Header from '../Header';
import Main from './Main';
import Partners from './Partners';
import Services from './Services';
import Footer from '../Footer';

const Homepage = () => {
    return(
        <div>
            <Header />
            <Main />
            <Services />
            <Partners />
            <Footer />
        </div>
    )
}

export default Homepage;