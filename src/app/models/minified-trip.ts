export interface MinifiedTrip {
  id: string;
  title: string;
  slug: string;
  price_per_person: number;
  start_date: string;
  end_date: string;
  gallery_image: GalleryImage;

}

export interface GalleryImage {
  id: string;
  image: string;
  alt_text: string;
}
