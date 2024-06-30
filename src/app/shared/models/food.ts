export interface IFood {
    id: string;
    name: string;
    price: number;
    tags?: string[];
    favourite: boolean;
    stars: number;
    imgUrl: string;
    origins: string[];
    cookTime: string;
}