import { Award } from "./award.model";
import { User } from "./user.model";

export class Prize {
  award: Award;
  state: string;
  kid: User;
}
