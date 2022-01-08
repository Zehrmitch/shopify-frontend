import Like from './Components/Like.js';
import Feed from './Pages/Feed.js';

function App() {
	return (
		<div className='flex flex-col bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50'>
			<Feed></Feed>
			<footer className='fixed bottom-0 text-right w-full p-2 '>
				Icons by{' '}
				<a target='_blank' href='https://icons8.com'>
					Icons8
				</a>
			</footer>
		</div>
	);
}

export default App;
