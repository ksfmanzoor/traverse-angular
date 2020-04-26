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
    gallery_images: GalleryImage[];
}

export interface GalleryImage {
    id: string;
    image: string;
    alt_text: string;
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
