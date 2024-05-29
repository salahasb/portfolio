import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
	return (
		<header className="justify-between items-center py-10 flex ">
			<Link
				to="/"
				className="text-white text-[2rem] 425:text-[2.4rem]  font-extrabold "
			>
				Salah <span className="text-brand-500">Asb</span>
			</Link>

			<Navbar />

			<Link
				to="contact"
				className="text-white text-[1.8rem] font-semibold rounded-lg hidden 425:inline-block  bg-brand-500 px-5 py-2  "
			>
				Let&apos;s talk
			</Link>
		</header>
	);
}

export default Header;
