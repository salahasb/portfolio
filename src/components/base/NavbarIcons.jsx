import { PiBriefcase, PiEnvelopeSimple, PiUser, PiHouse } from "react-icons/pi";

function NavbarIcons() {
	return (
		<nav>
			<ul className=" flex 900:hidden fixed bottom-10 left-1/2 px-[1.5rem] -translate-x-1/2 border  border-gray-800  rounded-full">
				<li>
					<button className="px-8 py-5   ">
						<PiHouse className="text-brand-500" size={25} />
					</button>
				</li>
				<li>
					<button className="px-8 py-5 ">
						<PiBriefcase className="stroke" size={25} />
					</button>
				</li>
				<li>
					<button className="px-8 py-5 ">
						<PiUser size={25} />
					</button>
				</li>
				<li>
					<button className="px-8 py-5  ">
						<PiEnvelopeSimple size={25} />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavbarIcons;
