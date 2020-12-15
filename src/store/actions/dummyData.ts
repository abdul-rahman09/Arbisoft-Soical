import {
  ICommentInterface,
  IPostInterface,
  IUserInterface,
  EDIT_STATUS,
} from "components/models";
export const user1: IUserInterface = {
  id: 1,
  name: "Abdul Rahman",
  username: "abdul",
};
export const user2: IUserInterface = {
  id: 2,
  name: "Huzaifah",
  username: "huz",
};
export const comment1: ICommentInterface = {
  id: 1,
  text: "My First Comment",
};

export const comment2: ICommentInterface = {
  id: 2,
  text: "My Second Comment",
};
export const comment3: ICommentInterface = {
  id: 3,
  text: "My Third Comment",
};
export const comment4: ICommentInterface = {
  id: 4,
  text: "My Fourth Comment",
};

let item1: IPostInterface = {
  id: 1,
  title: "My Title",
  userId: user1,
  comments: [comment1, comment2, comment3, comment4],
  text: `By 2020, digital videos will drive 82% of web traffic. That means you’re leaving reach and engagement on the table if you aren’t sharing video content on your channels. And there’s so many options to choose from:
      Stories (Facebook and Instagram)
      Snapchat
      IGTV
      YouTube
      Live video (LinkedIn, Facebook, Instagram)
      Tik Tok
      In-feed videos (Facebook, Instagram, LinkedIn, Twitter, Pinterest)`,
  showEdit: EDIT_STATUS.No,
  location: "Lahore",
};
let item3: IPostInterface = {
  id: 2,
  text: `By 2020, digital videos will drive 82% of web traffic. That means you’re leaving reach and engagement on the table if you aren’t sharing video content on your channels. And there’s so many options to choose from:
      Stories (Facebook and Instagram)
      Snapchat
      IGTV
      YouTube
      Live video (LinkedIn, Facebook, Instagram)
      Tik Tok
      In-feed videos (Facebook, Instagram, LinkedIn, Twitter, Pinterest)`,
  title: "My Title",
  location: "Lahore",
  userId: user2,
  comments: [],
  showEdit: EDIT_STATUS.No,
};
export const POSTS_DATA: Array<IPostInterface> = [item1, item3];
