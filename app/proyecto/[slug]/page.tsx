import { getRepo } from "@/lib/github";
import RepoStats from "@/components/RepoStats";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function RepoDetailPage({ params }: Props) {
  // En server components puedes leer variables de entorno sin problema
  const user = process.env.NEXT_PUBLIC_GITHUB_USER ?? "JhonHTipas21";

  // Antes se llamaba getRepoByName; ahora la función correcta es getRepo
  const repo = await getRepo(user, params.slug);

  if (!repo) {
    return <div className="page-card p-6">No se encontró el repositorio.</div>;
  }

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-semibold">{repo.name}</h1>
      <p className="text-neutral-300">{repo.description ?? "Sin descripción"}</p>

      <RepoStats repo={repo} />

      <div className="space-x-3">
        <Link href={repo.html_url} target="_blank" className="btn">
          Ver en GitHub →
        </Link>
        {repo.homepage ? (
          <Link href={repo.homepage} target="_blank" className="btn btn-accent">
            Demo / Homepage
          </Link>
        ) : null}
      </div>
    </article>
  );
}
