import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <>
      <img src={logo} alt="logo" className="h-75" />;
      <h1 className="text-6xl font-mono font-bold mb-8">
        <span className="text-indigo-700">Url</span>{" "}
        <span className="text-green-500">Shortener</span>
      </h1>
    </>
  );
};

export default Logo;
