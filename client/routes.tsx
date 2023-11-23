import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import EventList from './components/EventList'

export const routes = createRoutesFromElements(
  <>
    <Route element={<App />}>
      <Route index element={<EventList />} />
    </Route>
  </>,
)
