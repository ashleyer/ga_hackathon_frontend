import { ActionTypes } from '../contants/action-types'
import {getAllEvents } from '../../services/eventService'

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