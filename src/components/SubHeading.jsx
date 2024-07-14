function SubHeading({ children, className }) {
	return (
		<h2
			className={`flex items-start gap-5 text-[2.4rem]   tracking-[0.5rem] uppercase font-bold w-fit text-brand-500 ${className}`}
		>
			<span>&lt; </span>

			<span className="text-white/95 inline-block text-[2.6rem]  font-semibold lg:text-[2.4rem] ">
				{children}
				{/* about me */}
			</span>

			<span> /&gt;</span>
		</h2>
	);
}

export default SubHeading;
