import { getRepoByName } from "@/lib/github";
import RepoStats from "@/components/RepoStats";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function RepoDetailPage({ params }: Props) {
  const user = process.env.NEXT_PUBLIC_GITHUB_USER!;
  const repo = await getRepoByName(user, params.slug);

  if (!repo) return <div>No se encontró el repositorio.</div>;

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-semibold">{repo.name}</h1>
      <p className="text-neutral-300">{repo.description ?? "Sin descripción"}</p>
      <RepoStats repo={repo} />
      <div className="space-x-3">
        <Link href={repo.html_url} target="_blank" className="underline">Ver en GitHub</Link>
        {repo.homepage && (
          <Link href={repo.homepage} target="_blank" className="underline">Demo</Link>
        )}
      </div>
    </article>
  );
}
