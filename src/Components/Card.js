import Like from './Like';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import ImageExpand from './ImageExpand';
import Link from './Link';
import Description from './Description';

const people = [
	{
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Jane Cooper',
		title: 'Paradigm Representative',
		role: 'Admin',
		email: 'janecooper@example.com',
		telephone: '+1-202-555-0170',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
];

export default function Card() {
	const [loaded, setLoaded] = useState(false);
	const [images, setImages] = useState(null);
	const [showModal, setShowModal] = useState(false);

	function handleResponse(response) {
		setImages(response.data);
		setLoaded(true);
	}

	useEffect(() => {
		setLoaded(false);
	}, []);

	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	if (!loaded) {
		const date = new Date();

		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		const startDay = formatDate(date);
		const lastD = new Date(year, month, day - 20);
		const endDay = formatDate(lastD);

		const apiKey = `oYT5yCHT4dhb0eSF0ZKpJmrdVMb2bfa2Th6KrNxz`;
		const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${endDay}&end_date=${startDay}`;
		console.log(apiUrl);
		axios.get(apiUrl).then(handleResponse);

		return (
			<div className='h-screen text-center my-48'>
				<h1 className='font-medium'> Fetching Data </h1>
				<img
					src='https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/sp_loader.gif'
					alt='Loading...'
					className='h-auto opacity-95 rounded-lg'
				/>
			</div>
		);
	} else {
		return (
			<ul className='grid grid-cols-1 gap-6'>
				<div className='Gallery'>
					{images
						.slice()
						.reverse()
						.map((image, index) => {
							if (image.media_type === 'video') {
								return (
									<li
										key={index}
										className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 max-w-xl my-8'
									>
										<div className='flex-1 flex flex-col p-8'>
											<h1 className='mt-6 text-gray-900 text-sm font-medium'>
												{image.title}
											</h1>
											<ReactPlayer
												url={image.url}
												width='100%'
											/>
											<dl className='mt-1 flex-grow flex flex-col justify-between'>
												<dt className='sr-only'>
													Title
												</dt>
												<Description img={image} />
												<dt className='sr-only'>
													Role
												</dt>
												<dd className='mt-3 flex justify-end'>
													<span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
														Copyright:{' '}
														{image.copyright}
													</span>
													<span>
														<Like></Like>
													</span>
												</dd>
											</dl>
										</div>
									</li>
								);
							} else {
								return (
									<li
										key={index}
										className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 max-w-xl my-8'
									>
										<div className='flex-1 flex flex-col p-8'>
											<h1 className='mt-6 text-gray-900 text-sm font-medium'>
												{image.title}
											</h1>
											<div>
												<ImageExpand
													img={image}
												></ImageExpand>
											</div>

											<dl className='mt-1 flex-grow flex flex-col justify-between'>
												<dt className='sr-only'>
													Title
												</dt>
												<Description img={image} />
												<dt className='sr-only'>
													Role
												</dt>
												<dd className='mt-3 flex justify-end'>
													<span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
														Copyright:{' '}
														{image.hasOwnProperty(
															'copyright'
														)
															? image.copyright
															: 'Unknown Artist'}
													</span>
													<span>
														<Like></Like>
													</span>
													<span>
														<Link img={image} />
													</span>
												</dd>
											</dl>
										</div>
									</li>
								);
							}
						})}
				</div>
			</ul>
		);
	}
}
