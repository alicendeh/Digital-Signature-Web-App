import React, { useState, useEffect } from 'react';
import styles from './GenerateKeys.module.css';
import '../../App.css';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';

function GenerateKeys() {
  const URL = process.env.PUBLIC_URL;

  const [keys, setkeys] = useState({});
  const [loading, setloading] = useState(false);
  const [isPrivateKeyCopied, setIsPrivateKeyCopied] = useState(false);
  const [isPublicCopied, setIsPublicCopied] = useState(false);

  const onGenerate = async () => {
    console.log('al');
    setloading(true);
    let res = await axios
      .get(
        `https://rsaencryptionforauthentication.herokuapp.com/generate-key-pair`
      )
      .finally(() => {
        setloading(false);
      })
      .catch((err) => console.log('oops an error occured', err));
    setkeys(res.data);
  };

  const copyPrivateKey = () => {
    navigator.clipboard.writeText(keys.privateKey);
    setIsPrivateKeyCopied(true);
    setIsPublicCopied(false);
  };

  const copyPiblicKey = () => {
    navigator.clipboard.writeText(keys.publicKey);
    setIsPublicCopied(true);
    setIsPrivateKeyCopied(false);
  };

  return (
    <div>
      <div className={styles.main}>
        {loading ? (
          <button className="btn btn-primary spinner"></button>
        ) : (
          <button className=" btn btn-primary" onClick={onGenerate}>
            Generate Key pairs
          </button>
        )}
        <div>
          {Object.keys(keys).length < 1 ? (
            <div />
          ) : (
            <>
              <div className="mt-5">
                <p className={styles.elem}>Private Key</p>
                <div className="d-flex">
                  <LinesEllipsis
                    className={styles.box}
                    text={keys && keys.privateKey}
                    maxLine="1"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                  <div
                    onClick={copyPrivateKey}
                    className={`${styles.copy} point`}
                  >
                    {isPrivateKeyCopied ? 'Copied!' : 'copy!'}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className={styles.elem}>Public Key</p>
                <div className="d-flex">
                  <LinesEllipsis
                    className={styles.box}
                    text={keys && keys.publicKey}
                    maxLine="1"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                  <div
                    className={`${styles.copy} point`}
                    onClick={copyPiblicKey}
                  >
                    {isPublicCopied ? 'Copied!' : 'copy!'}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GenerateKeys;
