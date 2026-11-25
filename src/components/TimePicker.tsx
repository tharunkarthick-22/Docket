import { months } from "./Calendar.tsx";

interface Props {
  selectedDate: Date;
  selectedDay: string[];
}

const TimePicker = (props: Props) => {
  const { selectedDate, selectedDay} = props;

  return (
    <div className="absolute w-full bg-white rounded-md top-0 left-0 z-50 h-full pt-5 flex flex-col gap-2 justify-between container shadow-lg">
      <div className= "header flex flex-wrap justify-between items-center mx-3">
        <span className="text-lg md:text-xl font-semibold">{`${selectedDay[selectedDate.getDay()]} `}</span>
        <span className="text-sm md:text-md">
          {`${selectedDate.getDate()} - ${months[selectedDate.getMonth()].slice(0, 3)}, ${selectedDate.getFullYear()}`}
        </span>
      </div>
      <div className="main mx-3 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <h5 className="text-lg">Time : </h5>
          <div>
            <input
              type="number"
              min={0}
              max={23}
              className="border-2 border-sky-200 rounded-md outline-0 px-2 py-1 mr-4 hover:border-blue-300 focus:border-blue-300 transistion:.3s ease-in no-spinner"
            />
            <input
              type="number"
              min={0}
              max={59}
              className="border-2 border-sky-200 rounded-md outline-0 px-2 py-1 mr-4 hover:border-blue-300 focus:border-blue-300 transistion:.3s ease-in no-spinner"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <button
          onClick={()=>console.log()}
          type="button"
          className=" bg-sky-300 p-2 my-3 rounded-md cursor-pointer hover:bg-sky-400 transistion:.3s ease-in"
        >
          Confirm Time
        </button>
        
      </div>
    </div>
  );
};

export default TimePicker;
