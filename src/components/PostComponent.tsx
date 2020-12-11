import React, { useState, useEffect, FC } from "react";
import { EDIT_STATUS, IPostInterface } from "components/models";
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
  saveEditItem: (obj: IPostInterface) => void;
  addComment: (obj: Number, text: string) => void;
  data: TdataType;
  login: any;
}

const Card: FC<IPostCardInterface> = ({
  item,
  saveEditItem,
  editItem,
  closePressed,
  addComment,
  login,
}) => {
  const [data, setData] = useState<any>({});
  const [comment, setComment] = useState("");

  const publishComment = () => {
    if (comment) {
      addComment(item.id, comment);
      setComment("");
    }
  };
  useEffect(() => {
    if (item.showEdit == EDIT_STATUS.Yes) {
      setData(item);
    }
  }, [item]);
  return (
    <div key={item.id}>
      {item.showEdit ? (
        <>
          Edit Item
          <InputWrapper
            onChange={(evt: any) =>
              setData({ ...data, title: evt.target.value })
            }
            value={data.title}
            placeholder="Title"
          />
          <InputWrapper
            onChange={(evt: any) =>
              setData({ ...data, location: evt.target.value })
            }
            value={data.location}
            placeholder="Location"
          />
          <InputWrapper
            onChange={(evt: any) =>
              setData({ ...data, text: evt.target.value })
            }
            value={data.text}
            placeholder="Write Post"
          />
          {data.text &&
            data.text.length > 0 &&
            data.title.length > 0 &&
            data.location.length > 0 && (
              <>
                <StyledButton onClick={() => saveEditItem(data)}>
                  Update
                </StyledButton>
                <CrossButtonWrapper
                  onClick={(evt: React.MouseEvent) => closePressed(evt)}
                >
                  X
                </CrossButtonWrapper>
              </>
            )}
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
