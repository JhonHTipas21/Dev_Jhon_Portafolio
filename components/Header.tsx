"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
/* ✅ Importa el logo local */
import logo from "@/public/logo-jhon.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre-mi", label: "About" },
  { href: "/proyectos", label: "Portfolio" },
  { href: "/contacto", label: "Contact" },
];

export default function Header(){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo Jhon" width={28} height={28} priority className="rounded" />
          <span className="font-semibold">Developer J</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-3 py-2 rounded-lg hover:bg-white/10",
                  pathname === l.href && "bg-white/15"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Toggle CV */}
          <div className="relative" ref={menuRef}>
            <button onClick={() => setOpen(v => !v)} className="btn">CV</button>
            {open && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-[rgb(var(--bg))] p-2 shadow">
                <Link href="/JhonHarveyCV.pdf" download className="block px-3 py-2 rounded-lg hover:bg-white/10">
                  Descargar PDF
                </Link>
                <Link href="/JhonHarveyCV.pdf" target="_blank" className="block px-3 py-2 rounded-lg hover:bg-white/10">
                  Ver en el navegador
                </Link>
              </div>
            )}
          </div>

          {/* Móvil: acceso rápido a Portfolio */}
          <nav className="md:hidden">
            <Link className="px-3 py-2 rounded-lg hover:bg-white/10" href="/proyectos">Portfolio</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
