import { useEffect, useState } from "react";
import { myProjects } from "../../utils/constants";
import ProjectItem from "./ProjectItem";

function ProjectsSlider() {
	const [currentItem, setCurrentItem] = useState(0);

	const [currentTranslate, setCurrentTranslate] = useState();

	// const [currentItem, setcurrentItem] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const viewportWidth = window.innerWidth;
			const mobileCalc = 25 - 50 * currentItem - 21 * currentItem;
			const tabletCalc = 30 - 40 * currentItem - 18 * currentItem;
			const desktopCalc = 36.8 - 26.4 * currentItem - 10.4 * currentItem;

			if (viewportWidth < 700) setCurrentTranslate(mobileCalc);
			if (viewportWidth >= 700) setCurrentTranslate(tabletCalc);
			if (viewportWidth >= 1280) setCurrentTranslate(desktopCalc);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [currentItem, currentTranslate]);

	if (!currentTranslate) return;

	return (
		// temp height and flex
		<div className="overflow-hidden w-full     py-[9%] 700:py-[7%] xl:py-[5%] flex max-w-[150rem]   ">
			<ul
				className={`flex  items-center justify-between gap-[21%]
                700:gap-[18%] xl:gap-0 w-full transition-[transform] duration-[0.6s] ease-[cubic-bezier(.5,0,0,1)]  `}
				style={{
					transform: `translateX(calc(${currentTranslate}%))`,
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
