import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import Footer from '../../../components/footer/footer.comp'
import ProductDetails from '../../../components/product-details/product-details.comp'
import Head from 'next/head'

const ProductDetailsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Details</title>
        {/* <link rel="shortcut icon" href={favIcon as string} /> */}
      </Head>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <ProductDetails></ProductDetails>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProductDetailsPage;
