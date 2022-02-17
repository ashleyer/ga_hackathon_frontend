import React, { useState } from 'react';

const AddBudgetItem = props => {
	const [formData, setFormData] = useState({
		itemName: '',
		itemPrice: '',
	});

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.handleCreateBudgetItem(formData);
		props.setToggleNew(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Item: </label>
			<input
				type="text"
				autoComplete="off"
				name="itemName"
				placeholder="item"
				onChange={handleChange}
			/>
			<label>Price: </label>
			<input
				type="number"
				name="itemPrice"
				placeholder="Price"
				onChange={handleChange}
      />
      <button type="submit">Add Budget Item</button>
		</form>
	);
};

export default AddBudgetItem