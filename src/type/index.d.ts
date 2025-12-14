declare interface Card {
    id: number;
    title: string;
    description: string;
    tags: string[];
}

declare interface Contoh1Contract {
    nama(): Promise<string>;
}

declare interface LoginInput {
    email: string;
    password: string;
    provider: string;
}

declare interface ErrorResponseLogin {
    message: string;
}

declare interface SuccessResponseLogin {
    token: string;
}