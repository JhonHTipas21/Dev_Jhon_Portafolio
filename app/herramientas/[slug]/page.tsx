// app/herramientas/[slug]/page.tsx
import { tools } from "@/config/tools";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return tools.map((t) => ({ slug: t.slug }));
}

// Next 15: params es Promise<Params>
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  const title =
    tool?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: `Herramienta – ${title}` };
}

export default async function ToolDetail(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

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
