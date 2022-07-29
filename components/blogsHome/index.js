import styles from "./blogsHome.module.css";
import { BsArrowRight } from "react-icons/bs";
import BlogCard from "../Cards/BlogCard";
import blogimg from '/Assets/ggl.png'


export default function BlogsHome() {
  return (
    <div className={styles.teamContainer}>
      <div className="container">
        <div className="sectionHeader">
        <div className="sectionName textCenter">
              <p>Blogs</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
          <h2 className="sectionTitle textCenter">
             Read our opinions about the various aspects of digital marketing
          </h2>
        </div>
            <div className="blogContainer">
              <BlogCard blogImg = {blogimg}/>
              <BlogCard blogImg = {blogimg} />
              <BlogCard blogImg = {blogimg} />
             </div>
            
      </div>
      <div className='btn-purple'>
                 <p>Explore Now</p> <span><BsArrowRight/></span>
            </div>
    </div>
  );
}