export interface SearchResult {
  places: Place[];
  attractions: any[];
  blog_posts: BlogPost[];
  trips: Trip[];
}


export interface Place {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  slug: string;
}

export interface Trip {
  id: string;
  title: string;
  slug: string;
  overview: string;
  gallery_images: any[];
  price_per_person: number;
  services: string[];
}
