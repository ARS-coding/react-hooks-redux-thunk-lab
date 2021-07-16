import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const dispatch = useDispatch();
  const catPics = useSelector(state => state.entities);
  
  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch])

  return (
    <div style={{ width: "100%" }}>
      <h1>CatBook</h1>
      <div className="row">
        <CatList catPics={catPics} />
      </div>
    </div>
  );
}

export default Cats;
