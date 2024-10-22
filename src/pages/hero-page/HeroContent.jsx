function HeroContent() {
	// Styles
	const mainHeadingClasses = ` animate-[fadeIn-translateUp_1s_0.2s_forwards] translate-y-[10rem] opacity-0 text-center text-clamp-heading-sm 500:text-clamp-heading-md md:text-clamp-heading-lg xl:text-clamp-heading-xl 2xl:text-clamp-heading-2xl font-bold md:font-semibold relative leading-[1.4] 500:leading-[1.3] lg:leading-[1.2] xl:tracking-tight mb-5  lg:mb-8 xl:mb-10 `;

	const subHeadingClasses =
		"animate-[fadeIn-translateUp_1s_0.5s_forwards] opacity-0 translate-y-[10rem] w-[95%] 425:w-[90%] 500:w-[85%] lg:max-w-[90rem] xl:max-w-[100rem] text-[1.4rem] 425:text-[1.6rem] 500:text-[1.8rem] md:text-[2rem] 900:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem]   text-center leading-[1.6] mb-8 md:mb-10 lg:mb-14 xl:mb-20 lg:font-medium  ";

	return (
		<>
			<h1 className={mainHeadingClasses}>
				<span className=" main-heading-accent">Passionate</span>

				<span> Front-end Web Developer</span>
			</h1>

			<p className={subHeadingClasses}>
				I transform designs reactive and responsive web apps/sites using
				React.js. prioritizing writing clean and maintainable code.
			</p>
		</>
	);
}

export default HeroContent;
