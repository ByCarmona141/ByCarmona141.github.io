import type { Skill } from './types';

export const backend = {
  title: 'Backend',
  languages: [
    { name: 'PHP', level: 'Avanzado', years: 4, icon: '/icons/backend/php.svg' },
    { name: 'Java', level: 'Intermedio', years: 2, icon: '/icons/backend/java.svg' },
    { name: 'Python', level: 'Básico', years: 1, icon: '/icons/backend/python.svg' },
  ],
  frameworks: [
    { name: 'Laravel', type: 'Framework', level: 'Avanzado', years: 4, icon: '/icons/backend/laravel.svg' },
    { name: 'FastAPI', type: 'Framework', level: 'Intermedio', years: 1, icon: '/icons/backend/fast-api.svg' },
  ],
  databases: [
    { name: 'MySQL', type: 'Relacional', icon: '/icons/backend/mysql.svg' },
    { name: 'MariaDB', type: 'Relacional', icon: '/icons/backend/mariadb.svg' },
    { name: 'PostgreSQL', type: 'Relacional', icon: '/icons/backend/postgresql.svg' },
  ],
} satisfies { title: string; languages: Skill[]; frameworks: Skill[]; databases: Skill[] };