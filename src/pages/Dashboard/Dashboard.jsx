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
			navigate('/dashboard')
		} catch (error) {
			throw error;
		}
	};

	return (
		<Wrapper>
			{events?.map(event => (
				
				<Link key={event._id} to={`/events/${event._id}`}>
					<div className='event-box'>
					<EventCard event={event} handleDeleteEvent={handleDeleteEvent} />
					</div>
				</Link>
			))}
			<button className='new-event-btn' onClick={() => navigate('/newevent')}>New Event</button>
		</Wrapper>
	);
};

export default Dashboard;
