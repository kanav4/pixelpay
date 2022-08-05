import styles from "./blogsHome.module.css";
import { BsArrowRight } from "react-icons/bs";
import BlogCard from "../Cards/BlogCard";


export default function BlogsHome({ posts }) {
  return (
    <div className={styles.teamContainer}>
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionName textCenter">
            <p>Blogs</p>
          </div>
          <h2 className="sectionTitle textCenter">
          Read Our Opinions About the Various Aspects of Digital Marketing
          </h2>
        </div>
        <div className="blogContainer">
          {posts.map((res, index) =>
            <BlogCard key={index} post={res} />)}
        </div>
      </div>
      <a href="/blog">
        <div className='btn-purple'>
          <p>Explore Now</p> <span><BsArrowRight /></span>
        </div>
      </a>
    </div>
  );
}