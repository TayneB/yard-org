import request from 'superagent'
import type { Event } from '../../models/event'

const rootUrl = '/api/v1'

export async function getAllEvents(): Promise<Event[]> {
  return request.get(rootUrl + '/events').then((res) => {
    return res.body.events
  })
}

export async function deleteEvent(id: number): Promise<void> {
  await request.delete(`${rootUrl}/events/delete/${id}`)
}
