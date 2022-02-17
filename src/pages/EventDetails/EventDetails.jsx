import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as eventService from '../../services/eventService';
import { fetchSingleEvent, fetchEvents } from '../../redux/actions/eventActions';
import { useSelector, useDispatch } from 'react-redux';

const EventDetails = () => {
	const { id } = useParams();
  const [event, setEvent] = useState();
  const events = useSelector((state) => state.allEvents.events.events)
  const dispatch = useDispatch()

  const findEvent = (id) => {
    const event = events.find(event => event._id === id)
    // console.log('event', event);
    setEvent(event)
  }

	useEffect(() => {
		dispatch(fetchSingleEvent(id));
	}, []);

  console.log('events', events);
  console.log('event', event)

	return (
		<>
			<h1>Event Details</h1>
			{/* <h1>{event.event.eventName}</h1>
			<h3>{event.event.description}</h3>
			<h3>{moment(event.event.startDate).utc().format('MM/DD/YYYY')}</h3>
			{event.endDate && (
				<h3>{moment(event.event.endDate).utc().format('MM/DD/YYYY')}</h3>
			)}
			<h3>{event.event.location}</h3> */}
		</>
	);
};

export default EventDetails;
