import { Chore } from "./chore.model";
import { User } from "./user.model";

export class Homework {
  chore: Chore;
  state: string;
  kid: User;
}
