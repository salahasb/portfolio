function ProjectItem({ index, project, currentItem, setCurrentItem }) {
	const isCurrentItem = currentItem === index;

	function handleOnClick() {
		setCurrentItem(index);
	}

	// console.log(isCurrentItem, index);
	return (
		// for another effect set "50" to the 4th argument of "cubic" css function
		<li
			className=" w-[50%]  700:w-[40%]  xl:w-[26.4%] shrink-0  aspect-video transition-[transform_opacity] duration-[0.6s]    cursor-pointer @container ease-[cubic-bezier(.5,0,0.40,1)] opacity-[.5]  "
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
			<div className="  border-1 overflow-hidden size-full rounded-[6cqw]">
				{/* {project.name} */}
				{/* <img src={`${project.src}-big.webp`} alt="" /> */}
				<img src={`/projects/wajbaty-big.webp`} alt="" />
			</div>
		</li>
	);
}

export default ProjectItem;
