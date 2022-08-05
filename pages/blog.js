import React from "react";
import Footer from "../components/footer";
import Nav from "../components/header/header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import BlogCard from "../components/Cards/BlogCard";


export default function BlogPage({posts}) {

  return (
    <div>
      <Nav />
      <HeroBanner
        HeroImage='/Assets/blogBanner.png'
        HeroHeading={"Blogs"}
        HeroText={"Stay On Top of the Latest Industry Trends"}
      />
      <div className="container">
        <div className="blogsArchive">
        <div className="sectionHeader">
          <div className="sectionName textCenter">
              <p>Most Popular</p>
            </div>
            <h2 className="sectionTitle textCenter">Our Trending Blogs</h2>
          </div>
        <div className="blogContainer">
        {posts.slice(0,3).map((post,index) => (
        <div key={index}><BlogCard post={post} /></div>
      ))}
        </div>
      </div>
      </div>
      <div className="bg-blue">

        <div className="container">
        <div className="sectionHeader">
          <div className="sectionName textCenter">
              <p>Latest Blogs</p>
            </div>
            <h2 className="sectionTitle textCenter"> Helpful Digital Marketing Resources</h2>
          </div>
          <div className="blogContainer">
          {posts.slice(4,16).map((post,index) => (
        <div key={index}><BlogCard post={post} /></div>
      ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://blog.pixelpaymedia.com/wp-json/wp/v2/posts?_embed')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
