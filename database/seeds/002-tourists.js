const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tourists")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tourists").insert([
        {
          id: 1,
          firstName: "Tourist 1",
          lastName: "Williams",
          email: "tourist1@gmail.com",
          // username: "Williams123",
          password: bcrypt.hashSync("williamstourist", 10)
        },
        {
          id: 2,
          firstName: "Tourist 2",
          lastName: "Jones",
          email: "tourist2@gmail.com",
          // username: "Jones123",
          password: bcrypt.hashSync("jonestourist", 10)
        },
        {
          id: 3,
          firstName: "Tourist 3",
          lastName: "Brown",
          email: "tourist3@gmail.com",
          // username: "Brown123",
          password: bcrypt.hashSync("browntourist", 10)
        }
      ]);
    });
};
