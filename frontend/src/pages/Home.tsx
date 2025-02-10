import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";
import ShortenForm from "../components/ShortenForm";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="flex flex-col items-center border border-gray-500 rounded-2xl w-130 h-220 shadow-2xl bg-gray-800 p-8">
        <Logo />
        <ShortenForm />
        <hr className=" w-full my-8 border-t border-gray-400 mt-35" />
        <SocialLinks />
      </div>
    </div>
  );
};

export default HomePage;
