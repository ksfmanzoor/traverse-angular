import {Departure, Package, Trip} from 'src/app/models/trip';
import {User} from 'src/app/models/user';

export interface TripBooking {
  id: string;
  number_of_persons: number;
  user: User;
  trip: Trip;
  package: Package;
  departure: Departure;
  number_of_children: number;
  name: string;
  email: string;
  phone_number: string;
  total_price: number;
}
