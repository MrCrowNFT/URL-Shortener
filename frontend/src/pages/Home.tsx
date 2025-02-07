import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import logo from "../assets/logo.svg";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col border items-center justify-center border-gray-400 rounded-lg w-140 h-220">
        <img src={logo} alt="logo"/>
        <div className="flex items-center justify-center gap-0.5">
          <label>Paste URL:  </label>
          <form>
            <input
              type="url"
              placeholder="Insert URL"
              autoComplete="off"
              autoCapitalize="off"
              className="bg-transparent focus:outline-none text-2xl p-2"
            />
          </form>
        </div>
        <hr />
        <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default HomePage;
