import { MongoClient, ServerApiVersion, Db } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectTODb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.MONGODB_URI as string;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  attachDatabasePool(client);

  await client.connect();
  cachedClient = client;
  cachedDb = client.db("RudiraDB");

  return { client, db: cachedDb };
}