import React from 'react';
import styles from './Verify.module.css';

function Verify() {
  return (
    <div>
      <div className={styles.main}>
        <p className={`text-primary ${styles.heading}`}>Verify Signature</p>
        <div>
          {/* <div className="mt-5">
            <p className={styles.elem}>Message</p>
            <div className="d-flex">
              <textarea
                className={styles.input}
                placeholder="Enter a message to sign"
              />
            </div>
          </div> */}
          <div className="mt-3">
            <p className={styles.elem}>Public Key</p>
            <div className="d-flex">
              <div>
                <input
                  type="text"
                  placeholder="Enter your public key"
                  className={styles.secretKey}
                />
              </div>
              <div className={styles.box}>paste!</div>
            </div>
          </div>
          <div className="mt-3">
            <p className={styles.elem}>Signature</p>
            <div className="d-flex">
              <div>
                <input
                  type="text"
                  placeholder="Enter your Signature"
                  className={styles.secretKey}
                />
              </div>
              <div className={styles.box}>paste!</div>
            </div>
          </div>
          <div className="mt-5">
            <button className={`btn btn-primary ${styles.btn}`}>Verify</button>
          </div>

          <div className="mt-3">
            <p className={styles.elem}>Original Message</p>
            <div className="d-flex">
              <div
                className={styles.input}
                placeholder="Enter a message to sign"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati accusantium, repudiandae mollitia error deserunt
                voluptas dolore esse, et, quo eaque fuga nesciunt! Ea nesciunt
                quia enim earum, tenetur sint mollitia. Quibusdam, velit
                debitis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
