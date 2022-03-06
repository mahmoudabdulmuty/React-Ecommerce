import './Button.scss';

const Button = ({ isGoogleSignIn, children, ...otherProps }) => {
	return (
		<button
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} btn`}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default Button;
