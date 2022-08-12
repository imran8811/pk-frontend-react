import { FC } from "react";
import styles from "../footer/footer.module.css"

const KeywordNav: FC = () => {
  return (
    <div className={styles.footerLinksWrap}>
      <div className="holder boxes">
        <ul className={styles.footerLinks}>
          <li><a href="/jeans-pants/bulk-jeans">Bulk Jeans</a></li>
          <li><a href="/jeans-pants/buy-jeans-in-bulk">Buy Jeans in Bulk</a></li>
          <li><a href="/jeans-pants/cheap-mens-jeans-wholesale">Cheap Mens Jeans Wholesale</a></li>
          <li><a href="/jeans-pants/denim-manufacturers">Denim Manufacturers</a></li>
          <li><a href="/jeans-pants/denim-wholesale">Denim Wholesale</a></li>
        </ul>
        <ul className={styles.footerLinks}>
          <li><a href="/jeans-pants/denim-jeans-manufacturer">Denim Jeans Manufacturer</a></li>
          <li><a href="/jeans-pants/jeans-manufacturers">Jeans Manufacturers</a></li>
          <li><a href="/jeans-pants/jeans-manufacturer">Jeans Manufacturer</a></li>
          <li><a href="/jeans-pants/jeans-pants-wholesale">Jeans Pants Wholesale</a></li>
          <li><a href="/jeans-pants/jeans-factory">Jeans Factory</a></li>
        </ul>
        <ul className={styles.footerLinks}>
          <li><a href="/jeans-pants/jeans-pants-wholesale">Jeans Pant Wholesale</a></li>
          <li><a href="/jeans-pants/jean-manufacturers">Jean Manufacturers</a></li>
          <li><a href="/jeans-pants/jeans-supplier">Jeans Supplier</a></li>
          <li><a href="/jeans-pants/jeans-wholesale">Jeans Wholesale</a></li>
          <li><a href="/jeans-pants/wholesale-denim-jeans">Wholesale Denim Jeans</a></li>
        </ul>
        <ul className={styles.footerLinks}>
          <li><a href="/jeans-pants/wholesale-jeans-bulk">Wholesale Jeans Bulk</a></li>
          <li><a href="/jeans-pants/wholesale-jeans-mens">Wholesale Jeans Mens</a></li>
          <li><a href="/jeans-pants/wholesale-jeans-online">Wholesale Jeans Online</a></li>
          <li><a href="/jeans-pants/wholesale-jeans-suppliers">Wholesale Jeans Suppliers</a></li>
          <li><a href="/jeans-pants/wholesale-jeans">Wholesale Jeans</a></li>
        </ul>
      </div>
    </div>
  )
}

export default KeywordNav