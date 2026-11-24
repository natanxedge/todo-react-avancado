import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoFilters() {

    const { filter, setFilter } = useContext(TodoContext)

    const filters = [
        { label: 'Todas', value: 'all' },
        { label: 'Pendentes', value: 'pending' },
        { label: 'Concluídas', value: 'completed' }
    ]

    return (
        <div className="my-6 flex flex-wrap gap-2">

            {filters.map((item) => (

                <button
                    key={item.value}
                    onClick={() => setFilter(item.value)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${filter === item.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-slate-600 hover:bg-slate-200'
                        }`}
                >
                    {item.label}
                </button>

            ))}

        </div>
    )
}

export default TodoFilters