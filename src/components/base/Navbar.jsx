import useAnimatedNavigate from "../../features/animated-routing/hooks/useAnimatedNavigate";

function Navbar() {
	const handleNavigate = useAnimatedNavigate();

	return (
		<nav className={`hidden 900:block `}>
			<ul className="flex   tracking-wider  font-semibold text-[2rem] xl:text-[2.4rem] gap-14  lg:gap-16 xl:gap-20 text-white/90 ">
				<li>
					<button onClick={() => handleNavigate("/")}>Home</button>
				</li>
				<li>
					<button onClick={() => handleNavigate("/projects")}>Projects</button>
				</li>
				<li>
					<button onClick={() => handleNavigate("/about-me")}>About</button>
				</li>
				{/* <li>
					<button onClick={() => handleNavigate("/contact")}>Contact</button>
				</li> */}
			</ul>
		</nav>
	);
}

export default Navbar;
