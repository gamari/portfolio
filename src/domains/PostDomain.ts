import { CategoryType, PostType } from "../types/PostType";

export class PostDomain {
    private post: PostType;
    constructor(post: PostType) {
        this.post = post;
    }

    get title() {
        return this.post?.title;
    }

    get id() {
        return this.post.id;
    }

    get description() {
        return this.post.description;
    }

    get publishedAt() {
        return this.post.publishedAt;
    }

    get firstCategory() {
        return "CATEGORY"
    }

    get publishedAtStr() {
        const d = new Date(this.post.publishedAt || "");
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        return year + "年" + month + "月" + date + "日"
    }

    get category(): CategoryType | undefined {
        return this.post.category;
    }
}