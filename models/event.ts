export interface Event {
  id: number
  name: string
  event_date: number
  description: string
  attendees: string
  created_by: string
  date_created: number
  edit_note: string
}

export interface ClientEvent {
  id: number
  name: string
  eventDate: number
  description: string
  attendees: string
  createdBy: string
  dateCreated: number
  editNote: string
}

export interface FruitData {
  name: string
}
