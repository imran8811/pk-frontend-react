import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Factory from '../components/factory/factory.comp'

const FactoryPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <Factory></Factory>
      </div>
      <Footer></Footer>
    </>
  )
}

export default FactoryPage;
