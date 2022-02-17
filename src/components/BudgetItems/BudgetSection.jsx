import React, { useState } from 'react';
import BudgetList from './BudgetList';
import AddBudgetItem from './AddBudgetItem';
import SplitSection from './SplitSection'
import * as eventService from '../../services/eventService';
import Total from './Total';
import { Wrapper } from './BudgetSection-styles';

const BudgetSection = ({ event, attendees, budget, setBudget }) => {
	const [toggleNew, setToggleNew] = useState(false);

	const handleCreateBudgetItem = async formData => {
		try {
			const newBudgetItem = await eventService.addBudgetItem(
				event._id,
				formData
			);
			setBudget([...budget, newBudgetItem]);
		} catch (error) {
			throw error;
		}
	};

	const handleDeleteBudgetItem = async budgetItemId => {
		try {
			await eventService.deleteBudgetItem(event._id, budgetItemId);
			setBudget(budget.filter(item => item._id !== budgetItemId));
		} catch (error) {
			throw error;
		}
	};

	return (
		<Wrapper>
			<h1>Budget</h1>
			<button onClick={() => setToggleNew(!toggleNew)}>
				Add New Budget Item
			</button>
			<BudgetList
				budget={budget}
				handleDeleteBudgetItem={handleDeleteBudgetItem}
			/>
			{toggleNew && (
				<AddBudgetItem
					event={event}
					budget={budget}
					setBudget={setBudget}
					handleCreateBudgetItem={handleCreateBudgetItem}
					setToggleNew={setToggleNew}
				/>
      )}
      <Total
        budget={budget}
        attendees={attendees}
      />
		</Wrapper>

	);
};

export default BudgetSection;
