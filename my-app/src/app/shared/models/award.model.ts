import { Chore } from "./chore.model";
import { User } from "./user.model";

export class Award {
  id: string;
  title: string;
  goal: number;
  state: string;
  kid: User;
  images?: string;
  tutor: User;
}
