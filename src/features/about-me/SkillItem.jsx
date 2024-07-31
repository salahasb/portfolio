function SkillItem({ skillName, icon }) {
	return (
		<div className="flex items-center gap-5">
			<div className="p-3 bg-brand-800 rounded-full">{icon}</div>

			<span>{skillName}</span>
		</div>
	);
}

export default SkillItem;
