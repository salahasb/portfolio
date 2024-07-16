function SubHeading({ children, className }) {
	return (
		<h2
			className={`flex items-center gap-5 text-[2.2rem] sm:text-[2.4rem] md:text-[2.8rem] md:mb-24  xl:mb-28 tracking-[0.5rem] uppercase font-bold w-fit text-brand-500 ${className}`}
		>
			<span>&lt; </span>

			<span className="text-white/95 inline-block text-[1.8rem] 425:text-[2.6rem]  font-semibold lg:text-[2.8rem] ">
				{children}
				{/* about me */}
			</span>

			<span> /&gt;</span>
		</h2>
	);
}

export default SubHeading;
