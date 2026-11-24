import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'
import TodoStats from './components/TodoStats'

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-slate-100">

        <nav className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center gap-3">
            <img
              src="/favicon.svg"
              alt="Logo"
              className="h-8 w-8"
            />

            <span className="text-lg font-bold text-slate-800">
              Todo React Avançado
            </span>
          </div>
        </nav>

        <main className="px-4 py-8 sm:py-12">
          <div className="mx-auto max-w-3xl">

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8">

              <h1 className="mb-2 text-2xl font-bold text-slate-800">
                Minha lista de tarefas
              </h1>

              <p className="mb-8 text-sm text-slate-500">
                Organize suas tarefas e acompanhe seu progresso.
              </p>

              <TodoStats />
              <TodoForm />
              <TodoFilters />
              <TodoList />

            </section>

          </div>
        </main>

      </div>
    </TodoProvider>
  )
}

export default App