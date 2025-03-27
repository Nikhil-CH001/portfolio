import ContactCard from './ContactCard';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactSection() {
  const contactData = [
    {
      icon: <FaPhone className="text-2xl text-blue-400" />,
      title: 'Call Us',
      detail: '+977 9805365900',
      href: 'tel:+9779805365900',
      glow: 'glow-blue',
      tooltipId: 'call-tooltip',
      tooltipText: 'Click to call this number',
      tooltipBg: 'bg-blue-600',
      tooltipBorder: 'border-blue-400',
      tooltipArrow: 'border-t-blue-600',
    },
    {
      icon: <FaEnvelope className="text-2xl text-green-400" />,
      title: 'Email Us',
      detail: 'nikhilchy001@gmail.com',
      href: 'mailto:nikhilchy001@gmail.com',
      glow: 'glow-green',
      tooltipId: 'email-tooltip',
      tooltipText: 'Click to send an email',
      tooltipBg: 'bg-green-600',
      tooltipBorder: 'border-green-400',
      tooltipArrow: 'border-t-green-600',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-yellow-400" />,
      title: 'Visit Us',
      detail: 'Barahakshetra-5, Sunsari',
      href: 'https://www.google.com/maps/search/?api=1&query=Barahakshetra-5,+Sunsari',
      glow: 'glow-yellow',
      tooltipId: 'visit-tooltip',
      tooltipText: 'Click for directions on Google Maps',
      tooltipBg: 'bg-yellow-600',
      tooltipBorder: 'border-yellow-400',
      tooltipArrow: 'border-t-yellow-600',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  return (
    <section className="text-center py-16 px-4 bg-gradient-to-b from-[#003347] to-gray-900 text-white">
      <h2 className="text-4xl font-bold">Get In Touch</h2>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
        We are here to help you. Reach out to us via any of the following methods.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {contactData.map((card, index) => (
          <ContactCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default ContactSection;