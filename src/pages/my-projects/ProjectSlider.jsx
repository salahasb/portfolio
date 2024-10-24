import { useEffect, useState } from "react";
import { myProjects } from "../../utils/constants";
import ProjectItem from "./ProjectItem";

function ProjectsSlider() {
	const [currentItem, setCurrentItem] = useState(1);
	const [currentTranslate, setCurrentTranslate] = useState();

	// const [touchStartX, setTouchStartX] = useState(0);
	let touchStartX = 0;

	function handleTouchEnd(e) {
		const touchEndX = e.changedTouches[0].clientX;

		if (touchStartX > touchEndX)
			setCurrentItem((c) => (c < myProjects.length - 1 ? c + 1 : c));

		if (touchStartX < touchEndX) setCurrentItem((c) => (c > 0 ? c - 1 : c));
	}

	useEffect(() => {
		const calculateSliderTranslation = () => {
			const viewportWidth = window.innerWidth;
			const mobileCalc = 25 - 50 * currentItem - 21 * currentItem;
			const tabletCalc = 30 - 40 * currentItem - 18 * currentItem;
			const desktopCalc = 36.8 - 26.4 * currentItem - 10.4 * currentItem;

			if (viewportWidth < 700) setCurrentTranslate(mobileCalc);
			if (viewportWidth >= 700) setCurrentTranslate(tabletCalc);
			if (viewportWidth >= 1280) setCurrentTranslate(desktopCalc);
		};

		calculateSliderTranslation();

		window.addEventListener("resize", calculateSliderTranslation);

		return () =>
			window.removeEventListener("resize", calculateSliderTranslation);
	}, [currentItem, currentTranslate]);

	// Event handlers
	const handleOnTouchStart = (e) => {
		touchStartX = e.touches[0].clientX;
	};

	// Styles
	const sliderClasses = `flex  items-center justify-between gap-[21%]
                700:gap-[18%] xl:gap-[10.4%] w-full transition-[transform] duration-[0.6s] ease-[cubic-bezier(.5,0,0,1)]  `;

	const sliderContainerClasses =
		"overflow-hidden w-full py-[9%] 700:py-[7%] xl:py-[7rem] flex max-w-[150rem] select-none   ";

	if (!currentTranslate) return;

	return (
		<div
			className={sliderContainerClasses}
			// onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
			onTouchStart={handleOnTouchStart}
			onTouchEnd={(e) => handleTouchEnd(e)}
		>
			<ul
				className={sliderClasses}
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
