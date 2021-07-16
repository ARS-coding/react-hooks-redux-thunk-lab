import React from "react";
import { useSelector } from "react-redux";

function Cats() {
  const arrayOfImagesObject = useSelector(state => state.entities);
  console.log(arrayOfImagesObject)
  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
    </div>
  );
}

export default Cats;
