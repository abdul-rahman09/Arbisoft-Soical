import React, { useState, useEffect, FC } from "react";
import { IPostInterface } from "components/models";
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
import { AddComment } from "store/actions";
type TdataType = { showForm: boolean; text: string; isEdit: boolean };

interface IPostCardInterface {
  item: IPostInterface;
  closePressed: (evt: React.MouseEvent) => void;
  editItem: (obj: IPostInterface) => void;
  saveEditItem: (obj: string) => void;
  setData: (obj: TdataType) => void;
  addComment: (obj: Number, text: string) => void;
  data: TdataType;
}

const Card: FC<IPostCardInterface> = ({
  item,
  saveEditItem,
  editItem,
  closePressed,
  setData,
  addComment,
  data,
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
          <InputWrapper
            onChange={(evt: any) =>
              setData({ ...data, text: evt.target.value })
            }
            value={data.text}
          />
          <StyledButton onClick={(evt: any) => saveEditItem(data.text)}>
            Save
          </StyledButton>
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
          <FieldWrapper
          // onClick={() => {
          //   setData({ ...data, text: item.text, showForm: false });
          //   editItem(item);
          // }}
          >
            {item.text}
          </FieldWrapper>
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
