type Repo = {
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    watchers_count: number;
    language: string | null;
  };
  
  export default function RepoStats({ repo }: { repo: Repo }) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div className="rounded-xl bg-white/5 p-4 border border-white/10">★ Stars: {repo.stargazers_count}</div>
        <div className="rounded-xl bg-white/5 p-4 border border-white/10">⑂ Forks: {repo.forks_count}</div>
        <div className="rounded-xl bg-white/5 p-4 border border-white/10">👁 Watchers: {repo.watchers_count}</div>
        <div className="rounded-xl bg-white/5 p-4 border border-white/10">🧠 Lenguaje: {repo.language ?? "—"}</div>
      </div>
    );
  }
  