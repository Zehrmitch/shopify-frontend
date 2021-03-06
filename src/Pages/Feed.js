import Card from '../Components/Card';
import Head from '../Components/Head';

export default function Feed() {
	return (
		<div className='w-full'>
			<Head></Head>
			<div className='flex justify-center'>
				<Card />
			</div>
		</div>
	);
}
