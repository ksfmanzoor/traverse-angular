import {Trip} from 'src/app/models/trip';

export interface BookedTrip {
  id?: string;
  number_of_persons?: number;
  user?: string;
  trip: string;
  package: string;
  departure: string;
  number_of_children?: number;
  name?: string;
  email?: string;
  phone_number?: string;
}

export interface PassedTripData {
  departureId?: string;
  packageId?: string;
  trip?: Trip;
}
