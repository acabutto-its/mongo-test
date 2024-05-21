const { MongoClient, ObjectId } = require("mongodb");

// TODO inserire URI
const uri = "";
const client = new MongoClient(uri);

async function run() {
  try {

    const database = client.db('test');
    const collection = database.collection('user');
    const query = new ObjectId('664c6aa0c3e58fa8c372fc53');
    const document = await collection.find(query);

    const array = await document.toArray()

    console.log(array)

  } finally {
    await client.close();
  }
}
run().catch(console.dir);