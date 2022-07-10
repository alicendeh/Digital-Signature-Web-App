import React, { useState, useEffect } from 'react';
import styles from './Verify.module.css';
import axios from 'axios';

const URL = process.env.REACT_APP_BASEURL;

function Verify() {
  const [isPdf, setIsPdf] = useState(false);
  const [correct, setCorrect] = useState(true);
  const [loading, setLoading] = useState(false);
  const [original, setOriginal] = useState({});
  const [formData, setFormData] = useState({
    publicKey: '',
    signature: '',
  });
  const onVerify = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${URL}/core/verify`, formData);

      res.data.result2.map((tray) => {
        tray.map((elem) =>
          elem !== null ? setOriginal(elem) : setCorrect(false)
        );
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err, 'oopss error');
    }
  };

  // useEffect(() => {
  //   console.log(original);
  //   Object.keys(original).length >= 1 && setCorrect(true);
  //   !correct && setOriginal({});
  // }, [original, correct]);

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
                  onChange={(e) =>
                    setFormData({ ...formData, publicKey: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, signature: e.target.value })
                  }
                  type="text"
                  placeholder="Enter your Signature"
                  className={styles.secretKey}
                />
              </div>
              <div className={styles.box}>paste!</div>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={onVerify}
              className={`btn btn-primary ${styles.btn}`}
            >
              {loading ? 'Verifying....' : 'Verify'}
            </button>
          </div>
          <div className="mt-5">
            {Object.keys(original).length >= 1 ? (
              <div className={styles.input}>{original.message}</div>
            ) : (
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
                  Sorry we cant grant you access to this document. Make sure you
                  have the correct information
                </p>
              </div>
            )}
          </div>

          {/* <div className="mt-3">
              <p className={styles.elem}>Original Message</p>
              <div className="d-flex">
                {correct ? (
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
                      <div className={styles.input}>{original.message}</div>
                    )}
                  </>
                )}
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Verify;
