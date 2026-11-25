import { useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import Calendar from "./Calendar";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export interface DateTimePickerProps{
  onChange: (value:Date | null )=> void
}


const DateTimePicker = ({onChange}:DateTimePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="outline-0">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer w-full border border-slate-300 px-2 py-1 rounded-md flex justify-between items-center"
          >
            <span>Date</span>
            <RiCalendarLine />
          </button>
          {isOpen && <Calendar onChange={onChange}/>}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default DateTimePicker;
