import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import { getAllEvents, deleteEvent } from '../events'

import connection from '../connection'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllEvents', () => {
  it('returns all events', async () => {
    deleteEvent('1')
    const events = await getAllEvents()
    expect(events).toHaveLength(5)
  })
})

afterAll(async () => {
  await connection.destroy()
})
