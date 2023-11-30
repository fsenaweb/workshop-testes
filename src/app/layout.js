import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Workshop",
  description: "Introdução aos testes unitários em aplicações web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
