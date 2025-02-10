import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-32">
      <div className="flex items-center justify-center gap-4">
        {[
          { src: facebook, alt: "facebook" },
          { src: instagram, alt: "instagram" },
          { src: twitter, alt: "twitter" },
        ].map(({ src, alt }) => (
          <a
            key={alt}
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src={src} alt={alt} className="h-12 w-12" />
          </a>
        ))}
      </div>
      <p className="font-mono font-bold text-white text-lg mt-3">Follow us!</p>
    </div>
  );
};

export default SocialLinks;
