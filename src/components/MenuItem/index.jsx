import './MenuItem.scss';

const MenuItem = ({ imageUrl, title, size }) => {
	return (
		<div className={`menu-item ${size ? size : ''}`}>
			<div
				className="bg-img"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content">
				<div className="title">{title}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
export default MenuItem;
