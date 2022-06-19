import React from 'react';
import logo from '../../assets/logo.png';
import style from './AuthNav.module.css';

function AuthNav() {
  return (
    <div className={`row  ${style.main}`}>
      <div className={`${style.container} col-7`}>
        <div>
          <img src={logo} width={'125px'} alt="App Logo" />
        </div>
      </div>
      <div className={`col-5 row mt-4 `}>
        <ul className="row  mt-4">
          <li className={`col ${style.item}`}>Generate</li>
          <li className={`col ${style.item}`}>Signature</li>
          <li className={`col ${style.item}`}>Verify</li>
        </ul>
        {/* <div className="col-2">Hello,</div> */}
        {/* <div className={`col-2 ${style.btn}`}>Get Started</div> */}
      </div>
    </div>
  );
}

export default AuthNav;
