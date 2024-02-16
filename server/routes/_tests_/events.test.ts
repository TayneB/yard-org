import { vi, describe, it, expect, beforeEach } from 'vitest'
import server from '../../server'
import request from 'supertest'

import * as db from '../../db/events.ts'
import { Event } from '../../../models/event.ts'

vi.mock('../../db/events.ts')

beforeEach(async () => {
  vi.resetAllMocks()
})

const mockedData = [
  {
    id: 1,
    name: 'Hauraki Boat Trip',
    event_date: 1708060060350,
    description:
      'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
    attendees: 'Tayne, Grant',
    created_by: 'Tayne',
    date_created: 1708060060350,
    edit_note: null,
  },
  {
    id: 2,
    name: 'Pink Panther Movie Night',
    event_date: 1708060060350,
    description:
      'Watch inspector Clueso muck everything up and still win... SOMEHOW',
    attendees: 'Grant, Jame, Natalie',
    created_by: 'James',
    date_created: 1708060060350,
    edit_note: 'Is actually Pink Panther 2',
  },
  {
    id: 3,
    name: 'Hauraki Boat Trip',
    event_date: 1708060060350,
    description:
      'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
    attendees: 'Tayne, Grant',
    created_by: 'Tayne',
    date_created: 1708060060350,
    edit_note: null,
  },
  {
    id: 4,
    name: 'Pink Panther Movie Night',
    event_date: 1708060060350,
    description:
      'Watch inspector Clueso muck everything up and still win... SOMEHOW',
    attendees: 'Grant, Jame, Natalie',
    created_by: 'James',
    date_created: 1708060060350,
    edit_note: 'Is actually Pink Panther 2',
  },
  {
    id: 5,
    name: 'Hauraki Boat Trip',
    event_date: 1708060060350,
    description:
      'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
    attendees: 'Tayne, Grant',
    created_by: 'Tayne',
    date_created: 1708060060350,
    edit_note: null,
  },
  {
    id: 6,
    name: 'Pink Panther Movie Night',
    event_date: 1708060060350,
    description:
      'Watch inspector Clueso muck everything up and still win... SOMEHOW',
    attendees: 'Grant, Jame, Natalie',
    created_by: 'James',
    date_created: 1708060060350,
    edit_note: 'Is actually Pink Panther 2',
  },
]

describe('GET /api/v1/events/', () => {
  it('returns all events', async () => {
    // Arrange
    vi.mocked(db.getAllEvents).mockResolvedValue(mockedData)

    // Act
    const response = await request(server).get('/api/v1/events/')

    expect(response.status).toBe(200)
    expect(response.body.events).toHaveLength(6)
    expect(response.body.events).toEqual([
      {
        id: 1,
        name: 'Hauraki Boat Trip',
        event_date: 1708060060350,
        description:
          'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
        attendees: 'Tayne, Grant',
        created_by: 'Tayne',
        date_created: 1708060060350,
        edit_note: null,
      },
      {
        id: 2,
        name: 'Pink Panther Movie Night',
        event_date: 1708060060350,
        description:
          'Watch inspector Clueso muck everything up and still win... SOMEHOW',
        attendees: 'Grant, Jame, Natalie',
        created_by: 'James',
        date_created: 1708060060350,
        edit_note: 'Is actually Pink Panther 2',
      },
      {
        id: 3,
        name: 'Hauraki Boat Trip',
        event_date: 1708060060350,
        description:
          'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
        attendees: 'Tayne, Grant',
        created_by: 'Tayne',
        date_created: 1708060060350,
        edit_note: null,
      },
      {
        id: 4,
        name: 'Pink Panther Movie Night',
        event_date: 1708060060350,
        description:
          'Watch inspector Clueso muck everything up and still win... SOMEHOW',
        attendees: 'Grant, Jame, Natalie',
        created_by: 'James',
        date_created: 1708060060350,
        edit_note: 'Is actually Pink Panther 2',
      },
      {
        id: 5,
        name: 'Hauraki Boat Trip',
        event_date: 1708060060350,
        description:
          'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
        attendees: 'Tayne, Grant',
        created_by: 'Tayne',
        date_created: 1708060060350,
        edit_note: null,
      },
      {
        id: 6,
        name: 'Pink Panther Movie Night',
        event_date: 1708060060350,
        description:
          'Watch inspector Clueso muck everything up and still win... SOMEHOW',
        attendees: 'Grant, Jame, Natalie',
        created_by: 'James',
        date_created: 1708060060350,
        edit_note: 'Is actually Pink Panther 2',
      },
    ])
  })

  it('returns an error if getAllProfiles throws', async () => {
    // Arrange
    const error = new Error('DATABASE ERROR: secret error info')
    vi.mocked(db.getAllEvents).mockRejectedValue(error)
    vi.spyOn(console, 'log').mockImplementation(() => {})

    // Act
    const response = await request(server).get('/api/v1/events/')

    // Assert
    expect(console.log).toHaveBeenCalledWith(error)
    expect(response.status).toBe(500)
    expect(response.text).toBe('{"message":"Something went wrong"}')
  })
})
