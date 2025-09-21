"use client";

import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function ContactButtons({ big = false }: { big?: boolean }) {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP;
  const email = process.env.NEXT_PUBLIC_EMAIL;

  const waHref = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hola Jhon, vi tu portafolio y quiero hablar."
  )}`;

  const size = big ? "px-5 py-3 text-base" : "px-4 py-2 text-sm";

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={`mailto:${email}?subject=${encodeURIComponent(
          "Interés laboral"
        )}&body=${encodeURIComponent("Hola Jhon, vi tu portafolio...")}`}
        className={`inline-flex items-center gap-2 rounded-xl bg-white text-black ${size}`}
      >
        <Mail size={18} /> Email
      </Link>
      <Link
        href={waHref}
        target="_blank"
        className={`inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 ${size}`}
      >
        <PhoneCall size={18} /> WhatsApp
      </Link>
    </div>
  );
}
