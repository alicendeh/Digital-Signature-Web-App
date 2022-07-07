import React, { useState, useEffect } from 'react';
import styles from './Sign.module.css';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';
import { v4 as uuidv4 } from 'uuid';

function Sign() {
  const [formData, setFormData] = useState({
    data: '',
    privateKey: '',
  });

  const [signature, setSignature] = useState({});
  const [signatureCopy, setSignatureCopy] = useState(false);
  const [userSelection, setUserSelection] = useState('message');
  const [pdf, setPdf] = useState();
  const [loading, setLoading] = useState(false);

  const handlePdfDocument = (e) => {
    let pdf1 = e.target.files[0];
    setFormData({ ...formData, data: pdf1.name + uuidv4() });
    setPdf(pdf1);
  };

  const onSign = async () => {
    setLoading(true);
    if (userSelection === 'message') {
      const dataToSend = new FormData();

      dataToSend.append('data', formData.data);
      dataToSend.append('privateKey', formData.privateKey);

      console.log(dataToSend, 'to send');
      const res = await axios.post('http://localhost:8000/sign', dataToSend);
      setSignature(res.data);
      setLoading(false);
    } else {
      const dataToSend = new FormData();

      dataToSend.append('data', formData.data);
      dataToSend.append('privateKey', formData.privateKey);
      dataToSend.append('pdf', pdf);

      console.log(dataToSend, 'to send');
      const res = await axios.post('http://172.20.10.6/sign', dataToSend);
      setSignature(res.data);
      setLoading(false);
    }
  };

  const copySignature = () => {
    navigator.clipboard.writeText(signature.signature);
    setSignatureCopy(true);
  };
  return (
    <div>
      <div className={styles.main}>
        <p className={`text-primary ${styles.heading}`}>Generate A Signature</p>
        <div>
          <div>
            <p className={styles.elem}>Select what to sign</p>
            <div className="d-flex">
              <div
                className={styles.message}
                onClick={() => setUserSelection('message')}
                style={{
                  backgroundColor:
                    userSelection === 'message' ? '#FFCF58' : '#ffffff',
                }}
              >
                <i
                  class="fa-solid fa-signature"
                  style={{
                    fontSize: 30,
                    color: userSelection === 'message' ? '#ffffff' : '#FFCF58',
                  }}
                ></i>
                <p
                  style={{
                    color: userSelection === 'message' ? '#ffffff' : '#000',
                  }}
                >
                  Sign A Message
                </p>
              </div>
              <div
                className={styles.message}
                onClick={() => setUserSelection('file')}
                style={{
                  backgroundColor:
                    userSelection === 'file' ? '#FFCF58' : '#ffffff',
                }}
              >
                <i
                  class="fa-solid fa-signature"
                  style={{
                    fontSize: 30,
                    color: userSelection === 'message' ? '#6D99EF' : '#ffffff',
                  }}
                ></i>
                <p
                  style={{
                    color: userSelection === 'message' ? '#000' : '#ffffff',
                  }}
                >
                  Sign a File
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            {userSelection === 'message' ? (
              <>
                <p className={styles.elem}>Message</p>
                <div className="d-flex">
                  <textarea
                    onChange={(e) =>
                      setFormData({ ...formData, data: e.target.value })
                    }
                    className={styles.input}
                    placeholder="Enter a message to sign"
                  />
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.input} center form-row `}>
                  <div>
                    <i
                      class="fa-solid fa-floppy-disk"
                      style={{
                        color: '#000',
                        fontSize: 22,
                      }}
                    ></i>
                    <div className="col-md-12">
                      <input
                        required
                        type="file"
                        name="upload"
                        accept="application/pdf , application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain"
                        onChange={(e) => handlePdfDocument(e)}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="mt-3">
            <p className={styles.elem}>Private Key</p>
            <div className="d-flex">
              <div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, privateKey: e.target.value })
                  }
                  type="text"
                  placeholder="Enter your private key"
                  className={styles.input}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              className={`btn btn-primary ${styles.btn}`}
              onClick={onSign}
            >
              {loading ? 'Signing....' : 'Sign'}
            </button>
          </div>

          {Object.keys(signature).length > 1 && (
            <div className="mt-3">
              <p className={styles.elem}>Generated Signature</p>
              <div className="d-flex">
                <div>
                  <LinesEllipsis
                    className={styles.secretKey}
                    text={signature && signature.signature}
                    maxLine="1"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </div>
                <div onClick={copySignature} className={`${styles.copy} point`}>
                  {signatureCopy ? 'Copied!' : 'copy!'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sign;
