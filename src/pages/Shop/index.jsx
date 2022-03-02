import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionPreview from '../../components/CollectionPreview';
import ShopData from '../../ShopData';
import './Shop.scss';

const Shop = () => {
	const [collection] = useState(ShopData);
	const navigate = useNavigate();
	return (
		<div>
			<button onClick={() => navigate(-1)}>Go Back</button>
			<div>
				{collection.map(({ id, title, items }) => (
					<CollectionPreview key={id} title={title} items={items} />
				))}
			</div>
		</div>
	);
};
export default Shop;
