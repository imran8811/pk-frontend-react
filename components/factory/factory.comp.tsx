import { FC } from "react"
import styles from "./factory.module.css"

const Factory : FC = () => {
  return (
    <div className="row">
      <div className="section-wrap">
        <h2 className="section-heading">Fabric Store</h2>
        <ul>
          <li><strong>Area = 5000 x 5000 sqft</strong></li>
          <li><strong>Capacity = 1500000 mtr fabric storage</strong></li>
        </ul>
        <div className="clearfix">
          <div className="left">
            <img src="/images/denim-jackets-wholesalers.jpg" alt="denim-jackets-wholesalers" />
          </div>
          <div className="right">
            <img src="/images/hoodies-manufacturers.png" alt="hoodies-manufacturers" />
          </div>
        </div>
      </div>
      <div className="section-wrap">
        <h2 className="section-heading">Fabric Cutting</h2>
        <ul className="area-list">
          <li><strong>Area = 3000 x 3000 sqft</strong></li>
          <li><strong>3 Cutting tables</strong></li>
          <li><strong>Capacity = 10000 pcs cutting per day</strong></li>
        </ul>
        <div className="clearfix">
          <div className="left">
            <img src="/images/jeans-pants-wholesalers.jpg" alt="jeans-pants-wholesalers" />
          </div>
        </div>
      </div>
      <div className="section-wrap">
        <h2 className="section-heading">Stitching</h2>
        <ul className="area-list">
          <li><strong>Area = 10000 x 7000 sqft</strong></li>
          <li><strong>Machines = 450-500</strong></li>
          <li><strong>Workers = 500-600</strong></li>
          <li><strong>Capacity = 50000-60000 garments per month</strong></li>
        </ul>
        <div className="clearfix">
          <div className="left">
              <img src="/images/jeans-manufacturers.jpg" alt="jeans-manufacturers" />
          </div>
          <div className="right">
              <img src="/images/denim-shirts-wholesaler.jpg" alt="denim-shirts-wholesaler" />
          </div>
        </div>
      </div>
      <div className="section-wrap">
        <h2 className="section-heading">Washing</h2>
        <ul className="area-list">
          <li><strong>Area = 3000 x 1500 sqft</strong></li>
          <li><strong>Tumbles = 25</strong></li>
          <li><strong>Washing machines = 25+</strong></li>
          <li><strong>Rinsers = 10</strong></li>
          <li><strong>Capacity = 10000 garments per day</strong></li>
        </ul>
        <div className="clearfix">
          <div className="left">
            <img src="/images/denim-manufacturers.jpg" alt="denim-manufacturers" />
          </div>
          <div className="right">
            <img src="/images/denim-pants-suppliers-china.jpg" alt="denim-pants-suppliers-china" />
          </div>
        </div>
      </div>
      <div className="section-wrap">
        <h2 className="section-heading">Quality</h2>
        <ul className="area-list">
          <li><strong>Area = 5000 x 5000 sqft</strong></li>
          <li><strong>QA = 50+</strong></li>
          <li><strong>Capacity = 10000 pcs per day</strong></li>
        </ul>
        <div className="clearfix">
          <div className="left">
            <img src="/images/jeans-quality.jpg" alt="jeans-pants-wholesalers" />
          </div>
        </div>
      </div>
      <div className="section-wrap">
          <h2 className="section-heading">Packing</h2>
          <ul className="area-list">
            <li><strong>Area = 6000 x 4000 sqft</strong></li>
            <li><strong>Capacity = 15000 pcs of shipment storage</strong></li>
          </ul>
          <div className="clearfix">
              <div className="left">
                <img src="/images/jeans-shirts-manufacturers.jpg" alt="jeans-shirts-manufacturers" />
              </div>
              <div className="right">
                <img src="/images/jeans-wholesalers.jpg" alt="jeans-wholesalers" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Factory;