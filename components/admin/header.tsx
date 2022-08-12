import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";
import axios from 'axios'
import Router from 'next/router'

import { ADMIN_LOGOUT } from '../../endpoints'

const Header: FC = () => {
  const [session, setSession] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('adminToken')) {
      const token = localStorage.getItem('adminToken');
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`, 'accept': 'application/json'}
    } else {
      router.push('/admin/login')
    }
  }, [])

  const adminLogout = (e) => {
    e.preventDefault();
    axios.post(ADMIN_LOGOUT).then(res => {
      if(res.data.type === 'success') {
        localStorage.removeItem('adminToken');
        setSession(false);
        Router.push('/admin/login')
      }
    })
  }

  return (
    <header className='col-lg-12'>
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <a className="navbar-brand" href="/">
            <Image src="/images/logo.jpg" alt="logo" width={227} height={71} title="PK Apparel Home" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/admin/products">Products</a>
              <a className="nav-item nav-link" href="/admin/add-product">Add product</a>
              <a className="nav-item nav-link" href="/admin/create-admin-user">Create User</a>
              <a className="nav-item nav-link" href="/admin/login">Login</a>
              <a className="nav-item nav-link" onClick={(e) => adminLogout(e)}>Logout</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
)}

export default Header;
