// import { useNavigate } from "react-router-dom";
// import ProjectTechstack from "./ProjectTechstack";
// import ProjectItemTitle from "./ProjectItemTitle";
// import ProjectPicture from "./ProjectPicture";
// import { useState } from "react";

// function ProjectItem({ index, project, currentItem, setCurrentItem }) {
// 	const navigate = useNavigate();
// 	const [imageLoaded, setImageLoaded] = useState(false);

// 	const isCurrentItem = currentItem === index;

// 	// conditional styles
// 	const currentItemStyle = isCurrentItem
// 	? {
// 			transform: "scale(1.6)",
// 			opacity: 1,

// 			// transition: "transform 0.6s    cubic-bezier(.5,0,0.0,1) ",
// 	  }
// 	: isCurrentItem && imageLoaded
// 	? {
// 			opacity: 1,
// 	  }
// 	: {}

// 	function handleOnClick() {
// 		if (isCurrentItem) navigate(project.path);
// 		else setCurrentItem(index);
// 	}

// 	return (
// 		// for another effect set "50" to the 4th argument of "cubic" css function
// 		<li
// 			className=" w-[50%]  700:w-[40%]  xl:w-[26.4%] shrink-0  aspect-video transition-[transform_opacity] duration-[0.6s]    cursor-pointer @container ease-[cubic-bezier(.5,0,0.0,1)] opacity-[.4]  "
// 			style={currentItemStyle

// 			}
// 			onClick={handleOnClick}
// 		>
// 			<div className="@container  relative  border-1 overflow-hidden size-full rounded-[7cqw] ">
// 				{/* project screenshot */}
// 				<ProjectPicture
// 					project={project}
// 					setImageLoaded={setImageLoaded}
// 					imageLoaded={imageLoaded}
// 				/>

// 				{/* overlay */}
// 				<div
// 					className={`h-[102%]  absolute w-[102%] left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 z-10
// 						 bg-[linear-gradient(360deg,_rgba(0,0,0,1)_0%,_rgba(51,4,39,0)_100%)]
// 						     transition-opacity  duration-[0.6s]   ${
// 										isCurrentItem && imageLoaded ? "  opacity-70" : "opacity-0"
// 									} `}
// 				></div>

// 				<div
// 					className={`absolute z-20 bottom-[7cqw] left-[8cqw] w-full   transition-[transform,opacity]  ${
// 						isCurrentItem && imageLoaded
// 							? "translate-y-0 opacity-100 delay-[0.2s] duration-[0.6s]"
// 							: "translate-y-[40%] opacity-0 delay-0 duration-[0.3s]"
// 					}`}
// 				>
// 					<ProjectItemTitle project={project} />

// 					<ProjectTechstack project={project} />
// 				</div>
// 			</div>
// 		</li>
// 	);
// }

// export default ProjectItem;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectPicture from "./ProjectItemPicture";
import ProjectItemTitle from "./ProjectItemTitle";
import ProjectTechstack from "./ProjectTechstack";

function ProjectItem({ index, project, currentItem, setCurrentItem }) {
	const navigate = useNavigate();
	const [imageLoaded, setImageLoaded] = useState(false);

	const isCurrentItem = currentItem === index;

	// Event handlers
	const handleOnClick = () => {
		if (isCurrentItem) navigate(project.path);
		else setCurrentItem(index);
	};

	// Styles
	const currentItemStyle = isCurrentItem
		? { transform: "scale(1.6)", opacity: 1 }
		: isCurrentItem && imageLoaded
		? { opacity: 1 }
		: {};

	const slideItemClasses =
		"w-[50%] 700:w-[40%] xl:w-[26.4%] shrink-0 aspect-video transition-[transform_opacity] duration-[0.6s] cursor-pointer @container ease-[cubic-bezier(.5,0,0.0,1)] opacity-[.4]";

	const overlayClasses = `h-[102%] absolute w-[102%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 
    bg-[linear-gradient(360deg,_rgba(0,0,0,1)_0%,_rgba(51,4,39,0)_100%)] 
    transition-opacity duration-[0.6s] ${
			isCurrentItem && imageLoaded ? "opacity-70" : "opacity-0"
		}`;

	const contentClasses = `absolute z-20 bottom-[7cqw] left-[8cqw] w-full transition-[transform,opacity] ${
		isCurrentItem && imageLoaded
			? "translate-y-0 opacity-100 delay-[0.2s] duration-[0.6s]"
			: "translate-y-[40%] opacity-0 delay-0 duration-[0.3s]"
	}`;

	return (
		<li
			className={slideItemClasses}
			style={currentItemStyle}
			onClick={handleOnClick}
		>
			<div className="@container relative border-1 overflow-hidden size-full rounded-[7cqw]">
				{/* Project screenshot */}
				<ProjectPicture
					project={project}
					setImageLoaded={setImageLoaded}
					imageLoaded={imageLoaded}
				/>

				{/* Overlay */}
				<div className={overlayClasses}></div>

				{/* Title & Tech Stack */}
				<div className={contentClasses}>
					<ProjectItemTitle project={project} />
					<ProjectTechstack project={project} />
				</div>
			</div>
		</li>
	);
}

export default ProjectItem;
