import Search from "./Search";

const ClientHeader = () => {
  return (
    <div className="w-full h-16 shadow-lg">
      <div className="w-10/12 h-16 mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-purple-600">
            productManager
          </h2>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default ClientHeader;
