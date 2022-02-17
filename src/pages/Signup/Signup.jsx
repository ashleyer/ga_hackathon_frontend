import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

import Modal from './Modal'
import { Wrapper } from './Signup-styles'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <Modal onClose={props.onClose}>
      <Wrapper>
      <h3>Create Account</h3>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
      </Wrapper>
    </Modal>
  )
}

export default Signup