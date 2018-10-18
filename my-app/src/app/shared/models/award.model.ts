import { Chore } from "./chore.model";
import { User } from "./user.model";

export class Award {
  title: string;
  goal: number;
  chore: Chore;
  state: string;
  kid: User;
  images?: string;
  tutor: User;
}
