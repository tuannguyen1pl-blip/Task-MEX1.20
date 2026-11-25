export interface Course {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    lessons: number;
    level: string;
    instructor: string;
    price: number;
    isFavorite: boolean;
}