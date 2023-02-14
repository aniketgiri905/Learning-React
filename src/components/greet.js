import React from 'react'

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }

const Greet = props => {
    const {name, heroName} = props
  return (
    <div>
      <h1>
        {/* Hello {props.name}, please welcome {props.heroName} !! */}
        Hello {name}, please welcome {heroName} !!
      </h1>
      {props.children}
    </div>
  )
}

export default Greet