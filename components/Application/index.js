import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import styles from './Application.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
export default function Application() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzd8j-CM3-msoMJyrS6J7ucjd34gvmooSID2A99AxbQHPGiA2QZwG6Y4S7ykD1JNhM/exec';
    const form = document.forms['google-shit'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) =>
          alert('Thanks for Contacting us..! We Will Contact You Soon...')
        )
        .catch((error) => console.error('Error!', error.message));
    });
  }, []);

  const uploadDoc = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    let resp = await axios.post(
      'https://mcusc4mgvi.execute-api.ap-south-1.amazonaws.com/production/v1/Services/SaveImage',
      formData
    );

    setUrl(resp.data.s3Url);
  };
  const recaptchaRef = React.createRef();
  return (
    <div className={styles.messageUs}>
      <div className="sectionHeader">
        <h2 className={styles.h2}>Apply Here</h2>
      </div>
      <div className='container'>
      <form
          className={styles.trFlex2}
          method="post"
          autoComplete="off"
          name="google-shit"
          onSubmit={() => { recaptchaRef.current.execute();}}
        >
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="Your client site key"
            />,
          <div className={styles.item1container}>
            <div className={styles.item1}>
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
                name="Designation"
                placeholder="Designation"
                className={styles.input}
                type="text"
                required
              />
            </div>
          </div>
          <div className={styles.item1container}>
            <div className={styles.item1}>
              <input
                name="Mobile"
                placeholder="Mobile"
                className={styles.input}
                type="text"
                required
              />
            </div>
            <div className={styles.item2}>
              <input
                name="Email"
                placeholder="Email"
                className={styles.input}
                type="text"
                required
              />
            </div>
          </div>

          <div className={styles.item3container}>
            <textarea
              name="Message"
              placeholder="Your Cover Letter/Message"
              className={styles.textarea}
              rows={5}
              type="text"
              required
            />
          </div>
          <input type="hidden" value={url} name="Url" />
          <div className={styles.item4container}>
            <input
              onChange={(event) => setSelectedFile(event.target.files[0])}
              placeholder="Name"
              className={styles.input}
              type="file"
            />
            <button className={styles.button1} onClick={uploadDoc}>
              Upload File
            </button>
          </div>
          <div className={styles.item5container}>
            <button type="submit" className={styles.button}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
