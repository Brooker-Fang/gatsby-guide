import React from "react"
import { Link, graphql } from 'gatsby'

export default function Home(props) {
  const { data } = props
  return <div>
    Hello world!
    <Link to="/person/1">toPerson</Link>
    <Link to="/person/2">toPerson</Link>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.author}</p>
  </div>
}
// 页面组件 查询，会存于组件的props的data属性
export const query = graphql`
  query MyQuery {
    site {
      id
      siteMetadata {
        author
        title
      }
    }
  }
`