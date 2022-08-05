import JobCard from '../Cards/JobCard/JobCard';
import styles from './JobOpening.module.css';
import JobDesc from '../JobDesc/JobDesc';

export default function JobOpening({ data , state, setState }) {
  return (
    <>
      <div className={styles.joWrap}>
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionName textCenter">
              <p>Current Job Openings</p>
            </div>

            <h2 className="sectionTitle textCenter">
            Explore Our Open Positions and Find the Perfect Fit for You
            </h2>
          </div>
          <div className={styles.currentOpenings}>
            {data.map((item, i) => (
              <div key={i} onClick={() => setState(i)}>
                <JobCard
                  active={state === i}
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {data.map((item, i) => (
          <div key={i}>{state === i ? <JobDesc item={item} /> : null}</div>
        ))}
      </div>
    </>
  );
}
