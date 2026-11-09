export type Nivel = 'Básico' | 'Intermedio' | 'Avanzado';

export interface Skill {
  name: string;
  icon: string;
  level?: Nivel;
  years?: number;
  type?: string; // "Framework", "Relacional", etc.
  note?: string;
}