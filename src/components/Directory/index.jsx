import { useState } from 'react';
import MenuItem from '../MenuItem';
import './Directory.scss';

const Directory = () => {
	const [data] = useState([
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'Jeans',
			imageUrl: 'https://i.imgur.com/81ZWA8H.jpg',
			id: 4,
			linkUrl: 'shop/jeans'
		},
		{
			title: 'Hoodies',
			imageUrl: 'https://i.imgur.com/S2QWYTe.jpeg',
			id: 5,
			linkUrl: 'shop/hoodies'
		}
	]);

	return (
		<div className="directory-menu">
			{data.map(({ title, imageUrl, id }) => (
				<MenuItem key={id} imageUrl={imageUrl} title={title} />
			))}
		</div>
	);
};
export default Directory;
