
exports.up = function(knex) {
  return knex.schema.table("notes", function (table) {
    table.boolean('finished').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  knex.schema.table('notes', function(table) {
    table.dropColumn('finished')
  })
};
