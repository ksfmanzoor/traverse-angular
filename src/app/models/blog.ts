export interface Blog {
    id: string;
    slug: string;
    title: string;
    content: string;
    user: string;
    tags: Tag[];
    thumbnail: string;
    subtitle: string;
}

export interface Tag {
    id: string;
    name: string;
}
