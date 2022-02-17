import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../../services/eventService';
import { fetchEvents } from '../../redux/actions/eventActions';
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard/EventCard';
import { Wrapper } from './Dashboard-styles';

const Dashboard = () => {
	const events = useSelector(state => state.allEvents.events.events);
	const dispatch = useDispatch();
	const navigate = useNavigate()
	console.log('events', events);
	
	useEffect(() => {
		dispatch(fetchEvents());
	}, []);

	const handleDeleteEvent = async eventId => {
		try {
			await deleteEvent(eventId);
		} catch (error) {
			throw error;
		}
	};

	return (
		<Wrapper>
			<h1>Dashboard</h1>
			<button onClick={() => navigate('/newevent')}>Create New</button>
			{events?.map(event => (
				<Link key={event._id} to={`/events/${event._id}`}>
					<EventCard event={event} handleDeleteEvent={handleDeleteEvent} />
				</Link>
			))}
		</Wrapper>
	);
};

export default Dashboard;
