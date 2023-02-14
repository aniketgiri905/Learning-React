import React, {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            message: "Welcome Aniket"
        }
    }


    changeMessage() 
{
    this.setState({
        message: 'thanks for visiting'
    })
}

render() {
  return(
    <div>
      <h1>{this.state.message}</h1>
      <button onClick = {() => this.changeMessage()} >visited</button>
    </div>
  )
}

}

export default Welcome
