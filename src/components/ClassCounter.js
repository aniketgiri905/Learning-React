import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.incrementCount()}>Count</button>
      </div>
    )
  }
}

export default ClassCounter