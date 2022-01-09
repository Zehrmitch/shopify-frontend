import Like from './Components/Like.js';
import Feed from './Pages/Feed.js';
import Foot from './Pages/Foot.js';

function App() {
	return (
		<div className='flex flex-col bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50'>
			<Feed></Feed>
			<Foot></Foot>
		</div>
	);
}

export default App;
