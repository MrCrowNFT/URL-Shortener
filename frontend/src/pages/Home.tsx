import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import logo from "../assets/logo.svg";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/90">
      <div className="flex flex-col border items-center justify-items-start border-gray-400 rounded-lg w-130 h-220  shadow-lg">
        <img src={logo} alt="logo" className="h-100" />
        <h1 className="text-5xl font-mono font-bold mb-6">
          <span className="text-indigo-700">Url</span>{" "}
          <span className="text-green-500">Shortener</span>
        </h1>

        <form className="border border-gray-400 rounded-lg h-15 w-110 flex items-center justify-center mt-5">
          
          <input
            type="url"
            placeholder="Paste URL"
            autoComplete="off"
            autoCapitalize="off"
            className="text-white flex-1 placeholder-gray-400 placeholder-font-bold placeholder-font-mono bg-transparent focus:outline-none text-2xl p-2 w-full"
          />

          <button className=" bg-gradient-to-br from-indigo-700 to-green-500 font-mono font-bold text-white py-4.5 px-4 rounded-r-lg transition-all h-full hover:opacity-85">
            Shorten
          </button>
        </form>

        <hr className=" w-full my-8 border-t border-gray-400 mt-35" />

        <div className="flex flex-col items-center justify-center w-full h-32">
          <div className="flex items-center justify-center gap-3">
            <a href="" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" className="h-10 w-10" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram" className="h-10 w-10" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" className="h-10 w-10" />
            </a>
          </div>
          <p className="font-mono font-bold text-white mt-3">Follow us!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
