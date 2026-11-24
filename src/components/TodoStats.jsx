import { useContext, useMemo } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoStats() {

    const { todos } = useContext(TodoContext)

    const stats = useMemo(() => {

        const total = todos.length

        const completed = todos.filter(todo => todo.completed).length

        const pending = total - completed

        const percentage = total > 0
            ? Math.round((completed / total) * 100)
            : 0

        return {
            total,
            completed,
            pending,
            percentage
        }

    }, [todos])

    const cards = [
        {
            label: 'Total',
            value: stats.total,
            color: 'text-slate-800'
        },
        {
            label: 'Pendentes',
            value: stats.pending,
            color: 'text-amber-600'
        },
        {
            label: 'Concluídas',
            value: stats.completed,
            color: 'text-green-600'
        },
        {
            label: 'Progresso',
            value: `${stats.percentage}%`,
            color: 'text-blue-600'
        }
    ]

    return (
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

            {cards.map(card => (

                <div
                    key={card.label}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                    <p className="text-sm text-slate-500">
                        {card.label}
                    </p>

                    <p className={`mt-2 text-2xl font-bold ${card.color}`}>
                        {card.value}
                    </p>

                </div>

            ))}

        </div>
    )
}

export default TodoStats