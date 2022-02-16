import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../../services/eventService';
import { fetchEvents } from '../../redux/actions/eventActions';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard/EventCard';

const Dashboard = () => {
	const events = useSelector(state => state.allEvents.events);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEvents());
	});

	const handleDeleteEvent = async eventId => {
		try {
			await deleteEvent(eventId);
		} catch (error) {
			throw error;
		}
	};

	return (
		<>
			<h1>Dashboard</h1>
			<button>Create New</button>
			{events?.map(event => (
				<Link key={event._id} to={`/events/${event._id}`}>
					<EventCard event={event} handleDeleteEvent={handleDeleteEvent} />
				</Link>
			))}
		</>
	);
};

export default Dashboard;
