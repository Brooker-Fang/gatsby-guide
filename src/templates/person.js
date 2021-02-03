import React, { Component } from 'react'

export class Person extends Component {
  render() {
    console.log(this.props)
    const { pageContext } = this.props
    const { name, age } = pageContext || {}
    return (
      <div>
        name: {name}
        age: {age}
      </div>
    )
  }
}

export default Person
