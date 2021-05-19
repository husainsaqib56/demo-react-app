import React from 'react';

{/*const Greet = ({ name, heroName }) => {*/ }  //destructuring using function paranthesis
// console.log(props)
const Greet = props => {
  const { name, heroName } = props; // destructuring using function body 
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  )
}
export default Greet