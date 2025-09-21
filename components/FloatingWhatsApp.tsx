"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp(){
  const wa = process.env.NEXT_PUBLIC_WHATSAPP;
  const href = `https://wa.me/${wa}?text=${encodeURIComponent("Hola Jhon, vi tu portafolio y quiero hablar.")}`;

  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 md:hidden"
    >
      <div className="size-14 grid place-items-center rounded-full shadow-lg"
           style={{ background: "rgb(var(--accent))", color: "#0b1020" }}>
        <MessageCircle />
      </div>
    </Link>
  );
}
