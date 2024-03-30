import { UserData } from "@customTypes/UserData.types"


export type UserDataRequest = {
    email: string,
    password: string,
}

export type UserRequestParams = {
    request: UserDataRequest
}

export type FindUserType = (params: UserRequestParams) => Promise<UserData | undefined>
