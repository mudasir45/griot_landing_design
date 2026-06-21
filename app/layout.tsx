import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Griot Academy | Joyful Learning Made Safe",
  description:
    "Premium digital learning environment for kids ages 4–18. 200+ live courses in coding, chess, robotics, arts and more. Parent-approved and COPPA compliant.",
  keywords: "kids online classes, children education, coding for kids, chess lessons, robotics for children, STEM education",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-white text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
