import SubHeading from "../../components/SubHeading";
import MyInfo from "./MyInfo";
import MySkills from "./MySkills";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import { handleOnAnimationEnd } from "../../utils/helpers";

function About({ className }) {
	const { setIsAnimating } = useAnimatedRouting();

	// Styles
	const aboutPageClasses = `md:px-20 xl:px-36 w-full flex flex-col items-center  md:h-[90%] md:justify-center max-md:pb-44 ${className}`;

	const contentClasses =
		"  max-500:px-[5cqi] w-fit  500:mx-auto lg:w-full lg:max-w-[115rem]  lg:pl-20  flex flex-col   lg:items-start md:flex-row lg:justify-center gap-16";

	return (
		<section
			onAnimationEnd={(e) => handleOnAnimationEnd(e, setIsAnimating)}
			className={aboutPageClasses}
		>
			<SubHeading className="2xl:mb-[5.4rem]">About me</SubHeading>

			<div className={contentClasses}>
				<MyInfo />

				<MySkills />
			</div>
		</section>
	);
}

export default About;
