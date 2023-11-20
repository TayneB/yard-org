import db from './connection.ts'
import { Event } from '../../models/event.ts'

export async function getAllFruits(): Promise<Event[]> {
  return db('events').select()
}
