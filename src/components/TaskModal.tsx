import { useState } from "react";

interface TaskModalProps {
  task: any;
  closeModal: () => void;
}

const TaskModal = ({ task, closeModal }: TaskModalProps) => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between border-b mb-4">
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "details"
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "earnings"
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("earnings")}
          >
            Earnings
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${
              activeTab === "disclaimer"
                ? "border-b-2 border-red-500 text-red-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("disclaimer")}
          >
            Disclaimer
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "details" && (
            <div>
              <h3 className="text-xl font-bold mb-2">Title: {task.text}</h3>
              <p className="mb-4">
                <span className="font-semibold">Description:</span>
                <br />
                <span>1️⃣ Like this Instagram post.</span>
                <br />
                <span>2️⃣ Take a screenshot showing you've liked the post.</span>
                <br />
                <span>
                  3️⃣ Submit the screenshot in the app to claim your reward!
                </span>
              </p>
              <div className="mb-4">
                <span className="font-semibold">Task Link:</span>
                <button className="ml-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                  Start Task
                </button>
              </div>
              <div className="mb-4 flex items-center">
                <span className="font-semibold">Points:</span>
                <span className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">
                  {task.points}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Share:</span>
                <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Share
                </button>
              </div>
              <div className="mb-4">
                <input type="file" className="border p-2 rounded w-full" />
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Submit
                </button>
              </div>
            </div>
          )}

          {activeTab === "earnings" && (
            <div>
              <h3 className="text-xl font-bold mb-2">Earnings</h3>
              <p>
                Here you can see your potential earnings for completing this
                task!
              </p>
            </div>
          )}
          {activeTab === "disclaimer" && (
            <div>
              <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
              <p>
                Ensure you follow all the rules and guidelines to be eligible
                for rewards.
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
