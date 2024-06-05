import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className={`hidden 900:block `}>
			<ul className="flex  tracking-wide font-semibold text-[2rem] xl:text-[2.2rem] gap-10  lg:gap-16  xl:gap-20">
				<li>
					<NavLink to="/" className="  pb-3  ">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="my-projects">Projects</NavLink>
				</li>
				<li>
					<NavLink to="about-me">About</NavLink>
				</li>
				<li>
					<NavLink to="contact-me">Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
