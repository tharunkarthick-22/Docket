import { FaSquarePlus } from "react-icons/fa6";

const InputBox = () => {
  return (
    <div>
      <form action="">
        <div className="relative">
          <input
            className="w-full p-3 pr-13 border rounded-md mx-auto outline-0"
            type="text"
            name="task"
            id="task"
            placeholder="Enter a task to be worked on"
          />
          <button className="absolute right-3 top-2.5 cursor-pointer">
            <FaSquarePlus size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
