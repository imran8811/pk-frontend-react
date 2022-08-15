import { FC, useEffect, useState } from "react"
import cls from 'classnames'
import styles from './shop.module.css'
import axios from "axios"
import { GET_PRODUCT_DETAILS, basePath } from "../../endpoints"
import { Product } from "../../models"
import { useRouter } from "next/dist/client/router";

const ProductDetails : FC = () => {
  const [productDetails, setProductDetails] = useState<Product[]>();
  const router = useRouter();  
  const { query, isReady } = useRouter();
  const { productId } = query;

  useEffect(() => {
    if(!isReady) {return}
    getProductDetails()
  }, [isReady])

  const getProductDetails = () => {
    axios.get(GET_PRODUCT_DETAILS+'/'+productId).then(res => {
      setProductDetails(res.data)
    })
  }

  return (
    <div className="row mb-5">
      {productDetails && productDetails.map(product => {
        return (
          <>
            <div className="col-lg-6">
              <img src={basePath+product.product_images.path+"/"+product.product_images.name} alt={product.product_images.name} />
            </div>
            <div className="col-lg-6 ps-5">
              <ul>
                <li className="row mb-1">
                  <span className="col-3">Article No.</span>
                  <span className="col-9">{product.article_no}</span>
                </li>
                <li className="row">
                  <span className="col-3">Fabric Details</span>
                  <span className="col-9">{product.fabric_weight + ' Ounce - ' + product.fabric}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Colors</span>
                  <span className="col-9">{product.colors}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Waist Sizes</span>
                  <span className="col-9">{product.sizes}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Wash Type</span>
                  <span className="col-9">{product.wash_type}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Category</span>
                  <span className="col-9 text-capitalize">{product.category}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Type</span>
                  <span className="col-9 text-capitalize">{product.type}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Shipping</span>
                  <span className="col-9">By Air, Sea, DHL etc</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Delivery</span>
                  <span className="col-9">30 days</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">MOQ</span>
                  <span className="col-9">{product.moq}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Price</span>
                  <span className="col-9">${product.price}</span>
                </li>
                <li className="row mb-1">
                  <span className="col-3">Payment Terms</span>
                  <span className="col-9">60% Advance 40% before shipping</span>
                </li>
              </ul>
              <div className="mb-3 text-end">
                <button type="button" className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </>
        )        
      })}
    </div>
  )
}

export default ProductDetails;