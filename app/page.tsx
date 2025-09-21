"use client";

import { motion } from "framer-motion";
import ContactButtons from "@/components/ContactButtons";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile.jpg";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* sección hero en card grande */}
      <section className="page-card">
        <div className="grid md:grid-cols-2 gap-0">
          {/* panel izquierdo */}
          <div className="p-8 md:p-12 flex flex-col gap-6">
            <div
              className="h-1 w-16 rounded-full"
              style={{ background: "rgb(var(--accent))" }}
            />
            <motion.h1
              className="text-4xl md:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              I’m <span style={{ color: "rgb(var(--accent))" }}>Jhon</span>, a
              <br /> Web Developer
            </motion.h1>

            <p className="text-neutral-300 max-w-prose">
              Desarrollador de Software — USC. Web, APIs y ML aplicado. Me gusta
              construir productos que se vean bien, sean rápidos y fáciles de
              mantener.
            </p>

            <div className="flex items-center gap-3">
              <Link href="/proyectos" className="btn btn-accent">
                Browse portfolio →
              </Link>
              <Link
                href="https://github.com/JhonHTipas21"
                target="_blank"
                className="btn"
              >
                <Github size={18} /> GitHub
              </Link>
            </div>

            <div className="pt-4">
              <ContactButtons />
            </div>
          </div>

          {/* panel derecho: foto redonda dentro de círculo */}
          <div className="relative flex items-center justify-center p-10 bg-[rgba(255,255,255,0.02)]">
            <div
              className="absolute size-64 md:size-80 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(120,162,255,.2), transparent 70%)",
              }}
            />
            <Image
              alt="Foto de perfil de Jhon"
              src={profilePic}
              width={300}
              height={300}
              priority
              sizes="(max-width: 768px) 60vw, 300px"
              className="relative rounded-full border border-white/10 shadow-2xl object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* franja oscura como en el mockup */}
      <div className="page-card p-6" />

      {/* llamada a Portfolio */}
      <section className="page-card p-8 md:p-12">
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="text-neutral-300">
          Mira el listado completo en{" "}
          <Link href="/proyectos" className="underline">
            /proyectos
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
