import styles from './Contact.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
export default function Contact() {
  useEffect(() => {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxK7sIXAMLCMF9Rw5H5oCUpZar0GRnrYrzbFflAiZt0ygyg0o_HDG47RAORir4cikfT/exec';
    const form = document.forms['google-sht'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) =>
          alert('Thanks for Contacting us..! We Will Contact You Soon...')
        )
        .catch((error) => console.error('Error!', error.message));
    });
  }, []);
  const recaptchaRef = React.createRef();
  return (
    <div id='contactDown'>
      <div className={styles.trFlex}>
        <div className={styles.flexitem1}>
          <div className="sectionHeader">
            <div className="sectionName">
              <p>Get in Touch</p>
            </div>
            <h2 className="sectionTitle">
            Want to Scale Your Business? Just Drop Us a Line.</h2>
          </div>
          <div className={styles.p}>
           <p> We understand that running a business is hard enough, let alone
            trying to find the time (and budget) to focus on marketing. That’s
            where we come in.
            </p>
            <p>
            At Pixel Pay, we use the latest digital marketing techniques to help
            businesses like yours grow. Whether you’re looking for more website
            visitors, more customers or both, we can help.
          </p>
          </div>
        </div>
        <form
          method="post"
          // onSubmit={(e) => handleClick(e)}
          autoComplete="off"
          name="google-sht"
          className={styles.flexitem2}
          onSubmit={() => { recaptchaRef.current.execute();}}
        >
               <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="Your client site key"
            />,
          <div className={styles.name}>
            <input
              name="Name"
              placeholder="Name"
              className={styles.input}
              type="text"
              required
            />
          </div>
          <div className={styles.item2}>
            <input
              name="Mobile"
              placeholder="Mobile"
              className={styles.input}
              type="text"
              pattern="[789][0-9]{9}"
              required
            />
            <input
              name="Email"
              placeholder="Email"
              className={styles.input}
              type="text"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div className={styles.w100}>
            <textarea
              name="Message"
              placeholder="Message"
              className={styles.textarea}
              rows={6}
              minLength={10}
              required
            />
          </div>
          <button type="submit" className="btn-purple">
            Contact Us
            <span>
              <BsArrowRight color="white" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
