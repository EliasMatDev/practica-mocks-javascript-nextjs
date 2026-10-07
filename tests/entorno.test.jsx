import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

// Verificación docente: confirma que JavaScript y JSX se ejecutan.
test("el entorno de pruebas está preparado", () => {
  render(<p>Entorno listo</p>);
  expect(screen.getByText("Entorno listo").textContent).toBe("Entorno listo");
});
