function SubHeading({ children, className }) {
	return (
		<h2
			className={`flex items-center gap-5    hover:bg-[0rem] transition-all duration-1000  tracking-[0.3rem] lg:tracking-[0.4rem]   w-fit   ${className}`}
		>
			<span className="text-white/95 inline-block text-[1.6rem]   font-semibold  bg-brand-900 px-[2rem]  lg:px-[2.2rem] py-2 rounded-[50px] border-[1px] border-[#830b2e]  text-[#dbdbdb] leading-none uppercase">
				{children}
			</span>
		</h2>
	);
}

export default SubHeading;
