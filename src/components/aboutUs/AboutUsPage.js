import React  from 'react';

// components
import Info from './Info';
import Intouch from './Intouch';
import Header from '../Header';
import Footer from '../Footer';

const AboutUsPage = () => {
    return(
        <div>
            <Header />
            <Info />
            <Intouch />
            <Footer />
        </div>
    );
}

export default AboutUsPage;