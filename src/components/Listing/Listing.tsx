import { listingInterface } from './listingInterface';

export const Listing = ({ items }: listingInterface) => {
	return (
		<>
			<div className='item'>
				<div className='item-image'>
					<a href={items.url}>
						<img src={items.MainImage.url_570xN} />
					</a>
				</div>
				<div className='item-details'>
					<p className='item-title'>
						{items.title.length > 50
							? `${items.title.slice(0, 50)}...`
							: items.title}
					</p>
					<p className='item-price'>
						{items.currency_code === 'USD'
							? `$${items.price}`
							: items.currency_code === 'EUR'
							? `€${items.price}`
							: `${items.price} ${items.currency_code}`}
					</p>
					<p
						className={`item-quantity ${
							items.quantity <= 10
								? 'level-low'
								: items.quantity <= 20
								? 'level-medium'
								: 'level-high'
						}`}
					>
						{items.quantity} left
					</p>
				</div>
			</div>
		</>
	);
};
