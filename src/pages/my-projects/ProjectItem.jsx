function ProjectItem({ index, project, currentItem, setCurrentItem }) {
	const isCurrentItem = currentItem === index;

	function handleOnClick() {
		setCurrentItem(index);
	}

	console.log(isCurrentItem, index);
	return (
		<li
			className=" w-[50%]  lg:w-[33.33%] shrink-0 border border-1 aspect-video rounded-[12px] lg:rounded-[20px]   overflow-hidden transition-[transform] duration-[0.6s]   ease-[cubic-bezier(.5,0,0,1)]     "
			style={
				isCurrentItem
					? {
							transform: "scale(1.6)",
							transition: "transform 0.6s    cubic-bezier(.5,0,0.50,1) ",
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
