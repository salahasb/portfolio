import { Link } from "react-router-dom";

function Button({ children, className }) {
	return (
		<Link
			to="contact"
			className={`text-white  font-semibold rounded-lg   bg-brand-500  py-2  ${className}`}
		>
			{children}
		</Link>
	);
}

export default Button;
