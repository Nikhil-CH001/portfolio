function TextContent({ typingRef }) {
    return (
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-3 sm:gap-4 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Hello, I'm Nikhil
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-blue-400 capitalize">
          I'm a <span ref={typingRef} className="typing text-green-500 font-bold"></span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0">
          Passionate about building lightning-fast, robust web experiences with React, Node.js, and the latest tech. Got a bold idea? Let’s make it shine brighter than ever!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-4 sm:mt-6">
          <a
            href="#projects"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all shadow-md shadow-blue-500/50 hover:cursor-pointer text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 sm:px-6 py-2 sm:py-3 border border-blue-500 rounded-lg text-blue-400 hover:bg-blue-500/10 transition-all hover:cursor-pointer text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    );
  }
  
  export default TextContent;