import db from './connection.ts'
import { Event } from '../../models/event.ts'

export async function getAllEvents(): Promise<Event[]> {
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
