import ProfileImage from './ProfileImage';
import TextContent from './TextContent';

function HeroSection({ typingRef }) {
  return (
    <section
      id="home"
      className="pt-16 sm:pt-20 md:pt-24 pb-8 flex items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-center relative z-10">
        <ProfileImage />
        <TextContent typingRef={typingRef} />
      </div>
    </section>
  );
}

export default HeroSection;