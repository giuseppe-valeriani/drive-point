import "@styles/global.scss";
import { AuthProvider } from "@contexts/AuthContext";

export const metadata = {
  title: "Drive Point",
  description: "An app for driving instructors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
