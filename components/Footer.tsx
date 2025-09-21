import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-6 text-sm text-neutral-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} {siteConfig.author}. Todos los derechos reservados.</div>
        <div className="space-x-3">
          <Link href={`https://github.com/${siteConfig.githubUser}`} target="_blank">GitHub</Link>
          <Link href="/contacto">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
