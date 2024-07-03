import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/i18n";
import { i18n } from "../../next-i18next.config.mjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeMa - Send SMS easily without any cost",
  description: "An app to send SMS easily without any cost",
};

const i18nNamespaces = ["user"];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { resources } = await initTranslations(
    i18n.defaultLocale,
    i18nNamespaces,
  );

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <TranslationsProvider
          locale={i18n.defaultLocale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
