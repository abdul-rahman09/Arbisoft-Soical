import React, { useState, useEffect, FC } from "react";
import { IPostInterface, IUserInterface } from "components/models";
import PostComponent from "containers/PostCardContainer";
import PostFormFormik from "components/PostFormFormik";
import { FieldWrapper, StyledButton } from "style/common";
import { InputWrapper } from "style/comments";
import { PostCardWrapper } from "style/post";
import { LoginWrapper } from "style/login";
interface ICardInterface {
  title: string;
  posts: { data: Array<IPostInterface>; current_edit: Number };
  app: any;
  login: any;
  getData: () => void;
  postData: (
    text: string,
    loc: string,
    title: string,
    user: IUserInterface
  ) => void;
  closePressed: () => void;
}

const Card: FC<ICardInterface> = ({
  title,
  posts,
  getData,
  postData,
  app,
  login,
}) => {
  const [data, setData] = useState({
    text: "",
    title: "",
    location: "",
  });

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <PostCardWrapper>
      <h6>{title}</h6>
      <div>
        <PostFormFormik
          text={data.text}
          title={data.title}
          location={data.location}
          postData={postData}
          app={app}
          login={login}
        />
        {posts.data.map((item: IPostInterface) => (
          <PostComponent
            setData={setData}
            data={data}
            key={item.id}
            item={item}
            edit={item.id == posts.current_edit ? true : false}
          />
        ))}
      </div>
    </PostCardWrapper>
  );
};
export default Card;
