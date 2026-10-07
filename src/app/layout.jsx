import "./globals.css";

export const metadata = {
  title: "Recordatorio de pausa",
  description: "Ejemplo práctico de mocks y pruebas de componentes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
