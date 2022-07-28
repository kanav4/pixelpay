import Nav from '../components/header/header'
import Banner from '../components/banner/index'
import AboutUs from '../components/aboutUs'
import Service from '../components/services'
import Contact from '../components/contact'
import TechWeUse from '../components/techWeUse'
import Clients from '../components/ourClients'
import OurTeam from '../components/ourTeam'
import Testimonials from '../components/testimonials'
import BlogsHome from '../components/blogsHome'
import Footer from '../components/footer'
import WhyUs from '../components/whyUs'

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <AboutUs />
      <Service/>
      <TechWeUse/>
      <WhyUs />
      <Clients />
      <OurTeam />
      <Testimonials />
      <BlogsHome />
      <Contact />
      <Footer />
    </>
  )
}
