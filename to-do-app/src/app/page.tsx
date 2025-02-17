"use client"

import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">TO-DO List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Añadir nueva tarea"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            {t}
            <button
              onClick={() => removeTask(index)}
              className="text-red-500"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

