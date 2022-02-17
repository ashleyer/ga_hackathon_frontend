import React from 'react';
import AttendeeActions from './AttendeeActions';

const AttendeeCard = props => {
  return (
		<div>
			<p>{props.attendee.attendeeName}</p>
			<p>{props.attendee.email}</p>
			<select
				name="attendee.status"
				value={props.attendee.status}
				onChange={e =>
					props.handleSetStatus(props.attendee._id, e.target.value)
				}
			>
				<option value="Unpaid">Unpaid</option>
				<option value="Paid">Paid</option>
			</select>
			<AttendeeActions {...props} />
		</div>
	);
};

export default AttendeeCard;
