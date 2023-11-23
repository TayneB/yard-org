import { useEvents } from '../hooks/useEvents'

export default function EventList() {
  const { data, isLoading, isError } = useEvents()

  if (!data || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Somthing went wrong...</p>
  }

  console.log(data)

  return (
    <ul>
      {data.map((event) => (
        <li key={event.id}>
          <h2>
            {event.createdBy}'s {event.name}
          </h2>
          <h3>{new Date(event.eventDate).toLocaleString()}</h3>
          <p>{event.description}</p>
          <p>Attendees: {event.attendees}</p>
          <p>*Edit Note: {event.editNote}</p>
        </li>
      ))}
    </ul>
  )
}
