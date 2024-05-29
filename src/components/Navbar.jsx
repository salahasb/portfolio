import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className={`hidden md:block text-[2rem]`}>
			<ul className="flex  tracking-wide font-bold gap-10 xl:gap-16 ">
				<li>
					<NavLink to="/" className="border-b  pb-3 border-b-brand-500">
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
