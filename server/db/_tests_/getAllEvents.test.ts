import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import { getAllEvents } from '../events'

import connection from '../connection'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllEvents', () => {
  it('returns all events', async () => {
    const events = await getAllEvents()
    expect(events).toHaveLength(6)
  })
})

afterAll(async () => {
  await connection.destroy()
})
