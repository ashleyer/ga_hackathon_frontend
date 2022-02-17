import React, { useRef, useEffect } from 'react';
import moment from 'moment';

const UpdateForm = ({
	handleChange,
	handleUpdateEvent,
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
			<h1>Update Event</h1>
			<form onSubmit={e => handleUpdateEvent(e)} ref={formElement}>
				<label>Event Name: </label> <br />
				<input
					required
					type="text"
					name="eventName"
					autoComplete="off"
					value={formData?.eventName}
					onChange={handleChange}
				/>{' '}
				<br />
				<label>Description: </label>
				<textarea
					type="text"
					name="description"
					autoComplete="off"
					rows="4"
					cols="35"
					value={formData?.description}
					onChange={handleChange}
				/>{' '}
				<br />
				<label>Start Date: </label>
				<input
					required
					type="date"
					name="startDate"
					value={moment(formData?.startDate).format('YYYY-MM-DD')}
					onChange={handleChange}
				/>{' '}
				<br />
				<label>End Date (optional): </label>
				<input
					type="date"
					name="endDate"
					value={moment(formData?.endDate).format('YYYY-MM-DD')}
					onChange={handleChange}
				/>{' '}
				<br />
				<label>Location: </label>
				<input
					required
					type="text"
					name="location"
					autoComplete="off"
					value={formData?.location}
					onChange={handleChange}
				/>{' '}
				<br />
				<button type="submit" disabled={!validForm}>
					Update Event
				</button>
			</form>
		</div>
	);
};

export default UpdateForm;
