import { PiBriefcase, PiEnvelopeSimple, PiUser, PiHouse } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function NavbarIcons() {
	return (
		<nav>
			<ul className=" flex 900:hidden fixed bottom-10 left-1/2 px-[1.5rem] opacity-0 -translate-x-1/2 border bg-brand-900   animate-[fadeIn_1s_1s_forwards]  border-gray-700  rounded-full">
				<li>
					<NavLink className="px-8 py-5 inline-block">
						<PiHouse className="text-brand-500" size={25} />
					</NavLink>
				</li>
				<li>
					<NavLink className="px-8 py-5 inline-block" to="/projects">
						<PiBriefcase className="stroke" size={25} />
					</NavLink>
				</li>
				<li>
					<NavLink className="px-8 py-5 inline-block">
						<PiUser size={25} />
					</NavLink>
				</li>
				<li>
					<NavLink className="px-8 py-5 inline-block ">
						<PiEnvelopeSimple size={25} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavbarIcons;
