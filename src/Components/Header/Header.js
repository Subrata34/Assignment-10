import React from 'react';

import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Header = () => {
    return (
        <div  >
          <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-10">
              <Link to='/home'>
                {""}
                <li>Home</li>
              </Link>
              <Link to='/about'>
                {""}
                <li>About</li>
              </Link>
              <Link to='/service'>
                {""}
                <li>Service</li>
              </Link>
              <Link to='/care'>
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