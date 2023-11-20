export async function up(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('event_date').notNullable()
    table.string('description').notNullable()
    table.string('attendees')
    table.string('created_by').notNullable()
    table.integer('date_created').notNullable()
    table.string('edit_note')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('events')
}
