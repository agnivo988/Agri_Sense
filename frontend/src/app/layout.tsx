
import "./globals.css";

import 'leaflet/dist/leaflet.css';

 // import your i18n config

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}



