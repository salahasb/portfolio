import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "../Button";

function Header() {
	return (
		<header className="justify-between items-center py-10   flex ">
			<Link to="/" className="text-white text-[2.6rem]   font-extrabold">
				Salah <span className="text-brand-500">Asb</span>
			</Link>

			<Navbar />

			<Button className={"px-8 hidden 425:inline-block text-[1.8rem] "}>
				Let&apos;s talk
			</Button>
		</header>
	);
}

export default Header;
