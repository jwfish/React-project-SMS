const {
    MongoClient,
    ObjectId
} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'jw-db';
// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        // Use connect method to connect to the server
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                reject(err);
                throw err;
            } else {
                // 得到连接端
                resolve(client);
            };

        });
    })
}
// 查找
const find = (col, params) => {
    return new Promise(async (resolve, reject) => {
        // 连接
        let client = await connect();
        // console.log("Connected successfully to server");
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.find(params).toArray(function (err, docs) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }

        });
        // 关闭连接
        client.close();
    })
}

//增加
//数据形式[{name:111,age:18},{}]
const insert = (col, params) => {
    return new Promise(async (resolve, reject) => {
        // 连接
        let client = await connect();
        // console.log("Connected successfully to server");
        // 选中需要连接的库
        const db = client.db(dbName);
        const collection = db.collection(col);


        collection.insertMany(params, function (err, result) {

            // console.log(result);

            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        // 关闭连接
        client.close();
    });
}


//改Update 

const Update = (col, params) => {
    return new Promise(async (resolve, reject) => {
        // 连接
        let client = await connect();
        // console.log("Connected successfully to server");
        // 选中需要连接的库
        const db = client.db(dbName);
        const collection = db.collection(col);

        collection.updateOne(params[0], {
            $set: params[1]
        }, function (err, result) {
            // assert.equal(err, null);
            // assert.equal(1, result.result.n);
            // console.log("Updated the document with the field a equal to 2");
            // callback(result);
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        // 关闭连接
        client.close();
    });
}


//删Remove 
const Remove = (col, params) => {
    return new Promise(async (resolve, reject) => {
        // 连接
        let client = await connect();
        // console.log("Connected successfully to server");
        // 选中需要连接的库
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);

        collection.deleteOne(params, function (err, result) {
            // assert.equal(err, null);
            // assert.equal(1, result.result.n);
            // console.log("Removed the document with the field a equal to 3");
            // callback(result);
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });

        // 关闭连接
        client.close();
    });
}
module.exports = {
    connect,
    find,
    // 根据id查找
    ObjectId,
    insert, //增[{name:111,age:18}，{第二个}]
    Update, //改[{旧值}，{新值}]
    Remove //删
}