import React from 'react';
import AttendeeActions from './AttendeeActions';
import {Wrapper} from './AttendeeCard-styles'

const AttendeeCard = props => {
  return (
		<Wrapper>
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
		</Wrapper>
	);
};

export default AttendeeCard;
