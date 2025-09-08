import type { Task } from '../interfaces/Task';

// Definimos os "Props" que este componente espera receber
interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void; // Uma função que recebe um id e não retorna nada
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <li className={`p-4 rounded-md flex items-center shadow-md transition-all ${task.completed ? 'bg-slate-800/50' : 'bg-slate-800'}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="form-checkbox h-5 w-5 bg-slate-700 border-slate-600 rounded text-blue-500 focus:ring-blue-500"
      />
      <div className="ml-4 flex-grow">
        <span className={`${task.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
          {task.text}
        </span>
        {task.completed && task.completedAt && (
          <p className="text-xs text-slate-600 mt-1">
            Finalizada em: {task.completedAt.toLocaleString('pt-BR')}
          </p>
        )}
      </div>
    </li>
  );
}