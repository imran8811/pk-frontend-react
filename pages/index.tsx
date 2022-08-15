import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Home from '../components/home/home.comp'
import Keywords from '../components/keywords/keywords.comp'
import RatingReviews from '../components/rating-reviews/rating-reviews.comp'
import FAQS from '../components/faqs/faqs.comp'

const metaData = {
  title : "Jeans Manufacturer and Wholesale - Jeans Pants Jeans Jackets",
  description : "PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build",
  keywords : "Jeans pants Manufacturers, Jeans pants Wholesalers, Jeans Pants suppliers"
}

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content={metaData.keywords} />
        <meta name='description' content={metaData.description} />
        <meta name="google-site-verification" content="WlphvHVaVW1jVWUufak-1TfWkjBAvf271H95iMGwtSw" />
        <title>{metaData.title}</title>
      </Head>
      <div className='container'>
        <div className='row'>
          <Header />
          <Home />
        </div>
        <RatingReviews />
        <FAQS />
        <Keywords />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
