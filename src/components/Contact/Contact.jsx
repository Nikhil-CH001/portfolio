import { useState } from 'react';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState({ 0: false, 1: false, 2: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div id="contact">
      {/* Custom CSS for glowing border shadow */}
      <style>
        {`
          .glow-blue {
            box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5);
          }
          .glow-green {
            box-shadow: 0 0 15px 5px rgba(74, 222, 128, 0.5);
          }
          .glow-yellow {
            box-shadow: 0 0 15px 5px rgba(234, 179, 8, 0.5);
          }
        `}
      </style>

      <ContactSection />
      <ContactForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />
      <FAQSection faqOpen={faqOpen} toggleFaq={toggleFaq} />
    </div>
  );
}

export default Contact;