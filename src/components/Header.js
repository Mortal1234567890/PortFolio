import React from 'react';
// import logo

import Logo from '../assets/ad_logo.png'

import { Link } from 'react-scroll';





const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex flex justify-between items-center'>
          {/* { logo} */}
          <a href="#">
            <img src={Logo} alt='' style={{ height: '40px', width: '105px' }} />
          </a>

          <Link className='btn btn-sm cursor-pointer' to="contact"> Work with me</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
