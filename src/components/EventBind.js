// rce

import React, { Component } from 'react'

export class EventBind extends Component {

    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
          message:'hello'
      }

      this.callMsg = this.callMsg.bind(this)
    }
    
    // callMsg(){
    //     this.setState({
    //         message:'Good Bye'
    //     })
    // }

     callMsg = () => {
        this.setState({
            message:'Good Bye'
        })
    }
  
    
  render() {
     const {message} = this.state
    return (
      <div>
        <h3>{message}</h3>
        {/* <button onClick={this.callMsg.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.callMsg()}>Click</button> */}
        <button onClick={this.callMsg}>Click</button>
      </div>
    )
  }
}

export default EventBind
