import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { TaskContext, type Task } from "./components/UserContext";
import { Toaster } from "react-hot-toast";

function App({ children }: { children: React.ReactNode }) {
  const [taskDetails, setTaskDetails] = useState<Task[]>([
    {
      id: 1,
      name: "Meet a Friend",
      time: "15:30",
      date: "05 Aug, 2026",
      priority: "Medium",
    },
    {
      id: 2,
      name: "Got to Mall",
      time: "16:30",
      date: "05 Aug, 2026",
      priority: "High",
    },
    {
      id: 3,
      name: "Eat at KFC",
      time: "16:30",
      date: "05 Aug, 2026",
      priority: "Low",
    },
  ]);

  return (
    <TaskContext.Provider value={{ taskDetails, setTaskDetails }}>
      {children}
      <div className="w-11/12 md:w-3/4 mx-auto my-4 md:my-7">
        <Header></Header>
        <Content></Content>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      
    </TaskContext.Provider>
  );
}

export default App;
