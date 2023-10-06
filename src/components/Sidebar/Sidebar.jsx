import Navbar from "../Navbar/Navbar";
import TechnicalContact from "./TechnicalContact";

const Sidebar = () => {
  return (
    <div className="w-full h-[calc(100vh-40px)] bg-purple-600 rounded-lg p-4 flex flex-col items-center gap-10">
      <div>
        <h2 className="text-xl font-semibold text-white">productManager</h2>
      </div>
      <div className="flex-1">
        <Navbar />
      </div>
      <div>
        <TechnicalContact />
      </div>
    </div>
  );
};

export default Sidebar;
