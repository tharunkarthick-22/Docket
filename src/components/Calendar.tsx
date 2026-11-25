import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import TimePicker from "./TimePicker";
import type { DateTimePickerProps } from "./DateTimePicker";

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekDays: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];



const Calendar = ( {onChange}:DateTimePickerProps ) => {
  const currentDate: Date = new Date();

  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );

  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const totalDays: number = new Date(
    currentYear,
    currentMonth + 1,
    0,
  ).getDate();

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays: number[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];

  const handlePrevMonth = (): void => {
    const prevMonth = new Date(currentYear, currentMonth - 1, 1);

    setCurrentMonth(prevMonth.getMonth());
    setCurrentYear(prevMonth.getFullYear());
  };

  const handleNextMonth = (): void => {
    const nextMonth = new Date(currentYear, currentMonth + 1, 1);
    setCurrentMonth(nextMonth.getMonth());
    setCurrentYear(nextMonth.getFullYear());
  };

  const isToday = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleTimePicker = (day: number): void => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();

    if (clickedDate >= today || isToday(clickedDate, today)) {
      setSelectedDate(clickedDate);
      onChange(clickedDate);
      setShowTimePicker(true);
    } else {
      alert(`Cannot create a Task for the Past date, 
Please select a Future Date for creating a Task`);
    }
    
  
  };

  return (
    <div className="w-full absolute px-3 py-2 outline-0 bg-white rounded-md shadow-lg border border-sky-200">
      <header className="calendar-header">
        <div className="flex justify-between items-center">
          <button
            className="cursor-pointer text-2xl  rounded-md border-2 outline-0 border-sky-200 bg-sky-200 active:border-sky-400 "
            type="button"
            onClick={handlePrevMonth}
          >
            <RiArrowLeftSLine />
          </button>
          <span className="text-xl">{`${months[currentMonth]}, ${currentYear}`}</span>
          <button
            className="cursor-pointer text-2xl rounded-md border-2 outline-0 border-sky-200 bg-sky-200 active:border-sky-400 "
            type="button"
            onClick={handleNextMonth}
          >
            <RiArrowRightSLine />
          </button>
        </div>
        <div className="grid grid-cols-7 justify-center w-100% n my-4">
          {weekDays.map((day) => (
            <p key={day} className="flex justify-center">
              {day}
            </p>
          ))}
        </div>
      </header>
      <main className="grid grid-cols-7 gap-1 justify-center items-center">
        {calendarDays.map((day, index) => (
          <div key={index} className="flex justify-center">
            <span
              onClick={() => handleTimePicker(day)}
              className={
                day === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()
                  ? "bg-sky-200 w-8 h-8 flex justify-center items-center rounded-lg font-semibold cursor-pointer"
                  : "hover:bg-sky-100 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer"
              }
            >
              {day !== null ? day : ""}
            </span>
          </div>
        ))}
      </main>
      {showTimePicker && (
        <TimePicker selectedDate={selectedDate} selectedDay={weekDays} />
      )}
    </div>
  );
};

export default Calendar;
