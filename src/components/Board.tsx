import React, { useState } from "react";
import PostCardContainer from "containers/AllPostsCardContainer";
import { StyledButtonRight } from "style/common";
import { PostBoardWrapper } from "style/post";
function Board(props: any) {
  const logout = () => {
    localStorage.clear();
    const win: any = window;
    win.location.reload();
  };
  return (
    <PostBoardWrapper>
      <StyledButtonRight onClick={() => logout()}>Logout</StyledButtonRight>
      <h1>FakeBook</h1>
      <div className="row">
        <div className="offset-4 col-lg-4 col-sm-4">
          <PostCardContainer />
        </div>
      </div>
    </PostBoardWrapper>
  );
}
export default Board;
