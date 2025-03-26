function ContactCard({
    icon,
    title,
    detail,
    href,
    glow,
    tooltipId,
    tooltipText,
    tooltipBg,
    tooltipBorder,
    tooltipArrow,
    target,
    rel,
  }) {
    return (
      <div className="relative group">
        <a
          href={href}
          className={`p-6 shadow-lg rounded-lg bg-gray-900 transition-all duration-300 group-hover:shadow-none group-hover:${glow} flex items-center space-x-4`}
          aria-describedby={tooltipId}
          target={target}
          rel={rel}
        >
          {icon}
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-300 mt-2">{detail}</p>
          </div>
        </a>
        <div
          id={tooltipId}
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block group-focus:block opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 delay-100 ${tooltipBg} text-white rounded-lg px-6 py-4 shadow-xl border ${tooltipBorder} z-10 w-64 max-w-[90%]`}
        >
          <p className="text-base font-semibold">{tooltipText}</p>
          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent ${tooltipArrow}`}
          ></div>
        </div>
      </div>
    );
  }
  
  export default ContactCard;