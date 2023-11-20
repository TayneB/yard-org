import { useEvents } from '../hooks/useEvents.ts'

function App() {
  const { data } = useEvents()
  console.log(data[0])
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          <li>{data[0].name}</li>
          {/* {data && data.map((fruit) => <li key={fruit}>{fruit}</li>)} */}
        </ul>
      </div>
    </>
  )
}

export default App
