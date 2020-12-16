export interface IApptypeInterface {
  loading: boolean;
  success: boolean;
  error: boolean;
}
export interface IAppInterface {
  app: IApptypeInterface;
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
// Shape of form values
export interface FormValues {
  email: string;
  password: string;
}
export interface PostFormValues {
  title: string;
  location: string;
  text: string;
}
export interface IPostInterface extends PostFormValues {
  id: number;
  userId: IUserInterface;
  comments: ICommentInterface[];
}

export interface MyFormProps extends IAppInterface {
  login: {
    user: IUserInterface;
  };
  history: any;
  authenticate: (username: string, password: string) => void;
}
export interface ICreatePostInterface {
  app: IApptypeInterface;
  formValues: PostFormValues;
  login;
  postData: (
    text: string,
    loc: string,
    title: string,
    userId: IUserInterface
  ) => void;
}
