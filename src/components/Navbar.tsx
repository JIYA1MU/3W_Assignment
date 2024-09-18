import { FaPlus, FaTableList } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";
import { IoHome, IoSettings } from "react-icons/io5";

const headerData = [
  { id: 1, icon: <IoHome />, label: "Home" },
  { id: 2, icon: <FaTableList />, label: "List" },
  { id: 3, icon: <FaPlus />, label: "Add" },
  { id: 4, icon: <IoSettings />, label: "Settings" },
  { id: 5, icon: <GiPodiumWinner />, label: "Leaderboard" },
];

const Navbar:React.FC = () => {
  return (
    <header className="bg-blue-500 h-16 w-full flex  items-center px-8 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex space-x-8 items-center">
          {headerData.map((item) => (
            <div
              key={item.id}          
              className="flex flex-col items-center text-white group "
            >
              <div className="text-2xl group-hover:text-yellow-300 transition-transform duration-300 transform group-hover:scale-125">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
