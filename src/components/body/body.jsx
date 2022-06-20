import React from 'react';
import style from './body.module.css';
import logo from '../../assets/logo.svg';
import auth from '../../assets/Exclude2.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div className={style.container}>
      <div className={`row ${style.main}`}>
        <div className={`${style.container1} col-6`}>
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
          <Link className={`col-2 ${style.btn}`} to="/main">
            <div>Get Started</div>
          </Link>
        </div>
      </div>
      <div className="center">
        <p className={style.header}>
          Hey! How secured is your
          <br />
          <img src={auth} width={223} alt="" />
          <span> system ?</span>
        </p>
      </div>
      {/* <div className={`center ${style.txt}`}>
        You might not get asked that all the time, but do you know what <br /> a
        security bridge can do to your system?
      </div>
      <div className={style.btn1}>
        <div className={style.btnTex}>Get Started</div>
      </div> */}
    </div>
  );
}

export default Body;
