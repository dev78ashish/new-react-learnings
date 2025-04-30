import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { toggleTodo, deleteTodo } from '../redux/slices/TodoSlice';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.todos.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="mt-4">
      {filteredTodos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks to display</p>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map(todo => (
            <li 
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Checkbox 
                  checked={todo.completed} 
                  onCheckedChange={() => dispatch(toggleTodo(todo.id))}
                  id={`todo-${todo.id}`}
                />
                <label 
                  htmlFor={`todo-${todo.id}`}
                  className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {todo.text}
                </label>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <Trash2 size={16} />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;