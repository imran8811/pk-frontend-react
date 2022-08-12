import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Contact from '../components/contact/contact.comp'

const ContactPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <Contact></Contact>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ContactPage
