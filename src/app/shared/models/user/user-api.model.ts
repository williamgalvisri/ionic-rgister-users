/* eslint-disable @typescript-eslint/naming-convention */
import { User } from './user.model';

export interface CreateUserPayload {
    name: string;
    job: string;
}


export interface GetUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<UserReponse>;
}

export interface UserReponse {
    id: 7;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
