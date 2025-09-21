import ContactButtons from "../../components/ContactButtons";
import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div className="page-card p-8 md:p-12 space-y-6">
        <div className="h-1 w-16 rounded-full" style={{ background: "rgb(var(--accent))" }} />
        <h1 className="section-title">Let's work together</h1>

        <p className="text-neutral-300">
          Escríbeme por WhatsApp o correo. También puedes usar el formulario:
        </p>

        <div className="grid md:grid-cols-[1fr,420px] gap-6">
          <div className="card">
            <ContactForm />
          </div>
          <div className="card">
            <div className="font-semibold mb-2">Get in touch</div>
            <ContactButtons big />
          </div>
        </div>
      </div>
    </section>
  );
}
