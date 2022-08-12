import type { NextPage } from 'next'
import Header from '../../components/admin/header'
import Footer from '../../components/admin/footer'
import AdminLogin from '../../components/admin/login.comp'

const AdminLoginPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <AdminLogin></AdminLogin>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AdminLoginPage;
