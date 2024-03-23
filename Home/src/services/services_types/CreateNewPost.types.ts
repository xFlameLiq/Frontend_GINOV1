export type CreateNewPostRequest = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type CreateNewPostParams = {
    request: CreateNewPostRequest;
}

export type CreateNewPostType = (params: CreateNewPostParams) => Promise<void>