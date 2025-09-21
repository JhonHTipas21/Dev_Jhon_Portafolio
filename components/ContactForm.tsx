"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("Interés laboral");
  const [message, setMessage] = useState("");

  const email = process.env.NEXT_PUBLIC_EMAIL || "";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hola Jhon,\n\n${message}\n\nAtte,\n${name}`
  )}`;

  return (
    <form className="space-y-3">
      <input
        className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        rows={6}
        className="w-full bg-transparent border border-white/10 rounded-lg px-3 py-2"
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <a href={mailto} className="btn btn-accent">Contact me →</a>
    </form>
  );
}
