import { useEffect, useRef } from "react";

function Loader({ isPageLoaded }) {
	const ref = useRef();

	// useEffect(() => {
	// 	function removeLoader(e) {
	// 		console.log(111, e);
	// 	}

	// 	// if (isPageLoaded) {
	// 	return ref.current.addEventListener("animationend", removeLoader);
	// 	// }

	// 	return () => {
	// 		ref.current.removeEventListener("animationend", removeLoader);
	// 		console.log("clen-up");
	// 	};
	// }, [isPageLoaded]);

	return (
		<div
			ref={ref}
			className={`font-extralight h-full absolute top-0 left-1/2 -translate-x-1/2 xl:text-[2.5rem] center   text-white animate-pulse before:content-['Loading'] tracking-[25px] uppercase ${
				isPageLoaded ? "before:!animate-[fadeOut_ease-in_2s_forwards]" : ""
			}`}
		></div>
	);
}

export default Loader;
