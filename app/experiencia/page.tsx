import Timeline from "@/components/Timeline";

export const metadata = { title: "Experiencia" };

export default function ExperiencePage(){
  const items = [
    {
      title: "Freelance Developer",
      org: "Proyectos web y backend",
      period: "2021 – 2024",
      bullets: [
        "Desarrollo en JavaScript, Java, Python y C++ (frontend y backend).",
        "Soluciones enfocadas al cliente, buenas prácticas y despliegue.",
      ],
    },
    {
      title: "Líder de Proyecto",
      org: "Universidad Santiago de Cali",
      period: "2021",
      bullets: [
        "Dispositivo electrónico para recolección de residuos.",
        "Tecnología programable con enfoque sostenible.",
      ],
    },
  ];
  return (
    <section className="space-y-6">
      <h1 className="section-title">Experiencia</h1>
      <div className="card">
        <Timeline items={items} />
      </div>
    </section>
  );
}
