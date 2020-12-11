export enum EDIT_STATUS {
  No = 0,
  Yes = 1,
}
export interface IUserInterface {
  id: number;
  username: string;
  name: string;
}
export interface ICommentInterface {
  id: number;
  text: string;
}
export interface IPostInterface {
  id: number;
  text: string;
  location: string;
  userId: IUserInterface;
  title: string;
  comments: ICommentInterface[];
  showEdit: EDIT_STATUS;
}
