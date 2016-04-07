import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    increment: PropTypes.number.isRequired,
  };
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 30000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment,
    })
  }

  render() {
    const { color, increment } = this.props
    return (
      <div>
        <h1 style={{ color }}>
          Counter ({increment}): {this.state.counter}
        </h1>
        <p>Updates every 30 seconds.</p>
      </div>
    )
  }
}
