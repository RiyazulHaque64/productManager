import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="relative">
      <div>
        <input
          className="border border-gray-400 focus:outline-none py-1 px-3 text-gray-700"
          type="text"
          placeholder="Search for products"
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-8 bg-purple-600 duration-300 hover:bg-purple-700">
        <BiSearch className="text-white" />
      </div>
    </div>
  );
};

export default Search;
