import type {Metadata, Viewport} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {site, services} from "@/lib/site";

const defaultTitle = "CNID Paraguay | SMS Masivos, Hosting, VPS, WhatsApp Empresarial y Software";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {default: defaultTitle, template: "%s | CNID Paraguay"},
  description: "CNID – Centro Nacional de Información Digital. SMS masivos en Paraguay, WhatsApp empresarial y CRM, hosting, servidores VPS y cloud, data center, desarrollo de software, correo corporativo y soporte técnico.",
  keywords: site.keywords,
  applicationName: "CNID",
  authors: [{name: site.fullName, url: site.url}],
  creator: site.fullName,
  publisher: site.fullName,
  category: "technology",
  alternates: {canonical: "/"},
  robots: {index: true, follow: true, googleBot: {index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1}},
  formatDetection: {telephone: false},
  openGraph: {type: "website", locale: "es_PY", siteName: "CNID Paraguay", title: defaultTitle, description: site.description, url: site.url},
  twitter: {card: "summary_large_image", title: defaultTitle, description: site.description},
  other: {"geo.region": "PY", "geo.placename": "Paraguay"},
};

export const viewport: Viewport = {themeColor: "#080b12", colorScheme: "dark"};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.fullName,
      alternateName: ["CNID", "CNID Paraguay"],
      url: site.url,
      logo: {"@type": "ImageObject", url: `${site.url}/brand/cnid-logo.png`, width: 640, height: 431},
      image: `${site.url}/opengraph-image.png`,
      slogan: "Conectando tu mundo",
      description: site.description,
      email: site.email,
      areaServed: {"@type": "Country", name: "Paraguay"},
      address: {"@type": "PostalAddress", addressCountry: "PY"},
      contactPoint: [{"@type": "ContactPoint", telephone: `+${site.supportWhatsapp}`, contactType: "customer support", areaServed: "PY", availableLanguage: ["es"]}],
      knowsAbout: services.map(s => s.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios tecnológicos CNID",
        itemListElement: services.map(s => ({"@type": "Offer", itemOffered: {"@type": "Service", name: s.title, url: `${site.url}/${s.slug}/`}})),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "CNID Paraguay",
      inLanguage: "es-PY",
      publisher: {"@id": `${site.url}/#organization`},
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es-PY">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgSchema)}} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
