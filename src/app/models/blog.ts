export interface Blog {
  id: string;
  slug: string;
  title: string;
  keywords: Keywords[];
  content: string;
  user: string;
  tags: Tag[];
  thumbnail: string;
  subtitle: string;
  is_published: boolean;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Keywords {
  display: string;
  value: string;
}
