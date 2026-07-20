import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Ethan Ali — Senior Software Engineer";
const description =
  "Portfolio of Ethan Ali, a senior full-stack engineer building high-traffic products, scalable APIs, and cloud-native systems.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "Ethan Ali",
      "Senior Software Engineer",
      "Full-Stack Engineer",
      "React",
      "TypeScript",
      "GraphQL",
      "Python",
      "Java",
    ],
    authors: [{ name: "Ethan Ali" }],
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "Ethan Ali — Senior Software Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
