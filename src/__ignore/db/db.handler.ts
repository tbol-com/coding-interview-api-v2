/** @format */

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server'; // eslint-disable-line

const dbName: string = 'test';
let mongod: MongoMemoryServer;

/**
 * Connect to the in-memory database.
 */
export const connectDb = async (): Promise<void> => {
  if (!mongod) {
    mongod = await MongoMemoryServer.create();
  }
  const uri = mongod.getUri();
  process.env.TEST_DB_URI = uri;
  await mongoose.connect(uri, { dbName });
};

/**
 * Drops database.
 */
export const dropDatabase = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
};

/**
 * Drops database, closes the connection and stops mongo.
 */
export const closeDb = async () => {
  await dropDatabase();
  await mongoose.connection.close();
  if (mongod) {
    await mongod.stop();
  }
};
