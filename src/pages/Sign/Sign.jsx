import React from 'react';
import styles from './Sign.module.css';

function Sign() {
  return (
    <div>
      <div className={styles.main}>
        <p className={`text-primary ${styles.heading}`}>Generate A Signature</p>
        <div>
          <div className="mt-5">
            <p className={styles.elem}>Message</p>
            <div className="d-flex">
              <textarea
                className={styles.input}
                placeholder="Enter a message to sign"
              />
            </div>
          </div>
          <div className="mt-3">
            <p className={styles.elem}>Private Key</p>
            <div className="d-flex">
              <div>
                <input
                  type="text"
                  placeholder="Enter your private key"
                  className={styles.secretKey}
                />
              </div>
              <div className={styles.box}>paste!</div>
            </div>
          </div>
          <div className="mt-5">
            <button className={`btn btn-primary ${styles.btn}`}>
              Generate Key pairs
            </button>
          </div>

          <div className="mt-3">
            <p className={styles.elem}>Generated Signature</p>
            <div className="d-flex">
              <div>
                <div className={styles.secretKey}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Assumenda officiis
                </div>
              </div>
              <div className={styles.box}>copy!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
