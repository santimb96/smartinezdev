const LINKS = [
  { link: '#perfil', title: 'Perfil' },
  { link: '#proyectos', title: 'Proyectos' },
  { link: '#trayectoria', title: 'Trayectoria' },
  { link: '#contacto', title: 'Contacto' }
]

const EXPERIENCE = [
  {
    company: 'Pixind',
    logo: '/img/companies/pixind.webp',
    role: 'Desarrollador full-stack',
    date: 'actualmente',
    location: 'España',
    description: 'Diseño y desarrollo de aplicaciones web orientadas al ámbito del deporte y alto rendimiento.',
    stack: ['Go', 'HTMX', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'Docker']
  },
  {
    company: 'Freelance',
    logo: '/img/companies/freelance.webp',
    role: 'Desarrollador full-stack',
    date: 'actualmente',
    location: 'España',
    description: 'Diseño y desarrollo de aplicaciones web para todo tipo de clientes y bajo demanda. El último proyecto en curso es la web de Ressò - Centre d\'entrenament, en Next.js como full-stack, Tailwind CSS para los estilos y base de datos SQL, OAuth y hosting en Vercel.',
    stack: ['React', 'Next.js', 'Node.js', 'SQL', 'Tailwind CSS', 'Vercel']
  },
  {
    company: 'Atalis Funding',
    logo: '/img/companies/atalis_logo.webp',
    role: 'Desarrollador front-end · UX/UI',
    date: 'abril de 2025',
    dateTime: '2025-04',
    location: 'España',
    description: 'Diseño y desarrollo de apps web para clientes del sector de la ciencia e investigación: desde readaptar aplicaciones open source como Feedbin para crear un gestor de contenido robusto, hasta herramientas para documentación, investigación y gestión de datos.',
    stack: ['Figma', 'React', 'Tailwind CSS', 'Rails', 'PostgreSQL']
  },
  {
    company: 'Wozzo',
    logo: '/img/companies/wozzo_logo.webp',
    role: 'Desarrollador full-stack',
    date: 'junio de 2022',
    dateTime: '2022-06',
    location: 'España',
    description: 'Prácticas de fin de ciclo: un clon de Spotify funcional con categorías, listas y reproducción desde un bucket de AWS, más un backoffice para usuarios, listas, artistas y ficheros de música.',
    stack: ['React', 'Express', 'MongoDB', 'AWS S3', 'Material UI', 'SCSS']
  }
]

const PROJECTS = [
  {
    name: 'Ressò · Centre d\'entrenament',
    caption: 'Landing del centro de entrenamiento',
    area: 'Full-stack',
    date: '2025-06-11',
    img: '/img/projects/resso-centre-entrenament.webp',
    deployment: 'https://www.ressocentredentrenament.com',
    repository: 'https://github.com/santimb96/ressoo-centre-entrenament',
    description: 'Web para el centro <i>Ressò - Centre d\'entrenament</i>, en Marratxí (Palma de Mallorca): gimnasio, entrenos personales y seminarios. Desarrollada en Next.js para permitir escalado y migración de datos.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'CSS']
  },
  {
    name: 'Docmark',
    caption: 'Herramienta documental para investigación',
    area: 'Full-stack',
    date: '2025-04-11',
    img: '/img/projects/dummy.webp',
    deployment: null,
    repository: null,
    description: 'Aplicación para <i>Atalis Funding</i> que gestiona documentos de <i>Horizon Europe</i>: subrayado, organización jerárquica del contenido y cambios compartidos entre usuarios.',
    stack: ['React', 'Ruby on Rails', 'Python', 'Figma', 'Tailwind CSS', 'Zustand', 'API TreeWalker', 'PostgreSQL', 'JWT', 'API REST']
  },
  {
    name: 'TMDB movie app',
    caption: 'Buscador de películas y series',
    area: 'Front-end',
    date: '2023-03-11',
    img: '/img/projects/tmdbApp.webp',
    deployment: 'https://tmdb-movie-app-santimb96.vercel.app/',
    repository: 'https://github.com/santimb96/tmdb-movie-app',
    description: 'Prueba técnica para <i>Atalis Funding</i>: búsqueda de series y películas, resultados paginados, favoritos e información detallada, con autenticación simulada en el navegador y consumo de API REST.',
    stack: ['React', 'CSS', 'API REST', 'localStorage']
  },
  {
    name: 'Clon de Spotify',
    caption: 'Reproductor de música en streaming',
    area: 'Full-stack',
    date: '2022-06-14',
    img: '/img/projects/spoticlone.webp',
    deployment: 'https://music-project-wozzo-santimb96.vercel.app/list',
    repository: 'https://github.com/santimb96/music-project-wozzo',
    description: 'Clon de <i>Spotify</i> con listas por temática y un reproductor escrito sin librerías externas. Las canciones viven en AWS S3 y el backend sirve todos los datos.',
    stack: ['React', 'Express', 'MongoDB', 'SCSS', 'Material UI', 'Mongoose', 'AWS', 'JWT']
  },
  {
    name: 'Scraping TV3/SX3',
    caption: 'Script de extracción de contenido',
    area: 'Script',
    date: '2022-10-14',
    img: '/img/projects/sx3Scraping.webp',
    deployment: null,
    repository: 'https://github.com/santimb96/sx3_content_scrapping',
    description: 'Obtención de contenido multimedia mediante scraping del DOM y de la API de <i>TV3</i>, con almacenamiento local y registro de la ejecución.',
    stack: ['Python', 'Beautiful Soup']
  },
  {
    name: 'PokeDuel',
    caption: 'Videojuego de combates por rondas',
    area: 'Full-stack',
    date: '2022-07-14',
    img: '/img/projects/pokeduel.webp',
    deployment: null,
    repository: 'https://github.com/santimb96/pokeDuel-client',
    description: 'Proyecto de final de grado: videojuego de combates <i>Pokémon</i> por rondas, con hándicap de tipos y tabla de clasificación.',
    stack: ['Angular', 'TypeScript', 'Express', 'MongoDB', 'SCSS', 'AWS', 'JWT']
  },
  {
    name: 'Palmimax',
    caption: 'App de cine en local',
    area: 'Front-end',
    date: '2021-11-14',
    img: '/img/projects/palmimax.webp',
    deployment: 'https://palmimax.netlify.app/',
    repository: 'https://github.com/santimb96/timeInn_p2',
    description: 'Proyecto trimestral: app de cine en local con películas y sesiones estáticas, centrada en la UX/UI y en una simulación de backend para preservar datos.',
    stack: ['JavaScript', 'localStorage', 'CSS', 'HTML', 'Mocha', 'Babel']
  }
]

export { LINKS, EXPERIENCE, PROJECTS }
