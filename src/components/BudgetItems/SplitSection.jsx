import React, { useState } from 'react';

const SplitSection = ({ total }) => {
	const [text, setText] = useState('');
	const [splitCost, setSplitCost]  = useState(total)

	const handleSubmit = e => {
    e.preventDefault();
    console.log(total, text);
    let divided = total / parseInt(text);
    console.log(divided);
		setSplitCost(divided);
  };
  
  console.log(splitCost);
  
	return (
		<form onSubmit={handleSubmit}>
			<h1>
				${total} split among{' '}
				<input
					type="number"
					value={text}
					onChange={e => setText(e.target.value)}
				/>{' '}
				people
			</h1>
			<button type="submit">Split Total</button>
			<h1>
				${splitCost.toFixed(2)} per person
			</h1>
		</form>
	);
};

export default SplitSection;
