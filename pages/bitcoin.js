import React from 'react'

class App extends React.Component {
  state = {
    data: {}
  }

  render(){
    const { data } = this.state
    return <div>App</div>
  }
}

export default App