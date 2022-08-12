import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import JeansPantsManufacturers from '../../../components/landing-pages/jeans-pants-manufacturers'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const JeansPantsManufacturersPage: NextPage = () => {
  const messages = {
    keyword : "Jeans Pants Manufacturers",
    text : 'Best Jeans Pants Manufacturers'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <JeansPantsManufacturers keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default JeansPantsManufacturersPage;
  