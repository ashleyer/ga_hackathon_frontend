import React from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment'
import { Wrapper } from './EventCard-styles';

const EventCard = ({event, handleDeleteEvent}) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <h2>{event.eventName}</h2>
      <h4>{moment(event.startDate).utc().format('MM/DD/YYYY')}</h4>
      <button onClick={() => navigate(`/events/${event._id}/edit`)}>
        Update
      </button>
      <button onClick={() => handleDeleteEvent(event._id)}>
        Delete
      </button>
    </Wrapper>
  )
}

export default EventCard