import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Header = () => {
    return (
        <div  >
          <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-10 d-flex text-dark">
              <Link to='/home'className="items-style">
                {""}
                <li>Home</li>
              </Link>
              <Link to='/about' className="items-style">
                {""}
                <li>About</li>
              </Link>
              <Link to='/service' className="items-style">
                {""}
                <li>Service</li>
              </Link>
              <Link to='/care'className="items-style">
                {""}
                <li>Care</li>
              </Link>
            </div>
          </div>
          
  <Service></Service>
        </div>
    );
};

export default Header;