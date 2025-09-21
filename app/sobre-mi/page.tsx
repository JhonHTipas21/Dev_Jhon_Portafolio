import Image from "next/image";
/* ✅ Importa la foto local */
import profilePic from "@/public/profile.jpg";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="space-y-8">
      {/* Card principal con tu descripción */}
      <div className="page-card p-8 md:p-12 space-y-6">
        <div
          className="h-1 w-16 rounded-full"
          style={{ background: "rgb(var(--accent))" }}
        />
        <h1 className="section-title">Sobre mí</h1>

        <div className="grid md:grid-cols-[1fr,260px] gap-6 items-start">
          <article className="space-y-4 leading-relaxed text-neutral-300">
            <p>
              Como estudiante de Ingeniería de Sistemas de <strong>21 años</strong> en la
              Universidad de Santiago de Cali, estoy cursando mi <strong>7.º semestre</strong>.
              A lo largo de mi vida, mi pasión por la tecnología y cómo funciona me ha
              impulsado a adquirir sólidos conocimientos y experiencia en entornos de
              desarrollo y lenguajes de programación.
            </p>
            <p>
              Soy un <strong>desarrollador de software</strong> con un año de experiencia como
              freelancer, trabajando con lenguajes como <strong>Java, Python, JavaScript y C++</strong>.
              He participado en proyectos tanto de <strong>frontend</strong> como de <strong>backend</strong>,
              siempre con el objetivo de entregar soluciones eficientes y de calidad,
              manteniendo un enfoque constante en las necesidades del cliente y las
              últimas tecnologías.
            </p>

            <div className="hr my-4" />

            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li>
                <span className="badge mr-2">Universidad</span> Universidad Santiago de Cali
              </li>
              <li>
                <span className="badge mr-2">Programa</span> Ingeniería de Sistemas (7.º semestre)
              </li>
              <li>
                <span className="badge mr-2">Idiomas</span> Español (Nativo), Inglés (B2)
              </li>
              <li>
                <span className="badge mr-2">Ubicación</span> Cali, Colombia
              </li>
            </ul>
          </article>

          <aside className="justify-self-center">
            <Image
              alt="Foto de Jhon Harvey Tipas"
              src={profilePic}
              width={220}
              height={220}
              sizes="220px"
              className="rounded-2xl border border-white/10 object-cover"
              placeholder="blur"
            />
          </aside>
        </div>
      </div>

      {/* Métricas rápidas (como en el mockup) */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-3xl font-semibold">20+</div>
          <div className="text-neutral-400 text-sm">Proyectos</div>
        </div>
        <div className="card">
          <div className="text-3xl font-semibold">150+</div>
          <div className="text-neutral-400 text-sm">Commits recientes</div>
        </div>
        <div className="card">
          <div className="text-3xl font-semibold">7.º</div>
          <div className="text-neutral-400 text-sm">Semestre USC</div>
        </div>
      </div>

      {/* Stack / skills en badges */}
      <div className="page-card p-8">
        <h2 className="text-xl font-semibold mb-3">Stack actual</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Angular",
            "Vue.js",
            "Node.js",
            "FastAPI",
            "Python (Django/Flask)",
            "Java",
            "C++",
            "MySQL",
            ".NET",
            "AWS",
          ].map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
