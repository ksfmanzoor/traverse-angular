export interface Attraction {
    id: string;
    name: string;
    slug: string;
    subtitle: string;
    cover_image: string;
    about: string;
    about_image: string;
    location: string;
    tags: Tag[];
    place: Place;
}

export interface Place {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
}

export interface Tag {
    id: string;
    name: string;
}
