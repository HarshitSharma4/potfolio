import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;700&family=Poppins:wght@400;700&family=Roboto:wght@400;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      <body
        className={`bg-darktheme-primary text-darktheme-text relative`}
      >
        {children}
      </body>
    </html>
  );
}
