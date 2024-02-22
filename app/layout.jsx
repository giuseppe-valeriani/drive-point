import "@styles/global.scss";

export const metadata = {
  title: "Drive Point",
  description: "An app for driving instructors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
