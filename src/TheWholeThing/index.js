import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Confetti from 'react-confetti'

class TheWholeThing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subtext: "Enter a number"
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleClick()
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      celebrate: false,
    })
  }

  handleClick = () => {
    const { value } = this.state
    const intValue = parseInt(value)
    if (!intValue || intValue < 0) {
      this.setState({
        value: "",
        subtext: "Enter a number",
      })
    } else if (intValue === 1) {
      return
    } else if (intValue === 2) {
      this.setState({
        value: "1",
        subtext: "Back to 1!",
        celebrate: true,
      })
    } else if (intValue % 2) {
      this.setState({
        value: (3 * intValue) + 1,
        subtext: `= 3 × ${intValue} + 1`,
      })
    } else {
      this.setState({
        value: intValue / 2,
        subtext: `= ${intValue} / 2`,
      })
    }
  }

  render() {
    const {
      value,
      subtext,
      celebrate
    } = this.state

    return <>
      { celebrate &&
        <Confetti
        initialVelocityY="-5"
        numberOfPieces="500"
        wind="5"
      /> }
      <TextField
        className="the-field"
        type="Number"
        placeholder="2"
        helperText={ subtext }
        value={ value }
        onChange={ this.handleChange }
        onKeyDown={ this.handleKeyDown }
      />
      <IconButton
        aria-label="go"
        size="large"
        className="the-icon"
        color="primary"
        disabled={ celebrate }
        onClick={ this.handleClick }
      >
        <ArrowRightIcon fontSize="inherit" />
      </IconButton>
    </>
  }
}

export default TheWholeThing
