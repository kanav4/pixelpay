import React from "react";
import Footer from "../components/footer";
import Nav from "../components/header/header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import BlogBanner from "../public/Assets/blogBanner.png";
import BlogCard from "../components/Cards/BlogCard";
import blogimg from '../public/Assets/ggl.png'

export default function BlogPage() {
  return (
    <div>
      <Nav />
      <HeroBanner
        HeroImage={BlogBanner}
        HeroHeading={"Blogs"}
        HeroText={"Read Our Blogs and Get Updated "}
      />
      <div className="container">
        <div className="sectionHeader">
        <div className="sectionName textCenter">
              <p>Most Popular</p>
              <svg
                className="sectionBorder"
                height="14"
                viewBox="0 0 186 14"
                fill="none"
              >
                <rect width="486" height="14" fill="#D1CDFF" />
              </svg>
            </div>
          <h2 className="sectionTitle textCenter">Read Our Blog</h2>
        </div>
        <div className="blogContainer">
          <BlogCard blogImg={blogimg} />
          <BlogCard blogImg={blogimg} />
          <BlogCard blogImg={blogimg} />
        </div>
      </div>
      <div className="bg-blue">

        <div className="container">
          <div className="sectionHeader">
            <p className="sectionName textCenter">Most Popular</p>
            <h2 className="sectionTitle textCenter">Read Our Blog</h2>
          </div>
          <div className="blogContainer">
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
            <BlogCard blogImg={blogimg} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
