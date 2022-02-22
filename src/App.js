import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Footer from '../src/components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import * as authService from './services/authService';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import EventDetails from './pages/EventDetails/EventDetails';
import UpdateEvent from './pages/UpdateEvent/UpdateEvent';

const App = () => {
	const [user, setUser] = useState(authService.getUser());
	const navigate = useNavigate();

	const handleLogout = () => {
		authService.logout();
		setUser(null);
		navigate('/');
	};

	const handleSignupOrLogin = () => {
		setUser(authService.getUser());
		if (signupVisible) {
			handleSignupPopup()
		}
		if (loginVisible) {
			handleLoginPopup()
		}
	};

	const [signupVisible, setSignupVisible] = useState(false);

	const handleSignupPopup = () => {
		setSignupVisible(!signupVisible);
	};


	const [loginVisible, setLoginVisible] = useState(false);

	const handleLoginPopup = () => {
		setLoginVisible(!loginVisible);
	};


	return (
		<>
			<NavBar
				user={user}
				handleLogout={handleLogout}
				handleSignupPopup={handleSignupPopup}
				handleLoginPopup={handleLoginPopup}
			/>
			{signupVisible && (
				<Signup
					handleSignupOrLogin={handleSignupOrLogin}
					onClose={handleSignupPopup}
				/>
			)}

			{loginVisible && (
				<Login
					handleSignupOrLogin={handleSignupOrLogin}
					onClose={handleLoginPopup}
				/>
			)}

			<Routes>
				<Route path="/" element={<Landing user={user} />} />
				<Route
					path="/signup"
					element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route
					path="/login"
					element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/newEvent" element={<CreateEvent />} />
        <Route exact path="/events/:id/edit" element={<UpdateEvent />}/>
        <Route exact path="/events/:id" element={<EventDetails />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
