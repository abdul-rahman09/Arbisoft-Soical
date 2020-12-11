export enum EDIT_STATUS {
  No = 0,
  Yes = 1,
}
export interface User {
  id: number;
  username: string;
  name: string;
}
export interface Comment {
  id: number;
  text: string;
}
export interface Post {
  id: number;
  text: string;
  location: string;
  userId: User;
  title: string;
  comments: Comment[];
  showEdit: EDIT_STATUS;
}
