function ProjectOverview() {
	return (
		<div className="flex justify-between">
			<div className="text-clamp-project-detail-description leading-relaxed max-w-[60rem] text-[#ddd]">
				<h3 className="text-[clamp(0rem,7vw,5rem)] font-bold tracking-wide mb-[2.5rem] text-[#eee]">
					Overview
				</h3>
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
