import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state2} = this.state;  //if we want to destructure state same procedure will be followed
    return (
      <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
      </div>
    )
  }
}

export default Welcome
