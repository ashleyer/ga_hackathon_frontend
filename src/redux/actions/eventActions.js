import { ActionTypes } from '../contants/action-types'
import {getAllEvents, getEventById } from '../../services/eventService'

export const fetchEvents = () => async (dispatch) => {
  const response = await getAllEvents()
  dispatch({type: ActionTypes.FETCH_EVENTS, payload: response})
}

export const setEvents = (events) => {
  return {
    type: ActionTypes.SET_EVENTS,
    payload: events
  }
}

export const fetchSingleEvent = (id) => async (dispatch) => {
  const response = await getEventById(id)
  dispatch({type: ActionTypes.FETCH_SINGLE_EVENT, payload: response})
}

export const setSingleEvent = (event) => {
  return {
    type: ActionTypes.SET_SINGLE_EVENT,
    payload: event
  }
}