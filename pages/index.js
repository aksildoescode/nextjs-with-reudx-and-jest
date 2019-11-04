import axios from 'axios'
import { Button } from 'baseui/button'

const IndexPage = () => {
  return (
    <p>
      <Button onClick={() => alert('click')}>Hello</Button>
    </p>
  )
}

IndexPage.getInitialProps = async ({ store }) => {
  // store.dispatch(setLoaderStart())
  // let cat
  // try {
  //   const res = await axios.get(`${config.URL}/categories`)
  //   const categories = await res.data
  //   cat = await categories.map(category => {
  //     return {
  //       id: category.id,
  //       name: category.name,
  //       img: `${config.URL}${category.img.url}`,
  //     }
  //   })
  //   await store.dispatch(setCategories(cat))
  // } catch (error) {
  //   store.dispatch(setError(error.message))
  // }
  // store.dispatch(setLoaderEnd())
  // return {
  //   categories: cat,
  // }
}

export default IndexPage
