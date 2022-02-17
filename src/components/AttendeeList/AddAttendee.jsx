import React, { useState } from 'react';

const AddAttendee = props => {
	const [formData, setFormData] = useState({
		attendeeName: '',
		email: '',
	});

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddAttendee(formData);
		props.setToggleNew(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Attendee Name: </label>
			<input
				type="text"
				autoComplete="off"
				name="AttendeeName"
				placeholder="Name"
				onChange={handleChange}
			/>
			<label>Email: </label>
			<input
				type="text"
				autoComplete="off"
				name="email"
				placeholder="Email Address"
				onChange={handleChange}
			/>
			<button type="submit">Add Attendee</button>
		</form>
	);
};

export default AddAttendee;
