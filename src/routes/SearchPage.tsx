import React from "react";

const SearchPage = () => {
  return (
    <section className="min-h-screen ">
      <div className="w-8/12 min-h-screen  mx-auto  h-62 flex flex-col justify-center">
        <h1 className="text-center text-2xl text-blue-400">Make a search</h1>
        <div className="flex shadow-md rounded-full border p-4 justify-around my-4">
          <input
            type={"text"}
            className="border bg-gray-100 rounded-full p-3 w-8/12"
          />
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 w-3/12 rounded-full text-white">
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
