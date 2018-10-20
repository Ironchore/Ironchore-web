import { Chore } from "./chore.model";
import { User } from "./user.model";

export class Homework {
  id: string;
  chore: Chore;
  state: string;
  kid: User;
}
