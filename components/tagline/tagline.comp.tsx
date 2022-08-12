import type { NextPage } from 'next'
import styles from './tagline.module.css';
import cls from 'classnames'

const Tagline: NextPage = ({headingText, paraText}) => {
  return (
    <div className={cls(styles.tagline, 'mb-5')}>
      <div className='col-6 text-center pt-5 text-white'>
        <h1 className={cls(styles.heading, "mb-0")}>{headingText}</h1>
        <p className={styles.para}>{paraText}</p>
      </div>
    </div>
  )
}

export default Tagline;
