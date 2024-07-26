function SubHeading({ children, className }) {
	return (
		// <h2
		// 	className={`flex items-center gap-5 text-[2.2rem] sm:text-[2.4rem] md:text-[2.8rem] md:mb-24   bg-gradient-to-r bg-[length:120%] bg-[-38rem] hover:bg-[0rem] transition-all duration-1000  text-transparent  bg-no-repeat from-white via-white via-80%  bg-clip-text  text-fill-color      xl:mb-28 tracking-[0.5rem] uppercase font-bold w-fit text-brand-500 ${className}`}
		// >
		// 	{/* <span className="!text-brand-500 !no-text-fill-color ">&lt; </span> */}

		// 	<span className="text-white/95 inline-block text-[1.8rem] 425:text-[2.6rem]  font-semibold lg:text-[2.8rem] ">
		// 		{children}
		// 		{/* about me */}
		// 	</span>

		// 	{/* <span className="!text-brand-500 !no-text-fill-color  "> /&gt;</span> */}
		// </h2>
		<h2
			className={`flex items-center gap-5    md:mb-24   hover:bg-[0rem] transition-all duration-1000 xl:mb-28 tracking-[0.3rem] lg:tracking-[0.5rem]   w-fit   ${className}`}
		>
			<span className="text-white/95 inline-block text-[1.8rem] 425:text-[2rem]  font-semibold  bg-brand-900 px-[2rem]  lg:px-[2.2rem] py-2 rounded-[50px] border-[1px] border-[#830b2e]  text-[#dbdbdb] leading-none uppercase">
				{children}
			</span>
		</h2>
	);
}

export default SubHeading;
