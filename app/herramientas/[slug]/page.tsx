// app/herramientas/[slug]/page.tsx
import { tools } from "@/config/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return tools.map((t) => ({ slug: t.slug }));
}

// (opcional) SEO dinámico por slug
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);
  const title = tool?.name ?? params.slug.replace(/-/g, " ");
  return { title: `Herramienta – ${title}` };
}

export default function ToolDetail({ params }: { params: Params }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  // `notFound()` corta la ejecución, así que a partir de aquí `tool` existe:
  const t = tool!;

  return (
    <section className="space-y-5">
      <h1 className="section-title">{t.name}</h1>

      <article className="card space-y-3 text-neutral-300">
        <p>{t.summary}</p>

        {Array.isArray(t.why) && t.why.length > 0 && (
          <ul className="list-disc ms-6 space-y-1">
            {t.why.map((w: string, i: number) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        )}

        {t.badges?.length ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {t.badges.map((b: string) => (
              <span key={b} className="badge">
                {b}
              </span>
            ))}
          </div>
        ) : null}

        {t.links?.length ? (
          <div className="pt-2">
            {t.links.map((l: { href: string; label: string }) => (
              <Link
                key={l.href}
                href={l.href}
                className="underline mr-4"
                target="_blank"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
      </article>

      <Link className="underline" href="/herramientas">
        ← Volver a herramientas
      </Link>
    </section>
  );
}
