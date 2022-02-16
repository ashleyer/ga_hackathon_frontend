import React from 'react';
import { deleteEvent } from '../../services/eventService';

const Dashboard = () => {
	
	const handleDeleteEvent = async (eventId) => {
		try {
			await deleteEvent(eventId)
			
		} catch (error) {
			throw error
		}
	}

  return (
		<>
			<h1>Dashboard</h1>
      <button>Create New</button>
		</>
	);
};

export default Dashboard;
