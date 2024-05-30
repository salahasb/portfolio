import Button from "../components/Button";

function Hero() {
	return (
		<div className="h-[calc(100%-8.7rem)] flex flex-col items-center justify-center ">
			<h1 className="text-center text-[12rem] font-bold leading-[1]   mb-12">
				I&apos;m Front-end Web Developer
			</h1>
			<p className="w-[58%] text-[2rem] text-center leading-[1.6] mb-20 font-medium">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero itaque
				debitis aut id, nisi alias quaerat sunt, doloribus officiis ad cum animi
				Lorem ipsum dolor sit amet consectetur
			</p>
			<Button className="!px-16  border text-[3rem] border-gray-500">
				See my work
			</Button>
		</div>
	);
}

export default Hero;
