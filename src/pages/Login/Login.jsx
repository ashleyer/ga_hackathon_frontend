import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Modal from "../Signup/Modal";
import { Wrapper } from './Login-styles';


const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <Modal onClose={props.onClose}>
      <Wrapper>
    <main>
      <h3>Log In</h3>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
    </Wrapper>
    </Modal>
  )
}

export default LoginPage