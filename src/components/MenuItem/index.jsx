import { useNavigate } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ imageUrl, title }) => {
	const navigate = useNavigate();
	return (
		<div className="menu-item" onClick={() => navigate('shop')}>
			<div
				className="bg-img"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content">
				<span className="title">{title}</span>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
export default MenuItem;
