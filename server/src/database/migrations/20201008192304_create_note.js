exports.up = function (knex) {
  return knex.schema.createTable("notes", function (table) {
    table.increments('id').primary();
    table.string('user_id').notNullable();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("time").notNullable();
    table.string("date").notNullable();
    table.boolean('finished').notNullable().defaultTo(false);
    table.string('timeFormated').notNullable();
    table.string('dateFormated').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
