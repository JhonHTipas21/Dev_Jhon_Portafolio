import { getPublicRepos } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = 3600;

export default async function ProjectsPage() {
  const user = process.env.NEXT_PUBLIC_GITHUB_USER!;
  const repos = await getPublicRepos(user);

  return (
    <section className="space-y-8">
      <div className="page-card p-8 md:p-12 space-y-2">
        <div className="h-1 w-16 rounded-full" style={{ background: "rgb(var(--accent))" }} />
        <h1 className="section-title">Portfolio</h1>
        <p className="text-neutral-300">Proyectos reales en los que he trabajado recientemente.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {repos.map((r) => (
          <ProjectCard key={r.id} repo={r} />
        ))}
      </div>
    </section>
  );
}
