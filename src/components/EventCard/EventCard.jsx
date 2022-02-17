import React from 'react';
import moment from 'moment'
import { Wrapper } from './EventCard-styles';

const EventCard = ({event, handleDeleteEvent}) => {
  return (
    <Wrapper>
      <h2>{event.eventName}</h2>
      <h4>{moment(event.startDate).utc().format('MM/DD/YYYY')}</h4>
      <button onClick={() => handleDeleteEvent(event._id)}>
        Delete
      </button>
    </Wrapper>
  )
}

export default EventCard