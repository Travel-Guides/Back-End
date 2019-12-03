exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("guide_trips").insert([
        { id: 1, guide_id: 1, tourist_id: 1, trip_id: 1 },
        { id: 2, guide_id: 2, tourist_id: 2, trip_id: 2 },
        { id: 3, guide_id: 3, tourist_id: 3, trip_id: 3 }
      ]);
    });
};
