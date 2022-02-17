import { ActionTypes } from '../contants/action-types'

const initialState = {
  events: [],
  singleEvent: {}
}

export const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EVENTS:
      return { ...state, events: payload };
    case ActionTypes.FETCH_EVENTS:
      return { ...state, events: payload };
    case ActionTypes.SET_SINGLE_EVENT:
      return { ...state, singleEvent: payload };
    case ActionTypes.FETCH_SINGLE_EVENT:
      return {...state, singleEvent: payload}
    default:
      return state;
  }
}