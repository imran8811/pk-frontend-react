import type { NextPage } from 'next'
import Header from '../components/header/header.comp'
import Footer from '../components/footer/footer.comp'
import Blog from '../components/blog/blog.comp'

const BlogPage: NextPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Header></Header>
          <Blog></Blog>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default BlogPage
