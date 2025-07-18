import { BriefcaseBusiness, FolderGit2, UserRoundCheck, Mail } from 'lucide-preact'

const LINKS = [{ link: '#aboutme', title: 'Sobre mí', IconComponent: UserRoundCheck }, { link: '#experience', title: 'Experiencia', IconComponent: BriefcaseBusiness }, { link: '#projects', title: 'Proyectos', IconComponent: FolderGit2 }, { link: '#contact', title: 'Contacto', IconComponent: Mail }]

const EXPERIENCE = [
  {
    company: 'Freelance',
    role: 'Desarrollador full-stack',
    date: 'actualmente',
    location: 'España',
    description: 'Diseño y desarrollo de aplicaciones web para todo tipo de clientes y bajo demanda. El último proyecto que se está llevando a cabo es a web de Ressò - Centre d\'entrenament, desarrollándose en NextJS como fullstack; TailwindCSS para estilos rápidos, modernos y escalables y cara al futuro se utilizará base de datos SQL, OAuth y hosting en Vercel.',
    logo: '/img/companies/freelance.webp',
    stack: ['React', 'NextJS', 'NodeJS', 'SQL', 'TailwindCSS', 'CSS', 'Vercel']
  },
  {
    company: 'Atalis Funding',
    role: 'Desarrollador front-end - UX/UI',
    date: 'abril de 2025',
    location: 'España',
    description: 'Diseño y desarrollo de apps web para clientes del sector de la ciencia e investigación; desde readaptar aplicaciones open source como Feedbin para crear un gestor de contenido robusto y conciso para los clientes, hasta crear herramientas para mejorar la eficiencia a la hora de realizar documentación, investigación y gestión de datos.',
    logo: '/img/companies/atalis_logo.webp',
    stack: ['Figma', 'React', 'TailwindCSS', 'Rails', 'PostgreSQL']
  },
  {
    company: 'Wozzo',
    role: 'Desarrollador full-stack',
    date: 'junio de 2022',
    location: 'España',
    description: 'Prácticas de fin de ciclo en las cuales desarrollé un clon de Spotify funcional con categorías, listas y reproducción de música almacenada en un bucket de AWS. La app cuenta con un backoffice para toda gestión de datos: desde usuarios hasta listas de reproducción, artistas y ficheros de música.',
    logo: '/img/companies/wozzo_logo.webp',
    stack: ['React', 'Express', 'MongoDB', 'AWS S3', 'MaterialUI', 'SCSS']
  }
]

const PROJECTS = [
  {
    name: 'Ressò - Centre d\'entrenament',
    area: 'Full-stack',
    date: '2025-06-11',
    img: '/img/projects/resso-centre-entrenament.webp',
    deployment: 'https://www.ressocentredentrenament.com',
    repository: 'https://github.com/santimb96/ressoo-centre-entrenament',
    description: 'Web para el centro <i>Ressò - Centre d\'entrenament</i>, situado en Marratxí (Palma de Mallorca). Ésta ofrece servicios de gimnasio, entrenos personales, seminarios, etc. El proyecto está desarrollado en NextJS para posible escalado y migración de datos de la aplicación.',
    stack: ['NextJS', 'React', 'Tailwind CSS', 'CSS', 'View transition']
  },
  {
    name: 'Docmark',
    area: 'Full-stack',
    date: '2025-04-11',
    img: '/img/projects/dummy.webp',
    deployment: null,
    repository: null,
    description: 'Aplicación para <i>Atalis Funding</i> la cual gestiona documentos provenientes de <i>Horizon Europe</i>, permitiendo a los usuarios subrayarlos, organizar su contenido jerárquicamente y compartir los cambios con los demás usuarios dados de alta.',
    stack: ['React', 'Ruby on Rails', 'Python', 'Figma', 'Tailwind CSS', 'Zustand', 'CSS', 'API TreeWalker', 'PostgreSQL', 'JWT', 'API REST']
  },
  {
    name: 'TMDB movie app (prueba técnica)',
    area: 'Front-end',
    date: '2023-03-11',
    img: '/img/projects/tmdbApp.webp',
    deployment: 'https://tmdb-movie-app-santimb96.vercel.app/',
    repository: 'https://github.com/santimb96/tmdb-movie-app',
    description: 'Prueba técnica para la empresa <i>Atalis Funding</i> la cual permite buscar series y películas, resultados paginados, gestión de favoritos e información detallada de lo buscado. Incluye una simulación de autenticación en el navegador (localStorage), y el consumo de datos mediante API REST.',
    stack: ['React', 'CSS', 'API REST', 'localStorage']
  },
  {
    name: 'Scrapping multimedia en TV3/SX3',
    area: 'Script',
    date: '2022-10-14',
    img: '/img/projects/sx3Scrapping.webp',
    deployment: null,
    repository: 'https://github.com/santimb96/sx3_content_scrapping',
    description: 'Obtención de contenido multimedia (series y películas), mediante scrapping de datos, leyendo el DOM de la web principal y analizando la API del grupo <i>TV3</i> para obtener los ficheros. Una vez procesados, estos se guardan en almacenamiento local y se genera un archivo de registro local.',
    stack: ['Python', 'Beautiful Soup']
  },
  {
    name: 'Clon de Spotify',
    area: 'Full-stack',
    date: '2022-06-14',
    img: '/img/projects/spoticlone.webp',
    deployment: 'https://music-project-wozzo-santimb96.vercel.app/list',
    repository: 'https://github.com/santimb96/music-project-wozzo',
    description: 'Clon de <i>Spotify</i> que cuenta con listas de reproducción por temática. Incluye canciones reproducibles en toda la app mediante el reproductor multimedia hecho específicamente para esta aplicación sin ningún tipo de libreria externa. Las canciones se almacenan en AWS S3 y se procesan desde el backend, que provee a la app toda la data necesaria.',
    stack: ['React', 'Express', 'MongoDB', 'SCSS', 'MaterialUI', 'Mongoose', 'AWS', 'Multer', 'JWT']
  },
  {
    name: 'PokeDuel',
    area: 'Full-stack',
    date: '2022-07-14',
    img: '/img/projects/pokeduel.webp',
    deployment: null,
    repository: 'https://github.com/santimb96/pokeDuel-client',
    description: 'Proyecto de final de grado en el cual se diseña un videojuego basado en los combates <i>Pokémon</i>, obteniendo los datos de éstos desde un script y almacenándolos en la DB. El juego consiste en pasar rondas combatiendo contra pokémons aleatorios, incluyendo hándicap de tipos y una leader board.',
    stack: ['Angular', 'TypeScript', 'Express', 'MongoDB', 'SCSS', 'Mongoose', 'AWS', 'Multer', 'JWT']
  },
  {
    name: 'Palmimax',
    area: 'Front-end',
    date: '2021-11-14',
    img: '/img/projects/palmimax.webp',
    deployment: 'https://palmimax.netlify.app/',
    repository: 'https://github.com/santimb96/timeInn_p2',
    description: 'Proyecto trimestral en el cual se crea una app de cine básica y en local, con películas y sesiones estáticas centrándonos sobre todo en la UX/UI y la simulación de un backend para preservar datos.',
    stack: ['JavaScript', 'localStorage', 'CSS', 'HTML', 'Mocha', 'Babel']
  }
]

export { LINKS, EXPERIENCE, PROJECTS }
