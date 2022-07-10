import React, { useState, useEffect } from 'react';
import styles from './GenerateKeys.module.css';
import '../../App.css';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  icon_brand_recognition,
  icon_detailed_records,
  icon_fully_customizable,
  bg_boost_desktop,
  icon_facebook,
  icon_instagram,
  icon_pinterest,
  icon_twitter,
} from '../../assets';

const URL = process.env.REACT_APP_BASEURL;

function GenerateKeys() {
  const [keys, setkeys] = useState({});
  const [loading, setloading] = useState(false);
  const [isPrivateKeyCopied, setIsPrivateKeyCopied] = useState(false);
  const [isPublicCopied, setIsPublicCopied] = useState(false);

  const onGenerate = async () => {
    setloading(true);
    let res = await axios
      .get(`${URL}/core/generate-key-pair`)
      .finally(() => {
        setloading(false);
      })
      .catch((err) => console.log('oops an error occured', err));
    setkeys(res.data);
  };

  const copyPrivateKey = () => {
    navigator.clipboard.writeText(keys.user.keyPairs[0].secretKey);
    setIsPrivateKeyCopied(true);
    setIsPublicCopied(false);
  };

  const copyPiblicKey = () => {
    navigator.clipboard.writeText(keys.user.keyPairs[0].publicKey);
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
                    text={keys && keys.user.keyPairs[0].publicKey}
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
                    text={keys && keys.user.keyPairs[0].secretKey}
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
      <div className={styles.section2}>
        <p className={`center ${styles.header}`}>Security and Assurance</p>
        <div className="center">
          <p className={`  ${styles.subHeader}`}>
            Dont let a poor authentication ruin your whole system. Ensure to
            take your system to the next. Data privacy matters. Users wo know
            their data is secured will come back. Trust us!!
          </p>
        </div>
        <div className="center">
          <div className="row container">
            {dataSet.map((elem) => (
              <div className={`col ${styles.mainContainer}`}>
                <div className="center">
                  <div className={`${styles.circle} center`}>
                    <i class="fa-solid fa-signature"></i>
                  </div>
                </div>
                <div className="center">
                  <div className={`${styles.title} center`}>{elem.title} </div>
                </div>
                <div className="center">
                  <div className={`${styles.body} center`}>{elem.body} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className={`${styles.statisticContainer}`}>
          <p className={`${styles.statisticsHeader}`}>Advanced Statistics</p>
          <p className={`${styles.statisticsBody}`}>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
      </div>

      <div className={styles.mainContainer1}>
        <div className={styles.realContent}>
          <div className={styles.lineContainer}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.dataSet}>
            {DATA_SET.map((data, index) => (
              <div
                style={{
                  marginTop: index * 30,
                  marginBottom: index * -30,
                }}
                className={styles.indContainer}
              >
                <div className={styles.imgContainer}>
                  <img src={data.iconName} width="30" alt="" />
                </div>
                <p className={styles.title}>{data.title} </p>
                <p className={styles.body}> {data.body} </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.fistContainer}>
          <img src={bg_boost_desktop} className={styles.img} />
          <div className={styles.itemContiner}>
            <p>Boost your Authentication system today</p>
            <div className={styles.btnContainer}>
              {/* <Button width={'150px'} title={'Get Started'} /> */}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.items}>
            <div className={styles.logo}>
              <p>Secura</p>
            </div>
            <div className={styles.item}>
              <ul>
                <p>Features</p>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div className={styles.item}>
              <ul>
                <p>Resources</p>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </div>
            <div className={styles.item}>
              <ul>
                <p>Company</p>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.icons}>
              <img src={icon_facebook} />
              <img src={icon_twitter} />
              <img src={icon_pinterest} />
              <img src={icon_instagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateKeys;

const dataSet = [
  {
    title: 'Digital Signature',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis minus harum ad nemo distinctio debitis, odit accusamus asperiores enim.',
    iconName: '',
  },
  {
    title: 'Authentication',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis minus harum ad nemo distinctio debitis, odit accusamus asperiores enim.',
    iconName: '',
  },
  {
    title: 'Security',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis minus harum ad nemo distinctio debitis, odit accusamus asperiores enim.',
    iconName: '',
  },
];

const DATA_SET = [
  {
    iconName: icon_brand_recognition,
    title: 'Brand Recognition',
    body: 'Bost your brand recogition with each click. Generic links dont mean a thing. Branded links help install confidence in your content',
  },
  {
    iconName: icon_detailed_records,
    title: 'Detailed Records',
    body: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
  },
  {
    iconName: icon_fully_customizable,
    title: 'Fully Customizable',
    body: 'Improve brand awarness and content discoverability through customizable links, supercharging audience engagment',
  },
];
