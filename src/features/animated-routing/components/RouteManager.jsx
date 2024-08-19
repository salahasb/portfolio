import { useAnimatedRouting } from "../contexts/AnimatedRoutingContext";
import { myProjects, routes } from "../../../utils/constants";
import ProjectDetail from "../../../pages/project-detail/ProjectDetail";

/* this component decide which page should mount/unmount while changing the route */
function RouteManager() {
	const { isAnimating, prev, isRouteChanged, pathname } = useAnimatedRouting();

	return (
		<>
			{routes.map(
				({ path, component: Component }) =>
					(pathname === path || (prev.current === path && isAnimating)) && (
						<Component
							key={path}
							className={
								isRouteChanged && prev.current === path
									? "!animate-[fadeOut_0.5s_forwards]"
									: ""
							}
						/>
					)
			)}

			{myProjects.map(
				(project) =>
					(pathname === project.path ||
						(prev.current === project.path && isAnimating)) && (
						<ProjectDetail
							key={project.path}
							project={project}
							className={
								isRouteChanged && prev.current === project.path
									? "!animate-[fadeOut_0.5s_forwards]"
									: ""
							}
						/>
					)
			)}

			{/* 
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
					className={
						isRouteChanged && prev.current === "/projects"
							? "!animate-[fadeOut_0.5s_forwards]"
							: ""
					}
				/>
			)}

			{(pathname === "/about-me" || prev.current === "/about-me") && (
				<About
					className={
						isRouteChanged && prev.current === "/about-me"
							? "!animate-[fadeOut_0.5s_forwards]"
							: ""
					}
				/>
			)} */}

			{/* {(pathname === "/contact" || prev.current === "/contact") && (
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
			)} */}
		</>
	);
}

export default RouteManager;
