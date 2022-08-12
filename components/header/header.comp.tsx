import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../header/header.module.css'
import Nav from '../nav/nav.comp'

const Header: NextPage = () => {
  return (
    <header className='row border-bottom border-info mb-4'>
      <div className="col-lg-4 pt-3">
        <Image src="/images/logo.jpg" alt="logo" width={227} height={71} title="PK Apparel Home" />
      </div>
      <div className='col-lg-8 mt-4 text-end'>
        <Nav></Nav>
      </div>
    </header>
)}

export default Header;
