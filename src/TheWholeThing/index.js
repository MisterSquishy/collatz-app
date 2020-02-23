import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Confetti from 'react-confetti'

const TheWholeThing = () => {
  const [ subtext, setSubtext ] = useState("Enter a number")
  const [ value, setValue ] = useState("")
  const [ celebrate, setCelebrate ] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    setCelebrate(false)
  }

  const handleClick = () => {
    const intValue = parseInt(value)
    // todo rewrite to compute collatz value in separate function and do it first
    if (!intValue || intValue < 0) {
      setValue("")
      setSubtext("Enter a number")
    } else if (intValue === 1) {
      return
    } else if (intValue === 2) {
      setValue("1")
      setSubtext("Back to 1!")
      setCelebrate(true)
    } else if (intValue % 2) {
      setValue((3 * intValue) + 1)
      setSubtext(`= 3 × ${intValue} + 1`)
    } else {
      setValue(intValue / 2)
      setSubtext(`= ${intValue} / 2`)
    }
  }

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
      onChange={ handleChange }
      onKeyDown={ handleKeyDown }
    />
    <IconButton
      aria-label="go"
      size="large"
      className="the-icon"
      color="primary"
      disabled={ celebrate }
      onClick={ handleClick }
    >
      <ArrowRightIcon fontSize="inherit" />
    </IconButton>
  </>
}

export default TheWholeThing
