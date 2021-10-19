import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';


const About = () => {
    
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1 className="bg-primary">This is about page:</h1>
            
                <Service></Service>
            
            <Footer></Footer>
        </div>
    );
};

export default About;