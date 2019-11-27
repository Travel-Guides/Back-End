
exports.up = function(knex) {
  await knex.schema

    .createTable("guides", tbl => {
      tbl.increments();
      tbl
        .string("firstName", 128)
        .notNullable();
      tbl
        .string("lastName", 128)
        .notNullable();
      tbl
      .string("email", 128)
      .notNullable()
      .unique();

      tbl.string("password", 128)
        .notNullable();
    })
    .createTable("tourists", tbl => {
      tbl.increments();
      tbl
        .string("firstName", 128)
        .notNullable();
      tbl
        .string("lastName", 128)
        .notNullable();
      tbl
      .string("email", 128)
      .notNullable()
      .unique();

      tbl.string("password", 128)
        .notNullable();
    })
    .createTable("trips", tbl => {
      tbl.increments();

      tbl.string("tourName", 128).notNullable();

      tbl.string("description", 255).notNullable();
      tbl.string("price", 128).notNullable();
      tbl.string("duration", 128).notNullable();
      tbl.string("location", 128).notNullable();
      tbl.string("language", 128);
      tbl.boolean("kidFriendly").defaultTo(false);
      tbl.boolean("audioGuide").defaultTo(false);
      tbl.boolean("accessibility").defaultTo(false);
      tbl.boolean("walking").defaultTo(false);
      tbl.boolean("guided").defaultTo(false);
      tbl.boolean("petFriendly").defaultTo(false);
      tbl
        .integer("guide_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("guides");
    })
    .createTable("guide_trips", tbl => {
      tbl.increments();
      tbl.boolean("guide_trips").defaultTo(false);
      tbl
        .integer("guide_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("guides");
      tbl
        .integer("tourist_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tourists");
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("guide_trips")
  .dropTableIfExists("trips")
  .dropTableIfExists("tourists")
  .dropTableIfExists("guides");
};
