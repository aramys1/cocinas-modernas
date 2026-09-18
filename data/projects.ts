export const projectCategories = {
  cocinas: 'Cocinas',
  closets: 'Clósets',
  'centros-de-tv': 'Centros de TV',
  remodelaciones: 'Remodelaciones',
} as const;
export type ProjectCategory = keyof typeof projectCategories;

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  description?: string;
  location?: string;
  duration?: string;
  projectType?: string;
  featured?: boolean;
  serviceFeatured?: boolean;
  published?: boolean;
  // Preserve an existing alternate home image without creating a second project.
  homeImage?: string;
  homeAlt?: string;
};

// Existing portfolio images are preserved. Add only verified project details.
export const projects: Project[] = [
  {
    id: 'cocina-gris',
    title: 'Cocina gris',
    category: 'cocinas',
    image: '/cocina-gris.png',
    alt: 'Cocina gris con gabinetes y almacenamiento a medida',
    featured: true,
    serviceFeatured: true,
    published: true,
  },
  {
    id: 'cocina-moderna',
    title: 'Cocina moderna',
    category: 'cocinas',
    image: '/process.png',
    alt: 'Diseño de cocina moderna con muebles de acabado madera',
    serviceFeatured: true,
    published: true,
  },
  {
    id: 'closet-a-medida',
    title: 'Clóset a medida',
    category: 'closets',
    image: '/closet.png',
    alt: 'Clóset blanco con distribución de almacenamiento a medida',
    featured: true,
    serviceFeatured: true,
    published: true,
  },
  {
    id: 'centro-entretenimiento',
    title: 'Centro de entretenimiento moderno',
    category: 'centros-de-tv',
    image: '/centro-entretenimiento-gris.png',
    alt: 'Centro de entretenimiento con mueble de TV y panelado gris',
    featured: true,
    serviceFeatured: true,
    published: true,
  },
  {
    id: 'remodelacion-interior',
    title: 'Remodelación interior',
    category: 'remodelaciones',
    image: '/galeria-remodelaciones.jpeg',
    alt: 'Remodelación de espacio interior con mobiliario a medida',
    homeImage: '/remodelaciones.jpeg',
    homeAlt: 'Vista de remodelación interior',
    featured: true,
    serviceFeatured: true,
    published: true,
  },
  {
    id: 'closet-moderno',
    title: 'Clóset moderno',
    category: 'closets',
    image: '/galeria-closet.png',
    alt: 'Clóset de acabado madera clara con distribución personalizada',
    serviceFeatured: true,
    published: true,
  },
  {
    id: 'mueble-tv',
    title: 'Mueble de TV a medida',
    category: 'centros-de-tv',
    image: '/galeria-tv.jpeg',
    alt: 'Mueble de televisión diseñado a medida',
    serviceFeatured: true,
    published: true,
  },
];

export const publishedProjects = projects.filter(
  (project) => project.published !== false,
);
export const featuredProjects = publishedProjects.filter(
  (project) => project.featured,
);
export const serviceProjects = (category: ProjectCategory) =>
  publishedProjects.filter(
    (project) => project.category === category && project.serviceFeatured,
  );

export function parseCategory(value: string | null): ProjectCategory | 'todos' {
  if (!value) return 'todos';
  const normalized = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
  return Object.hasOwn(projectCategories, normalized)
    ? (normalized as ProjectCategory)
    : 'todos';
}
