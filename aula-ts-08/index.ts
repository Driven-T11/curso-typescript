type Game = {
  id: number;
  platform: {
    id: number;
    name: string;
  }
  title: string;
  publisher: string;
  launch?: string | Date;
}

type GameList = Array<Game>

const game8: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation"
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14" // pode ser um Date. também pode ser vazio
}

const games8: GameList = [game];

function play(game: Game) {
  // runs the game
  console.log(game);
}