import { BsInstagram } from "react-icons/bs";
import Task from "./Task";
import { useState } from "react";
import TaskModal from "./TaskModal";

const box = [
    {
        id: 1,
        icon:<BsInstagram />,
        text: "Monthly Leaderboard Winner 🏆",
        points: '10 Points'  
    },
    {
        id: 2,
        icon:<BsInstagram />,
        text: "Share with 5 friends!",
        points: '10 Points'  
    },
    {
        id: 3,
        icon:<BsInstagram />,
        text: "Earn daily win Rewards!!",
        points: '10 Points'  
    },
    {
        id: 4,
        icon:<BsInstagram />,
        text: "Claim 10 points every hour!",
        points: '10 Points'  
    },
    {
        id: 5,
        icon:<BsInstagram />,
        text: "Weekly Leaderboard Prize",
        points: '10 Points'  
    },
    {
        id: 6,
        icon:<BsInstagram />,
        text: "Like the Instagram Post",
        points: '10 Points'  
    },
]
const TaskBox = () => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTaskClick = (task: any) => {
        setSelectedTask(task);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
      };

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {box.map((task) => (
                <div key={task.id} onClick={() => handleTaskClick(task)}>
                    <Task  
                        icon={task.icon} 
                        text={task.text} 
                        points={task.points} 
                    />
                </div>
            ))}
        </div>
        {isModalOpen && (
        <TaskModal task={selectedTask} closeModal={closeModal} />
      )}
      </div>
    );
  };
  
  export default TaskBox;