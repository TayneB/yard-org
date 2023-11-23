import { useEvents } from '../hooks/useEvents'
import EventItem from './EventItem'

export default function EventList() {
  const { data, isLoading, isError } = useEvents()

  if (isError) {
    return <p>Somthing went wrong...</p>
  }

  if (!data || isLoading) {
    return <p>Loading...</p>
  }

  console.log(data)

  return (
    <div>
      {data.map((event) => (
        <EventItem
          key={event.id}
          name={event.name}
          description={event.description}
          eventDate={event.eventDate}
          attendees={event.attendees}
          createdBy={event.createdBy}
          editNote={event.editNote}
          id={event.id}
          dateCreated={event.dateCreated}
        />
      ))}
    </div>
  )
}
