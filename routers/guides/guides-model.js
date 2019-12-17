const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("guides");
}

function findBy(filter) {
  return db("guides").where(filter);
}

function add(guide) {
  console.log(guide);
  return db("guides")
    .insert(guide, "id")
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db("guides")
    .where({ id })
    .first();
}
