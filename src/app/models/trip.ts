import {GalleryImage} from 'src/app/models/attraction';
import {Attraction} from 'src/app/models/destination';

export interface Trip {
  id: string;
  title: string;
  slug: string;
  itinerary_days: ItineraryDays[];
  overview: string;
  packages: Package[];
  departures: Departure[];
  gallery_images: GalleryImage[];
  departure_itinerary_days: DepartureItineraryDays[];
  attractions: Attraction[];
}

export interface ItineraryDays {
  id: string;
  date: string;
  body: string;
  hotel_type: string;
  departures: any[];
  trip_service_values: TripServiceValue[];
}

export interface DepartureItineraryDays {
  id: string;
  date: string;
  body: string;
  hotel_type: string;
  departures: string[];
  trip_service_values: TripServiceValue[];
}

export interface TripService {
  id: string;
  title: string;
  description: string;
  image?: any;
}

export interface TripServiceValue {
  id: string;
  value: string;
  trip_service: TripService;
  packages: string[];
}


export interface Package {
  id: string;
  title: string;
  price_per_person: number;
  is_standard: boolean;
}

export interface Departure {
  id: string;
  location: string;
  via: string;
  price_per_person: number;
  departure_date: Date;
  arrival_date: Date;
  trip_addon_values: any[];
  is_standard: boolean;
}


export interface DepartureItineraryDay {
  id: string;
  date: string;
  body: string;
  hotel_type: string;
  departure: string;
  trip_service_values: TripServiceValue[];
}
