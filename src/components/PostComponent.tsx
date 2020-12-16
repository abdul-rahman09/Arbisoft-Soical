import React, { useState, FC } from "react";
import { IPostInterface, IApptypeInterface } from "components/models";
import { FieldWrapper, StyledButton } from "style/common";
import { CommentsWrapper, CommentsDiv, InputComment } from "style/comments";
import { PostWrapper, PostTitle } from "style/post";
import CloseComponent from "containers/CloseContainer";
import PostFormFormik from "containers/PostFormikContainer";
import EditComponent from "containers/EditContainer";

interface IPostCardInterface {
  item: IPostInterface;
  edit: boolean;
  saveEditItem: (obj: IPostInterface) => void;
  addComment: (obj: Number, text: string) => void;
}

const Card: FC<IPostCardInterface> = ({
  item,
  edit,
  saveEditItem,
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
          />
          <CloseComponent />
        </>
      ) : (
        <PostWrapper>
          <PostTitle>
            {item.userId.name} from {item.location}
          </PostTitle>
          <PostTitle>{item.title}</PostTitle>
          <EditComponent item={item} />
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
