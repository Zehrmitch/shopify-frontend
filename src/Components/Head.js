export default function Head() {
	return (
		<div className='text-center mt-6'>
			<div className='flex justify-center'>
				<img src='https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/shuttle-64-bgremove.png' />
				<h1 className='text-3xl font-extrabold text-gray-900 pt-4'>
					Spacestagram
				</h1>
				<img src='https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/shuttle-64-bgremove.png' />
			</div>
			<h3 className='text-xl font-medium text-gray-600'>Mitchell Zehr</h3>
			<a href='https://apod.nasa.gov/apod/'>
				<p className='text-md font-medium text-gray-500'>
					Brought to you by NASA's image API
				</p>
			</a>
		</div>
	);
}
