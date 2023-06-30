interface Transport {
  model: string;
  description: string;
  owner: string;
}

interface AirTransport {
  fly(): void;
}

interface GroundTransport {
  ride(): void;
}

class Plane implements Transport, AirTransport {}
class Car implements Transport, GroundTransport {}
