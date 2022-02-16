import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../../redux/actions/eventActions';

const Dashboard = () => {
	const events = useSelector(state => state.allEvents.events);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEvents());
	});

	return (
		<>
			<h1>Dashboard</h1>
			<button>Create New</button>
			{events?.map((event) => (
				<Link key={event._id} to={`/events/${event._id}`}>
					
				</Link>
			))}
		</>
	);
};

export default Dashboard;
