import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1>Bilyard Family Events!</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
