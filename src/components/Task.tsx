import { ReactNode } from "react";

interface TaskProps {
  icon: ReactNode;
  text: string;
  points: string;
}

const Task = ({ icon, text, points }: TaskProps) => {
  return (
    <div className="p-4 m-4 sm:mx-10 lg:mx-20 w-full h-full max-w-md bg-gradient-to-r from-purple-500 to-pink-700 text-white rounded-lg shadow-lg">
      <div className="text-4xl sm:text-5xl flex justify-center py-6 sm:py-10">
        {icon}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {text}
      </h2>
      <button className="bg-white text-purple-700 py-2 sm:py-3 px-4 sm:px-5 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300 flex m-auto">
        {points}
      </button>
    </div>
  );
};

export default Task;
