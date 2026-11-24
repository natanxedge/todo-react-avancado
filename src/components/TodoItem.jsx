import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoItem({ todo }) {

    const { toggleTodo, removeTodo } = useContext(TodoContext)

    return (
        <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">

            <div className="flex min-w-0 items-center gap-3">

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-5 w-5 shrink-0 accent-blue-600"
                />

                <span
                    className={`break-words text-slate-800 ${todo.completed ? 'text-slate-400 line-through' : ''
                        }`}
                >
                    {todo.title}
                </span>

            </div>

            <button
                onClick={() => removeTodo(todo.id)}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
                Remover
            </button>

        </div>
    )
}

export default TodoItem