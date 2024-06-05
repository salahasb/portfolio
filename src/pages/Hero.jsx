import Button from "../components/Button";

function Hero() {
	return (
		<section className="h-full flex flex-col items-center  justify-center -mt-[3%]  ">
			{/* <span className="  pl-40  text-[1.8rem] font-semibold uppercase tracking-widest text-[#ffffff] ">
				home
			</span> */}
			<h1 className="text-center text-clamp-heading-sm 500:text-clamp-heading-md md:text-clamp-heading-lg xl:text-clamp-heading-xl 2xl:text-clamp-heading-2xl font-bold md:font-semibold relative leading-[1.4] 500:leading-[1.3] xl:leading-[1.25] xl:tracking-tight mb-5 xl:mb-10">
				{/* I&apos;m */}
				<span className=" before:content-[''] before:w-[98.7%] before:h-[6%] before:bg-brand-500 relative before:absolute before:bottom-[0px] xl:before:bottom-[5px] before:right-0">
					Passionate
				</span>
				<span> Front-end Web Developer</span>
			</h1>

			{/* <span className=" self-start pl-40 pb-16 text-[3rem] font-semibold uppercase tracking-widest text-[#e11351] ">
				Hi, my name is salah
			</span> */}
			<p className="w-[95%] 425:w-[90%] 500:w-[85%]  lg:max-w-[88rem] text-[1.5rem] 425:text-[1.8rem] 500:text-[2rem] md:text-[2.2rem] 900:text-[2.5rem] text-center leading-[1.6] mb-12 xl:mb-16 lg:font-medium">
				Hi, I&apos;m Salah asb, a front-end web developer, i turn design into a
				reactive & responsive web app/site, with the latest technologies. i also
				write clean and maintainable code.
			</p>
			<Button className=" px-10 md:px-14 text-[2rem] md:text-[2.2rem] xl:text-[2.6rem]">
				See my work
			</Button>
		</section>
	);
}

export default Hero;
