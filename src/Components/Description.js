import React, { useState, useEffect } from 'react';

const Description = (props) => {
	const [expand, setExpand] = useState(false);
	const [text, setText] = useState();

	useEffect(() => {
		setText(props.img.explanation.slice(0, 256) + '...');
	}, []);

	const toggle = () => {
		const temp = props.img.explanation;

		if (expand === false) {
			setText(temp);
		} else {
			setText(props.img.explanation.slice(0, 256) + '...');
		}

		setExpand(!expand);
	};

	return (
		<div>
			<button onClick={toggle}>
				<dd className='text-gray-500 text-sm p-4 text-justify'>
					{text}
				</dd>
			</button>
		</div>
	);
};

export default Description;
