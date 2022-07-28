import { useState } from 'react';
import styles from './Application.module.css';
export default function Application() {
  const [job, setJob] = useState({
    name: '',
    designation: '',
    email: '',
    mobile: '',
    message: '',
    resume: '',
  });
  const uploadDoc = () => {
    let form = new FormData();
    form.append('file', job.resume);
    if (job.resume === '') {
      let resp = axios.post(
        // 'https://mcusc4mgvi.execute-api.ap-south-1.amazonaws.com/production/v1/Services/SaveImage',
        { form }
      );
      setJob({ ...job, resume: resp.data.s3Url });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(job));
  };

  return (
    <form className={styles.trFlex2} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.item1container}>
        <div className={styles.item1}>
          <input
            onChange={(e) => setJob({ ...job, name: e.target.value })}
            placeholder="Name"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.item2}>
          <input
            onChange={(e) => setJob({ ...job, designation: e.target.value })}
            placeholder="Designation"
            className={styles.input}
            type="text"
          />
        </div>
      </div>
      <div className={styles.item1container}>
        <div className={styles.item1}>
          <input
            onChange={(e) => setJob({ ...job, mobile: e.target.value })}
            placeholder="Mobile"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.item2}>
          <input
            onChange={(e) => setJob({ ...job, email: e.target.value })}
            placeholder="Email"
            className={styles.input}
            type="text"
          />
        </div>
      </div>

      <div className={styles.item3container}>
        <textarea
          onChange={(e) => setJob({ ...job, message: e.target.value })}
          placeholder="Your Cover Letter/Message"
          className={styles.textarea}
          rows={5}
          type="text"
        />
      </div>
      <div className={styles.item4container}>
        <input
          onChange={(e) => setJob({ ...job, file: e.target.value })}
          placeholder="Name"
          className={styles.input}
          type="file"
          // accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"
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
  );
}
