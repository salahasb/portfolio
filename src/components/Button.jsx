function Button({ children, className, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`text-[#eee]  font-semibold rounded-lg   bg-brand-550  py-2 transition-[transform_colors] duration-500
hover:bg-brand-600  ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
