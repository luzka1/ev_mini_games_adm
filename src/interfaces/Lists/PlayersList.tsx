import { IPlayer } from "../Player";
import { ICardsList } from "./CardsList";

export interface IPlayersList extends ICardsList {
  players: IPlayer[];
}
