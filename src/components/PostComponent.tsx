import React, { useState, FC } from "react";
import { IPostInterface, IApptypeInterface } from "components/models";
import { FieldWrapper, StyledButton } from "style/common";
import { CommentsWrapper, CommentsDiv, InputComment } from "style/comments";
import { PostWrapper, CrossButtonWrapper, PostTitle } from "style/post";
import PostFormFormik from "components/PostFormFormik";

interface IPostCardInterface {
  item: IPostInterface;
  login: any;
  edit: boolean;
  app: IApptypeInterface;
  closePressed: (evt: React.MouseEvent) => void;
  editItem: (obj: IPostInterface) => void;
  saveEditItem: (obj: IPostInterface) => void;
  addComment: (obj: Number, text: string) => void;
}

const Card: FC<IPostCardInterface> = ({
  item,
  login,
  app,
  edit,
  saveEditItem,
  editItem,
  closePressed,
  addComment,
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
      {edit ? (
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
          <PostTitle>
            {item.userId.name} from {item.location}
          </PostTitle>
          <PostTitle>{item.title}</PostTitle>
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
