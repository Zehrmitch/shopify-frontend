import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

const Like = (props) => {
	const toggle = (event) => {
		setLiked(!liked);
	};

	const [liked, setLiked] = React.useState(() => {
		const stickyValue = window.localStorage.getItem(props.id.title);
		return stickyValue !== null ? JSON.parse(stickyValue) : false;
	});

	React.useEffect(() => {
		window.localStorage.setItem(props.id.title, JSON.stringify(liked));
	}, [props.id.title, liked]);

	return (
		<div>
			<button onClick={toggle}>
				<div className='w-6 h-6'>
					{liked === false ? (
						<HeartIcon />
					) : (
						<a>
							<SolidHeartIcon />
						</a>
					)}
				</div>
			</button>
		</div>
	);
};

export default Like;
