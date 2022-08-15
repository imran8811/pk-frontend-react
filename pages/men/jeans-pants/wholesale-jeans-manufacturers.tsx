import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import WholesaleJeansManufacturers from '../../../components/landing-pages/wholesale-jeans-manufacturers'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const WholesaleJeansManufacturersPage: NextPage = () => {
  const messages = {
    keyword : "Wholesale Jeans Manufacturers",
    text : 'Best Wholesale Jeans Manufacturers'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <WholesaleJeansManufacturers keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default WholesaleJeansManufacturersPage;
  