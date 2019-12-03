exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tourists")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tourists").insert([
        {
          id: 1,
          firstName: "",
          lastName: "",
          email: "",
          password: bcrypt.hashSync("", 10)
        },
        {
          id: 2,
          firstName: "",
          lastName: "",
          email: "",
          password: bcrypt.hashSync("", 10)
        },
        {
          id: 3,
          firstName: "",
          lastName: "",
          email: "",
          password: bcrypt.hashSync("", 10)
        }
      ]);
    });
};
