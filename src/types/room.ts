export interface RoomType {
  id: string;
  name: string;
  description: string;
  occupancy: {
    adults: number;
    children: number;
  };
  basePrice: number;
  gstPercentage: number;
  extraBed?: {
    adult: { price: number; gstPercentage: number };
    child: { price: number; gstPercentage: number };
  };
  images: RoomImage[];
  floorLayout: FloorLayout;
}

export interface RoomImage {
  src: string;
  alt: string;
}

export interface FloorLayout {
  floors: Floor[];
  totalRooms: number;
}

export interface Floor {
  level: string;
  roomNumbers: string[];
}
