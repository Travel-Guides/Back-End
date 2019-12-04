const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("guides")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("guides").insert([
        {
          id: 1,
          firstName: "Guide 1",
          lastName: "Smith",
          email: "guide1@gmail.com",
          password: bcrypt.hashSync("smithguide", 10)
        },
        {
          id: 2,
          firstName: "Guide 2",
          lastName: "Doe",
          email: "guide2@gmail.com",
          password: bcrypt.hashSync("guidedoe", 10)
        },
        {
          id: 3,
          firstName: "Guide 3",
          lastName: "Johnson",
          email: "guide3@gmail.com",
          password: bcrypt.hashSync("guidejohnson", 10)
        }
      ]);
    });
};
