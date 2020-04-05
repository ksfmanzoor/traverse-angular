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

export class Convert {
    public static toBlog(json: string): Blog[] {
        return JSON.parse(json);
    }

    public static blogToJson(value: Blog[]): string {
        return JSON.stringify(value);
    }
}
