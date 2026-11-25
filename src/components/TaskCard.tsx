import DateTimePicker from "./DateTimePicker";
import PriorityDropdown from "./PriorityDropdown";
import { RiCloseLine } from "react-icons/ri";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import toast from "react-hot-toast";
import { useState } from "react";

interface Props {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NewTask {
  name: string;
  date: Date | null;
  priority: string;
  time: string;
}

// {
//       id: 1,
//       name: "Meet a Friend",
//       time: "15:30",
//       date: "05 Aug, 2026",
//       priority: "Medium",
//     },

const TaskCard = ({ setIsClicked }: Props) => {
  const [newTask, setNewTask] = useState<NewTask>({
    name: "",
    date: null,
    priority: "",
    time: ""
  });

  const handleTaskNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewTask((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleAddTask = () => {
    toast.success("Task added successfully");
    setIsClicked(false);
    console.log(Date.now());
  };

  return (
    <ClickAwayListener onClickAway={() => setIsClicked(false)}>
      <div className="fixed inset-0 z-10 bg-black/40 flex justify-center pt-40 backdrop-blur-xs duration-150 ease-in">
        <div className="shadow-md shadow-gray-700-400-100 rounded-xl p-4 my-5 flex flex-col gap-2 w-11/12 md:w-3/4 lg:w-1/2 mt-5 h-fit bg-white">
          <div className="flex justify-between">
            <h3 className="text-xl md:text-2xl font-semibold">Task Details</h3>
            <button
              onClick={() => setIsClicked(false)}
              className="cursor-pointer outline-0"
            >
              <RiCloseLine size={25} />
            </button>
          </div>
          <form action="">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="taskName">
                  Task name
                </label>
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  value={newTask.name}
                  onChange={handleTaskNameChange}
                  placeholder="Enter a task"
                  className="border border-slate-300 outline-0 rounded-md px-2 py-1 placeholder:text-gray-500"
                />
              </div>
              <div className="relative flex flex-wrap gap-2 ">
                <div className="flex flex-col flex-[1_1_250px] gap-1 ">
                  <label className="font-medium" htmlFor="taskPriority">
                    Priority
                  </label>
                  <PriorityDropdown
                    onChange={(value) =>
                      setNewTask((prev) => ({ ...prev, priority: value }))
                    }
                  />
                </div>
                <div className="flex flex-col flex-[1_1_250px] gap-1">
                  <label className="font-medium" htmlFor="taskDeadline">
                    Deadline
                  </label>
                  <DateTimePicker
                    onChange={(value) =>
                      setNewTask((prev) => ({ ...prev, date: value }))
                    }
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              onClick={() => handleAddTask()}
              className="my-2 p-2 bg-sky-300 rounded-md hover:bg-sky-400 cursor-pointer"
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default TaskCard;
