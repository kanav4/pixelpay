import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./ourValues.module.css";

export default function OurValues() {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="container">
        <div className="sectionHeader textcenter">
          <div className="sectionName">
            <p>Our Values</p>
            <svg
              className="sectionBorder"
              height="14"
              viewBox="0 0 186 14"
              fill="none"
            >
              <rect width="486" height="14" fill="#D1CDFF" />
            </svg>
          </div>
        </div>
        <div className={styles.valueCol}>
          <div className={styles.valueTabs}>
            <div className={state===0?"valueTabsActive":"ourValueTab"}  onClick={() => setState(0) }>
              <p>Integrity</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
            <div className={state===1?"valueTabsActive":"ourValueTab"}  onClick={() => setState(1)}>
              <p>Quality</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
            <div className={state===2?"valueTabsActive":"ourValueTab"}  onClick={() => setState(2)}>
              <p>Teamwork</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
            <div className={state===3?"valueTabsActive":"ourValueTab"}  onClick={() => setState(3)}>
              <p>Accountability</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
            <div className={state===4?"valueTabsActive":"ourValueTab"}  onClick={() => setState(4)}>
              <p>Continuous Learning</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
            <div className={state===5?"valueTabsActive":"ourValueTab"}  onClick={() => setState(5)}>
              <p>Fun</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className={styles.valueContent}>
            {state === 0 ? (
              <>
                <h2>Integrity</h2>
                <p>
                  Our company is built on a foundation of integrity. We believe
                  in being honest and transparent in all our dealings, both with
                  our clients and with each other. This means that we always do
                  what we say we're going to do, and we're never afraid to admit
                  when we make a mistake. We believe that this level of honesty
                  is what builds trust, and that's what we're all about. <br />
                  We also believe in being fair. We know that everyone has
                  different needs and expectations, and we strive to treat
                  everyone with the same level of respect. We're not afraid to
                  have difficult conversations, when necessary, because we know
                  that it's the only way to truly resolve problems.
                </p>
              </>
            ) : null}
            {state === 1 ? (
              <>
                <h2>Quality</h2>
                <p>
                  We believe that quality is king. Whether it's the quality of
                  our work, or the quality of our service, we always strive to
                  be the best that we can be. We know that our clients expect
                  nothing less than the best from us, and we're committed to
                  delivering on that promise. <br />
                  We also believe in continual improvement. We're never
                  satisfied with just being good enough, because we know that we
                  can always be better. We're constantly challenging ourselves
                  to find new and better ways to do things and are always
                  looking for ways to improve our services. This commitment to
                  excellence is what sets us apart from the competition.
                </p>
              </>
            ) : null}
            {state === 2 ? (
              <>
                <h2>Teamwork</h2>
                <p>
                  We believe that teamwork makes the dream work. We know that we
                  can't do it all alone, and we're always looking for ways to
                  collaborate with others. We believe that by working together,
                  we can achieve great things that we could never have
                  accomplished on our own. <br />
                  The key here is supporting each other. We know that no one is
                  perfect, and we all make mistakes. However, it's important to
                  have each other's backs, and to offer help and guidance when
                  needed. We know that by working together as a team, we can
                  build a strong foundation for a successful future.
                </p>
              </>
            ) : null}
            {state === 3 ? (
              <>
                <h2>Accountability</h2>
                <p>
                  We believe in being accountable for our actions. We know that
                  we're not perfect, and that we make mistakes. However, we also
                  believe that it's important to own up to those mistakes and to
                  learn from them. We're always looking for ways to improve our
                  processes, so that we can avoid making the same mistakes in
                  the future. <br />
                  We also believe in holding each other accountable. We know
                  that it's important to have high standards, and to hold each
                  other to those standards. By holding each other accountable,
                  we can ensure that everyone is always working towards the same
                  goal.
                </p>
              </>
            ) : null}
            {state === 4 ? (
              <>
                <h2>Continuous Learning</h2>
                <p>
                  learning. We're always looking for ways to improve our skills
                  and knowledge, so that we can be the best that we can be.
                  <br />
                  We also believe in sharing what we know. Knowledge is power,
                  and we believe that it's important to share what we know with
                  others. By distributing our knowledge, we can help others to
                  reach their potential. landscape of marketing and advertising.
                </p>
              </>
            ) : null}
            {state === 5 ? (
              <>
                <h2>Fun</h2>
                <p>
                  We think that work should be fun. While it's not always easy,
                  it's important to enjoy what you do. By having fun, we can
                  stay motivated and focused on our goals. <br />
                  We also believe in celebrating our successes. It's important
                  to take a break and celebrate when we've accomplished
                  something great. By taking the time to celebrate our
                  successes, we can stay positive and focused on the future.
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
