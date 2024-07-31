import SkillItem from "./SkillItem";

import {
	PiDevicesFill,
	PiLightbulbFill,
	PiSparkleFill,
	PiSpeedometerFill,
} from "react-icons/pi";

import {
	BiLogoCss3,
	BiLogoHtml5,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoTailwindCss,
} from "react-icons/bi";

const skills = [
	{ name: "Html", icon: <BiLogoHtml5 size={22} /> },
	{ name: "Css", icon: <BiLogoCss3 size={22} /> },
	{ name: "Tailwind", icon: <BiLogoTailwindCss size={22} /> },
	{ name: "Javascript", icon: <BiLogoJavascript size={22} /> },
	{ name: "React", icon: <BiLogoReact size={22} /> },
	{ name: "Responsive Design", icon: <PiDevicesFill size={22} /> },
	{ name: "Clean Code", icon: <PiSparkleFill size={22} /> },
	{ name: "Performance", icon: <PiSpeedometerFill size={22} /> },
	{ name: "Problem Solving", icon: <PiLightbulbFill size={22} /> },
];

function MySkills() {
	return (
		<div className="h-full">
			<h4 className="text-[2.4rem] font-semibold text-[#ddd]  mb-12 500:mb-16 md:mb-[5.3rem] w-fit  md:text-[3.5rem] shadow-[0px_2px_0px_.1px_#EC1352] ">
				{/* <span className="text-brand-500">My </span> */}
				My
				{/* <span className="text-white/60">My </span> */}
				<span> skills</span>
			</h4>

			<div className="grid grid-cols-1 500:grid-cols-[auto_1fr] gap-5 500:gap-x-10 500:gap-y-10 md:gap-y-12 md:gap-x-20 text-[1.8rem] lg:mt-[6rem] text-[#ddd]">
				{skills.map((skill) => (
					<SkillItem
						key={skill.name}
						skillName={skill.name}
						icon={skill.icon}
					/>
				))}
			</div>
		</div>
	);
}

export default MySkills;
