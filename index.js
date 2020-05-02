const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url);


connect.then((db) => {

    console.log('Connected correctly to server');

    const newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});





//
// const MongoClient = require('mongodb').MongoClient;
// const assert = require ('assert');
// const url = 'mongodb://localhost:27017';
// const dbname = 'confusion';
// const dboper = require('./operations');
//
// //using mongodb and promise
// MongoClient.connect(url).then((client) => {
//
//     console.log('Connected correctly to server');
//     const db = client.db(dbname);
//
//     dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
//         "dishes")
//         .then((result) => {
//             console.log("Insert Document:\n", result.ops);
//
//             return dboper.findDocuments(db, "dishes");
//         })
//         .then((docs) => {
//             console.log("Found Documents:\n", docs);
//
//             return dboper.updateDocument(db, { name: "Vadonut" },
//                 { description: "Updated Test" }, "dishes");
//
//         })
//         .then((result) => {
//             console.log("Updated Document:\n", result.result);
//
//             return dboper.findDocuments(db, "dishes");
//         })
//         .then((docs) => {
//             console.log("Found Updated Documents:\n", docs);
//
//             return db.dropCollection("dishes");
//         })
//         .then((result) => {
//             console.log("Dropped Collection: ", result);
//
//             return client.close();
//         })
//         .catch((err) => console.log(err));
//
// }).catch((err) => console.log(err));

//  using mongodb and callback hell
// MongoClient.connect(url).then(client => {
//    assert.equal(err , null);
//
//    console.log('connected correctly ');
//    const db   = client.db(dbName);
//    const collecion = db.collection('dishes');
//
//     dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
//         "dishes", (result) => {
//             console.log("Insert Document:\n", result.ops);
//
//             dboper.findDocuments(db, "dishes", (docs) => {
//                 console.log("Found Documents:\n", docs);
//
//                 dboper.updateDocument(db, { name: "Vadonut" },
//                     { description: "Updated Test" }, "dishes",
//                     (result) => {
//                         console.log("Updated Document:\n", result.result);
//
//                         dboper.findDocuments(db, "dishes", (docs) => {
//                             console.log("Found Updated Documents:\n", docs);
//
//                             db.dropCollection("dishes", (result) => {
//                                 console.log("Dropped Collection: ", result);
//
//                                 client.close();
//                             });
//                         });
//                     });
//             });
//         });
// });