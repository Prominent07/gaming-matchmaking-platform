import { createClient } from "redis";

const redisClient=createClient({
     url: "redis://localhost:6379"
});
redis.on("error",(error)=>{
    console.error("Redis Client Error: ",error);
});

await redisClient.connect();

console.log("✅ Connected to Redis");

export default redisClient;