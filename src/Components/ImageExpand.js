import React, { useState } from 'react';

export default function ImageExpand(props) {
	const [showModal, setShowModal] = useState(false);
	const [open, setOpen] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	return (
		<div>
			<img
				className='w-[100%] max-w-lg h-auto flex-shrink-0 mx-auto rounded-lg'
				src={props.img.url}
				alt={props.img.title}
				onClick={handleClick}
			/>
			{showModal && (
				<dialog open onClick={handleClick}>
					<div class='justify-center items-center flex h-full fixed inset-x-0 top-0 bg-white z-5 bg-opacity-95 '>
						<img
							className='w-fit max-w-2xl h-auto flex-shrink-0 mx-auto rounded-lg'
							src={props.img.url}
							onClick={handleClick}
							alt='Image'
						/>
					</div>
				</dialog>
			)}
		</div>
	);
}
