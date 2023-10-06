import Search from "./Search";

const Header = () => {
  return (
    <div className="w-full h-16 mx-auto flex items-center justify-between border-b">
      <div>
        <h2 className="text-xl text-gray-700">
          <span className="text-purple-700 font-bold">Good Morning,</span>{" "}
          Riyazul Haque
        </h2>
      </div>
      <Search />
    </div>
  );
};

export default Header;
