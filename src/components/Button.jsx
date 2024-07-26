import { Link } from "react-router-dom";

function Button({ children, className, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`text-white  font-semibold rounded-lg   bg-brand-500  py-2  ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
