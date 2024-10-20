function ProjectItem({ index, project, currentItem, setCurrentItem }) {
	const isCurrentItem = currentItem === index;

	function handleOnClick() {
		setCurrentItem(index);
	}

	// console.log(isCurrentItem, index);
	return (
		// for another effect set "50" to the 4th argument of "cubic" css function
		<li
			className=" w-[50%]  700:w-[40%]  xl:w-[26.4%] shrink-0  aspect-video transition-[transform_opacity] duration-[0.6s]    cursor-pointer @container ease-[cubic-bezier(.5,0,0.40,1)] opacity-[.4]  "
			style={
				isCurrentItem
					? {
							transform: "scale(1.6)",
							opacity: 1,

							// transition: "transform 0.6s    cubic-bezier(.5,0,0.0,1) ",
					  }
					: {}
			}
			onClick={handleOnClick}
		>
			<div className="relative  border-1 overflow-hidden size-full rounded-[7cqw] ">
				{/* {project.name} */}
				<img src={`${project.src}-big.webp`} alt="" />
				{/* overlay */}
				<div
					className={`h-[100.5%]  absolute w-[100.5%] left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 z-10 
						 bg-[linear-gradient(360deg,_rgba(0,0,0,1)_0%,_rgba(51,4,39,0)_100%)] 
						  opacity-0   transition-opacity  duration-[0.6s]   ${
								isCurrentItem ? "  opacity-70" : ""
							} `}
				></div>
				{/* <img src={`/projects/wajbaty-big.webp`} alt="" /> */}
			</div>
		</li>
	);
}

export default ProjectItem;
