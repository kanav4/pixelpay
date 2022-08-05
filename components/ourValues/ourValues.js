import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./ourValues.module.css";

export default function OurValues({value, TabSectionTitle}) {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionName textCenter ">
            <p>{TabSectionTitle}</p>
          </div>
        </div>
        {value ===  1 ? 
       <div className={styles.valueCol}>
       <div className={styles.valueTabs}>
         <div className={value === 1 ? state===0?"valueTabsActive":"ourValueTabNew" : state===0?"valueTabsActive":"ourValueTab"}  onClick={() => setState(0) }>
           <p>Performance Marketing</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
         <div className={value === 1 ? state===1?"valueTabsActive":"ourValueTabNew" : state===1?"valueTabsActive":"ourValueTab"}  onClick={() => setState(1)}>
           <p>E-Commerce</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
         <div className={value === 1 ? state===2?"valueTabsActive":"ourValueTabNew" : state===2?"valueTabsActive":"ourValueTab"}  onClick={() => setState(2)}>
           <p>Media Buying</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
         <div className={value === 1 ? state===3?"valueTabsActive":"ourValueTabNew" : state===3?"valueTabsActive":"ourValueTab"}  onClick={() => setState(3)}>
           <p>Lead Generation</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
         <div className={value === 1 ? state===4?"valueTabsActive":"ourValueTabNew" : state===4?"valueTabsActive":"ourValueTab"}  onClick={() => setState(4)}>
           <p>Content Marketing</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
         <div className={value === 1 ? state===5?"valueTabsActive":"ourValueTabNew" : state===5?"valueTabsActive":"ourValueTab"}  onClick={() => setState(5)}>
           <p>Search Engine Optimization</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
         <div className={value === 1 ? state===6?"valueTabsActive":"ourValueTabNew" : state===6?"valueTabsActive":"ourValueTab"}  onClick={() => setState(6)}>
           <p>Martech</p>
           <span>
             <BsArrowRight />
           </span>
         </div>
       </div>
       <div className={styles.valueContent}>
         {state === 0 ? (
           <>
             <h2>Performance Marketing</h2>
             <p>
             When it comes to driving sales and growth, there’s no such thing as “one size fits all.” The most effective way to reach your target audience and achieve your business goals is through performance marketing.</p>
             <p>Performance marketing is a results-oriented approach that focuses on generating leads and conversions. It considers all aspects of the customer journey, from initial awareness to post-purchase behavior.</p>
             <p>To be successful in performance marketing, you need to have a clear understanding of your target audience and what drives them. You also need to be able to track and measure your results so that you can continually optimize your campaigns for maximum ROI.</p>
           </>
         ) : null}
         {state === 1 ? (
           <>
             <h2>E-Commerce</h2>
             <p>
             An effective e-commerce strategy starts with a clear understanding of your target audience and what they want. We’ll work with you to create Buyer Personas and Journey Maps that will help you understand your customers’ needs.</p>
  <p>  Once we have a clear understanding of your target audience, we’ll help you select the right platform for your business. We’ll also support you setting up your store and optimizing your website for conversion. </p>
  <p> Create a marketing plan to drive traffic to your store and convert visitors into customers is also essential to success in ecommerce. We will work with you to create a robust marketing strategy and track your progress. We'll also adjust your strategy as needed to ensure that you are getting the results you want.

             </p>
           </>
         ) : null}
         {state === 2 ? (
           <>
             <h2>Media Buying</h2>
             <p>
             Media buying is the process of planning, negotiating, and purchasing advertising space. It’s a complex process that requires a deep understanding of the media landscape and the various ways to reach your target audience.</p>
             <p>At its core, media buying is about two things: getting in front of your target audience and achieving your desired results. To do this, you need to understand your audience’s media habits and preferences. You also need to have a clear idea of your objectives so that you can select the right media channels and formats.</p>
             <p>Once you’ve selected the right media channels, you need to negotiate the best possible rates. This requires a deep understanding of the market and an ability to think long-term. We’ll work with you to create a media buying strategy that meets your specific needs.

             </p>
           </>
         ) : null}
         {state === 3 ? (
           <>
             <h2>Lead Generation</h2>
             <p>
             In today’s world, generating leads can be a challenge. You need to stand out from your competition and catch the attention of your target audience. And once you’ve got their attention, you need to keep it.</p>
             <p>That’s where we come in. We specialize in lead generation and can help you attract and nurture prospects until they’re ready to buy what you’re selling. From ranking in search engine results to generate leads to developing lead magnets and landing pages to capture key details, we’ve got you covered. </p>
             <p>We know what it takes to generate leads and can help you every step of the way. By generating and nurturing leads at each stage of the buying cycle, we can help you close more sales and grow your business.

             </p>
           </>
         ) : null}
         {state === 4 ? (
           <>
             <h2>Content Marketing</h2>
             <p>
             Content marketing is a strategic approach to marketing that focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.</p>
             <p>Content marketing isn’t about selling; it’s about building relationships. By creating and distributing high-quality content, you can build trust and credibility with your audience. And, when you do that, they’re more likely to buy from you. </p>
             <p>We specialize in creating content that educates, entertains, and inspires. From blog posts and articles to eBooks and infographics, we can help you create content that will capture the attention of your target audience.

             </p>
           </>
         ) : null}
         {state === 5 ? (
           <>
             <h2>Search Engine Optimization</h2>
             <p>
             SEO is a complex and ever-changing field. To succeed, you need to stay up to date on the latest trends and best practices. And you need to continuously optimize your website to ensure that it’s meeting the needs of your target audience.</p>
             <p>We specialize in SEO and can help you create and maintain a website that is optimized for search engines and your target audience. Our 360-degree SEO approach starts with keyword research to identify the terms your target audience is searching for. We then optimize your website for those terms and track your progress over time.</p>
             <p>We also create and distribute high-quality content to help you attract more visitors to your site and even help you build links to your site from other high-quality websites. By optimizing your website for search engines and your target audience, we can help you attract more visitors and grow your business.

             </p>
           </>
         ) : null}
         {state === 6 ? (
          <>
            <h2>Martech</h2>
            <p>
            Martech is the fusion of marketing and technology. It’s the intersection of creativity and data. And it’s the key to unlocking the full potential of your marketing. At its heart, Martech is about using data to drive decision making. It’s about using technology to automate and optimize your marketing efforts.</p>
            <p>We specialize in Martech and can help you use data to drive your marketing decisions. We can help you automate and optimize your marketing efforts. From choosing the right Martech stack to implementing and managing Martech solutions, we can help you stay ahead of the curve.</p>
            <p>We understand that no two businesses are the same. And that’s why we offer a custom approach to each project. We’ll work with you to understand your unique needs and goals. And then we’ll create a Martech solution that is tailored to your specific needs.


            </p>
          </>
        ) : null}
       </div>
     </div>
     :
     <div className={styles.valueCol}>
     <div className={styles.valueTabs}>
       <div className={value === 1 ? state===0?"valueTabsActive":"ourValueTabNew" : state===0?"valueTabsActive":"ourValueTab"}  onClick={() => setState(0) }>
         <p>Integrity</p>
         <span>
           <BsArrowRight />
         </span>
       </div>
       <div className={value === 1 ? state===1?"valueTabsActive":"ourValueTabNew" : state===1?"valueTabsActive":"ourValueTab"}  onClick={() => setState(1)}>
         <p>Quality</p>
         <span>
           <BsArrowRight />
         </span>
       </div>
       <div className={value === 1 ? state===2?"valueTabsActive":"ourValueTabNew" : state===2?"valueTabsActive":"ourValueTab"}  onClick={() => setState(2)}>
         <p>Teamwork</p>
         <span>
           <BsArrowRight />
         </span>
       </div>
       <div className={value === 1 ? state===3?"valueTabsActive":"ourValueTabNew" : state===3?"valueTabsActive":"ourValueTab"}  onClick={() => setState(3)}>
         <p>Accountability</p>
         <span>
           <BsArrowRight />
         </span>
       </div>
       <div className={value === 1 ? state===4?"valueTabsActive":"ourValueTabNew" : state===4?"valueTabsActive":"ourValueTab"}  onClick={() => setState(4)}>
         <p>Continuous Learning</p>
         <span>
           <BsArrowRight />
         </span>
       </div>
       <div className={value === 1 ? state===5?"valueTabsActive":"ourValueTabNew" : state===5?"valueTabsActive":"ourValueTab"}  onClick={() => setState(5)}>
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
           <div className={styles.valueImage}>
           <Image src="/Assets/oubanner.png" alt="Our Values" layout="responsive" width={2} height={1}/>
           </div>           <p>
             Our company is built on a foundation of integrity. We believe
             in being honest and transparent in all our dealings, both with
             our clients and with each other. This means that we always do
             what we say we're going to do, and we're never afraid to admit
             when we make a mistake. We believe that this level of honesty
             is what builds trust, and that's what we're all about. </p>
             <p>  We also believe in being fair. We know that everyone has
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
           <div className={styles.valueImage}>
           <Image src="/Assets/oubanner.png" alt="Our Values" layout="responsive" width={2} height={1}/>
           </div>
           <p>
             We believe that quality is king. Whether it's the quality of
             our work, or the quality of our service, we always strive to
             be the best that we can be. We know that our clients expect
             nothing less than the best from us, and we're committed to
             delivering on that promise.  </p>
             <p> We also believe in continual improvement. We're never
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
           <div className={styles.valueImage}>
           <Image src="/Assets/oubanner.png" alt="Our Values" layout="responsive" width={2} height={1}/>
           </div>
           <p>
             We believe that teamwork makes the dream work. We know that we
             can't do it all alone, and we're always looking for ways to
             collaborate with others. We believe that by working together,
             we can achieve great things that we could never have
             accomplished on our own.  </p>
             <p>The key here is supporting each other. We know that no one is
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
           <div className={styles.valueImage}>
           <Image src="/Assets/oubanner.png" alt="Our Values" layout="responsive" width={2} height={1}/>
           </div>
           <p>
             We believe in being accountable for our actions. We know that
             we're not perfect, and that we make mistakes. However, we also
             believe that it's important to own up to those mistakes and to
             learn from them. We're always looking for ways to improve our
             processes, so that we can avoid making the same mistakes in
             the future.  </p>
             <p> We also believe in holding each other accountable. We know
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
           <div className={styles.valueImage}>
           <Image src="/Assets/oubanner.png" alt="Our Values" layout="responsive" width={2} height={1}/>
           </div>
           <p>
             learning. We're always looking for ways to improve our skills
             and knowledge, so that we can be the best that we can be.
              </p>
              <p> We also believe in sharing what we know. Knowledge is power,
             and we believe that it's important to share what we know with
             others. By distributing our knowledge, we can help others to
             reach their potential. landscape of marketing and advertising.
           </p>
         </>
       ) : null}
       {state === 5 ? (
         <>
           <h2>Fun</h2>
           <Image src="/Assets/oubanner.png" alt="Our Values" layout="responsive" width={2} height={1}/>

           <p>
             We think that work should be fun. While it's not always easy,
             it's important to enjoy what you do. By having fun, we can
             stay motivated and focused on our goals.  </p>
             <p>We also believe in celebrating our successes. It's important
             to take a break and celebrate when we've accomplished
             something great. By taking the time to celebrate our
             successes, we can stay positive and focused on the future.
           </p>
         </>
       ) : null}
     </div>
   </div>
      

      }
       
      </div>
    </>
  );
}
