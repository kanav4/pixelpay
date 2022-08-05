import React, { useState } from "react";
import styles from "./why.module.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function WhyUs() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 250, itemsToShow: 2 },
    { width: 480, itemsToShow: 3 },
  ];
  const [state, setState] = useState(1);
  return (
    <div className="bg-blue">
      <div className="container">
        <div className={styles.whyUs}>
          <div className={styles.aboutImg}>
            <Image
              src="/Assets/man.png"
              alt="Picture of the author"
              className={styles.image}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.content}>
            <div className="sectionHeader">
              <div className="sectionName">
                <p>Why Us</p>
              </div>
              <h2 className="sectionTitle">Working With Us Has Many Perks</h2>
            </div>
            <div className="container-carousel-sml">
     
            </div>
            <div className={styles.para}>
              <div className={state === 0 ? styles.visible : styles.hidden}>
                We believe that effective marketing is all about creating the
                right mix of strategies and tactics to reach your target
                audience. By using data to guide our decisions, we can develop a
                plan that is tailored to your specific needs and objectives.
                This approach allows us to be agile and adjust our plan as
                needed, to constantly stay ahead of the competition.
              </div>
              <div className={state === 1 ? styles.visible : styles.hidden}>
                Innovative thinking and creative problem solving is at the heart
                of everything we do. From the initial stages of developing a
                marketing strategy to the execution of campaigns, our team will
                work tirelessly to ensure that your vision is brought to life.
                We are not afraid to think outside the box and push the
                boundaries to get you the results you need.
              </div>
              <div className={state === 2 ? styles.visible : styles.hidden}>
                Our team is composed of seasoned marketing professionals with
                years of experience across a variety of industries. We have the
                knowledge and expertise to help you navigate the ever-changing
                landscape of marketing. Whether you are a small business or a
                large corporation, we have the resources and skills to help you
                reach your goals.
              </div>
              <div className={state === 3 ? styles.visible : styles.hidden}>
                We believe that collaboration is key to success. By working
                closely with our clients, we develop a deep understanding of
                their business and objectives. This allows us to create a
                customized plan that will achieve the desired results. We also
                believe in working together as a team, so you can be confident
                that everyone on our team is invested in your success.
              </div>
              <div className={state === 4 ? styles.visible : styles.hidden}>
                We understand that one size does not fit all when it comes to
                digital marketing. That’s why we offer a variety of services
                that can be customized to meet your specific needs. This
                flexibility allows us to be a true partner in your success. From
                performance marketing to lead generation, we create customized
                solutions that will help you reach your specific goals.
              </div>
              <div className={state === 5 ? styles.visible : styles.hidden}>
                We are proud of the work we have done for our clients and the
                results we have been able to achieve. Our team has a proven
                track record of developing successful campaigns that deliver
                results. We constantly strive to push the envelope and find new
                ways to help our clients succeed. At our core, we are
                results-driven and passionate about our work.
              </div>{" "}
              <Link href="/about">
                <a>
                  <div className="btn-purple">
                    <p>Know More</p>
                    <span>
                      <BsArrowRight />
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
