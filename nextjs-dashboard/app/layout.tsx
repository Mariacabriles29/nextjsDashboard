/*Este archivo envuelve toda la pagina page.tsx 
el h1 es un layout que envuelve el children->el children es el page.tsx  */
import { montserrat } from "./ui/fonts";
import "./ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
