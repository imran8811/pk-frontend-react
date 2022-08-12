import type { NextPage } from 'next'
import Header from '../../components/admin/header'
import Footer from '../../components/admin/footer'
import AddProduct from '../../components/admin/add-product.comp'

const AddProductPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <AddProduct></AddProduct>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AddProductPage;
