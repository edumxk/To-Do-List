import type { Task } from '../interfaces/Task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  title: string;
  tasks: Task[];
  onToggle: (id: number) => void;
}

export function TaskList({ title, tasks, onToggle }: TaskListProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b-2 border-slate-700 pb-2 mb-4">
        {title}
      </h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={onToggle} 
          />
        ))}
      </ul>
    </section>
  );
}