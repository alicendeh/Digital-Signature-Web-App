import React, { useState } from 'react';
import style from './body.module.css';
import logo from '../../assets/logo.svg';
import auth from '../../assets/Exclude2.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Row, Modal } from 'react-bootstrap';

function Body() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={style.container}>
      <MyVerticallyCenteredModal show={modalShow} close={setModalShow} />

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
          {/* <Link className={`col-2 ${style.btn}`} to="/main"> */}
          <div
            className={`col-2 ${style.btn}`}
            onClick={() => setModalShow(true)}
          >
            Get Started
          </div>
          {/* </Link> */}
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
    </div>
  );
}

export default Body;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="pend">
          <div
            className="view"
            style={{
              width: '100%',
              height: '50%',
              margin: 40,
            }}
          >
            <h3 style={{ textAlign: 'start', color: 'black' }}>
              Phone number required to proceed
            </h3>
          </div>
        </div>
        <div className="mt-3">
          <p className={style.elem}>Phone Number</p>
          <div className="d-flex">
            <div>
              <input
                // onChange={(e) =>
                //   setFormData({ ...formData, privateKey: e.target.value })
                // }
                type="text"
                placeholder="Enter your phone number"
                className={style.input}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/main">
          <div className="btn btn-primary" onClick={() => props.close(false)}>
            Proceed
          </div>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
