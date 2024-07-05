import './App.css';
import { Listing } from './components/Listing';
import { dataInterface } from './data/dataInterface';
import etsy from './data/etsy.json';

const etsyData = etsy;

const App = () => {
	return (
		<>
			<div className='item-list'>
				{etsyData.map(data => {
					if (data.state !== 'active') {
						return null;
					}

					const fixedData = data as dataInterface;
					return (
						<Listing key={fixedData.listing_id} items={fixedData}></Listing>
					);
				})}
			</div>
		</>
	);
};

export default App;
