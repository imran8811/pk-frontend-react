import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import JeanManufacturers from '../../../components/landing-pages/jean-manufacturers'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const JeanManufacturersPage: NextPage = () => {
  const messages = {
    keyword : "Jean Manufacturers",
    text : 'Best Jean Manufacturers'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <JeanManufacturers keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default JeanManufacturersPage;
  