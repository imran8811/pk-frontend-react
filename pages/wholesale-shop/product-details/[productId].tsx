import type { NextPage } from 'next'
import Header from '../../../components/header/header.comp'
import Footer from '../../../components/footer/footer.comp'
import ProductDetails from '../../../components/product-details/product-details.comp'
import Head from 'next/head';
import axios from 'axios';
import { GET_PRODUCT_DETAILS } from '../../../endpoints';
import { Product } from '../../../models';

const ProductDetailsPage: NextPage = (data) => {
  return (
    <>
      <Head>
        <title>Product Details</title>
        {/* <link rel="shortcut icon" href={favIcon as string} /> */}
      </Head>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <ProductDetails {...data} />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
export async function getServerSideProps(context) {
  const productId = context.params.productId;
  const data = await axios.get(GET_PRODUCT_DETAILS + '/' + productId).then(res => res.data);
  return {
    props: { data }
  }
}

export default ProductDetailsPage;
