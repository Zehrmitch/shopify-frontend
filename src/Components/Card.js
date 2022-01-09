import Like from './Like';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import ImageExpand from './ImageExpand';
import Link from './Link';
import Description from './Description';

export default function Card() {
	const [loaded, setLoaded] = useState(false);
	const [images, setImages] = useState(null);
	const [days, setDays] = useState(10);

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

	if (!loaded) {
		const date = new Date();

		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		const startDay = formatDate(date);
		const lastDay = new Date(year, month, day - days);
		const endDay = formatDate(lastDay);

		const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=oYT5yCHT4dhb0eSF0ZKpJmrdVMb2bfa2Th6KrNxz&start_date=${endDay}&end_date=${startDay}`;
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
										className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y  max-w-xl my-8'
									>
										<div className='flex-1 flex flex-col p-8 '>
											<h1 className='mt-2 text-gray-900 text-sm font-medium'>
												{image.title}
											</h1>
											<h3>{image.date}</h3>
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
														<Like id={image}></Like>
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
										className='col-span-1 flex flex-col text-center bg-white/60 rounded-lg shadow-md shadow-red-500/50 divide-y divide-gray-200 max-w-xl my-8'
									>
										<div className='flex-1 flex flex-col p-8'>
											<h1 className='text-center mt-6 text-3xl font-extrabold text-gray-900'>
												{image.title}
											</h1>
											<h3>{image.date}</h3>
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
														<Like id={image}></Like>
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
