import Button from "../components/Button";

function Hero() {
	return (
		<div className="h-[calc(100%-8.9rem)] flex flex-col items-center pt-44">
			{/* <span className="  pl-40  text-[1.8rem] font-semibold uppercase tracking-widest text-[#ffffff] ">
				home
			</span> */}
			<h1 className="text-center text-[14rem] font-semibold relative leading-[1.3] tracking-tighter mb-16">
				{/* I&apos;m */}
				<span className=" before:content-[''] before:w-[98.7%] before:h-[1rem] before:bg-brand-500 relative before:absolute before:bottom-2 before:right-0">
					Passionate
				</span>
				<span> Front-end Web Developer</span>
			</h1>

			{/* <span className=" self-start pl-40 pb-16 text-[3rem] font-semibold uppercase tracking-widest text-[#e11351] ">
				Hi, my name is salah
			</span> */}
			<p className="w-[60%] text-[2rem] text-center leading-[1.6] mb-20 font-medium">
				Hi, I'm Salah, a passionate front-end developer with a knack for
				crafting seamless user interfaces. I specialize in building dynamic.
				Lorem ipsum dolor sit amet.
			</p>
			<Button className="px-16 text-[2.2rem]">See my work</Button>
		</div>
	);
}

export default Hero;
