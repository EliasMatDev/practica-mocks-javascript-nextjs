"use client";

// Completar el callback y el onClick durante el bloque de Next.js.
export default function BotonPausa({ disabled = false }) {
  return (
    <button type="button" disabled={disabled}>
      Recordar pausa
    </button>
  );
}
