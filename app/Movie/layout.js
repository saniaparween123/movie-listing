export const metadata = {
  title: 'Movie Project',
  description: 'My First React Assingment ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
