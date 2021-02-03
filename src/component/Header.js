import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
export default function Header () {
  // 非页面组件 查询
  const data = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return <div>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.author}</p>
  </div>
}
