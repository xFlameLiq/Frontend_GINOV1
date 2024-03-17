export type PostResult = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type GetAllPostsType = () => Promise<PostResult[]>;