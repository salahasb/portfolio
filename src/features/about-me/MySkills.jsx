import { PiAirTrafficControlBold, PiSparkleFill } from "react-icons/pi";
import SkillItem from "./SkillItem";

const skills = [
	{ name: "Html", icon: <PiSparkleFill /> },
	{ name: "Css", icon: <PiSparkleFill /> },
	{ name: "Tailwind", icon: <PiSparkleFill /> },
	{ name: "Javascript", icon: <PiSparkleFill /> },
	{ name: "React", icon: <PiSparkleFill /> },
	{ name: "Responsiveness", icon: <PiSparkleFill /> },
	{ name: "Problem Solving", icon: <PiSparkleFill /> },
	{ name: "Clean Code", icon: <PiSparkleFill /> },
	{ name: "Performance & Optimization", icon: <PiSparkleFill /> },
];

function MySkills() {
	return (
		<div>
			<h4 className="text-[2.4rem] font-semibold text-[#ddd] mb-10">
				My skills
			</h4>

			<div className="grid grid-cols-1 gap-5 text-[1.8rem]">
				{skills.map((ele) => (
					<SkillItem key={ele} skillName={ele} />
				))}
				{/* <div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Css</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Tailwind</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Javascript</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>React</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Responsiveness</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Problem Solving</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Clean Code</span>
				</div>
				<div className="flex items-center gap-5">
					<PiAirTrafficControlBold /> <span>Performance & Optimization</span>
				</div> */}
			</div>
		</div>
	);
}

export default MySkills;
