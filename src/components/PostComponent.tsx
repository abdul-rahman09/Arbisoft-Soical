import React, { useState, FC } from "react";
import { IPostInterface, IApptypeInterface } from "components/models";
import { FieldWrapper, StyledButton } from "style/common";
import { CommentsWrapper, CommentsDiv, InputComment } from "style/comments";
import { PostWrapper, PostTitle } from "style/post";
import CloseComponent from "containers/CloseContainer";
import PostFormFormik from "containers/PostFormikContainer";
import EditComponent from "containers/EditContainer";

interface IPostCardInterface {
  post: IPostInterface;
  edit: boolean;
  saveEditedPost: (obj: IPostInterface) => void;
  addComment: (obj: Number, text: string) => void;
}

const Card: FC<IPostCardInterface> = ({
  post,
  edit,
  saveEditedPost,
  addComment,
}) => {
  const [comment, setComment] = useState("");

  const publishComment = () => {
    if (comment) {
      addComment(post.id, comment);
      setComment("");
    }
  };
  return (
    <div key={post.id}>
      {edit ? (
        <>
          <PostFormFormik
            formValues={post}
            postData={(text: string, loc: string, title: string) =>
              saveEditedPost({
                ...post,
                text: text,
                location: loc,
                title: title,
              })
            }
          />
          <CloseComponent />
        </>
      ) : (
        <PostWrapper>
          <PostTitle>
            {post.userId.name} from {post.location}
          </PostTitle>
          <PostTitle>{post.title}</PostTitle>
          <EditComponent post={post} />
          <FieldWrapper>{post.text}</FieldWrapper>
          <InputComment
            onChange={(evt: any) => setComment(evt.target.value)}
            value={comment}
            placeholder="Add Comment"
          />
          <StyledButton onClick={publishComment}>Send</StyledButton>
          <CommentsWrapper>
            {post.comments.map((obj) => (
              <CommentsDiv key={obj.id}>{obj.text}</CommentsDiv>
            ))}
          </CommentsWrapper>
        </PostWrapper>
      )}
    </div>
  );
};
export default Card;
