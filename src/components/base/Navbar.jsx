import { useLocation, useNavigate } from "react-router-dom";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import { routes } from "../../features/animated-routing/utils/constants";

function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { setIsAnimating, setCurRouteIndex } = useAnimatedRouting();

	// i set my custom navigation here in order to update some state before the "AnimatedRouting" re-renders (rather than updating them in 'Effect')
	function handleNavigate(path) {
		if (pathname === path) return;

		setIsAnimating(true);
		setCurRouteIndex(routes.indexOf(path));

		navigate(path);
	}

	return (
		<nav className={`hidden 900:block `}>
			<ul className="flex  tracking-wide font-semibold text-[2rem] xl:text-[2.2rem] gap-10  lg:gap-16  xl:gap-20">
				<li>
					<button onClick={() => handleNavigate("/")}>Home</button>
				</li>
				<li>
					<button onClick={() => handleNavigate("/projects")}>Projects</button>
				</li>
				<li>
					<button onClick={() => handleNavigate("/about-me")}>About</button>
				</li>
				<li>
					<button onClick={() => handleNavigate("/contact")}>Contact</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
