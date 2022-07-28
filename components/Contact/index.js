import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Nav from '../header/header';
import Header from '../header/header';
import { backendUrl } from '../../config';
import styles from './Contact.module.css';
import { BsArrowRight } from "react-icons/bs";
export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleClick = async () => {
    if (
      state.name.length !== 0 &&
      state.email.length !== 0 &&
      state.mobile.length !== 0 &&
      state.message.length !== 0
    ) {
      let resp = await axios.post(backendUrl + '/contact', state);
      if (resp.statusText === 'OK') {
        alert('Form Submitted');
      } else {
        alert('Failed');
      }
    } else {
      alert('Validation Failed');
    }
  };

  return (
    <div className={styles.bgFooter}>
        <div className={styles.trFlex}>
      <div className={styles.flexitem1}>
        <div className="sectionHeader">
        <div className="sectionName textCenter">
              <p>Get in touch</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
          <h2 className="sectionTitle">
            Want to scale your business? Just drop us a line.
          </h2>
        </div>
        <p className={styles.p}>
          We understand that running a business is hard enough, let alone trying
          to find the time (and budget) to focus on marketing. That’s where we
          come in.
          <br />
          At Pixel Pay, we use the latest digital marketing techniques to help
          businesses like yours grow. Whether you’re looking for more website
          visitors, more customers or both, we can help.
        </p>
      </div>
      <div className={styles.flexitem2}>
        <div className={styles.name}>
          <input
            onChange={(e) => setState({ ...state, name: e.target.value })}
            placeholder="Name"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.item2}>
          <input
            onChange={(e) => setState({ ...state, mobile: e.target.value })}
            placeholder="Mobile"
            className={styles.input}
            type="text"
          />
          <input
            onChange={(e) => setState({ ...state, email: e.target.value })}
            placeholder="Email"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.w100}>
          <textarea
            placeholder="Message"
            onChange={(e) => setState({ ...state, message: e.target.value })}
            className={styles.textarea}
            rows={6}
          />
        </div>
        <div className="btn-purple">
          <p>Contact Us</p>
          <span>
            <BsArrowRight color="white" />
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}
