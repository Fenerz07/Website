'use client';
import '../styles/globals.css';
import Header from '../components/header';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="page-container">
          {children}
        </main>
      </body>
    </html>
  );
}
