import React, { useState } from 'react';
import styles from './Verify.module.css';

function Verify() {
  const [isPdf, setIsPdf] = useState(false);
  const [correct, setCorrect] = useState(true);
  return (
    <div>
      <div className={styles.main}>
        <p className={`text-primary ${styles.heading}`}>Verify Signature</p>
        <div>
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
              {!correct ? (
                <div
                  className={`${styles.input}`}
                  style={{
                    border: '1px solid red',
                  }}
                >
                  <i
                    style={{
                      fontSize: '125px',
                    }}
                    className="fa-solid fa-face-frown text-danger mt-3"
                  ></i>
                  <p
                    className="mt-3 text-danger"
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Verification Failed
                  </p>
                  <p className="mt-3 text-danger">
                    Sorry we cant grant you access to this document. Make sure
                    you have the correct information
                  </p>
                </div>
              ) : (
                <>
                  {isPdf ? (
                    <div className={styles.input}>
                      <p
                        style={{
                          fontSize: '18px',
                          color: '#000',
                        }}
                      >
                        {' '}
                        Title: My billion dolar business plan
                      </p>
                      <div
                        style={{
                          cursor: 'pointer',
                        }}
                      >
                        <i
                          style={{
                            fontSize: '23px',
                            color: '#FFCF58',
                          }}
                          className="fa-solid fa-download"
                        ></i>
                        <p
                          style={{
                            fontSize: '18px',
                            color: '#FFCF58',
                          }}
                        >
                          Download
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: 16,
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontStyle: 'italic',
                            color: '#000',
                          }}
                        >
                          Preview Content
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.input}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati accusantium, repudiandae mollitia error deserunt
                      voluptas dolore esse, et, quo eaque fuga nesciunt! Ea
                      nesciunt quia enim earum, tenetur sint mollitia.
                      Quibusdam, velit debitis.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
