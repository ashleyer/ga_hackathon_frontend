import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import { Wrapper } from './LoginForm-styles.js'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <Wrapper>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email"></label>
        <i class="fa fa-at"></i>
        <input
        placeholder='Email'
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password" ></label>
        <i class="fa fa-key"></i>
        <input
        placeholder='Password'
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Log In</button>
      </div>
    </form>
    </Wrapper>
  )
}

export default LoginForm