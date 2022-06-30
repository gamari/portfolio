export type PostType = {
    id?: string;
    title?: string;
    content?: string;
    description?: string;
    icatch?: string;
    category?: CategoryType;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}

export type CategoryType = {
    id?: string;
    name?: string;
}