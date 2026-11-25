import { useContext, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TaskContext } from "./UserContext";

type PriorityValue = "high" | "medium" | "low";

interface Priority {
  label: string;
  value: PriorityValue;
}

interface Props {
  onChange: (value: string) => void;
}

const PriorityDropdown = ({ onChange }: Props) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState<PriorityValue | string>(
    "Select Priority",
  );

  const priority: Priority[] = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const { taskDetails, setTaskDetails } = useContext(TaskContext);

  const handleSelect = (option: Priority) => {
    setSelectedValue(option.label);
    setTaskDetails(
    taskDetails.map((task) => ({ ...task, priority: option.value })),
    );
    setIsDropdownVisible(false);
    onChange(option.value)
  };

  const Dropdown: React.JSX.Element = (
    <div className="absolute w-full bg-white z-10 p-2 rounded-md shadow-lg border border-sky-200">
      {priority.map((option) => (
        <div
          key={option.value}
          onClick={() => handleSelect(option)}
          className="rounded-md cursor-pointer text-sm hover:bg-sky-100 p-2 focus:ring-2 active:bg-sky-300"
        >
          {option.label}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <ClickAwayListener onClickAway={() => setIsDropdownVisible(false)}>
        <div className="relative ">
          <button
            type="button"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            className="flex border w-full justify-between items-center border-slate-300 outline-0 rounded-md px-2 py-1 focus:ring-slate-200 focus:border-sky-400"
          >
            <span>{selectedValue}</span>
            <RiArrowDownSLine />
          </button>
          {isDropdownVisible && Dropdown}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default PriorityDropdown;
