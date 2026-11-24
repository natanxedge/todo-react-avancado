import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext(null)

export function TodoProvider({ children }) {

    const [todos, setTodos] = useLocalStorage('todos', [])
    const [filter, setFilter] = useState('all')

    // Adicionar tarefa
    function addTodo(title) {
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }

        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    // Concluir ou reabrir tarefa
    function toggleTodo(id) {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }

    // Remover tarefa individual
    function removeTodo(id) {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id)
        )
    }

    // Remover todas as tarefas concluídas
    function clearCompleted() {
        setTodos(prevTodos =>
            prevTodos.filter(todo => !todo.completed)
        )
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                toggleTodo,
                removeTodo,
                clearCompleted,
                filter,
                setFilter
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}