import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Register = () => {
    return (
        <div>
        <Header></Header>
        <Banner></Banner>
        <div className="bg-warning">
            <h1>Please Registretion</h1>
            <form >
                <h3>Email:<input type="email" /> </h3>
               
               <br />
               <h3>Password:<input type="password" /></h3>
               
               <br/>
               <input className="bg-success" type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;