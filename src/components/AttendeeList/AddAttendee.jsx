import React, { useState } from 'react';
import { Wrapper } from '../BudgetItems/AddBudgetItem-styles';

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
		props.handleCreateAttendee(formData);
		props.setToggleNew(false);
	};

	return (
		
		<form onSubmit={handleSubmit}>
			<Wrapper>
			<label>Attendee Name: </label>
			<input
				type="text"
				autoComplete="off"
				name="attendeeName"
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
			</Wrapper>
		</form>
		
	);
};

export default AddAttendee;
