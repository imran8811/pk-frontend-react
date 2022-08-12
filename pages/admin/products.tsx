import type { NextPage } from 'next'
import Header from '../../components/admin/header'
import Footer from '../../components/admin/footer'
import Products from '../../components/admin/products.comp'

const ProductsPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <Products></Products>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ProductsPage;
