import React from 'react';
import 'animate.css';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({
  imageSrc = 'https://picsum.photos/350/200',
  title = 'Awesome Project',
  description = 'Experience cutting-edge technology and stunning design in this revolutionary project. Prepare to be amazed!',
  languages = [
    { name: 'HTML', icon: 'fab fa-html5', className: 'html-tag', color: '#E44D26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', className: 'css-tag', color: '#264DE4' },
    { name: 'JavaScript', icon: 'fab fa-js', className: 'js-tag', color: '#F0DB4F' },
  ],
  githubLink = 'https://github.com/your-username/your-repo',
}) {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap');

          .card {
            transform-style: preserve-3d;
            perspective: 1000px;
            font-family: 'Rajdhani', sans-serif;
          }

          .card:hover {
            transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
          }

          .card:hover .card-image {
            transform: scale(1.1);
          }

          .card-link {
            position: relative;
            overflow: hidden;
          }

          .card-link::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(45deg);
            transition: all 0.3s ease;
          }

          .card-link:hover::before {
            left: 100%;
          }
        `}
      </style>

      <div className="card w-full max-w-[350px] bg-black/80 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-lg hover:shadow-[0_15px_40px_rgba(0,255,255,0.5)] animate__animated animate__fadeInUp">
        <img
          src={imageSrc}
          alt="Project Cover"
          className="card-image w-full h-[200px] object-cover transition-all duration-500 ease-in-out brightness-100 contrast-100 hover:brightness-125 hover:contrast-125"
        />
        <div className="card-content p-6">
          <h2 className="card-title font-['Orbitron'] text-2xl sm:text-3xl font-bold mb-4 text-cyan-400 [text-shadow:0_0_10px_rgba(0,255,255,0.7)] animate__animated animate__fadeInDown">
            {title}
          </h2>
          <p className="card-description text-base text-gray-300 mb-5 leading-relaxed animate__animated animate__fadeIn">
            {description}
          </p>
          <div className="card-languages flex gap-3 mb-6 animate__animated animate__fadeIn">
            {languages.map((lang, index) => (
              <span
                key={index}
                className={`language-tag flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,255,255,0.3)] ${lang.className}`}
              >
                <lang.icon style={{ color: lang.color, fontSize: '16px' }} />
                {lang.name}
              </span>
            ))}
          </div>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-black text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,0.4)]"
          >
            <FaGithub className="inline-block mr-2" /> View on GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;