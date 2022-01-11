export default function Foot() {
	return (
		<footer className='fixed bottom-0 flex flex-row justify-between w-full p-2 '>
			<a href='https://github.com/Zehrmitch'>
				<div className='flex justify-center rounded-md bg-white px-2 py-1'>
					<img
						src='https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/github-logo.png'
						alt='github'
						className='h-6 w-6'
					/>
					<p>My Github</p>
				</div>
			</a>
			<a target='_blank' href='https://icons8.com'>
				<div className='flex justify-center rounded-md bg-white px-2 py-1'>
					Icons by: Icons8
				</div>
			</a>
		</footer>
	);
}
