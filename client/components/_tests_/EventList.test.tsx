// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { waitFor, waitForElementToBeRemoved } from '@testing-library/react/pure'
import nock from 'nock'

import { renderRoute } from '../../test-utils'

nock.disableNetConnect()

describe('EventList', () => {
  it('renders a loading message', async () => {
    // Arrange
    const scope = nock('http://localhost')
      .get('/api/v1/events')
      .reply(200, {
        event: [
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
        ],
      })
    // ACT
    const { ...screen } = renderRoute('/')
    const loading = await waitFor(() => screen.getByText(/Loading.../))

    // Assert
    expect(loading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
