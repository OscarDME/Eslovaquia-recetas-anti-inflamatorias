"use client";
import { useEffect, useRef } from "react";

// Checkout embebido de OrioPay (React) con LAZY LOAD.
//
// - Solo inyecta embed.js (iframe pesado + Stripe) cuando `show` es true → no carga en
//   cada visita ni dispara InitiateCheckout antes de abrir. async=false para que
//   document.currentScript funcione en embed.js.
// - Se carga desde www.oriopay.app (NO el apex: 307→www rompería el filtro de origen
//   del mensaje de altura → se cortaría).
// - La altura la ajusta OrioPay solo (postMessage oriopay:height). No fijar altura.
// - data-color = verde de marca (#28a745); data-font = Poppins (fuente del body).
export default function CheckoutEmbed({
  slug,
  show,
  color = "#28a745",
  font = "Poppins",
  radius = "12",
}) {
  const ref = useRef(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!show || loaded.current || !ref.current || !slug) return;
    loaded.current = true;
    const s = document.createElement("script");
    s.src = "https://www.oriopay.app/embed.js";
    s.async = false; // necesario para document.currentScript en embed.js
    s.setAttribute("data-slug", slug);
    s.setAttribute("data-color", color);
    s.setAttribute("data-font", font);
    s.setAttribute("data-radius", radius);
    ref.current.appendChild(s);
  }, [show, slug, color, font, radius]);

  return (
    <div
      ref={ref}
      className={
        "oriopay-embed w-full max-w-xl mx-auto" + (show ? " mt-8" : " hidden")
      }
    />
  );
}
