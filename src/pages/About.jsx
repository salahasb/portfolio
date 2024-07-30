import SubHeading from "../components/SubHeading";
import MyInfo from "../features/about-me/MyInfo";
import MySkills from "../features/about-me/MySkills";

function About() {
	return (
		<section className="w-full flex flex-col items-center pt-20 pb-44">
			<SubHeading> About me</SubHeading>

			<div className="w-full mt-14 flex flex-col gap-16">
				<MyInfo />

				<MySkills />
			</div>
		</section>
	);
}

export default About;
