// DATABASE CONNECTION HERE
// Using MOngoDB


import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let clientPromise;

if (process.env.NODE_ENV === 'development') {
    if (global._mongoClientPromise) {
        clientPromise = global._mongoClientPromise;
    } else {
        global._mongoClientPromise = clientPromise = client.connect();
    }
} else {
    clientPromise = client.connect();
}





import mongoose from 'mongoose';

const mongo_connection = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('Already connected to the database.');
        return;
    }

    try {
        await mongoose.connect(process.env.Mongoose_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw new Error('Database connection failed');
    }
};

export { mongo_connection, clientPromise };
