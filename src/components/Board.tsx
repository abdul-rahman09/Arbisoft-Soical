import React from "react";
import AddCardContainer from "containers/AllPostsCardContainer";

function Board() {
  return (
    <>
      <h1>FakeBook</h1>
      <div className="row">
        <div className="offset-4 col-lg-4 col-sm-4">
          <AddCardContainer />
        </div>
      </div>
    </>
  );
}
export default React.memo(Board);
