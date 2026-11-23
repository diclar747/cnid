import Link from "next/link";
import {ArrowUpRight,MessagesSquare,Send,Server,Cloud,Code2,Database,Network,Headphones,Mail} from "lucide-react";
import type {Service} from "@/lib/site";
const icons:any={messages:MessagesSquare,send:Send,server:Server,cloud:Cloud,code:Code2,database:Database,network:Network,headphones:Headphones,mail:Mail};
export default function ServiceCard({service,index=0}:{service:Service,index?:number}){const Icon=icons[service.icon]||Cloud;return <Link href={`/${service.slug}`} className="service-card" style={{"--delay":`${index*70}ms`} as React.CSSProperties}><div className="service-card-top"><span className="icon-box"><Icon size={22}/></span><ArrowUpRight className="card-arrow" size={19}/></div><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">Conocer solución <ArrowUpRight size={15}/></span></Link>}
