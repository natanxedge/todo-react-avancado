import { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoForm() {

    const [title, setTitle] = useState('')
    const { addTodo } = useContext(TodoContext)

    function handleSubmit(event) {
        event.preventDefault()

        if (!title.trim()) return

        addTodo(title.trim())

        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">

            <input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
                Adicionar
            </button>

        </form>
    )
}

export default TodoForm