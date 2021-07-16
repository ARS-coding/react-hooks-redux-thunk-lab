import React from "react";
import { useSelector } from "react-redux";

function Cats() {
  const arrayOfImagesObject = useSelector(state => state.images);
  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
    </div>
  );
}

export default Cats;
