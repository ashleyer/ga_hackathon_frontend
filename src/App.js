import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Footer from '../src/components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import * as authService from './services/authService';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import EventDetails from './pages/EventDetails/EventDetails';
import { useSelector } from 'react-redux';

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
	};

	const [signupVisible, setSignupVisible] = useState(false);

	const handleShowSignup = () => {
		setSignupVisible(true);
	};

	const handleHideSignup = () => {
		setSignupVisible(false);
	};

	const [loginVisible, setLoginVisible] = useState(false);

	const handleShowLogin = () => {
		setLoginVisible(true);
	};

	const handleHideLogin = () => {
		setLoginVisible(false);
	};

	return (
		<>
			<NavBar
				user={user}
				handleLogout={handleLogout}
				handleShowSignup={handleShowSignup}
				handleShowLogin={handleShowLogin}
			/>
			{signupVisible && (
				<Signup
					handleSignupOrLogin={handleSignupOrLogin}
					onClose={handleHideSignup}
				/>
			)}

			{loginVisible && (
				<Login
					handleSignupOrLogin={handleSignupOrLogin}
					onClose={handleHideLogin}
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
				<Route path="/events/:id" element={<EventDetails />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
