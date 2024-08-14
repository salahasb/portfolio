import { PiDotBold } from "react-icons/pi";

function ProjectFeatures() {
	return (
		<div className="basis-1/2 tracking-wider leading-relaxed text-[#ddd] max-w-[60rem]">
			<h3 className="text-[clamp(0rem,7vw,5rem)] font-bold tracking-wide mb-[2.5rem] text-[#eee]">
				Features
			</h3>

			<p className=" mb-[2rem] ">
				<span className="text-[1.8rem]  text-[#eee] font-bold shrink-0 ">
					<span>Extensive Recipe Search: </span>
				</span>
				<span className="text-[1.6rem] ">
					Users can search through a database of over 1,000,000 recipes with
					pagination to easily browse through results.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="text-[1.8rem]  text-[#eee] font-bold shrink-0 ">
					Detailed Recipe View:{" "}
				</span>
				<span className="text-[1.6rem] ">
					Each recipe includes detailed information such as the name, image,
					cooking time, servings, ingredients, and step-by-step instructions.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="text-[1.8rem]  text-[#eee] font-bold shrink-0 ">
					Interactive Serving Size Adjustment:{" "}
				</span>
				<span className="text-[1.6rem] ">
					Users can adjust the number of servings, and the ingredients
					automatically scale to match the selected serving size.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="text-[1.8rem]  text-[#eee] font-bold shrink-0 ">
					Recipe Bookmarking:{" "}
				</span>
				<span className="text-[1.6rem] ">
					Users can bookmark their favorite recipes, which are stored locally on
					their device for easy access.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="text-[1.8rem]  text-[#eee] font-bold shrink-0">
					Add Your Own Recipes:{" "}
				</span>
				<span className="text-[1.6rem] ">
					A user-friendly form allows users to add their own recipes, complete
					with all relevant details, to the backend (external API).
				</span>
			</p>
		</div>
	);
}

export default ProjectFeatures;
