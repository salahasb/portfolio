import SubHeading from "../../components/SubHeading";
import MyInfo from "./MyInfo";
import MySkills from "./MySkills";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";

function About({ className }) {
	const { setIsAnimating } = useAnimatedRouting();

	return (
		<section
			onAnimationEnd={(e) => {
				setIsAnimating(false);
			}}
			className={`w-full flex flex-col items-center  md:h-[90%] md:justify-center max-md:pb-44 ${className}`}
		>
			<SubHeading> About me</SubHeading>

			<div className="  max-500:px-[5cqi] w-fit  500:mx-auto lg:w-full lg:max-w-[115rem]  lg:pl-20  flex flex-col   lg:items-start md:flex-row lg:justify-center gap-16">
				<MyInfo />

				<MySkills />
			</div>
		</section>
	);
}

export default About;
