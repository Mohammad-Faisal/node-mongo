const MongoClient = require('mongodb').MongoClient;
const assert = require ('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'confusion';
const dboper = require('./operations');


MongoClient.connect(url , (err , client) => {
   assert.equal(err , null);

   console.log('connected correctly ');
   const db   = client.db(dbName);
   const collecion = db.collection('dishes');

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes", (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(db, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(db, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);

                            db.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                client.close();
                            });
                        });
                    });
            });
        });

   // collecion.insertOne({"name" :"second object" , "description" :"test description"} , (err ,result) => {
   //     assert.equal(err , null);
   //     console.log("after insert  " ,result.ops);
   //
   //     collecion.find({}).toArray((err , docs) => {
   //         console.log("found this documents " , docs);
   //
   //
   //     });
   //
   //     // db.dropCollection('dishes' , (err , result) => {
   //     //     assert.equal(err , null);
   //     //
   //     //     client.close();
   //     // })
   // });
});