export interface Certification {
  name: string;
  institution: string;
  year: number;
  status?: string;         // texto de la insignia: "2022 • Verificado"
  description?: string;
  tags?: string[];
  credentialId?: string;
  credentialUrl?: string;  // si falta, no se muestra el pie con "Verificar Credencial"
  icon?: string;           // logo en /public; si falta, se usa un ícono genérico
}

export const certifications: Certification[] = [
  {
    name: 'Curso Professional Software Developer',
    institution: 'IEEE Computer Society',
    year: 2026,
    status: 'Verificado',
    description: 'Formación profesional en desarrollo de software impartida por IEEE Computer Society.',
    tags: ['Desarrollo de software', 'Ingeniería', 'IEEE'],
    credentialId: '183503331',
    credentialUrl: 'https://credentialing.ea.ieee.org/d7926e83-7c93-45ce-95f9-284bc97d53a2#acc.jl5EnXmT',
    icon: '/icons/certifications/ieee-cs.svg',
  },
  {
    name: 'Cybersecurity Foundation',
    institution: 'Palo Alto Network',
    year: 2022,
    status: 'Verificado',
    description: 'Fundamentos de ciberseguridad, seguridad de redes y de la nube.',
    tags: ['Ciberseguridad', 'Seguridad de red', 'Cloud'],
    credentialId: '8KRknVp4wZ',
    credentialUrl: 'https://www.credly.com/badges/8KRknVp4wZ',
    icon: '/icons/certifications/palo-alto.svg',
  },
  {
    name: 'The Linux Essentials Professional Development',
    institution: 'NDG Linux Essentials',
    year: 2022,
    status: 'Completado',
    description: 'Fundamentos de Linux: línea de comandos, sistema de archivos, permisos y software libre.',
    tags: ['Linux', 'Terminal', 'Permisos'],
    icon: '/icons/certifications/linux.svg',
  },
  {
    name: 'Introduccion al Desarrollo Web I',
    institution: 'Google Actívate',
    year: 2022,
    status: 'Completado', // cámbialo a 'Verificado' cuando pongas el enlace correcto
    description: 'Primera parte del curso de introducción al desarrollo web de Google Actívate.',
    tags: ['Desarrollo web', 'Frontend'],
    credentialId: 'V9E JWY CRQ',
    // credentialUrl: '',
    icon: '/icons/certifications/google.svg',
  },
  {
    name: 'Introduccion al Desarrollo Web II',
    institution: 'Google Actívate',
    year: 2022,
    status: 'Completado', // cámbialo a 'Verificado' cuando pongas el enlace correcto
    description: 'Segunda parte del curso de introducción al desarrollo web de Google Actívate.',
    tags: ['Desarrollo web', 'Frontend'],
    credentialId: 'F7T 2WH VP8',
    // REVISAR: este enlace es el de Palo Alto; pon el de tu certificado de Google
    // credentialUrl: '',
    icon: '/icons/certifications/google.svg',
  },
  {
    name: 'CCNAv7: Introduction to Networks',
    institution: 'Cisco',
    year: 2021,
    status: 'Completado',
    description: 'Fundamentos de redes: direccionamiento IP, Ethernet, protocolos y configuración básica de dispositivos.',
    tags: ['Redes', 'IPv4/IPv6', 'Ethernet', 'Cisco'],
    icon: '/icons/certifications/cisco.svg',
  },
];