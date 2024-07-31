function MyInfo() {
	return (
		<div className=" 500:grow">
			<h4 className="text-[2.4rem] w-fit  font-semibold text-[#ddd] mb-12 lg:mb-16 md:text-[3.5rem]">
				My info
			</h4>

			<div className="flex items-center mb-10 gap-8">
				<img
					src="/picture.jpg"
					alt="my personal picture"
					className="w-32 rounded-full   "
				/>

				<p className=" text-[2.5rem] text-[#ddd] font-semibold tracking-wider">
					Salah Aassab
				</p>
			</div>

			<div className="text-[1.5rem] [&>*]:mb-5 min-w-[25rem]  max-w-[38rem] ">
				<p>
					Hello! I'm Salah Aassab, a front-end web developer specializing in
					React.js.
				</p>

				<p>
					Since 2020, I've been honing my skills in HTML, CSS, and JavaScript,
					with a particular focus on building responsive and dynamic web
					applications.
				</p>
				<p>
					I've completed several projects showcasing my expertise in React and
					am currently expanding my skills towards becoming a MERN stack
					developer.
				</p>
				<p>
					Let's work together to bring your project to life with clean,
					efficient, and effective code.
				</p>
			</div>
		</div>
	);
}

export default MyInfo;