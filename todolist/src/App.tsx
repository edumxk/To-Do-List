import { useState } from 'react';
import type { Task } from './interfaces/Task';
import { AddTaskForm } from './components/AddTaskForm';
import { TaskList } from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // A LÓGICA DE NEGÓCIO PERMANECE AQUI
  function handleAddTask(taskText: string) {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
      completedAt: null,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }
  
  function handleToggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
          completedAt: !task.completed ? new Date() : null,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // A LÓGICA DE FILTRAGEM TAMBÉM FICA AQUI
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // O JSX AGORA É MUITO MAIS DECLARATIVO E LIMPO
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center pt-20 font-sans px-4">
      <h1 className="text-4xl font-bold mb-8">To-Do List</h1>

      <AddTaskForm onAddTask={handleAddTask} />

      <main className="w-full max-w-md mt-10 grid grid-cols-1 gap-12">
        <TaskList 
          title="Tarefas Pendentes"
          tasks={pendingTasks}
          onToggle={handleToggleTaskCompletion}
        />
        <TaskList 
          title="Tarefas Finalizadas"
          tasks={completedTasks}
          onToggle={handleToggleTaskCompletion}
        />
      </main>
    </div>
  );
}

export default App;