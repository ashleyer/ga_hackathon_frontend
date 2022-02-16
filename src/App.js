import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [signupVisible, setSignupVisible] = useState(false);

  const handleShowSignup = () => {
    setSignupVisible(true)
  };

  const handleHideSignup = () => {
    setSignupVisible(false)
  };
  
  console.log(signupVisible)
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} 
      handleShowSignup={handleShowSignup}
      />
       {signupVisible && <Signup handleSignupOrLogin={handleSignupOrLogin} 
       onClose={handleHideSignup}
        />}
      <Routes>
        <Route path="/" element={<Landing user={user} />} />

        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
      </Routes>
    </>
  )
}

export default App