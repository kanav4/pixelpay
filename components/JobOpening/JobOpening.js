import JobCard from "../Cards/JobCard/JobCard";
import styles from "./JobOpening.module.css";
import MediaBuyingIco from "../../public/Assets/4-3.png";
import data from "../../data.json";
import JobDesc from "../JobDesc/JobDesc";

export default function JobOpening({ state, setState }) {
  return (
    <>
      <div className={styles.joWrap}>
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionName textCenter">
              <p>Job Opening</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>

            <h2 className="sectionTitle textCenter">Want to join our team</h2>
          </div>
          <div className={styles.currentOpenings}>
            {data.map((item, i) => (
              <div onClick={() => setState(i)}>
                <JobCard
                  active={state === i}
                  key={i}
                  ServIcon={MediaBuyingIco}
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {data.map((item, i) => (
          <>{state === i ? <JobDesc item={item} /> : null}</>
        ))}
      </div>
    </>
  );
}
