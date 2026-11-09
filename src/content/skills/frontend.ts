import type { Skill } from './types';

export const frontend = {
  title: 'Frontend',
  languages: [
    { name: 'HTML', level: 'Avanzado', years: 4, icon: '/icons/frontend/html.svg' },
    { name: 'CSS', level: 'Avanzado', years: 4, icon: '/icons/frontend/css.svg' },
    { name: 'JavaScript', level: 'Avanzado', years: 4, icon: '/icons/frontend/javascript.svg' },
    { name: 'TypeScript', level: 'Intermedio', years: 2, icon: '/icons/frontend/typescript.svg' },
  ],
  frameworks: [
    { name: 'Angular', type: 'Framework', level: 'Intermedio', years: 2, icon: '/icons/frontend/angular.svg' },
    { name: 'Astro', type: 'Framework', level: 'Intermedio', years: 1, icon: '/icons/frontend/astro.svg' },
    { name: 'Bootstrap', type: 'Framework', level: 'Avanzado', years: 4, icon: '/icons/frontend/bootstrap.svg' },
    { name: 'Tailwind', type: 'Framework', level: 'Avanzado', years: 2, icon: '/icons/frontend/tailwind.svg' },
  ],
} satisfies { title: string; languages: Skill[]; frameworks: Skill[] };