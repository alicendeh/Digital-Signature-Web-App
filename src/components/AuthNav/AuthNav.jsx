import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import style from './AuthNav.module.css';
import { Link } from 'react-router-dom';

function AuthNav({ currentPath, setCurrentPath }) {
  return (
    <div className={`row  ${style.main}`}>
      <div className={`${style.container} col-7`}>
        <div>
          <Link to="/">
            <img src={logo} width={'125px'} alt="App Logo" />
          </Link>
        </div>
      </div>
      <div className={`col-5 row mt-4 `}>
        <ul className="row  mt-4">
          <li
            className={`col ${style.item}`}
            style={{
              color: currentPath === 'Generate' ? '#f07136' : '#000',
              fontWeight: currentPath === 'Generate' ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentPath('Generate')}
          >
            Generate
          </li>
          <li
            className={`col ${style.item}`}
            onClick={() => setCurrentPath('Signature')}
            style={{
              color: currentPath === 'Signature' ? '#f07136' : '#000',
              fontWeight: currentPath === 'Signature' ? 'bold' : 'normal',
            }}
          >
            Signature
          </li>
          <li
            className={`col ${style.item}`}
            onClick={() => setCurrentPath('Verify')}
            style={{
              color: currentPath === 'Verify' ? '#f07136' : '#000',
              fontWeight: currentPath === 'Verify' ? 'bold' : 'normal',
            }}
          >
            Verify
          </li>
        </ul>
        {/* <div className="col-2">Hello,</div> */}
        {/* <div className={`col-2 ${style.btn}`}>Get Started</div> */}
      </div>
    </div>
  );
}

export default AuthNav;
