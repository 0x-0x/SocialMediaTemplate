import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./authContext";
import { ThemeProvider, useTheme } from "./ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeaveIt",
  description: "A social app built on the Permaweb with Arweave",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
