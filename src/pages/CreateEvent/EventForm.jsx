import React, { useEffect, useRef } from 'react';
import './eventForm.css';

const EventForm = ({
	handleCreateEvent,
	handleChange,
	validForm,
	setValidForm,
	formData,
}) => {
	const formElement = useRef();

	useEffect(() => {
		formElement.current.checkValidity()
			? setValidForm(true)
			: setValidForm(false);
	}, [formData]);

	return (
		<div>
			<div className="event-form">
				<form onSubmit={e => handleCreateEvent(e)} ref={formElement}>
					<label>Event Name: </label>
					<input
						required
						type="text"
						name="eventName"
						autoComplete="off"
						placeholder="Event Name"
						onChange={handleChange}
					/>
					<br />
					<label>Description : </label>
					<textarea
						required
						type="text"
						name="eventName"
						autoComplete="off"
						rows="4"
						cols="35"
						placeholder="Description"
						onChange={handleChange}
					/>
					<br />
					<label>Start Date: </label>
					<input
						required
						type="date"
						name="startDate"
						onChange={handleChange}
					/>
					<br />
					<label>End Date (optional): </label>
					<input type="date" name="endDate" onChange={handleChange} />
					<br />
					<label>Location: </label>
					<input
						required
						type="text"
						name="location"
						autoComplete="off"
						placeholder="Location"
						onChange={handleChange}
					/>
					<br />
					<button type="submit" disabled={!validForm}>
						Create Event
					</button>
				</form>
			</div>
		</div>
	);
};

export default EventForm;