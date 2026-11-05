export const site = {
  nombre: 'Carlos Álvarez Carmona',
  puesto: 'Desarrollador de Software & Investigador',
  email: 'ByCarmona141@gmail.com',
  logo: '/logo.png', // guardar logo en public/logo.png
  orcid: {
    id: '0009-0004-7013-6752',
    url: 'https://orcid.org/0009-0004-7013-6752',
  },
  redes: [
    { id: 'github', nombre: 'GitHub', url: 'https://github.com/ByCarmona141', icono: 'terminal' },
    { id: 'linkedin', nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/bycarmona141/', icono: 'share' },
  ],
} as const;
  
export const nav = [
  { id: 'portafolio', texto: 'Portafolio', href: '/' },
  { id: 'research', texto: 'Research', href: '/research' },
  { id: 'blog-tecnico', texto: 'Blog Técnico', href: '/blog-tecnico' },
] as const;

export const areas = [
  { valor: 'software', texto: 'Desarrollo de Software (Laravel / Angular)' },
  { valor: 'research', texto: 'Colaboración Científica / Research en APIs' },
  { valor: 'audit', texto: 'Auditoría de Seguridad y Monitoreo RESTful' },
  { valor: 'other', texto: 'Otro asunto profesional' },
] as const;
  
export type NavId = (typeof nav)[number]['id'];
export type AreasId = (typeof areas)[number]['valor'];
export type RedId = (typeof site.redes)[number]['id'];
  
export function red(id: RedId) {
  return site.redes.find((r) => r.id === id)!;
}