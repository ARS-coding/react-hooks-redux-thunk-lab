import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";

function Cats() {
  const dispatch = useDispatch();
  const arrayOfImagesObject = useSelector(state => state.entities);
  
  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch])

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
    </div>
  );
}

export default Cats;
