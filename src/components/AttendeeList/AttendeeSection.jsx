import React, { useState } from 'react';
import AddAttendee from './AddAttendee';
import AttendeeList from './AttendeeList';
import * as eventService from '../../services/eventService';

const AttendeeSection = ({ event }) => {
	const [toggleNew, setToggleNew] = useState(false);
	const [attendees, setAttendees] = useState([]);

	const handleCreateAttendee = async formData => {
		try {
			const newAttendee = await eventService.addAttendee(event._id, formData);
			setAttendees([...attendees, newAttendee]);
		} catch (error) {
			throw error;
		}
	};

	const handleDeleteAttendee = async attendeeId => {
		try {
			await eventService.deleteAttendee(event._id, attendeeId);
			setAttendees(attendees.filter(attendee => attendee._id !== attendeeId));
		} catch (error) {
			throw error;
		}
	};

	const handleSetStatus = async (attendeeId, stat) => {
		try {
			const updatedAttendee = await eventService.setAttendeeStatus(
				event._id,
				attendeeId,
				stat
			);
			const updatedAttendeeList = attendees.map(attendee =>
				attendee._id === attendeeId ? updatedAttendee : attendee
			);
			setAttendees(updatedAttendeeList);
		} catch (error) {
			throw error;
		}
	};

	return (
		<>
			<h1>Attendees</h1>
			<AttendeeList />
			<AddAttendee
				event={event}
				attendees={attendees}
        setAttendees={setAttendees}
        handleCreateAttendee={handleCreateAttendee}
        setToggleNew={setToggleNew}
			/>
		</>
	);
};

export default AttendeeSection;
