import { useState } from "react";

function Loader({ isPageLoaded }) {
	const [isAnimationEnd, setIsAnimationEnd] = useState(false);

	if (isAnimationEnd) return null;

	return (
		<div
			onAnimationEnd={() => setIsAnimationEnd(true)}
			className={`font-extralight h-full absolute top-0 left-1/2 -translate-x-1/2  center   text-white animate-pulse  tracking-[25px] uppercase ${
				isPageLoaded ? "!animate-[fadeOut_ease-in_1s_forwards]" : ""
			}`}
		>
			<div className="pl-[25px] text-clamp-loader">Loading</div>
		</div>
	);
}

export default Loader;
