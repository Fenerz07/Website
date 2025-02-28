'use client';

import '../styles/globals.css';
import Header from '../components/header';
import SwitchButton from '../components/switchButton';

export default function RootLayout({ children }) {
  const pages = ['/', '/about', '/project','/experience', '/contact'];

  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="page-container">
          {children}
          <SwitchButton pages={pages} />
        </main>
      </body>
    </html>
  );
}