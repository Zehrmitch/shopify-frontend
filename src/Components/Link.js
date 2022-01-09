import { LinkIcon, CheckIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

const Link = (props) => {
	const [copied, setCopied] = useState(false);

	const copy = (event) => {
		setCopied(true);
		console.log(props.img.url);
		navigator.clipboard.writeText(props.img.url);
		setTimeout(reset, 3000);
	};

	const reset = (event) => {
		setCopied(false);
	};

	return (
		<div>
			<button onClick={copy}>
				<div className='w-6 h-6'>
					{copied === false ? (
						<LinkIcon />
					) : (
						<div>
							<CheckIcon /> <p>{'  '}Copied!</p>
						</div>
					)}
				</div>
			</button>
		</div>
	);
};

export default Link;
