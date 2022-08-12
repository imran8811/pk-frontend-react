import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import WholesaleDenimJeansSuppliers from '../../../components/landing-pages/wholesale-denim-jeans-suppliers'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const WholesaleDenimJeansSuppliersPage: NextPage = () => {
  const messages = {
    keyword : "Wholesale Denim Jeans Suppliers",
    text : 'Best Wholesale Denim Jeans Suppliers'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <WholesaleDenimJeansSuppliers keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default WholesaleDenimJeansSuppliersPage;
  