import React from 'react';
import { FaFire, FaRupeeSign } from 'react-icons/fa';

const StatusBar: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-center ">
      <div className="flex items-center space-x-2">
        <FaFire className="text-yellow-400 text-2xl" />
        <div className="text-lg font-semibold">
          <span className="text-2xl font-bold">3982</span>
          <span className="ml-1 text-sm">Points</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <FaRupeeSign className="text-green-300 text-2xl" />
        <div className="text-lg font-semibold">
          <span className="text-2xl font-bold">₹2875.00</span>
          <span className="ml-1 text-sm">Balance</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
