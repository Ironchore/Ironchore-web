import { User } from "./user.model";

export class Chore {
  title: string;
  description: string;
  points: number;
  tutor: User;
}