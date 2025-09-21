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
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || undefined,
});

/**
 * Normaliza strings vacíos a null
 */
function toNullableString(v: string | null | undefined): string | null {
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  return trimmed.length ? trimmed : null;
}

export async function getPublicRepos(user: string): Promise<Repo[]> {
  const res = await octokit.repos.listForUser({
    username: user,
    per_page: 30,
    sort: "updated",
  });

  return res.data.map((r) => {
    const repo: Repo = {
      id: r.id ?? 0,
      name: r.name ?? "",
      full_name: r.full_name ?? "",
      html_url: r.html_url ?? "",
      description: toNullableString(r.description),
      language: r.language ?? null, // GitHub ya trae string|null, pero tipado permite undefined
      stargazers_count: r.stargazers_count ?? 0,
      forks_count: r.forks_count ?? 0,
      open_issues_count: r.open_issues_count ?? 0,
      // algunos esquemas exponen subscribers_count, otros watchers_count
      watchers_count: (r as any).subscribers_count ?? r.watchers_count ?? 0,
      homepage: toNullableString(r.homepage),
    };
    return repo;
  });
}

export async function getRepoByName(
  user: string,
  repoName: string
): Promise<Repo | null> {
  try {
    const { data: r } = await octokit.repos.get({
      owner: user,
      repo: repoName,
    });

    const repo: Repo = {
      id: r.id ?? 0,
      name: r.name ?? "",
      full_name: r.full_name ?? "",
      html_url: r.html_url ?? "",
      description: toNullableString(r.description),
      language: r.language ?? null,
      stargazers_count: r.stargazers_count ?? 0,
      forks_count: r.forks_count ?? 0,
      open_issues_count: r.open_issues_count ?? 0,
      watchers_count: (r as any).subscribers_count ?? r.watchers_count ?? 0,
      homepage: toNullableString(r.homepage),
    };

    return repo;
  } catch {
    return null;
  }
}
