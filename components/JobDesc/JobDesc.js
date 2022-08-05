import { BsArrowRight, BsFacebook, BsTwitter } from 'react-icons/bs';
import styles from './JobDesc.module.css';
export default function JobDesc({ item }) {
  return (
    <div className={styles.jdWrap}>
      <div className={styles.Description}>
        <div className="sectionHeader textLeft">
          <div className="sectionName" id="job_desc">
            <p>Job Description</p>
          </div>
          <h2 className="sectionTitle ">{item.title}</h2>
        </div>
        <div className={styles.jobDesc}>
          <h3 className={styles.jobHeading}>About this Role</h3>
          <p dangerouslySetInnerHTML={{ __html: item.aboutRole }}></p>
          <h3 className={styles.jobHeading}>Key Resposibilties</h3>
          <span dangerouslySetInnerHTML={{ __html: item.keyRespo }}></span>
          <h3 className={styles.jobHeading}>Skills</h3>
          <span dangerouslySetInnerHTML={{ __html: item.skills }}></span>
          <h3 className={styles.jobHeading}>Educational qualification</h3>
          <span dangerouslySetInnerHTML={{ __html: item.eduQual }}></span>
          <h3 className={styles.jobHeading}>Experience</h3>
          <span dangerouslySetInnerHTML={{ __html: item.reqExperience }}></span>
          <h3 className={styles.jobHeading}>Who we are?</h3>
          <p>
            We're a digital marketing company that prides itself on being
            different. We don't rely on a one-size-fits-all approach to
            marketing – instead, we create bespoke campaigns that are tailored
            to our clients' individual needs.
          </p>
          <h3 className={styles.jobHeading}>
            What makes Pixel Pay Media a great place to work?
          </h3>
          <p>
            Our team is our biggest asset. We have a group of highly talented
            and experienced professionals who are passionate about what they do.
            We're also a close-knit team, so there's a great sense of
            camaraderie among everyone who works here. We all work together to
            create the best possible campaigns for our clients, and we have a
            lot of fun doing it.
          </p>
        </div>
      </div>
      <div className={styles.applyNow}>
        <p className={styles.jobDesc}>
          If you think you've got what it takes, then we'd love to hear from
          you. Send us your CV and a cover letter explaining why you want to
          work with us, and we'll take it from there.
        </p>
        <div className="btn-purple">
          <p>Apply Now</p>
          <span>
            <BsArrowRight />
          </span>
        </div>
        {/* <p>Share it on</p>
        <div className={styles.jobShare}>
          <BsFacebook />
          <BsTwitter />
        </div> */}
      </div>
    </div>
  );
}
