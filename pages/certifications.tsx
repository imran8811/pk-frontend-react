import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Certifications from '../components/certifications/certifications.comp'
import Footer from '../components/footer/footer.comp'
const AboutPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <Certifications></Certifications>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AboutPage
