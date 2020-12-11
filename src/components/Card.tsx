import React, { useState, useEffect, FC } from "react";
import { IPostInterface } from "components/models";
import PostComponent from "containers/PostCardContainer";
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
  getData: () => void;
  postData: (obj: string) => void;
  closePressed: () => void;
}

const Card: FC<ICardInterface> = ({
  title,
  posts,
  getData,
  postData,
  closePressed,
}) => {
  const [data, setData] = useState({
    showForm: false,
    text: "",
    title: "",
    location: "",
    isEdit: false,
  });

  useEffect(() => {
    getData();
  }, [getData]);

  function addItem() {
    postData(data.text);
    setData({ ...data, showForm: false, text: "" });
  }

  function showForm() {
    setData({ ...data, showForm: true, text: "" });
    closePressed();
  }

  return (
    <CardWrapper>
      <h6>{title}</h6>
      <div>
        <div>
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
          {data.text.length > 0 &&
            data.title.length > 0 &&
            data.location.length > 0 && (
              <>
                <StyledButton onClick={addItem}>Share</StyledButton>
                <CrossButtonWrapper
                  onClick={() =>
                    setData({ ...data, showForm: false, text: "" })
                  }
                >
                  X
                </CrossButtonWrapper>
              </>
            )}
        </div>
        {posts.map((item: IPostInterface) => (
          <PostComponent
            setData={setData}
            data={data}
            key={item.id}
            item={item}
          />
        ))}
        {/* {data.showForm ? (
          <div>
            <InputWrapper
              onChange={(evt: any) =>
                setData({ ...data, text: evt.target.value })
              }
              value={data.text}
            />

            <StyledButton className="btn btn-success" onClick={addItem}>
              Add Card
            </StyledButton>
            <CrossButtonWrapper
              onClick={() => setData({ ...data, showForm: false, text: "" })}
            >
              X
            </CrossButtonWrapper>
          </div>
        ) : (
          <FieldWrapper onClick={showForm}>+ Add a card</FieldWrapper>
        )} */}
      </div>
    </CardWrapper>
  );
};
export default Card;
