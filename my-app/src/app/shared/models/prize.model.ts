import { Award } from "./award.model";
import { User } from "./user.model";

export class Prize {
  id: string;
  award: Award;
  state: string;
  kid: User;
}
