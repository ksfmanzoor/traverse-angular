export interface Blog {
    id: string;
    slug: string;
    title: string;
    content: string;
    user: string;
    tags: Tag[];
}

export interface Tag {
    id: string;
    name: string;
}

