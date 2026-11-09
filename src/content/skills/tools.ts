import type { Skill } from './types';

export const tools = {
  title: 'Herramientas',
  tools: [
    { name: 'Git', icon: '/icons/tools/git.svg', note: '' },
    { name: 'GitHub', icon: '/icons/tools/github.svg', note: '' },
    { name: 'GitLab', icon: '/icons/tools/gitlab.svg', note: '' },
    { name: 'Postman', icon: '/icons/tools/postman.svg', note: '' },
  ],
} satisfies { title: string; tools: Skill[] };