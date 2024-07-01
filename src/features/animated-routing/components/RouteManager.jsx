import Projects1 from "../../../pages/Projects1";
import { useAnimatedRouting } from "../contexts/AnimatedRoutingContext";
import Hero from "../../../pages/Hero";

function RouteManager() {
	const { isAnimating, setIsAnimating, prev, isRouteChanged, pathname } =
		useAnimatedRouting();
	// const [isAnimating, setIsAnimating] = useState(false);

	return (
		<>
			{(pathname === "/" || (prev.current === "/" && isAnimating)) && (
				<Hero
					// className={
					// 	prev.current === "/" ? "animate-[fadeOut_1s_forwards]" : ""
					// }

					className={
						isRouteChanged && prev.current === "/"
							? "animate-[fadeIn-translateUp_0.5s_ease-in_reverse_forwards]"
							: ""
					}
				/>
			)}

			{(pathname === "/projects" ||
				(prev.current === "/projects" && isAnimating)) && (
				// <Projects
				// 	className={
				// 		prev.current === "/projects"
				// 			? "animate-[fadeOut_1s_forwards]"
				// 			: ""
				// 	}
				// />
				// <div>{`${isAnimating}`}</div>
				<Projects1
					setIsAnimating={setIsAnimating}
					className={
						isRouteChanged && prev.current === "/projects"
							? "!animate-[fadeOut_2s_forwards]"
							: ""
					}
				/>
			)}

			{(pathname === "/about-me" || prev.current === "/about-me") && (
				<div
					onAnimationEnd={(e) => {
						e.animationName === "fadeOut" ? setIsAnimating(false) : "";
					}}
					className={`absolute  opacity-0 animate-[fadeIn_2s_forwards] ${
						isRouteChanged && prev.current === "/about-me"
							? "!animate-[fadeOut_2s_forwards]"
							: ""
					}`}
				>
					about
				</div>
			)}

			{(pathname === "/contact" || prev.current === "/contact") && (
				<div
					onAnimationEnd={(e) => {
						e.animationName === "fadeOut" ? setIsAnimating(false) : "";
					}}
					className={`absolute  opacity-0 animate-[fadeIn_2s_forwards] ${
						isRouteChanged && prev.current === "/contact"
							? "!animate-[fadeOut_2s_forwards]"
							: ""
					}`}
				>
					contact
				</div>
			)}
		</>
	);
}

export default RouteManager;
