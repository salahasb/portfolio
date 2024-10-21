import { PiBriefcase, PiUser, PiHouse } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import useAnimatedNavigate from "../../features/animated-routing/hooks/useAnimatedNavigate";

function NavbarIcons() {
	const { pathname } = useLocation();
	const { handleNavigate } = useAnimatedNavigate();

	return (
		<nav>
			<ul className=" flex 900:hidden fixed bottom-10 left-1/2 px-[1.5rem] opacity-0 -translate-x-1/2 border bg-brand-900/30 md:bg-transparent backdrop-blur-[3px] md:backdrop-blur-[1px]   animate-[fadeIn_1s_1s_forwards]  border-gray-700  rounded-full">
				<li>
					<button
						className="px-8 py-5 inline-block"
						onClick={() => handleNavigate("/")}
					>
						<PiHouse
							size={25}
							className={`text-brand-500" ${
								pathname === "/" ? "text-brand-500" : ""
							}`}
						/>
					</button>
				</li>
				<li>
					<button
						className="px-8 py-5 inline-block"
						onClick={() => handleNavigate("/projects")}
					>
						<PiBriefcase
							size={25}
							className={`stroke" ${
								pathname === "/projects" ? "text-brand-500" : ""
							}`}
						/>
					</button>
				</li>
				<li>
					<button
						className="px-8 py-5 inline-block"
						onClick={() => handleNavigate("/about-me")}
					>
						<PiUser
							size={25}
							className={`" ${
								pathname === "/about-me" ? "text-brand-500" : ""
							}`}
						/>
					</button>
				</li>
				{/* <li>
					<button  className="px-8 py-5 inline-block " onClick={()=>handleNavigate()}>
						<PiEnvelopeSimple
						 size={25}
							className={`" ${
								pathname === "" ? "text-brand-500" : ""
							}`}
						/>
					</button>
				</li> */}
			</ul>
		</nav>
	);
}

export default NavbarIcons;
