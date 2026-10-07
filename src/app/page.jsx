"use client";

import { useState } from "react";
import BotonPausa from "../components/BotonPausa.jsx";

// Página precargada: sirve para observar el componente en el navegador.
export default function Page() {
  const [mensaje, setMensaje] = useState("Todavía no se ha pedido el aviso.");

  return (
    <main>
      <p className="etiqueta">Práctica de testing</p>
      <h1>Recordatorio de pausa</h1>
      <p>Al hacer clic, el botón solicita un aviso.</p>
      <section aria-label="Ejemplo disponible">
        <h2>Botón disponible</h2>
        <BotonPausa onRecordar={setMensaje} />
      </section>
      <p role="status">{mensaje}</p>
      <section aria-label="Ejemplo deshabilitado">
        <h2>Botón deshabilitado</h2>
        <p>Este botón no debe solicitar el aviso.</p>
        <BotonPausa onRecordar={setMensaje} disabled />
      </section>
    </main>
  );
}
