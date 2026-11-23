# CNID – Centro Nacional de Información Digital

Sitio institucional multipágina, responsive y optimizado para SEO.

## Requisitos
- Node.js 18.17+ (recomendado Node 20)
- npm

## Ejecutar localmente
```bash
npm install
npm run dev
```
Abrir http://localhost:3000

## Compilar para producción
```bash
npm run build
npm start
```

## Antes de publicar
1. Reemplazar `+595000000000` y `595000000000` por el WhatsApp comercial real de CNID.
2. Confirmar dirección, teléfono, correo, horarios y enlaces sociales en `src/lib/site.ts`.
3. Revisar textos comerciales, cobertura y capacidades publicadas. No se declaran certificaciones, SLA, uptime o características no confirmadas.
4. Actualizar `https://cnid.com.py` si se usa otro dominio canónico.
5. Configurar Google Search Console y enviar `/sitemap.xml`.

## Estructura
- `/` Inicio
- `/servicios` Directorio de servicios
- `/whatsapp-empresarial`
- `/sms-masivos-paraguay`
- `/hosting-paraguay`
- `/servidores-vps`
- `/desarrollo-software`
- `/almacenamiento-nube`
- `/data-center`
- `/soporte-capacitacion`
- `/correo-empresarial`
- `/contacto`

Las páginas de servicios comparten una plantilla de contenido individual con metadata propia, FAQ y datos estructurados. Las imágenes son URLs de Unsplash; para producción se recomienda descargarlas, optimizarlas y servirlas desde el propio dominio/CDN.
