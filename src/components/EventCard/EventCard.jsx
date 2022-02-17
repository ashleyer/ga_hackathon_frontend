import React from 'react';
import moment from 'moment'

const EventCard = ({event, handleDeleteEvent}) => {
  return (
    <div>
      <h2>{event.eventName}</h2>
      <h4>{moment(event.startDate).utc().format('MM/DD/YYYY')}</h4>
      <button onClick={() => handleDeleteEvent(event._id)}>
        Delete
      </button>
    </div>
  )
}

export default EventCard