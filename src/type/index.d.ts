declare interface Card {
    id: number;
    title: string;
    description: string;
    tags: string[];
}

declare interface Contoh1Contract {
    nama(): Promise<string>;
}