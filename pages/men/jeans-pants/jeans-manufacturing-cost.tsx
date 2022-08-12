import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import JeansManufacturingCost from '../../../components/landing-pages/jeans-manufacturing-cost'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const JeansManufacturingCostPage: NextPage = () => {
  const messages = {
    keyword : "Jeans Manufacturing Cost",
    text : 'Jeans manufacturing cost step by step'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <JeansManufacturingCost keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default JeansManufacturingCostPage;
  