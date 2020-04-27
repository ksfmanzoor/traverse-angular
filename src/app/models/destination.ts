export interface Destination {
    id: string;
    slug: string;
    name: string;
    cover_image: string;
    about: string;
    about_image: string;
    location: string;
    tags: Region[];
    gallery_images: GalleryImage[];
    region: Region;
    subtitle: string;
    is_featured: boolean;
    attractions: Attraction[];
}

export interface Attraction {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
}

export interface GalleryImage {
    id: string;
    image: string;
    alt_text: string;
}

export interface Region {
    id: string;
    name: string;
}
