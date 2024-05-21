const { MongoClient } = require("mongodb");

// TODO inserire URI
const uri = "";
const client = new MongoClient(uri);

async function run() {
  try {

    // TODO inserire il codice

  } finally {
    await client.close();
  }
}
run().catch(console.dir);