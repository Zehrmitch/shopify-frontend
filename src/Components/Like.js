import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

const Like = () => {
	const [liked, setLiked] = useState(false);

	const toggle = (event) => {
		setLiked(!liked);
		event.preventDefault();
	};

	return (
		<div>
			<button onClick={toggle}>
				<div className='w-6 h-6'>
					{liked === false ? <SolidHeartIcon /> : <HeartIcon />}
				</div>
			</button>
		</div>
	);
};

export default Like;
