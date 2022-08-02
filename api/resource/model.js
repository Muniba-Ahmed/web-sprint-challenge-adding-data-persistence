// build your `Resource` model here
const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

async function insert(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getResources().where({ resource_id }).first();
}

module.exports = {
  getResources,
  insert,
};
