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
    <div className="row">
      {productDetails && productDetails.map(product => {
        return (
          <>
            <div className="col-lg-6">
              <img src={basePath+product.product_images.path+"/"+product.product_images.name} alt={product.product_images.name} />
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <span>Article No.</span>
                  <span>{product.article_no}</span>
                </li>
                <li>
                  <span>Fabric Details</span>
                  <span>{product.fabric_weight + 'OZ' + product.fabric}</span>
                </li>
                <li>
                  <span>Colors</span>
                  <span>{product.colors}</span>
                </li>
                <li>
                  <span>Sizes</span>
                  <span>{product.sizes}</span>
                </li>
                <li>
                  <span>Wash Type</span>
                  <span>{product.wash_type}</span>
                </li>
                <li>
                  <span>Category</span>
                  <span>{product.category}</span>
                </li>
                <li>
                  <span>Type</span>
                  <span>{product.type}</span>
                </li>
                <li>
                  <span>Shipping</span>
                  <span>By Air, Sea, DHL etc</span>
                </li>
                <li>
                  <span>Delivery</span>
                  <span>30 days</span>
                </li>
                <li>
                  <span>MOQ</span>
                  <span>{product.moq}</span>
                </li>
                <li>
                  <span>Price</span>
                  <span>${product.price}</span>
                </li>
                <li>
                  <span>Instructions</span>
                  <textarea rows={5} className="form-control mb-3"></textarea>
                </li>
              </ul>
              <div className="mb-3">
                <button type="button" className="btn btn-primary">Place Order</button>
              </div>
            </div>
          </>
        )        
      })

      }
    </div>
  )
}

export default ProductDetails;