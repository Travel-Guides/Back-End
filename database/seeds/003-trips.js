exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trips")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert([
        {
          id: 1,
          tourName: "Sahara Camel Tour",
          description:
            "We are going into the Sahara riding camels under the hot sun",
          price: "$100",
          duration: "6 Hours",
          location: "Sahara Desert",
          language: "English and Egyptian",
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
          tourName: "Amazon Boat Tour",
          description:
            "We are going on a trip in the middle of the jungle along the river with crocodiles and anacondas",
          price: "$50",
          duration: "3 days",
          location: "Amazon River",
          language: "English and Spanish",
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
          tourName: "Pyramids Tour",
          description:
            "We will explore hidden dungeons in the great pyramids Giza. Battle some mummies and find some hidden treasures!",
          price: "$70",
          duration: "10 hours",
          location: "Giza Desert, Egypt",
          language: "English and Egyptian",
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
