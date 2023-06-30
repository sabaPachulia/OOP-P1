class FootballTeam {
  private readonly worker: Worker;
}

interface Worker {
  role: string;
  salary: number;
  contract: number;
  duty: () => void;
}

class Player extends Worker {}
class Doctor extends Worker {}
class Cleaner extends Worker {}

// Here Both, High level module (FootballTeam) and low level modules (Player,Doctor), are depend on abstraction
