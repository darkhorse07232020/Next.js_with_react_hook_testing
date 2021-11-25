interface IBallot {
  id: string;
  photoUrL: string;
  title: string;
}

interface IBallotGroup {
  id: string;
  items: IBallot[];
  title: string;
}