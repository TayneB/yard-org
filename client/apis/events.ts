import request from 'superagent'
import type { Event } from '../../models/event'

const rootUrl = '/api/v1'

export async function getAllEvents(): Promise<Event[]> {
  return request.get(rootUrl + '/events').then((res) => {
    return res.body.events
  })
}
