import React from 'react';
import { AuthNav } from '../../components';
import styles from './GenerateKeys.module.css';
import '../../App.css';

function GenerateKeys() {
  return (
    <div>
      <div className={styles.main}>
        <button className=" btn btn-primary">Generate Key pairs</button>
        <div>
          <div className="mt-5">
            <p className={styles.elem}>Private Key</p>
            <div className="d-flex">
              <div className={styles.box}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus perspiciatis nihil excepturi!
              </div>
              <div className={styles.box}>copy!</div>
            </div>
          </div>
          <div className="mt-5">
            <p className={styles.elem}>Public Key</p>
            <div className="d-flex">
              <div className={styles.box}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus perspiciatis nihil excepturi!
              </div>
              <div className={styles.box}>copy!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateKeys;
