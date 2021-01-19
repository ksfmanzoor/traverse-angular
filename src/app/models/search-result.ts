export interface SearchResult {
  places: Place[];
  attractions: any[];
  blog_posts: BlogPost[];
  trips: SearchTrip[];
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

export interface SearchTrip {
  id: string;
  title: string;
  slug: string;
  overview: string;
  gallery_images: TripCardGalleryImage[];
  price_per_person: number;
  services: string[];
}

export interface TripCardGalleryImage {
  id: string;
  image: string;
  alt_text: string;
}
