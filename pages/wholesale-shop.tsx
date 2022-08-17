import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Shop from '../components/shop/shop.comp'
import Keywords from '../components/keywords/keywords.comp'
import axios from 'axios'
import { GET_PRODUCTS } from '../endpoints'

const ShopPage: NextPage = (data) => {
  return (
    <>
      <div className='container'>
        <Header />
        <Shop {...data} />
        <Keywords />
      </div>
      <Footer></Footer>
    </>
  )
}

export async function getServerSideProps() {
  const data = await axios.get(GET_PRODUCTS).then(res => res.data);
  return {
    props: { data }
  }
}

export default ShopPage;
