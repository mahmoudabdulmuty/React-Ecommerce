import { useNavigate } from 'react-router-dom';

const Hats = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Hats Page</h1>
			<button onClick={() => navigate(-1)}>Go Back</button>
		</div>
	);
};
export default Hats;
