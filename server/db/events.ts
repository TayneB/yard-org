import db from './connection.ts'
import { ClientEvent } from '../../models/event.ts'

export async function getAllEvents() /* Promise<Event[]> */ {
  return db('events').select([
    'id',
    'name',
    'event_date as eventDate',
    'description',
    'attendees',
    'created_by as createdBy',
    'date_created as dateCreated',
    'edit_note as editNote',
  ])
}

export async function addEvent(event: ClientEvent): Promise<ClientEvent[]> {
  return db('events').insert({
    name: event.name,
    event_date: event.eventDate,
    description: event.description,
    created_by: event.createdBy,
    date_created: Date.now(),
  })
}

export async function deleteEvent(id: string) {
  return db('events').where('id', id).del()
}
