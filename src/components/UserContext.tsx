import React, { createContext, type Dispatch } from "react";

export interface Task {
  id: number;
  name: string;
  time: string;
  date: string;
  priority: string;
}

interface UserContext{
  taskDetails: Task[];
  setTaskDetails: Dispatch<React.SetStateAction<Task[]>>
}

export const TaskContext = createContext<UserContext>({
  taskDetails: [],
  setTaskDetails: () => {},
});

