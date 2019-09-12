export interface Child {
  name: string;
  age: number;
}

interface Baggage {
  key: string;
  value: string;
}
export interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children?: Child[] | null;
  baggage: Baggage[];
}
