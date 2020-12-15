import React, { useState, useEffect, FC } from "react";
import { IPostInterface, IUserInterface } from "components/models";
import PostComponent from "containers/PostCardContainer";
import PostFormFormik from "components/PostFormFormik";
import {
  FieldWrapper,
  CardWrapper,
  InputWrapper,
  CrossButtonWrapper,
  StyledButton,
} from "style";

interface ICardInterface {
  title: string;
  posts: Array<IPostInterface>;
  app: any;
  getData: () => void;
  postData: (text: string, loc: string, title: string) => void;
  closePressed: () => void;
}

const Card: FC<ICardInterface> = ({ title, posts, getData, postData, app }) => {
  const [data, setData] = useState({
    text: "",
    title: "",
    location: "",
    isEdit: false,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  function addItem() {
    postData(data.text, data.location, data.title);
    setData({ ...data });
  }

  return (
    <CardWrapper>
      <h6>{title}</h6>
      <div>
        <PostFormFormik
          text={data.text}
          title={data.title}
          location={data.location}
          postData={postData}
          app={app}
        />
        {posts.map((item: IPostInterface) => (
          <PostComponent
            setData={setData}
            data={data}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </CardWrapper>
  );
};
export default Card;
