import Title from "./Title";

function ProjectOverview({ project }) {
	return (
		<div className="flex justify-between">
			<div className="text-[clamp(1.2rem,3vw,1.8rem)] leading-relaxed max-w-[50rem] text-[#ddd]">
				<Title title="Overview" />

				{project.overview.map((p, i) => (
					<p className="mb-5" key={i}>
						{p}
					</p>
				))}
			</div>
		</div>
	);
}

export default ProjectOverview;
