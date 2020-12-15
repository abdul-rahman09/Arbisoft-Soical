import React, { useState, useEffect, FC } from "react";
import {
  EDIT_STATUS,
  IAppInterface,
  IPostInterface,
  IApptypeInterface,
} from "components/models";
import {
  FieldWrapper,
  Title,
  InputWrapper,
  InputComment,
  CommentsWrapper,
  CrossButtonWrapper,
  CommentsDiv,
  PostWrapper,
  StyledButton,
} from "style";
import PostFormFormik from "components/PostFormFormik";

type TdataType = { showForm: boolean; text: string; isEdit: boolean };

interface IPostCardInterface {
  item: IPostInterface;
  closePressed: (evt: React.MouseEvent) => void;
  editItem: (obj: IPostInterface) => void;
  saveEditItem: (obj: IPostInterface) => void;
  addComment: (obj: Number, text: string) => void;
  data: TdataType;
  login: any;
  app: IApptypeInterface;
}

const Card: FC<IPostCardInterface> = ({
  item,
  saveEditItem,
  editItem,
  closePressed,
  addComment,
  login,
  app,
}) => {
  const [comment, setComment] = useState("");

  const publishComment = () => {
    if (comment) {
      addComment(item.id, comment);
      setComment("");
    }
  };
  return (
    <div key={item.id}>
      {item.showEdit ? (
        <>
          <PostFormFormik
            text={item.text}
            title={item.title}
            location={item.location}
            postData={(text: string, loc: string, title: string) =>
              saveEditItem({ ...item, text: text, location: loc, title: title })
            }
            app={app}
            login={login}
          />
          <CrossButtonWrapper
            onClick={(evt: React.MouseEvent) => closePressed(evt)}
          >
            X
          </CrossButtonWrapper>
        </>
      ) : (
        <PostWrapper>
          <Title>
            {item.userId.name} from {item.location}
          </Title>
          <Title>{item.title}</Title>
          {item.userId.id == login.user.id && (
            <StyledButton
              onClick={() => {
                editItem(item);
              }}
            >
              Edit
            </StyledButton>
          )}
          <FieldWrapper>{item.text}</FieldWrapper>
          <InputComment
            onChange={(evt: any) => setComment(evt.target.value)}
            value={comment}
            placeholder="Add Comment"
          />
          <StyledButton onClick={publishComment}>Send</StyledButton>
          <CommentsWrapper>
            {item.comments.map((obj) => {
              return <CommentsDiv key={obj.id}>{obj.text}</CommentsDiv>;
            })}
          </CommentsWrapper>
        </PostWrapper>
      )}
    </div>
  );
};
export default Card;
