import type {MetadataRoute} from "next";
import {site,services} from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{return [{url:site.url,lastModified:new Date(),changeFrequency:"monthly",priority:1},{url:`${site.url}/servicios`,lastModified:new Date(),changeFrequency:"monthly",priority:.9},{url:`${site.url}/contacto`,lastModified:new Date(),changeFrequency:"yearly",priority:.7},...services.map(s=>({url:`${site.url}/${s.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.85}))];}
