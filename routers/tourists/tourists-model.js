const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("tourists");
}

function findBy(filter) {
  return db("tourists").where(filter);
}

function add(tourist) {
  return db("tourists")
    .insert(tourist, "id")
    .then(ids => ({ id: ids[0] }));
}

function findById(id) {
  return db("tourists")
    .where({ id })
    .first();
}
