import SubHeading from "../components/SubHeading";
import MyInfo from "../features/about-me/MyInfo";
import MySkills from "../features/about-me/MySkills";

function About() {
	return (
		<section className="w-full flex flex-col items-center pt-28 lg:max-xl:pt-32 max-lg:pb-44">
			<SubHeading> About me</SubHeading>

			<div className="  max-500:px-[5cqi] w-fit  500:mx-auto mt-24 lg:w-full lg:max-w-[110rem] xl:max-w-[120rem]  lg:px-20  flex flex-col   lg:items-start md:flex-row lg:justify-center gap-16">
				<MyInfo />

				<MySkills />
			</div>
		</section>
	);
}

export default About;
