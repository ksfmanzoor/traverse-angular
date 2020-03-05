
export class Place {
    public readonly id: string;
    public readonly slug: string;
    public readonly name: string;
    public readonly coverImage: string;
    public readonly about: string;
    public readonly aboutImage: string;
    public readonly location: string;
    public readonly tags: TagsEntity[] | null;
    public readonly galleryImages: GalleryImages[] | null;
    public readonly region: TagsEntity;
    public readonly isFeatured: boolean;

    private constructor(d: any) {
        this.id = d.id;
        this.slug = d.slug;
        this.name = d.name;
        this.coverImage = d.coverImage;
        this.about = d.about;
        this.aboutImage = d.aboutImage;
        this.location = d.location;
        this.tags = d.tags;
        this.galleryImages = d.galleryImages;
        this.region = d.region;
        this.isFeatured = d.isFeatured;
    }
}

export class TagsEntity {
    public readonly id: string;
    public readonly name: string;

    private constructor(d: any) {
        this.id = d.id;
        this.name = d.name;
    }
}

export class GalleryImages {
    public readonly id: string;
    public readonly image: string;

    private constructor(d: any) {
        this.id = d.id;
        this.image = d.image;
    }
}
