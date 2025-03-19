export interface IGames {
  game_name: string;
  game_id: string;
  game_color: string;
  game_desc: string;
  type: string;
  times_played: number;
  createdAt: Date;
  id: string;
}

export interface IGameConfig extends IGames {
  company_name: string;
  company_link: string;
  questions: questions[];
  allow_guest: boolean;
}

interface questions {
  answer: string;
  options: string[];
  question: string;
}
