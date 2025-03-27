import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiDjango } from 'react-icons/si';

export const projectsData = [
  {
    imageSrc: 'https://picsum.photos/350/200',
    title: 'Awesome Project',
    description: 'Experience cutting-edge technology and stunning design in this revolutionary project. Prepare to be amazed!',
    languages: [
      { name: 'HTML', icon: FaHtml5, className: 'html-tag', color: '#E44D26' },
      { name: 'CSS', icon: FaCss3Alt, className: 'css-tag', color: '#264DE4' },
      { name: 'JavaScript', icon: FaJs, className: 'js-tag', color: '#F0DB4F' },
    ],
    githubLink: 'https://github.com/your-username/your-repo',
  },
  {
    imageSrc: 'https://picsum.photos/350/201',
    title: 'Innovative App',
    description: 'A groundbreaking app that redefines user experience with seamless functionality and stunning visuals.',
    languages: [
      { name: 'React', icon: FaReact, className: 'react-tag', color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, className: 'node-tag', color: '#3C873A' },
      { name: 'MongoDB', icon: FaDatabase, className: 'mongo-tag', color: '#47A248' },
    ],
    githubLink: 'https://github.com/your-username/innovative-app',
  },
  {
    imageSrc: 'https://picsum.photos/350/202',
    title: 'E-Commerce Platform',
    description: 'A robust e-commerce solution with a modern UI, secure backend, and seamless payment integration.',
    languages: [
      { name: 'React', icon: FaReact, className: 'react-tag', color: '#61DAFB' },
      { name: 'TailwindCSS', icon: SiTailwindcss, className: 'tailwind-tag', color: '#38B2AC' },
      { name: 'Django', icon: SiDjango, className: 'django-tag', color: '#092E20' },
      { name: 'Python', icon: FaPython, className: 'python-tag', color: '#3776AB' },
    ],
    githubLink: 'https://github.com/your-username/ecommerce-platform',
  },
];