import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import moment from 'moment';
import * as eventService from '../../services/eventService';
import AttendeeSection from '../../components/AttendeeList/AttendeeSection';
import BudgetSection from '../../components/BudgetItems/BudgetSection'

const EventDetails = () => {
	const { id } = useParams();
	const [event, setEvent] = useState({});
	const [attendees, setAttendees] = useState([]);
	const [budget, setBudget] = useState([])
	const navigate = useNavigate()

	const handleDeleteEvent = async eventId => {
		try {
			await eventService.deleteEvent(eventId);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const eventData = await eventService.getEventById(id);
				setEvent(eventData.event);
				setAttendees(eventData.event.attendeeList);
				setBudget(eventData.event.budgetItems)
			} catch (error) {
				throw error;
			}
		};
		fetchEvent();
	}, [id]);

	return (
		<>
			<h1>Event Details</h1>
			<h1>{event.eventName}</h1>
			<h3>{event.description}</h3>
			<h3>{moment(event.startDate).utc().format('MM/DD/YYYY')}</h3>
			{event.endDate && (
				<h3>{moment(event.endDate).utc().format('MM/DD/YYYY')}</h3>
			)}
			<h3>{event.location}</h3>
			<button onClick={() => navigate(`/events/${event._id}/edit`)}>
        Update
      </button>
      <button onClick={() => handleDeleteEvent(event._id)}>
        Delete
      </button>
			<AttendeeSection
				event={event}
				attendees={attendees}
				setAttendees={setAttendees}
			/>
			<BudgetSection
				event={event}
				attendees={attendees}
				budget={budget}
				setBudget={setBudget}
			/>
		</>
	);
};

export default EventDetails;
