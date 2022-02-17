import React, { useEffect, useState } from 'react';

const Total = ({ budget, attendees }) => {
	const [total, setTotal] = useState(0);

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

	return <h3>Total: ${total}</h3>;
};

export default Total;
