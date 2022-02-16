import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Wrapper } from './SignupForm-styles.js'
import * as authService from '../../services/authService'


const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <Wrapper>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className='input-icons'>
        <label htmlFor="name"></label>
        <i class="fa fa-user"></i>
        <input
        className="input-field"
        placeholder='Name'
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <i class="fa fa-at"></i>
        <input
        placeholder='Email'
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <i class="fa fa-key"></i>
        <input
        placeholder='Password'
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirm">
        </label>
        <i class="fa fa-key"></i>
        <input
        placeholder='Confirm Password'
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div>
        <input className="button" type="submit" value="Sign Up" disabled={isFormInvalid()}
        />
      </div>
    </form>
    </Wrapper>
  )
}

export default SignupForm