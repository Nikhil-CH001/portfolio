function ContactForm({ formData, handleInputChange, handleSubmit, isSubmitted }) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-[#003347] to-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-12 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-white font-bold text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition text-white bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-bold text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition text-white bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 font-bold text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full mt-2 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition text-white bg-gray-800"
            />
          </div>
          <button
            type="submit"
            aria-label="Send Message"
            className="w-full bg-green-700 text-white py-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors text-lg font-semibold"
          >
            Send Message
          </button>
          {isSubmitted && (
            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
          )}
        </form>
      </section>
    );
  }
  
  export default ContactForm;