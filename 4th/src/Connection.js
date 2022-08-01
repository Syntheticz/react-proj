const { MongoClient } = require("mongodb");

 

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://Syntheticz:0Fa0OlA5Dykx5HBC@clustrophobic.lcr7b15.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
const dbName = "Catbnb";

async function run() {

    try {

        await client.connect();

        console.log("Connected correctly to server");
        const db = client.db(dbName);

        const col = db.collection("cats");

        let catData = {
            "name": "sol",
            "ratings": 5,
            "price" : 5
        }

        const p = await col.insertOne(catData);
        const myDoc = await col.findOne();
        console.log(myDoc)

    } catch (err) {

        console.log(err.stack);

    }

    finally {

        await client.close();

    }

}

run().catch(console.dir);