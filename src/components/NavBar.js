import '../css/NavBar.css';

import Logo from '../assets/Logo.svg';
// import { randomColor } from '../utilities.js';

const NavBar = () => {
  console.log('~ NavBar');

  return (
    <div className='container' /* style={{ background: randomColor() }} */>
      <nav className='navbar align-items-md-start'>
        <a className='navbar-brand' href='#!'>
          <img src={Logo} alt='logo' className='d-inline-block align-text-top mb-2' />
          <h1 className='our-logo-text'>
            Coronavirus
            <span className='text-uppercase fs-5'>Statistics</span>
          </h1>
        </a>

        <p className='d-flex flex-column flex-wrap fs-5 fw-bold '>
          #stayhome
          <span>Created by GBKS</span>
        </p>
      </nav>
    </div>
  );
};

export default NavBar;
