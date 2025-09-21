import Link from "next/link";
import { tools } from "@/config/tools";

export const metadata = { title: "Herramientas" };

export default function ToolsPage(){
  const groups = ["frontend","backend","devops","productivity"] as const;

  return (
    <section className="space-y-6">
      <h1 className="section-title">Herramientas</h1>
      {groups.map(g => {
        const items = tools.filter(t => t.kind === g);
        if(!items.length) return null;
        return (
          <div key={g} className="space-y-3">
            <h2 className="text-xl capitalize text-neutral-300">{g}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(t => (
                <article key={t.slug} className="card space-y-2">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-neutral-300">{t.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.badges?.map(b => <span key={b} className="badge">{b}</span>)}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <Link className="underline" href={`/herramientas/${t.slug}`}>Ver más</Link>
                    {t.links?.[0] && (
                      <Link className="underline" href={t.links[0].href} target="_blank">
                        {t.links[0].label}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
