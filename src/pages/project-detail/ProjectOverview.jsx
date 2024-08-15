import Title from "./Title";

function ProjectOverview() {
	return (
		<div className="flex justify-between">
			<div className="text-[clamp(0rem,4.5vw,2rem)] leading-relaxed max-w-[60rem] text-[#ddd]">
				<Title title="Overview" />

				<p className="mb-5">
					Forkify is a dynamic recipe search application designed for food
					enthusiasts. With access to over 1,000,000 recipes, users can easily
					find and manage their favorite recipes all in one place.
				</p>

				<p className="mb-5">
					This app is built with a focus on user experience, offering a seamless
					and interactive way to explore, customize, and save recipes.
				</p>
			</div>
		</div>
	);
}

export default ProjectOverview;
