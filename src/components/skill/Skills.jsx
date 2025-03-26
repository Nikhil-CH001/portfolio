import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from './SkillsData';

function Skills() {
  return (
    <section 
      id="skills" 
      className="w-full bg-gray-900 flex items-center justify-center py-6 sm:py-8"
    >
      <div className="container max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;