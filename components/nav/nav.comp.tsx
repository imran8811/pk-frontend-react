import { FC } from "react"
import styles from '../header/header.module.css'

const Nav: FC = () => {
  return (
    <nav className={styles.mainMenu}>
      <ul>
        <li><a href="/wholesale-shop">Wholesale Shop</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/factory">Factory</a></li>
        <li><a href="/certifications">Certifications</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </nav>
  )
}

export default Nav;