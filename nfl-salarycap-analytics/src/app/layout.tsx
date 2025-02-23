// src/app/layout.tsx
import "./styles/global.css"// Global CSS
import Link from "next/link";

export const metadata = {
  title: "NFL Salary Cap Tracker",
  description: "Explore NFL team salary caps, restructure contracts, and sign free agents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="bg-blue-900 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              NFL Salary Cap 2025
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/teams" className="hover:underline">
                Teams
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>Built with Next.js | Data as of February 22, 2025</p>
        </footer>
      </body>
    </html>
  );
}
