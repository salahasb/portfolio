import { Link } from "react-router-dom";

function Button({ children, className }) {
	return (
		<Link
			to="contact"
			className={`text-white text-[1.8rem] font-semibold rounded-lg hidden 425:inline-block  bg-brand-500 px-5 py-2  ${className}`}
		>
			{children}
		</Link>
	);
}

export default Button;
