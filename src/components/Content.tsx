import React, { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { RiEditBoxLine, RiDeleteBin6Line } from "react-icons/ri";
import { TaskContext } from "./UserContext";

const Content: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const {taskDetails, setTaskDetails} = useContext(TaskContext)

  return (
    <div className="my-6 relative">
      <div className="flex justify-between">
        <h2 className="text-2xl">Tasks</h2>
        {isClicked ? (
          <TaskCard setIsClicked={setIsClicked} />
        ) : (
          <button
            className="flex items-center bg-sky-300 gap-1 md:gap-2 p-2 rounded-md cursor-pointer"
            onClick={()=> setIsClicked(!isClicked)}
          >
            <span>+</span> Add task
          </button>
        )}
      </div>
      <div className="my-5 border border-slate-400 rounded-lg">
        {taskDetails.map((task) => (
          <div
            key={task.id}
            className={`rounded-md m-2 p-4 ${
              task.priority === "High"
                ? "bg-red-300"
                : task.priority === "Medium"
                  ? "bg-yellow-300"
                  : task.priority === "Low"
                    ? "bg-green-300"
                    : "bg-gray-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="col-span-5">
                <p className="text-lg md:text-xl font-semibold">{task.name}</p>
                <p className="text-sm md:text-md">{task.date}</p>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-lg md:text-xl">{`${task.time} PM`}</span>

                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    className="cursor-pointer hover:scale-110 ease-in duration-100"
                  >
                    <RiEditBoxLine size={25} />
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer hover:scale-110 ease-in duration-100"
                  >
                    <RiDeleteBin6Line size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
