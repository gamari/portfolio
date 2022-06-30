import { createClient } from "microcms-js-sdk";
import { env } from "process";

export const client = createClient({
    serviceDomain: env.MICRO_API_DOMAIN || "",
    apiKey: process.env.MICRO_API_KEY || "",
});

