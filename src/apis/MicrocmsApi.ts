import { createClient } from "microcms-js-sdk";
import { env } from "process";
import { PostType } from "../types/PostType";

export const client = createClient({
    serviceDomain: env.MICRO_API_DOMAIN || "",
    apiKey: process.env.MICRO_API_KEY || "",
});


class MicroCmsApi {
    getPosts = async () => {
        const data = await client.get({ endpoint: "blogs" });
        const posts: PostType[] = data["contents"];
    }

    createPost = async (post: PostType) => {
        const response = await fetch(`https://${process.env.MICRO_API_DOMAIN}.microcms.io/api/v1/blogs`, {
            method: "POST",
            headers: {
                "X-MICROCMS-API-KEY": process.env.MICRO_API_KEY || "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })

        return response;
    }
}

export const microCmsApi = new MicroCmsApi();