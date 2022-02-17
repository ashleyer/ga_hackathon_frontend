import React from 'react';
import AttendeeCard from './AttendeeCard'

const AttendeeList = (props) => {
  return (
    <>
      {props.attendees?.map((attendee) => (
        <AttendeeCard
          {...props}
          attendee={attendee}
          key={attendee._id}
        />
      ))}
    </>
  )
}

export default AttendeeList