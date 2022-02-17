import * as tokenService from './tokenService';
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events/`;

export const getAllEvents = async () => {
	try {
		const res = await fetch(`${BASE_URL}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const addEvent = async event => {
	try {
		const res = await fetch(`${BASE_URL}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
			body: JSON.stringify(event),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const getEventById = async eventId => {
	try {
		const res = await fetch(`${BASE_URL}${eventId}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const updateEvent = async (eventId, formData) => {
	try {
		const res = await fetch(`${BASE_URL}${eventId}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(formData),
		});
		const data = await res.json();
		// console.log(data.updatedEvent);
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteEvent = async eventId => {
	try {
		await fetch(`${BASE_URL}${eventId}`, {
			method: 'DELETE',
			headers: { Authorization: `Bearer ` + tokenService.getToken() },
		});
	} catch (error) {
		throw error;
	}
};

export const addAttendee = async (eventId, attendee) => {
	try {
		const res = await fetch(`${BASE_URL}${eventId}/attendees`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
			body: JSON.stringify(attendee),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const setAttendeeStatus = async (eventId, attendeeId, stat) => {
	try {
		const res = await fetch(`${BASE_URL}${eventId}/attendees/${attendeeId}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ` + tokenService.getToken(),
			},
			body: JSON.stringify({
				status: stat,
			}),
		});
    const data = await res.json();
    console.log('data', data);
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteAttendee = async (eventId, attendeeId) => {
	try {
		await fetch(`${BASE_URL}${eventId}/attendees/${attendeeId}`, {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
		});
	} catch (error) {
		throw error;
	}
};

export const addBudgetItem = async (eventId, budgetItem) => {
	try {
		const res = await fetch(`${BASE_URL}${eventId}/budget`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
			body: JSON.stringify(budgetItem),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteBudgetItem = async (eventId, budgetItemId) => {
  try {
    await fetch(`${BASE_URL}${eventId}/budget/${budgetItemId}`, {
      method: "DELETE", 
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
  } catch (error) {
    throw error
  }
}