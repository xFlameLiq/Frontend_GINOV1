export type UpdatePostByIdRequest = {
    title: string;
    body: string;
};

export type UpdatePostByParams = {
    id: number;
    request: UpdatePostByIdRequest;
};

export type UpdatePostByIdType = (params: UpdatePostByParams) => Promise<void>;
