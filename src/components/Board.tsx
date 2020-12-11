import React from "react";
import AddCardContainer from "containers/AllPostsCardContainer";
import { BoardWrapper } from "style";
function Board() {
  return (
    <BoardWrapper>
      <h1>FakeBook</h1>
      <div className="row">
        <div className="offset-4 col-lg-4 col-sm-4">
          <AddCardContainer />
        </div>
      </div>
    </BoardWrapper>
  );
}
export default React.memo(Board);
