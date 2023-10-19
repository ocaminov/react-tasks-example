import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task"; //as se usa para renombrar la variable tasks

export const TaskContext = createContext(); //este es el nombre del contexto, es el q almacena los datos

export function TaskContextProvider(props) {
  //este es el nombre d la etiqueta, este es el componente q engloba al resto de componentes

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (//el value se usa para almacenar los datos del contexto y q sean accesibles por el resto de componentes
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
      {/* esto significa q este componente esta esperando otros componentes y elementos hijos de el */}
    </TaskContext.Provider>
  );
}
