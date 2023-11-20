export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('events').del()

  // Inserts seed entries
  await knex('events').insert([
    {
      id: 1,
      name: 'Hauraki Boat Trip',
      event_date: Date.now(),
      description:
        'Sail all around the Hauraki gulf, from Waiheke to Ranigtoto and Motuihe',
      attendees: 'Tayne, Grant',
      created_by: 'Tayne',
      date_created: Date.now(),
      edit_note: null,
    },
    {
      id: 2,
      name: 'Pink Panther Movie Night',
      event_date: Date.now(),
      description:
        'Watch inspector Clueso muck everything up and still win... SOMEHOW',
      attendees: 'Grant, Jame, Natalie',
      created_by: 'James',
      date_created: Date.now(),
      edit_note: 'Is actually Pink Panther 2',
    },
  ])
}
