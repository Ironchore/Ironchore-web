import { User } from "./user.model";

export class Chore {
  id: string;
  title: string;
  description: string;
  points: number;
  tutor: User;
}