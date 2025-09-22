// app/proyecto/[slug]/page.tsx
import { getRepo } from "@/lib/github";
import RepoStats from "@/components/RepoStats";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

// (opcional) título dinámico según el slug (sin pegarle a la API)
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: `Proyecto – ${title}` };
}

export default async function RepoDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  // En server components puedes leer variables de entorno sin problema
  const user = process.env.NEXT_PUBLIC_GITHUB_USER ?? "JhonHTipas21";

  // Obtén el repo por nombre (owner/repo)
  const repo = await getRepo(user, slug);

  if (!repo) {
    notFound(); // 404 real
  }

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-semibold">{repo.name}</h1>
      <p className="text-neutral-300">
        {repo.description ?? "Sin descripción"}
      </p>

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
