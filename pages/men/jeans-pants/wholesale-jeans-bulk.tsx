import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import WholesaleJeansBulk from '../../../components/landing-pages/wholsale-jeans-bulk'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const WholesaleJeansBulkPage: NextPage = () => {
  const messages = {
    keyword : "Jeans Suppliers",
    text : 'Best Jeans Supplier'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <WholesaleJeansBulk keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default WholesaleJeansBulkPage;