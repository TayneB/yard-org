import { useEvents } from '../hooks/useEvents.ts'

function App() {
  const { data, isLoading, isError } = useEvents()

  if (!data || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Somthing went wrong...</p>
  }

  return (
    <>
      <div className="app">
        <h1>Bilyard Family Events!</h1>
        <ul>
          {data.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
