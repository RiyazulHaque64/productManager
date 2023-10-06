import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-[calc(100vw-40px)] mx-auto flex">
      <div className="w-2/12 h-screen flex items-center justify-center">
        <Sidebar />
      </div>
      <div className="w-10/12 mt-5">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
