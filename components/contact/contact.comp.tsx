import { FC } from "react"
import styles from './contact.module.css'

const Contact : FC = () => {
  return (
    <div className="mb-3">
      <strong className={styles.pageTitle}>Contact Us</strong>
      <div className={styles.contactWrap}>
        <div className={styles.sidebar}>
          <div className={styles.singAdd}>
            <h2>Liaison Office</h2><br />
            <ul>
              <li>Lucky Hotel Stop, Ferozepur road, <br />Lahore, Pakistan</li>
              <li>
                <span>Tel: </span>
                <span>(+92) 3 000-911-000</span>
              </li>
              <li>
                <span>Email: </span>
                <span><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#107;&#097;&#112;&#112;&#097;&#114;&#101;&#108;&#046;&#099;&#111;&#109;">&#105;&#110;&#102;&#111;&#064;&#112;&#107;&#097;&#112;&#112;&#097;&#114;&#101;&#108;&#046;&#099;&#111;&#109;</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.singAdd}>
            <h2>Factory</h2><br /> 
            <ul>
              <li>21-KM, Ferozepur road, <br />Lahore, Pakistan</li>
              <li>
                <span>Email: </span>
                <span><a href="mailto:&#105;&#109;&#114;&#097;&#110;&#064;&#112;&#107;&#097;&#112;&#112;&#097;&#114;&#101;&#108;&#046;&#099;&#111;&#109;">&#105;&#109;&#114;&#097;&#110;&#064;&#112;&#107;&#097;&#112;&#112;&#097;&#114;&#101;&#108;&#046;&#099;&#111;&#109;</a></span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles.mapOuter}>
          <div className="gmap_canvas">
            <iframe 
              className="gmap_iframe" 
              width="100%"
              height="600" 
              frameBorder="0" 
              scrolling="no" 
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pk apparel&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;