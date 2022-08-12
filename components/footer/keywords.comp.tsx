import { FC } from "react";
import Nav from "../nav/nav.comp";
import styles from './footer.module.css'

const Keywords: FC = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <ul className="col-lg-3">
          <li><a href="/pages/bulk-jeans">Bulk Jeans</a></li>
          <li><a href="/pages/buy-jeans-in-bulk">Buy Jeans in Bulk</a></li>
          <li><a href="/pages/women-jeans-wholesale">Women Jeans Wholesale</a></li>
          <li><a href="/pages/denim-manufacturers">Denim Manufacturers</a></li>
          <li><a href="/pages/women-jeans-manufacturer">Women Jeans Manufacturer</a></li>
        </ul>
        <ul className="col-lg-3">
          <li><a href="/pages/denim-jeans-manufacturer">Denim Jeans Manufacturer</a></li>
          <li><a href="/pages/jeans-manufacturers">Jeans Manufacturers</a></li>
          <li><a href="/pages/jeans-manufacturer">Jeans Manufacturer</a></li>
          <li><a href="/pages/pages/jeans-pants-wholesale">Jeans Pants Wholesale</a></li>
          <li><a href="/pages/pages/jeans-factory">Jeans Factory</a></li>
        </ul>
        <ul className="col-lg-3">
          <li><a href="/pages/jeans-pants-wholesale">Jeans Pant Wholesale</a></li>
          <li><a href="/pages/jean-manufacturers">Jean Manufacturers</a></li>
          <li><a href="/pages/jeans-supplier">Jeans Supplier</a></li>
          <li><a href="/pages/jeans-wholesale">Jeans Wholesale</a></li>
          <li><a href="/pages/wholesale-denim-jeans">Wholesale Denim Jeans</a></li>
        </ul>
        <ul className="col-lg-3">
          <li><a href="/pages/wholesale-jeans-bulk">Wholesale Jeans Bulk</a></li>
          <li><a href="/pages/wholesale-jeans-mens">Wholesale Jeans Mens</a></li>
          <li><a href="/pages/wholesale-jeans-online">Wholesale Jeans Online</a></li>
          <li><a href="/pages/wholesale-jeans-suppliers">Wholesale Jeans Suppliers</a></li>
          <li><a href="/pages/wholesale-jeans">Wholesale Jeans</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Keywords;