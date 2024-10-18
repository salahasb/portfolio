function ProjectItem({ index, project, currentItem, setCurrentItem }) {
	const isCurrentItem = currentItem === index;

	function handleOnClick() {
		setCurrentItem(index);
	}

	// console.log(isCurrentItem, index);
	return (
		<li
			className=" w-[50%]  700:w-[40%]  xl:w-[26.4%] shrink-0  aspect-video     transition-[transform] duration-[0.6s]   ease-[cubic-bezier(.5,0,0,1)]  cursor-pointer @container   "
			style={
				isCurrentItem
					? {
							transform: "scale(1.6)",

							// for another effect set "50" to the 4th argument of "cubic" css function
							transition: "transform 0.6s    cubic-bezier(.5,0,0.0,1) ",
					  }
					: {}
			}
			onClick={handleOnClick}
		>
			<div className="border border-1 overflow-hidden size-full rounded-[10cqw]">
				{project.name}
			</div>
			{/* <img src="/projects/the-wild-oasis.png" alt="" /> */}
		</li>
	);
}

export default ProjectItem;
