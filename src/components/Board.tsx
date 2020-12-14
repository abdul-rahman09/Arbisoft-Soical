import React, { useState } from "react";
import AddCardContainer from "containers/AllPostsCardContainer";
import { BoardWrapper, StyledButtonRight } from "style";
function Board(props: any) {
  const [render, setRender] = useState(true);

  const logout = () => {
    localStorage.clear();
    const win: any = window;
    win.location.reload();
  };
  return (
    <BoardWrapper>
      <StyledButtonRight onClick={() => logout()}>Logout</StyledButtonRight>
      <h1>FakeBook</h1>
      <div className="row">
        <div className="offset-4 col-lg-4 col-sm-4">
          <AddCardContainer />
        </div>
      </div>
    </BoardWrapper>
  );
}
export default Board;
