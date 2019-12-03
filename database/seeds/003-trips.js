exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          tourName: "",
          description: "",
          price: "",
          duration: "",
          location: "",
          language: "",
          kidFriendly: false,
          audioGuide: false,
          accessibility: false,
          walking: false,
          guided: false,
          petFriendly: false,
          guide_id: 1
        },
        {
          id: 2,
          tourName: "",
          description: "",
          price: "",
          duration: "",
          location: "",
          language: "",
          kidFriendly: false,
          audioGuide: false,
          accessibility: false,
          walking: false,
          guided: false,
          petFriendly: false,
          guide_id: 2
        },
        {
          id: 3,
          tourName: "",
          description: "",
          price: "",
          duration: "",
          location: "",
          language: "",
          kidFriendly: false,
          audioGuide: false,
          accessibility: false,
          walking: false,
          guided: false,
          petFriendly: false,
          guide_id: 3
        }
      ]);
    });
};
