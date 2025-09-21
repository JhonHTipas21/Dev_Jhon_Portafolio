"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage?: string | null;
};

export default function ProjectCard({ repo }: { repo: Repo }) {
  const [imgOk, setImgOk] = useState(true);
  const og = `https://opengraph.githubassets.com/1/${repo.full_name}`;

  return (
    <article className="card hover:shadow-xl transition-shadow">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
        {imgOk ? (
          <Image
            src={og}
            alt={repo.name}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center"
               style={{ background: "radial-gradient(closest-side, rgba(120,162,255,.15), transparent)" }}>
            <span className="text-neutral-300">{repo.name}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold">{repo.name}</h3>
      <p className="text-neutral-300 line-clamp-2">{repo.description ?? "Sin descripción"}</p>
      <div className="flex items-center gap-2 pt-2">
        {repo.language && <span className="badge">{repo.language}</span>}
        <span className="text-sm text-neutral-400">★ {repo.stargazers_count}</span>
        <span className="text-sm text-neutral-400">⑂ {repo.forks_count}</span>
      </div>
      <div className="flex gap-3 pt-3">
        <Link className="underline" href={`/proyecto/${repo.name}`}>Detalles</Link>
        <Link className="underline" href={repo.html_url} target="_blank">Repositorio</Link>
        {repo.homepage && <Link className="underline" href={repo.homepage} target="_blank">Demo</Link>}
      </div>
    </article>
  );
}
