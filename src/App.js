import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as authService from './services/authService'
import Footer from './components/Footer/Footer'

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

  const [loginVisible, setLoginVisible] = useState(false);

  const handleShowLogin = () => {
    setLoginVisible(true)
  };

  const handleHideLogin = () => {
    setLoginVisible(false)
  };
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} 
      handleShowSignup={handleShowSignup}
      handleShowLogin={handleShowLogin}
      />
       {signupVisible && <Signup handleSignupOrLogin={handleSignupOrLogin} 
       onClose={handleHideSignup}
        />}

      {loginVisible && <Login handleSignupOrLogin={handleSignupOrLogin} 
      onClose={handleHideLogin}/>}
          
       <Routes>  
        
      
        <Route path="/" element={<Landing user={user} />} />

       
      </Routes>
      <Footer/>
    </>
  )
}

export default App