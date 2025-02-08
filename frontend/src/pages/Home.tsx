import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import logo from "../assets/logo.svg";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="flex flex-col items-center border border-gray-500 rounded-2xl w-130 h-220 shadow-2xl bg-gray-800 p-8">
        <img src={logo} alt="logo" className="h-75" />
        <h1 className="text-6xl font-mono font-bold mb-8">
          <span className="text-indigo-700">Url</span>{" "}
          <span className="text-green-500">Shortener</span>
        </h1>

        <form className="border border-gray-500 rounded-lg h-16 w-110 flex items-center shadow-md">
          
          <input
            type="url"
            placeholder="Paste URL"
            autoComplete="off"
            autoCapitalize="off"
            className="text-white flex-1 placeholder-gray-400 placeholder-font-bold placeholder-font-mono bg-transparent focus:outline-none text-2xl p-2 w-full"
          />

          <button className=" bg-gradient-to-br from-indigo-700 to-green-500 font-mono font-bold text-white py-4.5 px-4 rounded-r-lg transition-all h-full hover:opacity-85 hover:scale-105">
            Shorten
          </button>
        </form>

        <hr className=" w-full my-8 border-t border-gray-400 mt-35" />

        <div className="flex flex-col items-center justify-center w-full h-32">
          <div className="flex items-center justify-center gap-4">
            <a href="" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src={facebook} alt="facebook" className="h-12 w-12 " />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src={instagram} alt="instagram" className="h-12 w-12 " />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src={twitter} alt="twitter" className="h-12 w-12" />
            </a>
          </div>
          <p className="font-mono font-bold text-white text-lg mt-3">Follow us!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
