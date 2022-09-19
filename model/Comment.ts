import { User } from "./User";

type Comment = {
  id: string | number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: string;
};

type Replies = Comment & {
  replyingTo: string;
};

export type CommentType = Comment & {
  replies?: Replies[];
};
