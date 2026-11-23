"use client";
import Link from "next/link";
import {useState} from "react";
import {Menu, X, ArrowUpRight} from "lucide-react";
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="nav wrap">
  <Link href="/" className="brand"><span className="brand-mark">C</span><span>CNID<small>TECNOLOGÍA · CONECTIVIDAD · INNOVACIÓN</small></span></Link>
  <nav className={open?"nav-links show":"nav-links"}><Link onClick={()=>setOpen(false)} href="/servicios">Servicios</Link><Link onClick={()=>setOpen(false)} href="/#infraestructura">Infraestructura</Link><Link onClick={()=>setOpen(false)} href="/#nosotros">Nosotros</Link><Link onClick={()=>setOpen(false)} href="/contacto">Contacto</Link><Link className="nav-cta" onClick={()=>setOpen(false)} href="/contacto">Hablemos <ArrowUpRight size={16}/></Link></nav>
  <button className="menu-btn" aria-label="Abrir menú" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div></header>
}