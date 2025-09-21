// lib/github.ts
import { Octokit } from "@octokit/rest";

export type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  homepage: string | null;
  topics: string[];
};

type RepoAPI = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  homepage: string | null;
  topics?: string[];
  fork?: boolean;
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || undefined, // opcional (para aumentar rate limit)
  request: { fetch: globalThis.fetch },
});

/** Mapea el objeto de la API al tipo interno */
function mapRepo(r: RepoAPI): Repo {
  return {
    id: r.id,
    name: r.name,
    full_name: r.full_name,
    html_url: r.html_url,
    description: r.description,
    language: r.language,
    stargazers_count: r.stargazers_count,
    forks_count: r.forks_count,
    open_issues_count: r.open_issues_count,
    watchers_count: r.watchers_count,
    homepage: r.homepage,
    topics: r.topics ?? [],
  };
}

/** Últimos repos públicos del usuario (sin forks) */
export async function getPublicRepos(username: string, perPage = 12): Promise<Repo[]> {
  const res = await octokit.repos.listForUser({
    username,
    sort: "updated",
    per_page: perPage,
  });
  const data = res.data as unknown as RepoAPI[];
  return data.filter((r) => !r.fork).map(mapRepo);
}

/** Detalle de un repo específico */
export async function getRepo(username: string, repo: string): Promise<Repo | null> {
  try {
    const res = await octokit.repos.get({ owner: username, repo });
    const data = res.data as unknown as RepoAPI;
    return mapRepo(data);
  } catch {
    return null;
  }
}
