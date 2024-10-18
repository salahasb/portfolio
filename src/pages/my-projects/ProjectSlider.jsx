import { useState } from "react";
import { myProjects } from "../../utils/constants";
import ProjectItem from "./ProjectItem";

function ProjectsSlider() {
	const [currentItem, setCurrentItem] = useState(0);
	// const [currentItem, setcurrentItem] = useState(0);

	return (
		// temp height and flex
		<div className="overflow-hidden w-full h-[30rem] flex">
			<ul
				className="flex  items-center justify-between gap-[21%]
    w-full  lg:translate-x-[calc(0%)] transition-[transform] duration-[0.6s] ease-[cubic-bezier(.5,0,0,1)]  "
				style={{
					transform: `translateX(calc(25% - ${50 * currentItem}% - ${
						21 * currentItem
					}%))`,
				}}
			>
				{myProjects.map((project, index) => (
					<ProjectItem
						key={project.name}
						index={index}
						project={project}
						currentItem={currentItem}
						setCurrentItem={setCurrentItem}
					/>
				))}
			</ul>
		</div>
	);
}

export default ProjectsSlider;
