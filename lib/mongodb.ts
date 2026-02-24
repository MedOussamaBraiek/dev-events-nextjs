import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "MONGODB_URI is not defined. Please add it to your environment variables."
  );
}

/**
 * Cached connection interface.
 * - `conn`: the resolved Mongoose instance (null while connecting).
 * - `promise`: the in-flight connect() promise (null before first call).
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

/**
 * Extend `globalThis` so the cache survives Next.js hot-module reloads
 * in development. In production every `import` returns the same module
 * instance, so the cache is only necessary for dev.
 */
declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis.mongooseCache ?? {
  conn: null,
  promise: null,
};

globalThis.mongooseCache = cached;

/**
 * Returns a Mongoose connection, reusing the cached one when available.
 * Safe to call from any server-side code (API routes, server components, etc.).
 */
async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
