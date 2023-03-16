import projects from "shared/projects.json";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <section className="flex flex-col w-full gap-2 mt-4 mb-8">
      <h1 className="text-2xl">Projects</h1>
      <div className="flex flex-col gap-2">
        {projects.map((project, i) => {
          return (
            <WorkCard
              key={i}
              name={project.name}
              details={project.details}
              logo={project.logo}
              year={project.year}
              url={project.url}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Work;
