import React from 'react';
import logo from '../../assets/logo.svg';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={`row ${style.main}`}>
      <div className={`${style.container} col-6`}>
        <div>
          <img src={logo} width={'125px'} alt="App Logo" />
        </div>
        <ul className="row mt-4">
          <li className="col">Home</li>
          <li className="col">Features</li>
          <li className="col">Waves</li>
          <li className="col">Resources</li>
        </ul>
      </div>
      <div className={`col-6 row mt-4 ${style.endItems}`}>
        {/* <div className="col-2">Hello,</div> */}
        <div className={`col-2 ${style.btn}`}>Get Started</div>
      </div>
    </div>
  );
}

export default Navbar;
