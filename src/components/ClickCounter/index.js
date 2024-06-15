import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {clicked: 0}

  increment = () => {
    this.setState(prevState => ({clicked: prevState.clicked + 1}))
  }

  render() {
    const {clicked} = this.state
    return (
      <div>
        <h1>
          The Button has been clicked <span>{clicked}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button type="button" onClick={this.increment}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
