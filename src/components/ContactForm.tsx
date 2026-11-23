"use client";
import {useState} from "react";
import {ArrowUpRight} from "lucide-react";
import {site} from "@/lib/site";
export default function ContactForm(){
 const [name,setName]=useState("");const [company,setCompany]=useState("");const [service,setService]=useState("");const [message,setMessage]=useState("");
 function submit(e:React.FormEvent){e.preventDefault();const body=[`Hola CNID, soy ${name}.`,company?`Empresa: ${company}`:"",service?`Servicio: ${service}`:"",`Consulta: ${message}`].filter(Boolean).join("\n");window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`,"_blank","noopener,noreferrer");}
 return <form className="form" onSubmit={submit}><label>Nombre<input value={name} onChange={e=>setName(e.target.value)} required placeholder="Tu nombre"/></label><label>Empresa<input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Nombre de tu empresa"/></label><label>Servicio de interés<select value={service} onChange={e=>setService(e.target.value)}><option value="">Seleccionar servicio</option>{["WhatsApp empresarial y CRM","SMS Premium masivo","Hosting profesional","Servidores VPS y Cloud","Desarrollo de sistemas","Almacenamiento y backup","Data Center","Soporte y capacitación","Correo corporativo","Otro"].map(x=><option key={x}>{x}</option>)}</select></label><label>¿En qué podemos ayudarte?<textarea value={message} onChange={e=>setMessage(e.target.value)} required placeholder="Contanos brevemente sobre tu proyecto."/></label><button className="button button-primary" type="submit">Enviar consulta por WhatsApp <ArrowUpRight size={16}/></button><span className="form-note">Se abrirá WhatsApp para que revises y envíes tu consulta.</span></form>
}
