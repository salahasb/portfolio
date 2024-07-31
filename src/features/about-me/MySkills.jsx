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
	{ name: "Html", icon: <BiLogoHtml5 /> },
	{ name: "Css", icon: <BiLogoCss3 /> },
	{ name: "Tailwind", icon: <BiLogoTailwindCss /> },
	{ name: "Javascript", icon: <BiLogoJavascript /> },
	{ name: "React", icon: <BiLogoReact /> },
	{ name: "Responsive Design", icon: <PiDevicesFill /> },
	{ name: "Clean Code", icon: <PiSparkleFill /> },
	{ name: "Performance", icon: <PiSpeedometerFill /> },
	{ name: "Problem Solving", icon: <PiLightbulbFill /> },
];

function MySkills() {
	return (
		<div className="h-full">
			<h4 className="text-[2.4rem] font-semibold text-[#ddd]   mb-12 500:mb-16 md:mb-[5.3rem] w-fit  md:text-[3.5rem]  ">
				My skills
			</h4>

			<div className="grid grid-cols-1 500:grid-cols-[auto_1fr] gap-5 500:gap-x-10 500:gap-y-10 md:gap-y-12 text-[1.8rem] lg:mt-[6.2rem]">
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
