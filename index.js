const MongoClient = require('mongodb').MongoClient;

const assert = require ('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'confusion';
MongoClient.connect(url , (err , client) => {
   assert.equal(err , null);

   console.log('connected correctly ');
   const db   = client.db(dbName);
   const collecion = db.collection('dishes');
   collecion.insertOne({"name" :"second object" , "description" :"test description"} , (err ,result) => {
       assert.equal(err , null);
       console.log("after insert  " ,result.ops);

       collecion.find({}).toArray((err , docs) => {
           console.log("found this documents " , docs);


       });

       // db.dropCollection('dishes' , (err , result) => {
       //     assert.equal(err , null);
       //
       //     client.close();
       // })
   });
});