function SubHeading({ children }) {
	return (
		<h2 className="  mt-8 text-[3rem] tracking-[0.3rem] uppercase font-bold w-fit text-brand-500">
			<span>&lt; </span>

			<span className="text-white/95 inline-block    font-normal text-[2.4rem] ">
				{children}
				{/* about me */}
			</span>

			<span> /&gt;</span>
		</h2>
	);
}

export default SubHeading;
