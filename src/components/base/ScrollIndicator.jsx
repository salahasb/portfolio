import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import { routes } from "../../utils/constants";

function ScrollIndicator() {
	const { pathname } = useAnimatedRouting();

	if (!routes.some((route) => route.path === pathname)) return;
	return (
		<div className=" hidden  absolute top-0 right-10 w-fit h-full lg:flex flex-col justify-center items-center gap-10 ">
			<div className="h-[28%] w-[0.2rem] bg-gray-300 rounded-xl origin-bottom scale-y-0 animate-[scaleY_1s_0.8s_forwards]"></div>

			<div className="border-[0.2rem] w-[2rem] h-[3.3rem] border-gray-300 rounded-2xl relative animate-[scale-fade_1s_0.3s_forwards] opacity-0">
				<div className="absolute top-[0.5rem] left-1/2 w-[0.3rem] h-[0.6rem] bg-gray-300  rounded-md -translate-x-1/2 animate-scroll-indicator "></div>
			</div>

			<div className="h-[28%] w-[0.2rem] bg-gray-300 rounded-xl origin-top scale-y-0  animate-[scaleY_1s_0.8s_forwards]"></div>
		</div>
	);
}

export default ScrollIndicator;
