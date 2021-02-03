import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return <div>
    Hello world!
    <Link to="/person/1">toPerson</Link>
    <Link to="/person/2">toPerson</Link>
  </div>
}
