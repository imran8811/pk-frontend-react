import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Shop from '../components/shop/shop.comp'
import Keywords from '../components/footer/keywords.comp'

const ShopPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <Shop></Shop>
      </div>
      <Keywords></Keywords>
      <Footer></Footer>
    </>
  )
}

export default ShopPage;