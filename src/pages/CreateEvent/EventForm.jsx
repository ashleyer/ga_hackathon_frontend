import React, { useEffect, useRef } from 'react';
import { Wrapper } from './EventForm-styles';

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
		<Wrapper>
			<div className="event-form">
				<form onSubmit={e => handleCreateEvent(e)} ref={formElement}>
					<label>Event Name </label>
					<input
						required
						type="text"
						name="eventName"
						autoComplete="off"
						onChange={handleChange}
					/>
					<br />
					<label>Description </label>
					<textarea
						type="text"
						name="description"
						autoComplete="off"
						rows="4"
						cols="35"
						onChange={handleChange}
					/>
					<br />
					<div className='end-form'>
					<div className='date'>
					<label>Start Date </label>
					<input
						required
						type="date"
						name="startDate"
						onChange={handleChange}
					/>
					<br />
					<label>End Date (optional) </label>
					<input type="date" name="endDate" onChange={handleChange} />
					</div>
					<br />
					<div className='location'>
					<label>Location </label>
					<input
						required
						type="text"
						name="location"
						autoComplete="off"
						onChange={handleChange}
					/>
					</div>
					</div>
					<br />
					<button type="submit" disabled={!validForm}>
						Create Event
					</button>
				</form>
			</div>
		</Wrapper>
	);
};

export default EventForm;
