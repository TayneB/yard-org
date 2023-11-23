import { Event } from '../../models/event'

export default function EventItem({
  id,
  name,
  description,
  dateCreated,
  eventDate,
  attendees,
  createdBy,
  editNote,
}: Event) {
  return (
    <div key={id}>
      <h2>
        {createdBy}&apos;s {name}
      </h2>
      <h3>WHEN: {new Date(eventDate).toLocaleString()}</h3>
      <p>
        {description} created: {new Date(dateCreated).toLocaleString()}
      </p>
      <p>Attendees: {attendees}</p>
      {editNote !== null && <p>*Edit Note: {editNote}</p>}
    </div>
  )
}
