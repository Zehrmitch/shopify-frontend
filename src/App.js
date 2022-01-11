import Like from './Components/Like.js';
import Feed from './Pages/Feed.js';
import Foot from './Pages/Foot.js';

function App() {
	return (
		<div className='flex flex-col bg-gradient-to-b from-blue-500/50 via-pink-500/50 to-white/50'>
			<Feed></Feed>
			<Foot></Foot>
		</div>
	);
}

export default App;
