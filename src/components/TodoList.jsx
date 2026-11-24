import { useContext, useMemo } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos, filter, clearCompleted } = useContext(TodoContext)

    const filteredTodos = useMemo(() => {
        if (filter === 'completed') {
            return todos.filter(todo => todo.completed)
        }

        if (filter === 'pending') {
            return todos.filter(todo => !todo.completed)
        }

        return todos
    }, [todos, filter])

    const hasCompleted = todos.some(todo => todo.completed)

    return (
        <div className="mt-6 space-y-3">

            {filteredTodos.length === 0 ? (
                <p className="py-8 text-center text-slate-400">
                    Nenhuma tarefa encontrada.
                </p>
            ) : (
                filteredTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            )}

            {hasCompleted && (
                <div className="flex justify-end border-t border-slate-200 pt-4">
                    <button
                        onClick={clearCompleted}
                        className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                    >
                        Limpar tarefas concluídas
                    </button>
                </div>
            )}

        </div>
    )
}

export default TodoList