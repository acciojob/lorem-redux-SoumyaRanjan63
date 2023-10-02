import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoremIpsum } from "../redux/action/fetchAction";

const DisplayLorem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loremipsum.content); 
  
  useEffect(() => {
    dispatch(fetchLoremIpsum());
  }, [dispatch]);

  return (
    <div>
      {data && (
        <div>
          <h1>Api Data</h1>
          <p>{data.text}</p> 
          
        </div>
      )}
    </div>
  );
};

export default DisplayLorem;
