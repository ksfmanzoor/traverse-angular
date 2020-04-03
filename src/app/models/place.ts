export interface Place {
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


export class Convert {
    public static toPlace(json: string): Place {
        return JSON.parse(json);
    }

    public static placeToJson(value: Place): string {
        return JSON.stringify(value);
    }
}
