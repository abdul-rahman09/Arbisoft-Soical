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
// Shape of form values
export interface FormValues {
  email: string;
  password: string;
}

// The type of props MyForm receives
export interface MyFormProps {
  login: {
    loading: boolean;
    success: boolean;
    error: boolean;
    user: IUserInterface;
  };
  history: any;
  authenticate: (username: string, password: string) => void;
}
