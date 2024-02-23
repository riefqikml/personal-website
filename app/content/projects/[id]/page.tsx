import { projectList } from "@/project";
import Link from "next/link";
import { GoLink } from "react-icons/go";

export const ProjectPage = () => {
	return (
		<div className="flex flex-wrap px-4 pt-4 pb-8 gap-14 justify-center items-center">
			{projectList.map((item: any) => (
				<>
					<div className="rounded-badge w-96 bg-base-200 shadow-xl scale-100 hover:scale-105 ease-in duration-200">
						<div className="card-body">
							<h2 className="card-title">{item.name}</h2>
							<p className="h-[60px]">{item.description}</p>
							<div className="card-actions justify-end">
								<Link href={item.link} target="_blank">
									<button className="btn btn-ghost rounded-box ">
										<GoLink />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default ProjectPage;
