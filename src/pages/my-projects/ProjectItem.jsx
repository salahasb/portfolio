function ProjectItem({ index, project, currentItem, setCurrentItem }) {
	const isCurrentItem = currentItem === index;

	function handleOnClick() {
		setCurrentItem(index);
	}

	// console.log(isCurrentItem, index);
	return (
		<li
			className=" w-[50%]  700:w-[40%]  xl:w-[26.4%] shrink-0 border border-1 aspect-video rounded-[10px] 700:rounded-[20px]    overflow-hidden transition-[transform] duration-[0.6s]   ease-[cubic-bezier(.5,0,0,1)]  cursor-pointer   "
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
			{/* <img src="/projects/the-wild-oasis.png" alt="" /> */}
			{project.name}
		</li>
	);
}

export default ProjectItem;
