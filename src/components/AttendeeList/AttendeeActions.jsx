import React from 'react';

const AttendeeActions = props => {
  return (
		<>
			<button onClick={() => props.handleDeleteAttendee(props.attendee._id)}>
				X
			</button>
		</>
	);
};

export default AttendeeActions