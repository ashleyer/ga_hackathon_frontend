import React from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment'

const EventCard = ({event, handleDeleteEvent}) => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>{event.eventName}</h2>
      <h4>{moment(event.startDate).utc().format('MM/DD/YYYY')}</h4>
      <button onClick={() => navigate(`/events/${event._id}/edit`)}>
        Update
      </button>
      <button onClick={() => handleDeleteEvent(event._id)}>
        Delete
      </button>
    </div>
  )
}

export default EventCard