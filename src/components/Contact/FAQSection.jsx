function FAQSection({ faqOpen, toggleFaq }) {
    const faqs = [
      {
        question: 'What are your operating hours?',
        answer: 'We operate from 9 AM to 5 PM, Monday to Friday.',
      },
      {
        question: 'How can I book an appointment?',
        answer: 'You can book an appointment through our website or by calling our office.',
      },
      {
        question: 'Do you offer telemedicine services?',
        answer: 'Yes, we offer telemedicine consultations.',
      },
    ];
  
    return (
      <section className="text-center py-16 px-4 bg-gradient-to-b from-[#003347] to-gray-900 text-white">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md transition-all bg-gray-900"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <span className="text-2xl">{faqOpen[index] ? '−' : '+'}</span>
              </button>
              {faqOpen[index] && <p className="mt-4 text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default FAQSection;