import { tools } from "@/config/tools";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams(){
  return tools.map(t => ({ slug: t.slug }));
}

export default function ToolDetail({ params }: { params: { slug: string } }){
  const tool = tools.find(t => t.slug === params.slug);
  if(!tool) return notFound();

  return (
    <section className="space-y-5">
      <h1 className="section-title">{tool.name}</h1>
      <article className="card space-y-3 text-neutral-300">
        <p>{tool.summary}</p>
        <ul className="list-disc ms-6 space-y-1">
          {tool.why.map((w,i)=>(<li key={i}>{w}</li>))}
        </ul>
        {tool.badges && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tool.badges.map(b => <span key={b} className="badge">{b}</span>)}
          </div>
        )}
        {tool.links?.length ? (
          <div className="pt-2">
            {tool.links.map(l => (
              <Link key={l.href} href={l.href} className="underline mr-4" target="_blank">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
      </article>
      <Link className="underline" href="/herramientas">← Volver a herramientas</Link>
    </section>
  );
}
