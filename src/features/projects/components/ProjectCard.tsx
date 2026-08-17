import { Project } from "@/types/database";

interface Props {
  project: Project;
}

export function ProjectCard({
  project,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

      <div className="flex justify-between">

        <div>

          <div className="text-cyan-400 text-sm">
            {project.projectNumber}
          </div>

          <h3 className="font-semibold text-lg">
            {project.projectName}
          </h3>

        </div>

        <span className="text-xs bg-blue-500/20 px-3 py-1 rounded-full">
          {project.status}
        </span>

      </div>

      <div className="mt-4 text-sm text-slate-400">
        Cliente: {project.clientName}
      </div>

      <div className="text-sm text-slate-400">
        Preventa: {project.presalesEngineer}
      </div>

    </div>
  );
}
