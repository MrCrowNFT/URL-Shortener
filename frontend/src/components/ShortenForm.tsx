const ShortenForm = () => {
  return (
    <form className="border border-gray-500 rounded-lg h-16 w-110 flex items-center shadow-md">
      <input
        type="url"
        placeholder="Paste URL"
        autoComplete="off"
        autoCapitalize="off"
        className="text-white flex-1 placeholder-gray-400 placeholder-font-bold placeholder-font-mono bg-transparent focus:outline-none text-2xl p-2 w-full"
      />
      <button className="bg-gradient-to-br from-indigo-700 to-green-500 font-mono font-bold text-white py-4.5 px-4 rounded-r-lg transition-all h-full hover:opacity-85 hover:scale-105">
        Shorten
      </button>
    </form>
  );
};

export default ShortenForm;
