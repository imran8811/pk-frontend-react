import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Home from '../components/home/home.comp'

const HomePage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <Home></Home>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default HomePage
