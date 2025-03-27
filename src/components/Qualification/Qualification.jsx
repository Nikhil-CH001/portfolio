import QualificationCard from './QualificationCard';
import { qualificationData } from './QualificationData';

function Qualification() {
  return (
    <section id="qualification" className="py-16 px-4 bg-gradient-to-b from-[#003347] to-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Qualifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {qualificationData.map((qualification, index) => (
          <QualificationCard key={index} {...qualification} />
        ))}
      </div>
    </section>
  );
}

export default Qualification;