import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import KevlarJeansManufacturers from '../../../components/landing-pages/kevlar-jeans-manufacturers'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const KevlarJeansManufacturersPage: NextPage = () => {
  const messages = {
    keyword : "Kevlar Jeans Manufacturers",
    text : 'Best Kevlar Jeans Manufacturers'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <KevlarJeansManufacturers keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default KevlarJeansManufacturersPage;
  