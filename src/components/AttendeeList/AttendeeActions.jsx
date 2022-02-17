import React from 'react';

const AttendeeActions = props => {
	// console.log(props);
  return (
		<>
			<button onClick={() => props.handleDeleteAttendee(props.attendee._id)}>
				X
			</button>
		</>
	);
};

export default AttendeeActions