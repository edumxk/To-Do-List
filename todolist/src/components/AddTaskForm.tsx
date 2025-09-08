import { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (taskText: string) => void;
}

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    
    if (newTaskText.trim() === '') return;

    onAddTask(newTaskText); // Chama a função recebida por props
    setNewTaskText(''); // Limpa o estado local
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex w-full max-w-md">
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Qual a próxima tarefa?"
        className="flex-grow bg-slate-800 border-2 border-slate-700 rounded-l-md p-3 focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 font-bold px-6 py-3 rounded-r-md transition-colors"
      >
        Adicionar
      </button>
    </form>
  );
}