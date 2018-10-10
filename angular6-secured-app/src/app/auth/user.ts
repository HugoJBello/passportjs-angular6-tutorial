export interface LoginData {
    username: string;
    password: string;
}

export interface UserRetrieved {
    username: string;
    token: string;
}
export interface NewUser {
    password: string;
    username: string;
    email: string;
}
