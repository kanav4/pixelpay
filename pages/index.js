import Nav from '../components/header/header'
import Banner from '../components/banner/index'
import AboutUs from '../components/aboutUs'
import Service from '../components/services'
import ContactFormm from '../components/ContactFormm'
import TechWeUse from '../components/techWeUse'
import Clients from '../components/ourClients'
import OurTeam from '../components/ourTeam'
import Testimonials from '../components/testimonials'
import BlogsHome from '../components/blogsHome'
import Footer from '../components/footer'
import WhyUs from '../components/whyUs'


export default function Home({posts}) {
  return (
    <>
      <Nav />
      <Banner />
      <AboutUs />
      <Service />
      <TechWeUse title={"Frameworks and Systems We Use"} content={"We amalgamate technology with marketing to deliver digital excellence."}/>
      <WhyUs />
      <Clients />
      <OurTeam />
      <Testimonials />
      <BlogsHome posts={posts}/>
      <div className='bg-blue'>
      <ContactFormm />
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
  'https://blog.pixelpaymedia.com/wp-json/wp/v2/posts/?per_page=3&_embed'
  )
  const posts = await res.json()


  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}
