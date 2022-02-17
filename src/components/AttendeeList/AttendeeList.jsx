import React from 'react';
import AttendeeCard from './AttendeeCard'


const AttendeeList = ({attendees, handleDeleteAttendee, handleSetStatus}) => {
  return (
    <>
      {attendees?.map((attendee) => (
        <AttendeeCard
          handleDeleteAttendee={handleDeleteAttendee}
          handleSetStatus={handleSetStatus}
          attendee={attendee}
          key={attendee._id}
        />
      ))}
    </>
  )
}

export default AttendeeList