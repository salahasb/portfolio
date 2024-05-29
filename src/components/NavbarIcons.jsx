import { PiBriefcase, PiEnvelopeSimple, PiUser, PiHouse } from "react-icons/pi";

function NavbarIcons() {
	return (
		<nav>
			<ul className=" flex   md:hidden fixed bottom-10 left-1/2 -translate-x-1/2 border border-gray-800 py-5 px-4 rounded-full">
				<li>
					<button className="px-8">
						<PiHouse className="text-brand-500" size={25} />
					</button>
				</li>
				<li>
					<button className="px-8">
						<PiBriefcase className="stroke" size={25} />
					</button>
				</li>
				<li>
					<button className="px-8">
						<PiUser size={25} />
					</button>
				</li>
				<li>
					<button className="px-8">
						<PiEnvelopeSimple size={25} />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default NavbarIcons;
