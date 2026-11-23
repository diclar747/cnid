import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {site} from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"CNID Paraguay | Tecnología, Comunicaciones e Infraestructura Digital",template:"%s | CNID Paraguay"},description:"Soluciones tecnológicas en Paraguay: WhatsApp empresarial, CRM, SMS masivos, hosting, VPS, desarrollo de software, cloud, backup y soporte TI.",openGraph:{type:"website",locale:"es_PY",siteName:"CNID",title:"CNID Paraguay | Tecnología e Infraestructura Digital",description:"Tecnología, comunicaciones e infraestructura digital para empresas e instituciones.",url:site.url},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><Header/><main>{children}</main><Footer/></body></html>}
