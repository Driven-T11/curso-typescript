export type Game = {
  id: number;
  title: string;
  platform: string;
}

export type CreateGame = Omit<Game, "id">;