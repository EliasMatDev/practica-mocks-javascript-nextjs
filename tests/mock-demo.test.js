import { expect, test, vi } from "vitest";

// Demostración docente: leerla antes de probar la función de negocio.
test("un mock registra una llamada y el mensaje recibido", () => {
  const avisar = vi.fn();

  avisar("Hora de una pausa");

  // Usamos toBe, que ustedes ya conocen.
  expect(avisar.mock.calls.length).toBe(1);
  expect(avisar.mock.calls[0][0]).toBe("Hora de una pausa");

  // Controlar una respuesta es otra capacidad del mock.
  const confirmar = vi.fn().mockReturnValue(true);
  expect(confirmar()).toBe(true);
});
