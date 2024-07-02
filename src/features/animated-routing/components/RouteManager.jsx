import Projects1 from "../../../pages/Projects1";
import { useAnimatedRouting } from "../contexts/AnimatedRoutingContext";
import Hero from "../../../pages/Hero";
import Projects from "../../../pages/Projects";

/* this component decide which page should mount/unmount while changing the route */
function RouteManager() {
	const { isAnimating, setIsAnimating, prev, isRouteChanged, pathname } =
		useAnimatedRouting();

	return (
		<>
			{(pathname === "/" || (prev.current === "/" && isAnimating)) && (
				<Hero
					className={
						isRouteChanged && prev.current === "/"
							? "animate-[fadeOut_0.5s_forwards]"
							: ""
					}
				/>
			)}

			{(pathname === "/projects" ||
				(prev.current === "/projects" && isAnimating)) && (
				<Projects
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
