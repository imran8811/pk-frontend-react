import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import About from '../components/about/about.comp'
import Footer from '../components/footer/footer.comp'
const AboutPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <About></About>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AboutPage
