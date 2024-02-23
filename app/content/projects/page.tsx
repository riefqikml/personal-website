import { projectList } from "@/projects-data";
import Link from "next/link";
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
	return (
		<div>
			<h1 className="text-center pb-8 pt-4 text-3xl font-bold">Projects</h1>
			<div className="flex flex-wrap gap-14 justify-center items-center p-8 pt-4">
				{projectList.map((item: any) => (
					<>
						<div className="rounded-badge w-96 bg-base-200 shadow-xl scale-100 hover:scale-105 ease-in duration-200">
							<div className="card-body">
								<h2 className="card-title">{item.name}</h2>
								<p className="h-[60px]">{item.description}</p>
								<div className="card-actions justify-end">
									<Link href={item.link} target="_blank">
										<button
											className="btn btn-ghost rounded-box tooltip"
											data-tip="Project Website"
										>
											<GoLink />
										</button>
									</Link>
									<Link href={item.github} target="_blank">
										<button
											className="btn btn-ghost rounded-box tooltip"
											data-tip="Source Code"
										>
											<FaGithub />
										</button>
									</Link>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default Projects;
