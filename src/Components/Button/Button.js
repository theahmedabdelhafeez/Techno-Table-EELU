import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({text, styles,onClick}) => {
  return (
    <Button
        style={styles}
        onClick={onClick}
    >
        {text}
    </Button>
  )
}

export default Btn