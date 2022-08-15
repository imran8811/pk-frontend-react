import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import WholesaleWomenJeans from '../../../components/landing-pages/wholesale-women-jeans'
import Footer from '../../../components/footer/footer.comp'
import Head from 'next/head'

const WholesaleWomenJeansPage: NextPage = () => {
  const messages = {
    keyword : "Wholesale Women Jeans",
    text : 'Best Wholesale Women Jeans'
  }
  return (
    <>
      <Head>
        <title>{messages.keyword } - {messages.text}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Header></Header>
        <WholesaleWomenJeans keyword={messages.keyword} text={messages.text} />
      </div>
      <Footer></Footer>
    </>
  )
}
export default WholesaleWomenJeansPage;
  