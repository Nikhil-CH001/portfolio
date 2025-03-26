import React from 'react';

function QualificationCard({
  title = 'Bachelor of Science in Computer Science',
  institution = 'University of Example',
  duration = '2018 - 2022',
  description = 'Graduated with honors, specializing in software engineering and web development.',
}) {
  return (
    <div className="w-full max-w-[350px] bg-gray-800/80 rounded-xl p-6 shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,255,0.4)] hover:-translate-y-2">
      <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-lg text-blue-400 mb-1">{institution}</p>
      <p className="text-sm text-gray-400 mb-3">{duration}</p>
      <p className="text-base text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

export default QualificationCard;