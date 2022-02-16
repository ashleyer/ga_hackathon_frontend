import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events/`

export const getAllEvents = async () => {
  try { 
    const res = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const addEvent = async (event) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(event)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getEventById = async (eventId) => {
  try{
    const res = await fetch(`${BASE_URL}${eventId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const updateEvent = async (eventId, formData) => {
  try {
    const res = await fetch(`${BASE_URL}${eventId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteEvent = async (eventId) => {
  try {
    await fetch(`${BASE_URL}${eventId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ` + tokenService.getToken()}
    })
  } catch (error) {
    throw error
  }
}