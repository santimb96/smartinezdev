import { BriefcaseBusiness, FolderGit2, UserRoundCheck, Mail } from 'lucide-preact'

const LINKS = [{ link: '#aboutme', title: 'Sobre mí', iconComponent: <UserRoundCheck className='lucideIcon' strokeWidth={1.5} /> }, { link: '#experience', title: 'Experiencia', iconComponent: <BriefcaseBusiness className='lucideIcon' strokeWidth={1.5} /> }, { link: '#projects', title: 'Proyectos', iconComponent: <FolderGit2 className='lucideIcon' strokeWidth={1.5} /> }, { link: '#contact', title: 'Contacto', iconComponent: <Mail className='lucideIcon' strokeWidth={1.5} /> }]

const EXPERIENCE = [
  {
    company: 'Atalis Funding',
    role: 'Desarrollador front-end - UX/UI',
    date: 'actualmente',
    location: 'España',
    description: 'Diseño y desarrollo de apps web para importantes clientes del mundo de la ciencia e investigación, desde readaptar aplicaciones open source hasta crear importantes herramientas para mejorar la eficiencia en el campo de la investigación',
    logo: 'src/assets/img/companies/atalis_logo.webp',
    stack: ['Figma', 'React', 'TailwindCSS', 'Rails', 'PostgreSQL']
  },
  {
    company: 'Wozzo',
    role: 'Desarrollador full-stack',
    date: 'junio de 2022',
    location: 'España',
    description: 'Prácticas de fin de ciclo en las cuales desarrollé un clon de Spotify funcional con categorías, listas y reproducción de música almacenada en un bucket de AWS; para los administradores, backoffice para la gestión de datos.',
    logo: 'src/assets/img/companies/wozzo_logo.webp',
    stack: ['React', 'Express', 'MongoDB', 'AWS S3', 'MaterialUI', 'SCSS']
  }
]

const PROJECTS = [
  {
    name: 'Docmark',
    area: 'Full-stack',
    date: '2025-04-11',
    img: 'src/assets/img/projects/dummy.webp',
    deployment: null,
    repository: null,
    description: 'Aplicación para Atalis Funding la cual gestiona documentos provenientes de Horizon Europe, permitiendo a los usuarios subrayarlos, organizar su contenido jerárquicamente y compartir los cambios con los demás usuarios dados de alta.',
    stack: ['React', 'Ruby on Rails', 'Python', 'Figma', 'Tailwind CSS', 'Zustand', 'CSS', 'API TreeWalker', 'PostgreSQL', 'JWT', 'API REST']
  },
  {
    name: 'TMDB movie app (prueba técnica)',
    area: 'Front-end',
    date: '2023-03-11',
    img: 'src/assets/img/projects/tmdbApp.webp',
    deployment: 'https://tmdb-movie-app-santimb96.vercel.app/',
    repository: 'https://github.com/santimb96/tmdb-movie-app',
    description: 'Prueba técnica para la empresa Atalis Funding la cual permite buscar series y películas, resultados paginados, gestión de favoritos e información detallada de lo buscado. Incluye una simulación de autenticación en el navegador (localStorage), y el consumo de datos mediante API REST.',
    stack: ['React', 'CSS', 'API REST', 'localStorage']
  },
  {
    name: 'Scrapping multimedia en TV3/SX3',
    area: 'Script',
    date: '2022-10-14',
    img: 'src/assets/img/projects/sx3Scrapping.webp',
    deployment: null,
    repository: 'https://github.com/santimb96/sx3_content_scrapping',
    description: 'Obtención de contenido multimedia (series y películas), mediante scrapping de datos, leyendo el DOM de la web principal y analizando la API del grupo TV3 para obtener los ficheros. Una vez procesados, estos se guardan en almacenamiento local y se genera un archivo de registro local.',
    stack: ['Python', 'Beautiful Soup']
  },
  {
    name: 'Clon de Spotify',
    area: 'Full-stack',
    date: '2022-06-14',
    img: 'src/assets/img/projects/spoticlone.webp',
    deployment: 'https://music-project-wozzo-santimb96.vercel.app/list',
    repository: 'https://github.com/santimb96/music-project-wozzo',
    description: 'Clon de Spotify que cuenta con listas de reproducción por temática, la cual incluye canciones reproducibles en toda la app mediante el reproductor multimedia hecho específicamente para esta aplicación. Las canciones se almacenan en AWS S3 y se procesan desde el backend, que provee a la app toda la data necesaria.',
    stack: ['React', 'Express', 'MongoDB', 'SCSS', 'MaterialUI', 'Mongoose', 'AWS', 'Multer', 'JWT']
  },
  {
    name: 'PokeDuel',
    area: 'Full-stack',
    date: '2022-07-14',
    img: 'src/assets/img/projects/pokeduel.webp',
    deployment: null,
    repository: 'https://github.com/santimb96/pokeDuel-client',
    description: 'Proyecto de final de grado en el cual se diseña un videojuego basado en los combates Pokémon, obteniendo los datos de éstos desde un script y almacenándolos en la DB. El juego consiste en pasar rondas combatiendo contra pokémons aleatorios, incluyendo hándicap de tipos y una leader board.',
    stack: ['Angular', 'TypeScript', 'Express', 'MongoDB', 'SCSS', 'Mongoose', 'AWS', 'Multer', 'JWT']
  },
  {
    name: 'Palmimax',
    area: 'Front-end',
    date: '2021-11-14',
    img: 'src/assets/img/projects/palmimax.webp',
    deployment: 'https://palmimax.netlify.app/',
    repository: 'https://github.com/santimb96/timeInn_p2',
    description: 'Proyecto trimestral en el cual se crea una app de cine básica y en local, con películas y sesiones estáticas centrándonos sobre todo en la UX/UI y la simulación de un backend para preservar datos.',
    stack: ['JavaScript', 'localStorage', 'CSS', 'HTML', 'Mocha', 'Babel']
  }
]

export { LINKS, EXPERIENCE, PROJECTS }
