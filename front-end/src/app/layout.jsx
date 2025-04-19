import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export const metadata = {
  title: "Kelasor",
  description: "Your Digital Organization Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
