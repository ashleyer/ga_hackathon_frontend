import React, { useEffect, useState } from 'react';
import SplitSection from './SplitSection'

const Total = ({ budget, attendees }) => {
	const [total, setTotal] = useState(0);
	const [toggleSplit, setToggleSplit] = useState(false)

	useEffect(() => {
		const sum = () => {
			let summer = 0;
			budget.forEach(item => {
				summer += item.itemPrice;
			});
			setTotal(summer);
		};
		sum();
	}, [budget]);

	return (
		<>
		<h3>Total: ${total}</h3>
		<button onClick={() => setToggleSplit(!toggleSplit)}>
				Split the Total
			</button>
			{toggleSplit && 
				<SplitSection
				total={total}	
			/>
			}
		</>
	)
};

export default Total;
