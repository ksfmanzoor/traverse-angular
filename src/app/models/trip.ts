export interface Trip {
  id: string;
  title: string;
  slug: string;
  itinerary_days: any[];
  overview: string;
  packages: Package[];
  departures: Departure[];
  gallery_images: any[];
  departure_itinerary_days: DepartureItineraryDay[];
  attractions: any[];
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

export interface TripService {
  id: string;
  title: string;
  description: string;
}

export interface TripServiceValue {
  id: string;
  value: string;
  trip_service: TripService;
  package: string;
}

export interface DepartureItineraryDay {
  id: string;
  date: string;
  body: string;
  hotel_type: string;
  departure: string;
  trip_service_values: TripServiceValue[];
}
