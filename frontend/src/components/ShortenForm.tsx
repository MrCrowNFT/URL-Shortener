import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ShortenForm = () => {
  const [url, setUrl] = useState("");
  //for rendering porpuses it can be null or string, so i renders whe it is not null
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const shortenReq = async (url: string) => {
    const res = await axios.post("http://localhost:5500/link/shorten", {originalUrl: url });
    return res.data;
  };

  const shortenMutation = useMutation({
    mutationFn: shortenReq,
    onSuccess: (data) => {
    console.log("Response data:", data); 
    setShortUrl(data.data.shortUrl); 
    },
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return; // prevent empty submission
    shortenMutation.mutate(url);
    setUrl(""); // empty input after shortening
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="border border-gray-500 rounded-lg h-16 w-110 flex items-center shadow-md"
      >
        <input
          type="url"
          placeholder="Paste URL"
          autoComplete="off"
          autoCapitalize="off"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="text-white flex-1 placeholder-gray-400 placeholder-font-bold placeholder-font-mono bg-transparent focus:outline-none text-2xl p-2 w-full"
        />
        <button
          type="submit"
          disabled={shortenMutation.isPending}
          className="bg-gradient-to-br from-indigo-700 to-green-500 font-mono font-bold text-white py-4.5 px-4 rounded-r-lg transition-all h-full hover:opacity-85 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {shortenMutation.isPending ? "Shortening..." : "Shorten"}
        </button>
      </form>
      {/*Shorten url on conditional re render when not null */}
      {shortUrl && (
        <div className="mt-4 text-white">
          <p className="font-mono">Shortened URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline font-mono"
          >
            {`http://localhost:5500/link/${shortUrl}`}
          </a>
        </div>
      )}
    </>
  );
};

export default ShortenForm;
