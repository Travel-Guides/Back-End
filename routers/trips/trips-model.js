const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  update,
  remove,
  getTripsByGuideId,
  addTripsByGuideId
};

function find() {
  return db("trips").select("id", "tourName");
}

function add(item) {
  console.log(item);
  return db("trips")
    .insert(item, "id")
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function update(changes, id) {
  return db("trips")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("trips")
    .where({ id })
    .delete();
}

function getTripsByGuideId(guide_id) {
  return db("trips as t")
    .select(
      "t.id",
      "t.tourName",
      "t.description",
      "t.price",
      "t.duration",
      "t.location",
      "t.language",
      "t.kidFriendly",
      "t.audioGuide",
      "t.accessibility",
      "t.walking",
      "t.guided",
      "t.petFriendly"
    )
    .join("guides", "guides.id", "t.guide_id")
    .where("t.guide_id", guide_id);
}

function addTripsByGuideId(guide_id) {
  return db("trips as t")
    .insert(guide_id, "id")
    .join("guides", "guides.id", "t.guide_id")
    .where("t.guide_id", guide_id)
    .then(ids => ({ id: ids[0] }));
}
